import { Action, Dispatch } from "@reduxjs/toolkit";

import { Venture, VentureCreate } from "echadospalante-core";

import {
  addOwnedVenture,
  setOwnedVentures,
  updateOwnedVenture,
  OwnedVenturesFilter,
} from "../../../../../config/redux/reducers/admin/owned-ventures-management.reducer";
import {
  finishGlobalLoading,
  setGlobalAlert,
  SeverityLevel,
} from "../../../../../config/redux/reducers/shared/user-interface.reducer";
import { OwnedVenturesApi } from "../http/owned-ventures-management.api";

export const updateOwnedVentureMiddleware = (
  id: string,
  ownedVenture: Venture
) => {
  return async (dispatch: Dispatch) => {
    return OwnedVenturesApi.updateOwnedVenture(id, ownedVenture)
      .then(() => {
        dispatch(updateOwnedVenture(ownedVenture));
        dispatch(
          setGlobalAlert({
            title: "Emprendimiento actualizada",
            message: "El emprendimiento ha sido actualizado exitosamente.",
            timeout: 5000,
            severity: SeverityLevel.SUCCESS,
          })
        );
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            title: "Error",
            message:
              "Por favor intente nuevamente, si el error persiste contacte al administrador.",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al actualizar el emprendimiento");
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const createOwnedVentureMiddleware = (
  ownedVenture: VentureCreate
) => {
  return async (dispatch: Dispatch) => {
    return OwnedVenturesApi.createOwnedVenture(ownedVenture)
      .then(() => {
        dispatch(
          setGlobalAlert({
            title: "Emprendimiento creado",
            message: "La categoría ha sido creada exitosamente.",
            timeout: 5000,
            severity: SeverityLevel.SUCCESS,
          })
        );
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            title: "Error",
            message:
              "Por favor intente nuevamente, si el error persiste contacte al administrador.",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al crear el emprendimiento");
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const fetchOwnedVenturesMiddleware = (
  ownedVenturesFilters: OwnedVenturesFilter
) => {
  return async (dispatch: Dispatch<Action>) => {
    return OwnedVenturesApi.fetchOwnedVentures(ownedVenturesFilters)
      .then((response) => {
        dispatch(setOwnedVentures(response));
        return response;
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al obtener la lista de categorías ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al obtener la lista de categorías");
      });
  };
};
