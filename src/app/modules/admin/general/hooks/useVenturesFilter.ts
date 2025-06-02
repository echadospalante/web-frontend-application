import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  selectVentures,
  setVenturesFilters,
} from '../../../../config/redux/reducers/principal/ventures.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';

const useVenturesFilters = () => {
  const { filters } = useSelector(selectVentures);
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const setSearchTerm = (search: string) => {
    dispatch(setVenturesFilters({ ...filters, search, page: 0 }));
  };

  const setPage = (page: number) => {
    dispatch(setVenturesFilters({ ...filters, page }));
  };

  const setSize = (size: number) => {
    dispatch(setVenturesFilters({ ...filters, size, page: 0 }));
  };

  useEffect(() => {
    if (filters && filters.size === 0) {
      dispatch(setVenturesFilters({ ...filters, size: 20 }));
    }
  }, []);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    const { page, size, search } = filters;

    newSearchParams.set('page', page.toString());
    newSearchParams.set('size', size.toString());

    search && newSearchParams.set('search', search);

    setSearchParams(newSearchParams);
  }, [filters]);

  return { filters, setSearchTerm, setPage, setSize };
};

export default useVenturesFilters;
