import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store/store.config";

export interface VentureFilter {}

export interface VenturesState {
  filters: VentureFilter;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
}

const initialState: VenturesState = {
  filters: {
    search: "",
    dateRange: {},
    areas: [],
    advisors: [],
    states: [],
    include: [],
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // items: [] as any[],
  // total: 0,
  items: [],
};

Object.freeze(initialState);

export const venturesSlice = createSlice({
  name: "ventures",
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setVentures: (state, action: PayloadAction<any>) => {
      state.items = action.payload;
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
