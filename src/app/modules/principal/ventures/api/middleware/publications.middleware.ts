import { Action, Dispatch } from "@reduxjs/toolkit";

import { VenturePublication } from "echadospalante-core";
import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../../../config/redux/reducers/shared/user-interface.reducer";
import { PaginatedBody } from "../../domain/api";
import { PublicationsApi } from "../http/publications.api";

export const fetchPublicationsMiddleware = (page: number, size: number) => {
  return async (
    dispatch: Dispatch<Action>
  ): Promise<PaginatedBody<VenturePublication>> => {
    return PublicationsApi.fetchPublications(page, size)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al obtener las cotizaciones ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al obtener las cotizaciones");
      });
  };
};

export const deletePublicationMiddleware = (id: string) => {
  return async (dispatch: Dispatch<Action>): Promise<void> => {
    return PublicationsApi.deletePublication(id)
      .then(() => {
        dispatch(
          setGlobalAlert({
            message: "Cotización eliminada correctamente ✅",
            title: "Éxito",
            timeout: 5000,
            severity: SeverityLevel.SUCCESS,
          })
        );
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al eliminar la cotización ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al eliminar la cotización");
      });
  };
};

export const fetchPublicationDetailMiddleware = (id: string) => {
  return async (dispatch: Dispatch<Action>): Promise<VenturePublication> => {
    return PublicationsApi.fetchPublicationDetail(id)
      .then((publication) => publication)
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al obtener el detalle de la cotización ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al obtener el detalle de la cotización");
      });
  };
};
