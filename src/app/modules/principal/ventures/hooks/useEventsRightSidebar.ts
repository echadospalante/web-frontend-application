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
    dispatch(setEventsViewMode(viewMode));
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
    if (
      !search &&
      categoriesIds.length === 0 &&
      !activeDepartmentId &&
      municipalitiesIds.length === 0
    ) {
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
              )!.departmentId!
            : 0,
          search: '',
        }),
      );
    } else {
      const search = searchParams.get('search') || '';
      const municipalitiesIdsParam = searchParams.get('municipalities_ids');
      const categoriesIdsParam = searchParams.get('categories_ids');
      const viewMode = searchParams.get('view_mode') as EventsViewMode | null;
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
    const {
      search,
      municipalitiesIds,
      pagination,
      categoriesIds,
      viewMode,
      dateRange,
    } = filters;

    console.log({
      filters,
    });

    search && newSearchParams.set('search', search);
    pagination && newSearchParams.set('skip', pagination.skip.toString());
    pagination && newSearchParams.set('take', pagination.take.toString());
    viewMode && newSearchParams.set('view_mode', viewMode);
    municipalitiesIds &&
      newSearchParams.set('municipalities_ids', municipalitiesIds.join(','));
    categoriesIds &&
      newSearchParams.set('categories_ids', categoriesIds.join(','));
    newSearchParams.set('from', dateRange.from.toISOString().split('T')[0]);
    newSearchParams.set('to', dateRange.to.toISOString().split('T')[0]);
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
  };
};

export default useEventsRightSidebar;
