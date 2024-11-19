import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { selectVentures } from "../../../../config/redux/reducers/principal/ventures.reducer";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { fetchVenturesMiddleware } from "../api/middleware/ventures.middleware";
import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../../config/redux/reducers/shared/user-interface.reducer";

const useVentures = () => {
  const { filters, items: ventures } = useSelector(selectVentures);
  const dispatch = useAppDispatch();
  const [venturesRequest, setVenturesRequest] = useState({
    loading: false,
    error: false,
  });

  const fetchVentures = () => {
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
    fetchVentures,
  };
};

export default useVentures;
