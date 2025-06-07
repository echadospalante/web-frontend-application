import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PaginatedBody, Pagination, Venture } from 'echadospalante-domain';
import { RootState } from '../../store/store.config';

export interface VentureFilter {
  pagination: Pagination;
  search: string;
  categoriesIds: string[];
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
    search: '',
    categoriesIds: [],
    municipalitiesIds: [],
  },
  items: [],
  total: 0,
};

Object.freeze(initialState);

export const venturesSlice = createSlice({
  name: 'ventures',
  initialState,
  reducers: {
    setVentures: (state, action: PayloadAction<PaginatedBody<Venture>>) => {
      state.items = action.payload.items;
      state.total = action.payload.total;
    },
  },
});

export const {
  setVentures,
  // changeFilterArea,
  // changeFilterState,
  // changeFilterSearch,
  // changeFilterAdvisors,
  // changeFilterDateRange,
  // changeFilterIncludedFields,
} = venturesSlice.actions;

export const selectVentures = (state: RootState) => state.ventures;

export default venturesSlice.reducer;
