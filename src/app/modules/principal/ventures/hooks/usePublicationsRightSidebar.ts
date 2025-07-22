import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import {
  PublicationFilter,
  selectPublications,
  setPublicationsCategoriesIds,
  setPublicationsFilters,
  setPublicationsSearch,
  setPublicationsSkip,
  toggleShowPublicationFilters
} from '../../../../config/redux/reducers/principal/publications.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import { useSearchParams } from 'react-router-dom';

const usePublicationsRightSidebar = () => {
  const dispatch = useAppDispatch();
  const { filters, showFilters } = useSelector(selectPublications);
  const { search, categoriesIds } = filters;
  const [searchParams, setSearchParams] = useSearchParams();

  const setCategoriesIds = (categoriesIds: string[]) => {
    dispatch(setPublicationsCategoriesIds(categoriesIds));
  };

  const setSearch = (search: string) => {
    dispatch(setPublicationsSearch(search));
  };

  const setPage = (page: number) => {
    dispatch(setPublicationsSkip(page));
  };

  const setFilters = (filters: PublicationFilter) => {
    dispatch(setPublicationsFilters(filters));
  };

  const toggleShowFilters = () => {
    dispatch(toggleShowPublicationFilters());
  };

  useEffect(() => {
    if (!search && categoriesIds.length === 0) {
      const search = searchParams.get('search') || '';
      const categoriesIdsParam = searchParams.get('categories_ids') || '';
      if (search) {
        setSearch(search);
      }
      if (categoriesIdsParam) {
        const ids = categoriesIdsParam.split(',').map(String);
        setCategoriesIds(ids);
      }
    }
    // Delete other views search params
    searchParams.delete('view_mode');
    searchParams.delete('municipalities_ids');
    searchParams.delete('skip');
    searchParams.delete('take');
  }, []);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    const { search, categoriesIds } = filters;

    if (search) {
      newSearchParams.set('search', search);
    } else {
      newSearchParams.delete('search');
    }
    if (categoriesIds.length === 0) {
      newSearchParams.delete('categories_ids');
    } else {
      newSearchParams.set('categories_ids', categoriesIds.join(','));
    }

    setSearchParams(newSearchParams);
  }, [filters]);

  return {
    ...filters,
    setCategoriesIds,
    toggleShowFilters,
    setSearch,
    setPage,
    setFilters,
    showFilters,
  };
};

export default usePublicationsRightSidebar;
