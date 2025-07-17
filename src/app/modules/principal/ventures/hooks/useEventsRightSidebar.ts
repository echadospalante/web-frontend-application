import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { selectAuthentication } from '../../../../config/redux/reducers/auth/auth.reducer';
import {
  selectEvents,
  setEventsActiveDepartmentId,
  setEventsCategoriesIds,
  setEventsFilters,
  setEventsMunicipalitiesIds,
  setEventsSearch,
  setEventsSkip,
  setEventsViewMode,
  toggleShowEventFilters,
  EventFilter,
  EventsViewMode,
} from '../../../../config/redux/reducers/principal/events.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import municipalities from '../../../../shared/data/geo/municipalities';

const useEventsRightSidebar = () => {
  const dispatch = useAppDispatch();
  const { filters, showFilters } = useSelector(selectEvents);
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

  const setFilters = (filters: EventFilter) => {
    dispatch(setEventsFilters(filters));
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

export default useEventsRightSidebar;
