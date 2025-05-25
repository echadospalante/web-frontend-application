import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import UsersManagementReducer, {
  UsersManagementState,
} from "../reducers/admin/users-management.reducer";
import ventureCategoriesManagementReducer, {
  VentureCategoriesManagementState,
} from "../reducers/admin/venture-categories-management.reducer";
import ventureEventsManagementReducer, {
  VentureEventsManagementState,
} from "../reducers/admin/venture-events-management.reducer";
import venturePublicationsManagementReducer, {
  VenturePublicationsManagementState,
} from "../reducers/admin/venture-publications-management.reducer";
import ventureSponsorshipsManagementReducer, {
  VentureSponsorshipsManagementState,
} from "../reducers/admin/venture-sponsorships-management.reducer";
import authenticationReducer, {
  AuthenticationState,
} from "../reducers/auth/auth.reducer";
import registerReducer, {
  RegisterState,
} from "../reducers/auth/register.reducer";
import venturesReducer, {
  VenturesState,
} from "../reducers/principal/ventures.reducer";
import layoutReducer, { LayoutState } from "../reducers/shared/layout.reducer";
import userInterfaceReducer, {
  UserInterfaceState,
} from "../reducers/shared/user-interface.reducer";

export interface GlobalState {
  authentication: AuthenticationState;
  userInterface: UserInterfaceState;
  admin: {
    usersManagement: UsersManagementState;
    ventureCategoriesManagement: VentureCategoriesManagementState;
    venturePublicationsManagement: VenturePublicationsManagementState;
    ventureEventsManagement: VentureEventsManagementState;
    ventureSponsorshipsManagement: VentureSponsorshipsManagementState;
  };
  ventures: VenturesState;
  layout: LayoutState;
  register: RegisterState;
}

const reducer = combineReducers({
  authentication: authenticationReducer,
  userInterface: userInterfaceReducer,
  layout: layoutReducer,
  ventures: venturesReducer,
  register: registerReducer,
  admin: combineReducers({
    usersManagement: UsersManagementReducer,
    ventureCategoriesManagement: ventureCategoriesManagementReducer,
    venturePublicationsManagement: venturePublicationsManagementReducer,
    ventureSponsorshipsManagement: ventureSponsorshipsManagementReducer,
    ventureEventsManagement: ventureEventsManagementReducer,
  }),
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused
