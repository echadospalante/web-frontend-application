import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PaginatedBody, Pagination, Venture } from 'echadospalante-domain';
import { RootState } from '../../store/store.config';

export enum VenturesViewMode {
  feed = 'feed',
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
  showFilters: boolean;
  items: Venture[];
  total: number;
}

const initialState: VenturesState = {
  showFilters: true,
  filters: {
    pagination: {
      skip: 0,
      take: 20,
    },
    viewMode: VenturesViewMode.feed,
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
      // Keep only the first municipality if view mode map is active
      if (action.payload === VenturesViewMode.map) {
        state.filters.municipalitiesIds = state.filters.municipalitiesIds.slice(
          0,
          1,
        );
      }
    },
    setVenturesCategoriesIds: (state, action: PayloadAction<string[]>) => {
      state.filters.categoriesIds = action.payload;
      state.filters.pagination.skip = 0;
    },
    setVenturesSkip: (state, action: PayloadAction<number>) => {
      state.filters.pagination.skip = action.payload;
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
    toggleShowVentureFilters: (state) => {
      state.showFilters = !state.showFilters;
    },
  },
});

export const {
  setVentures,
  setVenturesSearch,
  setVenturesViewMode,
  setVenturesCategoriesIds,
  setVenturesSkip,
  setVenturesFilters,
  setVenturesMunicipalitiesIds,
  setVenturesActiveDepartmentId,
  toggleShowVentureFilters,
} = venturesSlice.actions;

export const selectVentures = (state: RootState) => state.principal.ventures;

export default venturesSlice.reducer;
