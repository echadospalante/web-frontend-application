import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PaginatedBody, Pagination, VentureEvent } from 'echadospalante-domain';

import { RootState } from '../../store/store.config';

export enum EventsViewMode {
  feed = 'feed',
  calendar = 'calendar',
  map = 'map',
}

export interface EventFilter {
  pagination: Pagination;
  search: string;
  viewMode: EventsViewMode;
  categoriesIds: string[];
  activeDepartmentId: number;
  municipalitiesIds: number[];
}

export interface EventsState {
  filters: EventFilter;
  showFilters: boolean;
  items: VentureEvent[];
  total: number;
}

const initialState: EventsState = {
  showFilters: true,
  filters: {
    pagination: {
      skip: 0,
      take: 20,
    },
    viewMode: EventsViewMode.calendar,
    search: '',
    categoriesIds: [],
    activeDepartmentId: 0,
    municipalitiesIds: [],
  },
  items: [],
  total: 0,
};

Object.freeze(initialState);

export const eventsSlice = createSlice({
  name: 'principal/events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<PaginatedBody<VentureEvent>>) => {
      state.items = action.payload.items;
      state.total = action.payload.total;
    },
    setEventsSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
      state.filters.pagination.skip = 0;
    },
    setEventsViewMode: (state, action: PayloadAction<EventsViewMode>) => {
      state.filters.viewMode = action.payload;
    },
    setEventsCategoriesIds: (state, action: PayloadAction<string[]>) => {
      state.filters.categoriesIds = action.payload;
      state.filters.pagination.skip = 0;
    },
    setEventsSkip: (state, action: PayloadAction<number>) => {
      state.filters.pagination.skip = action.payload;
    },
    setEventsFilters: (state, action: PayloadAction<EventFilter>) => {
      state.filters = action.payload;
    },
    setEventsActiveDepartmentId: (state, action: PayloadAction<number>) => {
      state.filters.activeDepartmentId = action.payload;
      state.filters.municipalitiesIds = [];
      state.filters.pagination.skip = 0;
    },
    setEventsMunicipalitiesIds: (state, action: PayloadAction<number[]>) => {
      state.filters.municipalitiesIds = action.payload;
      state.filters.pagination.skip = 0;
    },
    toggleShowEventFilters: (state) => {
      state.showFilters = !state.showFilters;
    },
  },
});

export const {
  setEvents,
  setEventsSearch,
  setEventsViewMode,
  setEventsCategoriesIds,
  setEventsSkip,
  setEventsFilters,
  setEventsMunicipalitiesIds,
  setEventsActiveDepartmentId,
  toggleShowEventFilters,
} = eventsSlice.actions;

export const selectEvents = (state: RootState) => state.principal.events;

export default eventsSlice.reducer;
