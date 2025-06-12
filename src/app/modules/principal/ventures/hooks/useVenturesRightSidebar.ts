import { useSelector } from 'react-redux';

import {
  selectVentures,
  setVenturesActiveDepartmentId,
  setVenturesCategoriesIds,
  setVenturesFilters,
  setVenturesMunicipalitiesIds,
  setVenturesSearch,
  setVenturesSkip,
  setVenturesViewMode,
  toggleShowVentureFilters,
  VentureFilter,
  VenturesViewMode,
} from '../../../../config/redux/reducers/principal/ventures.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';

const useVenturesRightSidebar = () => {
  const dispatch = useAppDispatch();
  const { filters, showFilters } = useSelector(selectVentures);

  const setCategoriesIds = (categoriesIds: string[]) => {
    dispatch(setVenturesCategoriesIds(categoriesIds));
  };

  const setViewMode = (viewMode: VenturesViewMode) => {
    dispatch(setVenturesViewMode(viewMode));
  };

  const setSearch = (search: string) => {
    dispatch(setVenturesSearch(search));
  };

  const setPage = (page: number) => {
    dispatch(setVenturesSkip(page));
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

  const toggleShowFilters = () => {
    dispatch(toggleShowVentureFilters());
  }

  return {
    showFilters,
    ...filters,
    setCategoriesIds,
    setActiveDepartmentId,
    setMunicipalitiesIds,
    toggleShowFilters,
    setViewMode,
    setSearch,
    setPage,
    setFilters,
  };
};

export default useVenturesRightSidebar;
