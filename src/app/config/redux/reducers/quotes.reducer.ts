import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { QuoteArea } from "../../../modules/principal/commercial/domain/area";
import {
  DateRange,
  QuoteInclude,
  QuoteFilter,
} from "../../../modules/principal/commercial/domain/filters";
import { QuotesResponse } from "../../../modules/principal/commercial/domain/quote";
import { QuoteState } from "../../../modules/principal/commercial/domain/state";
import { RootState } from "../store/store.config";
import { QuoteAdvisor } from "../../../modules/principal/commercial/domain/advisor";

export interface QuotesState {
  filters: QuoteFilter;
  items: QuotesResponse;
}

const initialState: QuotesState = {
  filters: {
    search: "",
    dateRange: {},
    areas: [],
    advisors: [],
    states: [],
    include: [],
  },
  items: {
    items: [],
    total: 0,
  },
};

Object.freeze(initialState);

export const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    changeFilterSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
    changeFilterArea: (state, action: PayloadAction<QuoteArea[]>) => {
      state.filters.areas = action.payload;
    },
    changeFilterAdvisors: (state, action: PayloadAction<QuoteAdvisor[]>) => {
      state.filters.advisors = action.payload;
    },
    changeFilterState: (state, action: PayloadAction<QuoteState[]>) => {
      state.filters.states = action.payload;
    },
    changeFilterDateRange: (state, action: PayloadAction<DateRange>) => {
      state.filters.dateRange = action.payload;
    },
    changeFilterIncludedFields: (
      state,
      action: PayloadAction<QuoteInclude[]>
    ) => {
      state.filters.include = action.payload;
    },
    setQuotes: (state, action: PayloadAction<QuotesResponse>) => {
      state.items = action.payload;
    },
  },
});

export const {
  setQuotes,
  changeFilterArea,
  changeFilterState,
  changeFilterSearch,
  changeFilterAdvisors,
  changeFilterDateRange,
  changeFilterIncludedFields,
} = quotesSlice.actions;

export const selectQuotes = (state: RootState) => state.quotes;

export default quotesSlice.reducer;
