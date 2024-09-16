import { Action, Dispatch } from "@reduxjs/toolkit";

import { loginUser } from "../../../../config/redux/reducers/auth.reducer";
import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "../../../../config/redux/reducers/user-interface.reducer";
import AuthenticationApi from "../http/authentication.api";

export const refreshAuthOnReloadMiddleware = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(
      startGlobalLoading({
        message: "Estamos verificando tu sesión",
        iconPath: "/images/icons/loading/loading-secure.svg",
      })
    );

    return AuthenticationApi.refreshAuth()
      .then((response) => {
        dispatch(
          loginUser({
            ...response,
          })
        );
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const loginWithCredentialsMiddleware = (oauth2Token: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(
      startGlobalLoading({
        message: "Iniciando sesión...",
        iconPath: "/images/icons/loading/loading-secure.svg",
      })
    );
    return AuthenticationApi.loginUser(oauth2Token)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            title: "Error en login",
            message:
              "Por favor intente nuevamente, si el error persiste contacte al administrador.",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error en login");
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};
