import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authenticationReducer, {
  AuthenticationState,
} from "../reducers/auth/auth.reducer";
import layoutReducer, { LayoutState } from "../reducers/shared/layout.reducer";
import venturesReducer, {
  VenturesState,
} from "../reducers/principal/ventures.reducer";
import userInterfaceReducer, {
  UserInterfaceState,
} from "../reducers/shared/user-interface.reducer";
import registerReducer, {
  RegisterState,
} from "../reducers/auth/register.reducer";

export interface GlobalState {
  authentication: AuthenticationState;
  userInterface: UserInterfaceState;
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
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused
