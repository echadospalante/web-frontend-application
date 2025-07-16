
import { useSelector } from 'react-redux';

import {
  EventFilter,
  EventsViewMode,
  selectEvents,
  setDateRange,
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

const useEventsFilters = () => {
  const dispatch = useAppDispatch();
  const { filters, showFilters } = useSelector(selectEvents);

  const setCategoriesIds = (categoriesIds: string[]) => {
    dispatch(setEventsCategoriesIds(categoriesIds));
  };

  const setViewMode = (viewMode: EventsViewMode) => {
    dispatch(setEventsViewMode(viewMode));
  };

  const setSearch = (search: string) => {
    dispatch(setEventsSearch(search));
  };

  const setSkip = (page: number) => {
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

  const changeDateRange = (dateRange: { from: Date; to: Date }) => {
    const { from, to } = dateRange; 
    dispatch(setDateRange({from, to}));
  }


  return {
    showFilters,
    ...filters,
    setCategoriesIds,
    setActiveDepartmentId,
    setMunicipalitiesIds,
    toggleShowFilters,
    setViewMode,
    changeDateRange,
    setSearch,
    setSkip,
    setFilters,
  };
};

export default useEventsFilters;
