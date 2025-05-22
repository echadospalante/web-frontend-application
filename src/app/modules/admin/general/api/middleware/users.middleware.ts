import { Action, Dispatch } from "@reduxjs/toolkit";
import { Role } from "echadospalante-domain";

import {
  finishGlobalLoading,
  setGlobalAlert,
  SeverityLevel,
} from "../../../../../config/redux/reducers/shared/user-interface.reducer";
import { AppRole } from "../../../../auth/domain/Role";
import { UsersApi } from "../http/users-management.api";
import AuthenticationApi from "../../../../auth/api/http/authentication.api";

export const updateUserRolesMiddleware = (email: string, roles: AppRole[]) => {
  return async (dispatch: Dispatch) => {
    return UsersApi.changeUserRoles(email, roles)
      .then(() => {
        dispatch(
          setGlobalAlert({
            title: "Roles actualizados",
            message:
              "Los roles del usuario han sido actualizados correctamente.",
            timeout: 5000,
            severity: SeverityLevel.SUCCESS,
          })
        );
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            title: "Error al actualizar roles",
            message:
              "Por favor intente nuevamente, si el error persiste contacte al administrador.",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error en la actualización de roles");
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const lockUserAccountMiddleware = (email: string) => {
  return async (dispatch: Dispatch<Action>): Promise<void> => {
    return UsersApi.lockUserAccount(email)
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

export const unlockUserAccountMiddleware = (email: string) => {
  return async (dispatch: Dispatch<Action>): Promise<void> => {
    return UsersApi.unlockUserAccount(email)
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

export const verifyUserAccountMiddleware = (email: string) => {
  return async (dispatch: Dispatch<Action>) => {
    return UsersApi.verifyUserAccount(email)
      .then(() => {
        dispatch(
          setGlobalAlert({
            message: "Usuario verificado correctamente ✅",
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
            message: "Error al verificar el usuario ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al verificar el usuario");
      });
  };
};

export const unverifyUserAccountMiddleware = (email: string) => {
  return async (dispatch: Dispatch<Action>) => {
    return UsersApi.unverifyUserAccount(email)
      .then(() => {
        dispatch(
          setGlobalAlert({
            message: "Usuario desverificado correctamente ✅",
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
            message: "Error al desverificar el usuario ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al desverificar el usuario");
      });
  };
};

export const fetchRolesMiddleware = () => {
  return async (dispatch: Dispatch<Action>): Promise<Role[]> => {
    return AuthenticationApi.fetchAllRoles()
      .then((response) => response)
      .catch((error) => {
        dispatch(
          setGlobalAlert({
            title: "Error al obtener roles",
            message:
              "Por favor intente nuevamente, si el error persiste contacte al administrador.",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        console.error(error);
        throw new Error("Error al obtener roles");
      });
  };
};
