import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { VentureEvent } from 'echadospalante-domain';
import { PaginatedBody } from 'echadospalante-domain/dist/app/modules/domain/common/pagination';

import { RootState } from '../../store/store.config';

export interface VentureEventsFilter {
  ventureId: string;
  search: string;
  from: string;
  to: string;
}

export interface VentureEventsManagementState {
  filters: VentureEventsFilter;
  events: PaginatedBody<VentureEvent>;
}

const lastWeek = new Date();
lastWeek.setDate(lastWeek.getDate() - 7);

// Freeze the initial state to prevent accidental changes
const initialState: VentureEventsManagementState = {
  filters: {
    ventureId: '',
    search: '',
    from: lastWeek.toISOString(),
    to: new Date().toISOString(),
  },
  events: {
    items: [],
    total: 0,
  },
};

export const ventureEventsManagementSlice = createSlice({
  name: 'admin/ventureEventsManagement',
  initialState,
  reducers: {
    createVentureEvent: (state, action: PayloadAction<VentureEvent>) => {
      state.events.items.push(action.payload);
    },
    setVentureEventsFilters: (
      state,
      action: PayloadAction<VentureEventsFilter>,
    ) => {
      const { from, search, to, ventureId } = action.payload;

      state.filters = {
        ventureId,
        search,
        from,
        to,
      };
    },
    updateVentureEvent: (state, action: PayloadAction<VentureEvent>) => {
      const updatedEvent = action.payload;
      state.events.items = state.events.items.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event,
      );
    },
    addVentureEvent: (state, action: PayloadAction<VentureEvent>) => {
      state.events.items.push(action.payload);
    },
    resetVentureEventsFilters: (state) => {
      state.filters = initialState.filters;
    },
    setVentureEvents: (
      state,
      action: PayloadAction<PaginatedBody<VentureEvent>>,
    ) => {
      const { items, total } = action.payload;
      state.events = {
        items,
        total,
      };
    },
    resetVentureEvents: (state) => {
      state.events = initialState.events;
    },
  },
});

export const {
  setVentureEventsFilters,
  resetVentureEventsFilters,
  resetVentureEvents,
  setVentureEvents,
  updateVentureEvent,
  createVentureEvent,
  addVentureEvent,
} = ventureEventsManagementSlice.actions;

export const selectVentureEventsManagement = (state: RootState) =>
  state.admin.ventureEventsManagement;

export default ventureEventsManagementSlice.reducer;
