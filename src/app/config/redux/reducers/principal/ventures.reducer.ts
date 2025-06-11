import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PaginatedBody, Pagination, Venture } from 'echadospalante-domain';
import { RootState } from '../../store/store.config';

export enum VenturesViewMode {
  calendar = 'calendar',
  map = 'map',
}

export interface VentureFilter {
  pagination: Pagination;
  search: string;
  viewMode: VenturesViewMode;
  categoriesIds: string[];
  activeDepartmentId: number;
  municipalitiesIds: number[];
}

export interface VenturesState {
  filters: VentureFilter;
  items: Venture[];
  total: number;
}

const initialState: VenturesState = {
  filters: {
    pagination: {
      skip: 0,
      take: 20,
    },
    viewMode: VenturesViewMode.calendar,
    search: '',
    categoriesIds: [],
    activeDepartmentId: 0,
    municipalitiesIds: [],
  },
  items: [],
  total: 0,
};

Object.freeze(initialState);

export const venturesSlice = createSlice({
  name: 'principal/ventures',
  initialState,
  reducers: {
    setVentures: (state, action: PayloadAction<PaginatedBody<Venture>>) => {
      state.items = action.payload.items;
      state.total = action.payload.total;
    },
    setVenturesSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
      state.filters.pagination.skip = 0;
    },
    setVenturesViewMode: (state, action: PayloadAction<VenturesViewMode>) => {
      state.filters.viewMode = action.payload;
    },
    setVenturesCategoriesIds: (state, action: PayloadAction<string[]>) => {
      state.filters.categoriesIds = action.payload;
      state.filters.pagination.skip = 0;
    },
    setVenturesPage: (state, action: PayloadAction<number>) => {
      state.filters.pagination.skip =
        action.payload * state.filters.pagination.take;
    },
    setVenturesPageSize: (state, action: PayloadAction<number>) => {
      state.filters.pagination.take = action.payload;
      state.filters.pagination.skip = 0;
    },
    setVenturesFilters: (state, action: PayloadAction<VentureFilter>) => {
      state.filters = action.payload;
    },
    setVenturesActiveDepartmentId: (state, action: PayloadAction<number>) => {
      state.filters.activeDepartmentId = action.payload;
      state.filters.municipalitiesIds = [];
      state.filters.pagination.skip = 0;
    },
    setVenturesMunicipalitiesIds: (state, action: PayloadAction<number[]>) => {
      state.filters.municipalitiesIds = action.payload;
      state.filters.pagination.skip = 0;
    },
  },
});

export const {
  setVentures,
  setVenturesSearch,
  setVenturesViewMode,
  setVenturesCategoriesIds,
  setVenturesPage,
  setVenturesPageSize,
  setVenturesFilters,
  setVenturesMunicipalitiesIds,
  setVenturesActiveDepartmentId,
} = venturesSlice.actions;

export const selectVentures = (state: RootState) => state.principal.ventures;

export default venturesSlice.reducer;
