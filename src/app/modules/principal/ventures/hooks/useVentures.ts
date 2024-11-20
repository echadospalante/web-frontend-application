import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import {
  resetVentures,
  selectVentures,
  setVenturesFiltersPage,
} from "../../../../config/redux/reducers/principal/ventures.reducer";
import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../../config/redux/reducers/shared/user-interface.reducer";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { fetchVenturesMiddleware } from "../api/middleware/ventures.middleware";

const useVentures = () => {
  const { filters, ventures } = useSelector(selectVentures);

  const dispatch = useAppDispatch();
  const [venturesRequest, setVenturesRequest] = useState({
    loading: false,
    error: false,
  });

  const fetchMoreVentures = () => {
    setVenturesRequest({
      loading: true,
      error: false,
    });

    return dispatch(fetchVenturesMiddleware(filters))
      .then(() => {
        setVenturesRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setVenturesRequest({
          loading: false,
          error: true,
        });
      });
  };

  useEffect(() => {
    dispatch(setVenturesFiltersPage(0));
    dispatch(resetVentures());
  }, []);

  useEffect(() => {
    setVenturesRequest({
      loading: true,
      error: false,
    });
    dispatch(fetchVenturesMiddleware(filters))
      .then(() => {
        setVenturesRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        dispatch(
          setGlobalAlert({
            message: "Error al obtener la lista de emprendimientos ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        setVenturesRequest({
          loading: false,
          error: true,
        });
      });
  }, [filters]);

  return {
    ...venturesRequest,
    ventures,
    fetchMoreVentures,
  };
};

export default useVentures;
