import { useEffect, useState } from "react";

import { Venture } from "echadospalante-core";
import { useSelector } from "react-redux";

import {
  selectOwnedVenturesManagement,
  setOwnedVenturesFilters,
} from "../../../../config/redux/reducers/admin/owned-ventures-management.reducer";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import {
  fetchOwnedVenturesMiddleware,
  updateOwnedVentureMiddleware,
} from "../api/middleware/owned-ventures.middleware";

const useOwnedVentures = () => {
  const { filters, ventures } = useSelector(
    selectOwnedVenturesManagement
  );

  const dispatch = useAppDispatch();

  const [ownedVenturesRequest, setCategoriesRequest] = useState({
    loading: true,
    error: false,
  });

  const fetchOwnedVentures = () => {
    setCategoriesRequest({
      loading: true,
      error: false,
    });

    dispatch(fetchOwnedVenturesMiddleware(filters))
      .then(() => {
        setCategoriesRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setCategoriesRequest(() => ({
          loading: false,
          error: true,
        }));
      });
  };

  const setPage = (page: number) => {
    dispatch(setOwnedVenturesFilters({ ...filters, page }));
  };

  const handleEditOwnedVenture = (venture: Venture) => {
    dispatch(updateOwnedVentureMiddleware(venture.id, venture));
  };

  useEffect(() => {
    setCategoriesRequest({
      loading: true,
      error: false,
    });

    dispatch(fetchOwnedVenturesMiddleware(filters))
      .then(() => {
        setCategoriesRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setCategoriesRequest({
          loading: false,
          error: true,
        });
      });
  }, [dispatch, filters]);

  return {
    ...ventures,
    ...ownedVenturesRequest,
    ...filters,
    fetchOwnedVentures,
    handleEditOwnedVenture,
    setPage,
  };
};

export default useOwnedVentures;
