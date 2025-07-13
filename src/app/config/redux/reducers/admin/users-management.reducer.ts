import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppRole, User } from 'echadospalante-domain';
import { PaginatedBody } from 'echadospalante-domain';

import { RootState } from '../../store/store.config';

export interface UsersFilter {
  search: string;
  role: AppRole | '';
  gender: 'M' | 'F' | 'O' | null;
  page: number;
  size: number;
}

export interface UsersManagementState {
  filters: UsersFilter;
  users: PaginatedBody<User>;
}

// Freeze the initial state to prevent accidental changes
const initialState: UsersManagementState = {
  filters: {
    gender: null,
    page: 0,
    role: '',
    search: '',
    size: 20,
  },
  users: {
    items: [],
    total: 0,
  },
};

export const usersManagementSlice = createSlice({
  name: 'admin/usersManagement',
  initialState,
  reducers: {
    setUserFilters: (state, action: PayloadAction<UsersFilter>) => {
      const { gender, page, role, search, size } = action.payload;

      state.filters = {
        gender,
        page,
        role,
        search,
        size,
      };
    },
    resetUserFilters: (state) => {
      state.filters = initialState.filters;
    },
    setUsers: (state, action: PayloadAction<PaginatedBody<User>>) => {
      const { items, total } = action.payload;
      state.users = {
        items,
        total,
      };
    },
    resetUsers: (state) => {
      state.users = initialState.users;
    },
  },
});

export const { setUserFilters, resetUserFilters, resetUsers, setUsers } =
  usersManagementSlice.actions;

export const selectUsersManagement = (state: RootState) =>
  state.admin.usersManagement;

export default usersManagementSlice.reducer;
