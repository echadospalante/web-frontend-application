import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { selectAuthentication } from '../../../../config/redux/reducers/auth/auth.reducer';
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

const usePublicationsRightSidebar = () => {
  const dispatch = useAppDispatch();
  const { filters, showFilters } = useSelector(selectPublications);
  const { search, categoriesIds } =
    filters;
  const authentication = useSelector(selectAuthentication);

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
    if (
      !search &&
      categoriesIds.length === 0
      ) {
      dispatch(
        setPublicationsFilters({
          ...filters,
          search: '',
          categoriesIds: [],
        }),
      );
    }
  }, []);

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
