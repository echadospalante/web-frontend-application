import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import {
  selectVentureEventsManagement,
  setVentureEventsFilters,
} from "../../../../config/redux/reducers/admin/venture-events-management.reducer";
import { useAppDispatch } from "../../../../config/redux/store/store.config";

const useVentureEventsFilters = () => {
  const { filters } = useSelector(selectVentureEventsManagement);
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const setFrom = (from: Date) => {
    dispatch(setVentureEventsFilters({ ...filters, from: from.toISOString() }));
  };

  const setTo = (to: Date) => {
    dispatch(setVentureEventsFilters({ ...filters, to: to.toISOString() }));
  };

  const setSearchTerm = (search: string) => {
    dispatch(setVentureEventsFilters({ ...filters, search }));
  };

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    const { from, to, search } = filters;

    newSearchParams.set("from", new Date(from).toISOString());
    newSearchParams.set("to", new Date(to).toISOString());

    search && newSearchParams.set("search", search);

    setSearchParams(newSearchParams);
  }, [filters]);

  return { filters, setFrom, setTo, setSearchTerm };
};

export default useVentureEventsFilters;
