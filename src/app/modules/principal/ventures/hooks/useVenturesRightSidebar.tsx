import { useSelector } from 'react-redux';

import {
  selectVentures,
  setVenturesActiveDepartmentId,
  setVenturesCategoriesIds,
  setVenturesFilters,
  setVenturesMunicipalitiesIds,
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

  const setMunicipalitiesIds = (municipalitiesIds: number[]) => {
    dispatch(setVenturesMunicipalitiesIds(municipalitiesIds));
  };

  const setActiveDepartmentId = (departmentId: number) => {
    dispatch(setVenturesActiveDepartmentId(departmentId));
  };

  return {
    ...filters,
    setCategoriesIds,
    setActiveDepartmentId,
    setMunicipalitiesIds,
    setViewMode,
    setSearch,
    setPage,
    setPageSize,
    setFilters,
  };
};

export default useVenturesRightSidebar;
