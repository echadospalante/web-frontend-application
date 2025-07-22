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
import { useSearchParams } from 'react-router-dom';

const useVenturesRightSidebar = () => {
  const dispatch = useAppDispatch();
  const { filters, showFilters } = useSelector(selectVentures);
  const [searchParams, setSearchParams] = useSearchParams();
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
    console.log({
      search,
      categoriesIds,
      municipalitiesIds,
      activeDepartmentId,
    });

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
    } else {
      const search = searchParams.get('search') || '';
      const municipalitiesIdsParam = searchParams.get('municipalities_ids');
      const categoriesIdsParam = searchParams.get('categories_ids');
      const viewMode = searchParams.get('view_mode') as VenturesViewMode | null;
      const skip = searchParams.get('skip');

      if (municipalitiesIdsParam) {
        const ids = municipalitiesIdsParam.split(',').map(Number);
        setMunicipalitiesIds(ids);
      }
      if (categoriesIdsParam) {
        const ids = categoriesIdsParam.split(',').map(String);
        setCategoriesIds(ids);
      }
      if (viewMode) {
        setViewMode(viewMode);
      }
      if (skip) {
        setPage(Number(skip));
      }

      setSearch(search);
    }
  }, []);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    const { search, municipalitiesIds, pagination, categoriesIds, viewMode } =
      filters;

    search && newSearchParams.set('search', search);
    pagination && newSearchParams.set('skip', pagination.skip.toString());
    pagination && newSearchParams.set('take', pagination.take.toString());
    viewMode && newSearchParams.set('view_mode', viewMode);
    municipalitiesIds &&
      newSearchParams.set('municipalities_ids', municipalitiesIds.join(','));
    categoriesIds &&
      newSearchParams.set('categories_ids', categoriesIds.join(','));

    setSearchParams(newSearchParams);
  }, [filters]);

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
