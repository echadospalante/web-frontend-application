import { useEffect, useState } from "react";

import { Pagination, Venture } from "echadospalante-core";

import { setOwnedVenturesFilters } from "../../../../config/redux/reducers/principal/owned-ventures-management.reducer";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { fetchOwnedVenturesMiddleware } from "../api/middleware/owned-ventures.middleware";

const useOwnedVentures = () => {
  const dispatch = useAppDispatch();
  const [pagination, setPagination] = useState<Pagination>({
    skip: 0,
    take: 20,
  });
  const [ownedVenturesRequest, setCategoriesRequest] = useState({
    loading: true,
    error: false,
    ventures: [] as Venture[],
  });

  const fetchOwnedVentures = () => {
    setCategoriesRequest((venturesRequest) => ({
      ...venturesRequest,
      loading: true,
      error: false,
    }));

    dispatch(fetchOwnedVenturesMiddleware(pagination))
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
