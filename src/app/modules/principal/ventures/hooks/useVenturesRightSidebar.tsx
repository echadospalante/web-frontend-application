import { useSelector } from 'react-redux';

import {
  selectVentures,
  setVenturesCategoriesIds,
  setVenturesFilters,
  setVenturesPage,
  setVenturesPageSize,
  setVenturesSearch,
  setVenturesViewMode,
  VentureFilter,
  VenturesViewMode,
} from '../../../../config/redux/reducers/principal/ventures.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';

const useVenturesRightSidebar = () => {
  const dispatch = useAppDispatch();
  const { filters } = useSelector(selectVentures);

  const setCategoriesIds = (categoriesIds: string[]) => {
    dispatch(setVenturesCategoriesIds(categoriesIds));
  };

  const setViewMode = (viewMode: VenturesViewMode) => {
    dispatch(setVenturesViewMode(viewMode));
  };

  const setSearch = (search: string) => {
    console.log('Setting search:', search);
    dispatch(setVenturesSearch(search));
  };

  const setPage = (page: number) => {
    dispatch(setVenturesPage(page));
  };

  const setPageSize = (pageSize: number) => {
    dispatch(setVenturesPageSize(pageSize));
  };

  const setFilters = (filters: VentureFilter) => {
    dispatch(setVenturesFilters(filters));
  };

  return {
    ...filters,
    setCategoriesIds,
    setViewMode,
    setSearch,
    setPage,
    setPageSize,
    setFilters,
  };
};

export default useVenturesRightSidebar;
