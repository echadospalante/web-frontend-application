import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AppRole, User } from "echadospalante-core";

import { PaginatedBody } from "../../../../modules/principal/ventures/domain/api";
import { RootState } from "../../store/store.config";

export interface UsersFilter {
  search: string;
  role: AppRole;
  gender: string;
  page: number;
  size: number;
}

export interface UsersManagementState {
  filters: UsersFilter;
  users: PaginatedBody<User>;
}

// Freeze the initial state to prevent accidental changes
const initialState: Partial<UsersManagementState> = {};

export const usersManagementSlice = createSlice({
  name: "usersManagement",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<UsersFilter>) => {
      const { gender, page, role, search, size } = action.payload;

      state.filters = {
        gender,
        page,
        role,
        search,
        size,
      };
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
    setItems: (state, action: PayloadAction<PaginatedBody<User>>) => {
      const { items, total } = action.payload;
      state.users = {
        items,
        total,
      };
    },
    resetItems: (state) => {
      state.users = initialState.users;
    },
  },
});

export const { resetFilters, setFilters, resetItems, setItems } =
  usersManagementSlice.actions;

export const selectUsersManagement = (state: RootState) => state.register;

export default usersManagementSlice.reducer;
