import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  selectVentureCategoriesManagement,
  setVentureCategoriesFilters,
} from '../../../../config/redux/reducers/admin/venture-categories-management.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';

const useVentureCategoriesFilters = () => {
  const { filters } = useSelector(selectVentureCategoriesManagement);
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const setSearchTerm = (search: string) => {
    dispatch(setVentureCategoriesFilters({ ...filters, search, page: 0 }));
  };

  const setPage = (page: number) => {
    dispatch(setVentureCategoriesFilters({ ...filters, page }));
  };

  const setSize = (size: number) => {
    dispatch(setVentureCategoriesFilters({ ...filters, size, page: 0 }));
  };

  useEffect(() => {
    if (filters && filters.size === 0) {
      dispatch(setVentureCategoriesFilters({ ...filters, size: 20 }));
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

export default useVentureCategoriesFilters;
