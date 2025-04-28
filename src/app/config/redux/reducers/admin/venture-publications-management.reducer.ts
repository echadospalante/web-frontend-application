import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { VenturePublication } from "echadospalante-core";

import { PaginatedBody } from "../../../../modules/principal/ventures/domain/api";
import { RootState } from "../../store/store.config";

export interface VenturePublicationsFilter {
  ventureId: string;
  search: string;
  page: number;
  size: number;
}

export interface VenturePublicationsManagementState {
  filters: VenturePublicationsFilter;
  publications: PaginatedBody<VenturePublication>;
}

// Freeze the initial state to prevent accidental changes
const initialState: VenturePublicationsManagementState = {
  filters: {
    ventureId: "",
    page: 0,
    search: "",
    size: 20,
  },
  publications: {
    items: [],
    total: 0,
  },
};

export const venturePublicationsManagementSlice = createSlice({
  name: "admin/venturePublicationsManagement",
  initialState,
  reducers: {
    createVenturePublication: (
      state,
      action: PayloadAction<VenturePublication>
    ) => {
      state.publications.items.push(action.payload);
    },
    setVenturePublicationsFilters: (
      state,
      action: PayloadAction<VenturePublicationsFilter>
    ) => {
      const { page, search, size, ventureId } = action.payload;

      state.filters = {
        ventureId,
        page,
        search,
        size,
      };
    },
    updateVenturePublication: (
      state,
      action: PayloadAction<VenturePublication>
    ) => {
      const updatedPublication = action.payload;
      state.publications.items = state.publications.items.map((publication) =>
        publication.id === updatedPublication.id
          ? updatedPublication
          : publication
      );
    },
    addVenturePublication: (
      state,
      action: PayloadAction<VenturePublication>
    ) => {
      state.publications.items.push(action.payload);
    },
    resetVenturePublicationsFilters: (state) => {
      state.filters = initialState.filters;
    },
    setVenturePublications: (
      state,
      action: PayloadAction<PaginatedBody<VenturePublication>>
    ) => {
      const { items, total } = action.payload;
      state.publications = {
        items,
        total,
      };
    },
    resetVenturePublications: (state) => {
      state.publications = initialState.publications;
    },
  },
});

export const {
  setVenturePublicationsFilters,
  resetVenturePublicationsFilters,
  resetVenturePublications,
  setVenturePublications,
  updateVenturePublication,
  createVenturePublication,
  addVenturePublication,
} = venturePublicationsManagementSlice.actions;

export const selectVenturePublicationsManagement = (state: RootState) =>
  state.admin.venturePublicationsManagement;

export default venturePublicationsManagementSlice.reducer;
