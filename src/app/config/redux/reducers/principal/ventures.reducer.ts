import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Venture } from "echadospalante-core";
import { RootState } from "../../store/store.config";
import { PaginatedBody } from "../../../../modules/principal/ventures/domain/api";

export interface VentureFilter {
  search: string;
  department: string;
  categoriesSlugs: string[];
  page: number;
  size: number;
}

export interface VenturesState {
  filters: VentureFilter;
  ventures: PaginatedBody<Venture>;
}

const initialState: VenturesState = {
  filters: {
    search: "",
    department: "",
    categoriesSlugs: [],
    page: 0,
    size: 20,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // items: [] as any[],
  // total: 0,
  ventures: {
    items: [],
    total: 0,
  },
};

Object.freeze(initialState);

export const venturesSlice = createSlice({
  name: "principal/ventures",
  initialState,
  reducers: {
    // changeFilterSearch: (state, action: PayloadAction<string>) => {
    //   state.filters.search = action.payload;
    // },
    // changeFilterArea: (state, action: PayloadAction<ventureArea[]>) => {
    //   state.filters.areas = action.payload;
    // },
    // changeFilterAdvisors: (state, action: PayloadAction<ventureAdvisor[]>) => {
    //   state.filters.advisors = action.payload;
    // },
    // changeFilterState: (state, action: PayloadAction<venturestate[]>) => {
    //   state.filters.states = action.payload;
    // },
    // changeFilterDateRange: (state, action: PayloadAction<DateRange>) => {
    //   state.filters.dateRange = action.payload;
    // },
    // changeFilterIncludedFields: (
    //   state,
    //   action: PayloadAction<ventureInclude[]>
    // ) => {
    //   state.filters.include = action.payload;
    // },
    setVenturesFiltersPage: (state, action: PayloadAction<number>) => {
      state.filters.page = action.payload;
    },
    setVentures: (state, action: PayloadAction<PaginatedBody<Venture>>) => {
      state.ventures = action.payload;
    },
    addVentures: (state, action: PayloadAction<PaginatedBody<Venture>>) => {
      state.ventures.items = [...state.ventures.items, ...action.payload.items];
      state.ventures.total = action.payload.total;
    },
    resetVentures: (state) => {
      state.ventures = initialState.ventures;
    },
    setVenturesFilters: (state, action: PayloadAction<VentureFilter>) => {
      const { page, search, size, categoriesSlugs, department } =
        action.payload;

      state.filters = {
        page,
        search,
        size,
        categoriesSlugs,
        department,
      };
    },
  },
});

export const {
  setVentures,
  addVentures,
  setVenturesFiltersPage,
  resetVentures,
  setVenturesFilters,
} = venturesSlice.actions;

export const selectVentures = (state: RootState) => state.principal.ventures;

export default venturesSlice.reducer;
