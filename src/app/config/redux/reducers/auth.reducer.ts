import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { LoginResponse } from "../../../modules/auth/domain/Login";
import { RootState } from "../store/store.config";

export interface AuthenticationState extends Partial<LoginResponse> {}

const initialState: AuthenticationState = {};

// Freeze the initial state to prevent accidental changes

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<LoginResponse>) => {
      const { id, email, picture, firstName, lastName, roles } = action.payload;

      state.id = id;
      state.email = email;
      state.firstName = firstName;
      state.picture = picture;
      state.lastName = lastName;
      state.roles = roles;
    },
    logoutUser: () => {
      return initialState;
    },
  },
});

export const { loginUser, logoutUser } = authenticationSlice.actions;

export const selectAuthentication = (state: RootState) => state.authentication;

export default authenticationSlice.reducer;
