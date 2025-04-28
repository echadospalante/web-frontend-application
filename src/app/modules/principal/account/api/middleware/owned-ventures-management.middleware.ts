import { Action, Dispatch } from "@reduxjs/toolkit";

import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../../../config/redux/reducers/shared/user-interface.reducer";
import OwnedVenturesApi from "../http/owned-ventures.api";

export const deleteVentureMiddleware = (ventureId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    return OwnedVenturesApi.deleteVenture(ventureId)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            title: "Error al eliminar emprendimiento",
            message:
              "Por favor intente nuevamente, si el error persiste contacte al administrador.",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al eliminar emprendimiento");
      });
  };
};
