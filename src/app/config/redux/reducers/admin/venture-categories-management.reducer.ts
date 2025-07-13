import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { VentureCategory } from 'echadospalante-domain';

import { RootState } from '../../store/store.config';
import { PaginatedBody } from 'echadospalante-domain';

export interface VentureCategoriesFilter {
  search: string;
  page: number;
  size: number;
}

export interface VentureCategoriesManagementState {
  filters: VentureCategoriesFilter;
  categories: PaginatedBody<VentureCategory>;
}

// Freeze the initial state to prevent accidental changes
const initialState: VentureCategoriesManagementState = {
  filters: {
    page: 0,
    search: '',
    size: 20,
  },
  categories: {
    items: [],
    total: 0,
  },
};

export const ventureCategoriesManagementSlice = createSlice({
  name: 'admin/ventureCategoriesManagement',
  initialState,
  reducers: {
    createVentureCategory: (state, action: PayloadAction<VentureCategory>) => {
      state.categories.items.push(action.payload);
    },
    setVentureCategoriesFilters: (
      state,
      action: PayloadAction<VentureCategoriesFilter>,
    ) => {
      const { page, search, size } = action.payload;

      state.filters = {
        page,
        search,
        size,
      };
    },
    updateVentureCategory: (state, action: PayloadAction<VentureCategory>) => {
      const updatedCategory = action.payload;
      state.categories.items = state.categories.items.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category,
      );
    },
    addVentureCategory: (state, action: PayloadAction<VentureCategory>) => {
      state.categories.items.push(action.payload);
    },
    resetVentureCategoriesFilters: (state) => {
      state.filters = initialState.filters;
    },
    setVentureCategories: (
      state,
      action: PayloadAction<PaginatedBody<VentureCategory>>,
    ) => {
      const { items, total } = action.payload;
      state.categories = {
        items,
        total,
      };
    },
    resetVentureCategories: (state) => {
      state.categories = initialState.categories;
    },
  },
});

export const {
  setVentureCategoriesFilters,
  resetVentureCategoriesFilters,
  resetVentureCategories,
  setVentureCategories,
  updateVentureCategory,
  createVentureCategory,
  addVentureCategory,
} = ventureCategoriesManagementSlice.actions;

export const selectVentureCategoriesManagement = (state: RootState) =>
  state.admin.ventureCategoriesManagement;

export default ventureCategoriesManagementSlice.reducer;
