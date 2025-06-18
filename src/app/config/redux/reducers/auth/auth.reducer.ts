import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppRole, User } from 'echadospalante-domain';

import { Role } from '../../../../modules/auth/domain/Role';
import { RootState } from '../../store/store.config';

export interface AuthenticationState extends Partial<User> {
  activeRole?: Role;
}

const initialState: AuthenticationState = {};

// Freeze the initial state to prevent accidental changes

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
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
        preferences,
        municipality,
        birthDate,
        contact,
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
      state.preferences = preferences;
      state.municipality = municipality;
      state.birthDate = birthDate;
      state.contact = contact;

      const activeRole = localStorage.getItem('auth_active_role') as AppRole;
      const includesRole = roles.find(({ name }) => name === activeRole);
      if (!includesRole) {
        state.activeRole = roles[0];
        localStorage.setItem('auth_active_role', roles[0].name);
      } else {
        state.activeRole = roles.find(({ name }) => name === activeRole);
      }
    },
    logoutUser: () => {
      return initialState;
    },
    changeActiveRole: (state, action: PayloadAction<Role>) => {
      state.activeRole = action.payload;
      localStorage.setItem('auth_active_role', action.payload.name);
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
