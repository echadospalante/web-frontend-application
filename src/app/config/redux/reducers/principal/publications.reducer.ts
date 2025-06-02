import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  PaginatedBody,
  Pagination,
  VenturePublication,
} from 'echadospalante-domain';

import { RootState } from '../../store/store.config';

export interface PublicationFilter {
  pagination: Pagination;
  search: string;
  categoriesIds: string[];
  dateRange?: {
    from: string;
    to: string;
  };
}

export interface PublicationsState {
  filters: PublicationFilter;
  items: VenturePublication[];
  total: number;
}

const initialState: PublicationsState = {
  filters: {
    pagination: {
      skip: 0,
      take: 10,
    },
    search: '',
    categoriesIds: [],
  },
  items: [],
  total: 0,
};

Object.freeze(initialState);

export const publicationsSlice = createSlice({
  name: 'publications',
  initialState,
  reducers: {
    setSkip: (state, action: PayloadAction<number>) => {
      state.filters.pagination.skip = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
      state.filters.pagination.skip = 0;
    },
    setCategoriesIds: (state, action: PayloadAction<string[]>) => {
      state.filters.categoriesIds = action.payload;
      state.filters.pagination.skip = 0;
    },
    setDateRange: (
      state,
      action: PayloadAction<{ from: string; to: string } | undefined>,
    ) => {
      state.filters.dateRange = action.payload;
      state.filters.pagination.skip = 0;
    },
    setPublications: (
      state,
      action: PayloadAction<PaginatedBody<VenturePublication>>,
    ) => {
      state.items = action.payload.items;
      state.total = action.payload.total;
    },
  },
});

export const {
  setPublications,
  setSkip,
  setCategoriesIds,
  setDateRange,
  setSearch,
} = publicationsSlice.actions;

export const selectPublications = (state: RootState) => state.principal.publications;

export default publicationsSlice.reducer;
