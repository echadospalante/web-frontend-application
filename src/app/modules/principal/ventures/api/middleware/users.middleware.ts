import { Action, Dispatch } from "@reduxjs/toolkit";

import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../../../config/redux/reducers/user-interface.reducer";
import { UsersApi } from "../http/users.api";

export const fetchUsersMiddleware = (page: number, size: number) => {
  return async (dispatch: Dispatch<Action>) => {
    return UsersApi.fetchUsers(page, size)
      .then((response) => {
        console.log({ response });
        return response;
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al obtener la lista de usuarios ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al obtener la lista de usuarios");
      });
  };
};

export const lockUserAccountMiddleware = (userId: string) => {
  return async (dispatch: Dispatch<Action>): Promise<void> => {
    return UsersApi.lockUserAccount(userId)
      .then(() => {
        dispatch(
          setGlobalAlert({
            message: "Usuario desbloqueado correctamente ✅",
            title: "Operación exitosa",
            timeout: 5000,
            severity: SeverityLevel.SUCCESS,
          })
        );
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al bloquear el usuario ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al bloquear el usuario");
      });
  };
};

export const unlockUserAccountMiddleware = (userId: string) => {
  return async (dispatch: Dispatch<Action>): Promise<void> => {
    return UsersApi.unlockUserAccount(userId)
      .then(() => {
        dispatch(
          setGlobalAlert({
            message: "Usuario desbloqueado correctamente ✅",
            title: "Operación exitosa",
            timeout: 5000,
            severity: SeverityLevel.SUCCESS,
          })
        );
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al desbloquear el usuario ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al desbloquear el usuario");
      });
  };
};
