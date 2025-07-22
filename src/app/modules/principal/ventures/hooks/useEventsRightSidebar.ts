import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { selectAuthentication } from '../../../../config/redux/reducers/auth/auth.reducer';
import {
  EventsViewMode,
  selectEvents,
  setEventsActiveDepartmentId,
  setEventsCategoriesIds,
  setEventsFilters,
  setEventsMunicipalitiesIds,
  setEventsSearch,
  setEventsSkip,
  setEventsViewMode,
  toggleShowEventFilters,
} from '../../../../config/redux/reducers/principal/events.reducer';

import { useAppDispatch } from '../../../../config/redux/store/store.config';
import municipalities from '../../../../shared/data/geo/municipalities';

const useEventsRightSidebar = () => {
  const dispatch = useAppDispatch();
  const { filters, showFilters } = useSelector(selectEvents);
  const [searchParams, setSearchParams] = useSearchParams();
  const { search, categoriesIds, municipalitiesIds, activeDepartmentId } =
    filters;
  const authentication = useSelector(selectAuthentication);

  const setCategoriesIds = (categoriesIds: string[]) => {
    dispatch(setEventsCategoriesIds(categoriesIds));
  };

  const setViewMode = (viewMode: EventsViewMode) => {
    console.log(`LLAMANDO CON ${viewMode}`);
    dispatch(setEventsViewMode(viewMode));
    // actualizar view_mode directamente en la URL
    const newParams = new URLSearchParams(searchParams);
    newParams.set('view_mode', viewMode);
    setSearchParams(newParams);
  };

  const setSearch = (search: string) => {
    dispatch(setEventsSearch(search));
  };

  const setPage = (page: number) => {
    dispatch(setEventsSkip(page));
  };

  const setMunicipalitiesIds = (municipalitiesIds: number[]) => {
    dispatch(setEventsMunicipalitiesIds(municipalitiesIds));
  };

  const setActiveDepartmentId = (departmentId: number) => {
    dispatch(setEventsActiveDepartmentId(departmentId));
  };

  const toggleShowFilters = () => {
    dispatch(toggleShowEventFilters());
  };

  useEffect(() => {
    console.log('EJECUTANDO UNA VEZ');

    const search = searchParams.get('search') || '';
    const municipalitiesIdsParam = searchParams.get('municipalities_ids');
    const categoriesIdsParam = searchParams.get('categories_ids');
    const viewModeParam = searchParams.get(
      'view_mode',
    ) as EventsViewMode | null;
    const skip = searchParams.get('skip');

    // Usar viewMode desde URL solo si viene definido
    if (viewModeParam) {
      dispatch(setEventsViewMode(viewModeParam));
    }

    // Si no hay filtros definidos ni en URL, usar valores por defecto
    const noParams =
      !search &&
      !municipalitiesIdsParam &&
      !categoriesIdsParam &&
      !viewModeParam &&
      !skip;
    const noFilters =
      categoriesIds.length === 0 &&
      municipalitiesIds.length === 0 &&
      !activeDepartmentId;

    if (noParams && noFilters) {
      dispatch(
        setEventsFilters({
          ...filters,
          categoriesIds: [],
          municipalitiesIds: authentication.municipality?.id
            ? [authentication.municipality.id]
            : [],
          activeDepartmentId: authentication.municipality
            ? municipalities.find(
                (m) => m.id === authentication.municipality!.id,
              )?.departmentId || 0
            : 0,
          search: '',
        }),
      );
    } else {
      if (municipalitiesIdsParam) {
        const ids = municipalitiesIdsParam.split(',').map(Number);
        setMunicipalitiesIds(ids);
      }

      if (categoriesIdsParam) {
        const ids = categoriesIdsParam.split(',').map(String);
        setCategoriesIds(ids);
      }

      if (skip) {
        setPage(Number(skip));
      }

      setSearch(search);
    }
  }, []);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    const { search, municipalitiesIds, pagination, categoriesIds, dateRange } =
      filters;

    console.log({ filters: JSON.stringify(filters) });

    search && newSearchParams.set('search', search);
    pagination && newSearchParams.set('skip', pagination.skip.toString());
    pagination && newSearchParams.set('take', pagination.take.toString());
    municipalitiesIds &&
      newSearchParams.set('municipalities_ids', municipalitiesIds.join(','));
    categoriesIds &&
      newSearchParams.set('categories_ids', categoriesIds.join(','));

    if (dateRange?.from && dateRange?.to) {
      newSearchParams.set('from', dateRange.from.toISOString().split('T')[0]);
      newSearchParams.set('to', dateRange.to.toISOString().split('T')[0]);
    }

    // NO establecer view_mode desde aquí para evitar sobrescritura
    setSearchParams(newSearchParams);
  }, [
    filters.search,
    filters.municipalitiesIds,
    filters.pagination,
    filters.categoriesIds,
    filters.dateRange,
  ]);

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
  };
};

export default useEventsRightSidebar;
