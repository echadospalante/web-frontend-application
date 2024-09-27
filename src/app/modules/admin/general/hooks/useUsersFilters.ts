import { useEffect } from "react";

import { AppRole } from "echadospalante-core";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import {
  selectUsersManagement,
  setUserFilters,
} from "../../../../config/redux/reducers/admin/users-management.reducer";
import { useAppDispatch } from "../../../../config/redux/store/store.config";

const useUsersFilters = () => {
  const { filters } = useSelector(selectUsersManagement);
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const setSearchTerm = (search: string) => {
    dispatch(setUserFilters({ ...filters, search, page: 0 }));
  };

  const setRole = (role: AppRole) => {
    dispatch(setUserFilters({ ...filters, role, page: 0 }));
  };

  const setGender = (gender: "M" | "F" | "O" | null) => {
    dispatch(setUserFilters({ ...filters, gender, page: 0 }));
  };

  const setPage = (page: number) => {
    dispatch(setUserFilters({ ...filters, page }));
  };

  const setSize = (size: number) => {
    dispatch(setUserFilters({ ...filters, size, page: 0 }));
  };

  useEffect(() => {
    if (filters && filters.size === 0) {
      dispatch(setUserFilters({ ...filters, size: 20 }));
    }
  }, []);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    const { gender, page, size, role, search } = filters;

    newSearchParams.set("page", page.toString());
    newSearchParams.set("size", size.toString());

    gender && newSearchParams.set("gender", gender);
    role && newSearchParams.set("role", role);
    search && newSearchParams.set("search", search);

    setSearchParams(newSearchParams);
  }, [filters]);

  return { filters, setSearchTerm, setRole, setGender, setPage, setSize };
};

export default useUsersFilters;
