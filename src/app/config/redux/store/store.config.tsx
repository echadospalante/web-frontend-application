import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authenticationReducer, {
  AuthenticationState,
} from "../reducers/auth.reducer";
import layoutReducer, { LayoutState } from "../reducers/layout.reducer";
import quotesReducer, { QuotesState } from "../reducers/quotes.reducer";
import userInterfaceReducer, {
  UserInterfaceState,
} from "../reducers/user-interface.reducer";
import registerReducer, { RegisterState } from "../reducers/register.reducer";

export interface GlobalState {
  authentication: AuthenticationState;
  userInterface: UserInterfaceState;
  maps: QuotesState;
  layout: LayoutState;
  register: RegisterState;
}

const reducer = combineReducers({
  authentication: authenticationReducer,
  userInterface: userInterfaceReducer,
  layout: layoutReducer,
  quotes: quotesReducer,
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
