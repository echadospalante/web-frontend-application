import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { selectAuthentication } from '../../../../config/redux/reducers/auth/auth.reducer';
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
import municipalities from '../../../../shared/data/geo/municipalities';

const useVenturesRightSidebar = () => {
  const dispatch = useAppDispatch();
  const { filters, showFilters } = useSelector(selectVentures);
  const { search, categoriesIds, municipalitiesIds, activeDepartmentId } =
    filters;
  const authentication = useSelector(selectAuthentication);

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
  };

  useEffect(() => {
    if (
      !search &&
      categoriesIds.length === 0 &&
      !activeDepartmentId &&
      municipalitiesIds.length === 0
    ) {
      dispatch(
        setVenturesFilters({
          ...filters,
          categoriesIds:
            authentication.preferences?.map((preference) => preference.id) ||
            [],
          municipalitiesIds: authentication.municipality?.id
            ? [authentication.municipality.id]
            : [],
          activeDepartmentId: authentication.municipality
            ? municipalities.find(
                (m) => m.id === authentication.municipality!.id,
              )!.departmentId!
            : 0,
          search: '',
        }),
      );
    }
  }, []);

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
