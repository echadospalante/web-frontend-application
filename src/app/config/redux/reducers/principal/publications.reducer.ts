import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  PaginatedBody,
  Pagination,
  PublicationClap,
  PublicationComment,
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
  detail: VenturePublication | null;
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
  detail: null,
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
    setPublicationDetail: (
      state,
      action: PayloadAction<VenturePublication>,
    ) => {
      state.detail = action.payload;
    },
    resetPublicationDetail: (state) => {
      state.detail = null;
    },
    addPublicationComment: (
      state,
      action: PayloadAction<PublicationComment>,
    ) => {
      if (state.detail) {
        state.detail.comments = [
          action.payload,
          ...(state.detail.comments || []),
        ];
        state.detail.commentsCount += 1;
      }
    },
    deletePublicationComment: (state, action: PayloadAction<string>) => {
      if (state.detail) {
        state.detail.comments = state.detail.comments?.filter(
          (comment) => comment.id !== action.payload,
        );
        state.detail.commentsCount -= 1;
      }
    },
    addPublicationClap: (state, action: PayloadAction<PublicationClap>) => {
      if (state.detail) {
        state.detail.claps = [action.payload, ...(state.detail.claps || [])];
        state.detail.clapsCount += 1;
      }
    },
    deletePublicationClap: (state, action: PayloadAction<string>) => {
      if (state.detail) {
        state.detail.claps = state.detail.claps?.filter(
          (clap) => clap.id !== action.payload,
        );
        state.detail.clapsCount -= 1;
      }
    },
  },
});

export const {
  setPublications,
  setSkip,
  setCategoriesIds,
  setDateRange,
  setSearch,
  setPublicationDetail,
  resetPublicationDetail,
  addPublicationComment,
  deletePublicationComment,
  addPublicationClap,
  deletePublicationClap,
} = publicationsSlice.actions;

export const selectPublications = (state: RootState) => state.principal.publications;

export default publicationsSlice.reducer;
