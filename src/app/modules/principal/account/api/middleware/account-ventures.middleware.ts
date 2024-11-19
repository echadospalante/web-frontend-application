import { Action, Dispatch } from "@reduxjs/toolkit";

import { VentureCreate } from "echadospalante-core";
import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../../../config/redux/reducers/shared/user-interface.reducer";
import OwnedVenturesApi from "../http/owned-ventures.api";

export const createVentureMiddleware = (ventureCreate: VentureCreate) => {
  return async (dispatch: Dispatch<Action>) => {
    return OwnedVenturesApi.createVenture(ventureCreate)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            title: "Error al crear el emprendimiento",
            message:
              "Por favor intente nuevamente, si el error persiste contacte al administrador.",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error en login");
      });
  };
};
