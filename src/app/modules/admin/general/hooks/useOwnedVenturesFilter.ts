import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import {
  selectOwnedVenturesManagement,
  setOwnedVenturesFilters,
} from "../../../../config/redux/reducers/principal/owned-ventures-management.reducer";
import { useAppDispatch } from "../../../../config/redux/store/store.config";

const useOwnedVenturesFilters = () => {
  const { filters } = useSelector(selectOwnedVenturesManagement);
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const setSearchTerm = (search: string) => {
    dispatch(setOwnedVenturesFilters({ ...filters, search, page: 0 }));
  };

  const setPage = (page: number) => {
    dispatch(setOwnedVenturesFilters({ ...filters, page }));
  };

  const setSize = (size: number) => {
    dispatch(setOwnedVenturesFilters({ ...filters, size, page: 0 }));
  };

  useEffect(() => {
    if (filters && filters.size === 0) {
      dispatch(setOwnedVenturesFilters({ ...filters, size: 20 }));
    }
  }, []);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    const { page, size, search } = filters;

    newSearchParams.set("page", page.toString());
    newSearchParams.set("size", size.toString());

    search && newSearchParams.set("search", search);

    setSearchParams(newSearchParams);
  }, [filters]);

  return { filters, setSearchTerm, setPage, setSize };
};

export default useOwnedVenturesFilters;
