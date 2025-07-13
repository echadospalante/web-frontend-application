import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Venture } from 'echadospalante-domain';
import { PaginatedBody } from 'echadospalante-domain';

import { RootState } from '../../store/store.config';

export interface OwnedVenturesFilter {
  search: string;
  page: number;
  size: number;
  categoriesIds: string[];
}

export interface OwnedVenturesState {
  filters: OwnedVenturesFilter;
  ventures: PaginatedBody<Venture>;
}

// Freeze the initial state to prevent accidental changes
const initialState: OwnedVenturesState = {
  filters: {
    page: 0,
    search: '',
    size: 20,
    categoriesIds: [],
  },
  ventures: {
    items: [],
    total: 0,
  },
};

export const ownedVenturesSlice = createSlice({
  name: 'principal/ownedVentures',
  initialState,
  reducers: {
    createOwnedVenture: (state, action: PayloadAction<Venture>) => {
      state.ventures.items.push(action.payload);
    },
    setOwnedVenturesFilters: (
      state,
      action: PayloadAction<OwnedVenturesFilter>,
    ) => {
      const { page, search, size, categoriesIds } = action.payload;

      state.filters = {
        page,
        search,
        size,
        categoriesIds,
      };
    },
    updateOwnedVenture: (state, action: PayloadAction<Venture>) => {
      const updatedVenture = action.payload;
      state.ventures.items = state.ventures.items.map((venture) =>
        venture.id === updatedVenture.id ? updatedVenture : venture,
      );
    },
    addOwnedVenture: (state, action: PayloadAction<Venture>) => {
      state.ventures.items.push(action.payload);
    },
    resetOwnedVenturesFilters: (state) => {
      state.filters = initialState.filters;
    },
    setOwnedVentures: (
      state,
      action: PayloadAction<PaginatedBody<Venture>>,
    ) => {
      const { items, total } = action.payload;
      state.ventures = {
        items,
        total,
      };
    },
    resetOwnedVentures: (state) => {
      state.ventures = initialState.ventures;
    },
  },
});

export const {
  setOwnedVenturesFilters,
  resetOwnedVenturesFilters,
  resetOwnedVentures,
  setOwnedVentures,
  updateOwnedVenture,
  createOwnedVenture,
  addOwnedVenture,
} = ownedVenturesSlice.actions;

export const selectOwnedVentures = (state: RootState) =>
  state.principal.ownedVentures;

export default ownedVenturesSlice.reducer;
