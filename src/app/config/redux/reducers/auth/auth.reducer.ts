import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { LoginResponse } from "../../../../modules/auth/domain/Login";
import { RootState } from "../../store/store.config";
import { Role } from "../../../../modules/auth/domain/Role";

export interface AuthenticationState extends Partial<LoginResponse> {
  activeRole?: Role;
}

const initialState: AuthenticationState = {};

// Freeze the initial state to prevent accidental changes

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<LoginResponse>) => {
      const {
        id,
        email,
        picture,
        firstName,
        lastName,
        roles,
        active,
        createdAt,
        onboardingCompleted,
      } = action.payload;

      state.id = id;
      state.email = email;
      state.firstName = firstName;
      state.picture = picture;
      state.lastName = lastName;
      state.roles = roles;
      state.active = active;
      state.createdAt = createdAt;
      state.onboardingCompleted = onboardingCompleted;
      state.activeRole = roles[0];
    },
    logoutUser: () => {
      return initialState;
    },
    changeActiveRole: (state, action: PayloadAction<Role>) => {
      state.activeRole = action.payload;
    },
    completeOnboarding: (state) => {
      state.onboardingCompleted = true;
    },
  },
});

export const { loginUser, logoutUser, changeActiveRole, completeOnboarding } =
  authenticationSlice.actions;

export const selectAuthentication = (state: RootState) => state.authentication;

export default authenticationSlice.reducer;
