import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import {
  selectOwnedVenturesManagement,
  setOwnedVenturesFilters,
} from "../../../../config/redux/reducers/principal/owned-ventures.reducer";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { fetchOwnedVenturesMiddleware } from "../api/middleware/owned-ventures.middleware";

const useOwnedVentures = () => {
  const dispatch = useAppDispatch();

  const { ventures, filters } = useSelector(selectOwnedVenturesManagement);
  const [ownedVenturesRequest, setVenturesRequest] = useState({
    loading: false,
    error: false,
  });

  const fetchOwnedVentures = () => {
    setVenturesRequest((venturesRequest) => ({
      ...venturesRequest,
      loading: true,
      error: false,
    }));

    dispatch(fetchOwnedVenturesMiddleware(filters.page, filters.size))
      .then(() => {
        setVenturesRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setVenturesRequest(() => ({
          loading: false,
          error: true,
        }));
      });
  };

  const setPage = (page: number) => {
    dispatch(setOwnedVenturesFilters({ ...filters, page }));
  };

  useEffect(() => {
    setVenturesRequest((venturesRequest) => ({
      ...venturesRequest,
      loading: true,
      error: false,
    }));

    dispatch(fetchOwnedVenturesMiddleware(filters.page, filters.size))
      .then(() => {
        setVenturesRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setVenturesRequest(() => ({
          loading: false,
          error: true,
        }));
      });
  }, [dispatch, filters.page, filters.size]);

  return {
    ...ventures,
    ...ownedVenturesRequest,
    fetchOwnedVentures,
    setPage,
    filters,
  };
};

export default useOwnedVentures;
