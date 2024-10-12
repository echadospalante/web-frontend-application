import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Venture } from "echadospalante-core";

import { PaginatedBody } from "../../../../modules/principal/ventures/domain/api";
import { RootState } from "../../store/store.config";

export interface OwnedVenturesFilter {
  search: string;
  page: number;
  size: number;
}

export interface OwnedVenturesManagementState {
  filters: OwnedVenturesFilter;
  ventures: PaginatedBody<Venture>;
}

// Freeze the initial state to prevent accidental changes
const initialState: OwnedVenturesManagementState = {
  filters: {
    page: 0,
    search: "",
    size: 20,
  },
  ventures: {
    items: [],
    total: 0,
  },
};

export const ownedVenturesManagementSlice = createSlice({
  name: "admin/ownedVenturesManagement",
  initialState,
  reducers: {
    createOwnedVenture: (state, action: PayloadAction<Venture>) => {
      state.ventures.items.push(action.payload);
    },
    setOwnedVenturesFilters: (
      state,
      action: PayloadAction<OwnedVenturesFilter>
    ) => {
      const { page, search, size } = action.payload;

      state.filters = {
        page,
        search,
        size,
      };
    },
    updateOwnedVenture: (state, action: PayloadAction<Venture>) => {
      const updatedCategory = action.payload;
      state.ventures.items = state.ventures.items.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category
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
      action: PayloadAction<PaginatedBody<Venture>>
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
} = ownedVenturesManagementSlice.actions;

export const selectOwnedVenturesManagement = (state: RootState) =>
  state.admin.ownedVenturesManagement;

export default ownedVenturesManagementSlice.reducer;
