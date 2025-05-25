import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { VentureSponsorship } from "echadospalante-domain";
import { PaginatedBody } from "echadospalante-domain/dist/app/modules/domain/common/pagination";

import { RootState } from "../../store/store.config";

export interface VentureSponsorshipsFilter {
  ventureId: string;
  search: string;
  page: number;
  size: number;
}

export interface VentureSponsorshipsManagementState {
  filters: VentureSponsorshipsFilter;
  sponsors: PaginatedBody<VentureSponsorship>;
}

// Freeze the initial state to prevent accidental changes
const initialState: VentureSponsorshipsManagementState = {
  filters: {
    ventureId: "",
    page: 0,
    search: "",
    size: 20,
  },
  sponsors: {
    items: [],
    total: 0,
  },
};

export const ventureSponsorsManagementSlice = createSlice({
  name: "admin/ventureSponsorsManagement",
  initialState,
  reducers: {
    createVentureSponsor: (
      state,
      action: PayloadAction<VentureSponsorship>
    ) => {
      state.sponsors.items.push(action.payload);
    },
    setVentureSponsorsFilters: (
      state,
      action: PayloadAction<VentureSponsorshipsFilter>
    ) => {
      const { page, search, size, ventureId } = action.payload;

      state.filters = {
        ventureId,
        page,
        search,
        size,
      };
    },
    updateVentureSponsor: (
      state,
      action: PayloadAction<VentureSponsorship>
    ) => {
      const updatedSponsor = action.payload;
      state.sponsors.items = state.sponsors.items.map((sponsor) =>
        sponsor.id === updatedSponsor.id ? updatedSponsor : sponsor
      );
    },
    addVentureSponsor: (state, action: PayloadAction<VentureSponsorship>) => {
      state.sponsors.items.push(action.payload);
    },
    resetVentureSponsorsFilters: (state) => {
      state.filters = initialState.filters;
    },
    setVentureSponsors: (
      state,
      action: PayloadAction<PaginatedBody<VentureSponsorship>>
    ) => {
      const { items, total } = action.payload;
      state.sponsors = {
        items,
        total,
      };
    },
    resetVentureSponsors: (state) => {
      state.sponsors = initialState.sponsors;
    },
  },
});

export const {
  setVentureSponsorsFilters,
  resetVentureSponsorsFilters,
  resetVentureSponsors,
  setVentureSponsors,
  updateVentureSponsor,
  createVentureSponsor,
  addVentureSponsor,
} = ventureSponsorsManagementSlice.actions;

export const selectVentureSponsorsManagement = (state: RootState) =>
  state.admin.ventureSponsorshipsManagement;

export default ventureSponsorsManagementSlice.reducer;
