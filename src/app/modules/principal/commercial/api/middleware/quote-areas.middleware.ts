import { Action, Dispatch } from "@reduxjs/toolkit";

import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../../../config/redux/reducers/user-interface.reducer";
import { QuoteArea } from "../../domain/area";
import { QuoteAreasApi } from "../http/quote-areas.api";

export const fetchQuoteAreasMiddleware = (page: number, size: number) => {
  return async (dispatch: Dispatch<Action>) => {
    return QuoteAreasApi.fetchQuoteAreas(page, size)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al obtener las áreas de cotizaciones ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al obtener las areas de cotizaciones");
      });
  };
};

export const getQuoteAlreadyExistsMiddleware = (name: string) => {
  return async (dispatch: Dispatch<Action>) => {
    return QuoteAreasApi.fetchQuoteAlreadyExists(name)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message:
              "Error al consultar si el area de cotizaciones ya existe ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error(
          "Error al consultar si el area de cotizaciones ya existe"
        );
      });
  };
};

export const fetchAreaSummariesMiddleware = (areaId: number) => {
  return async (dispatch: Dispatch<Action>) => {
    return QuoteAreasApi.fetchQuoteAreaSummary(areaId)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al obtener las áreas de cotizaciones ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al obtener las areas de cotizaciones");
      });
  };
};

export const createQuoteAreaMiddleware = (quoteArea: QuoteArea) => {
  return async (dispatch: Dispatch<Action>): Promise<void> => {
    return QuoteAreasApi.createQuoteArea(quoteArea)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al crear el area de cotizaciones ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al crear el area de cotizaciones");
      });
  };
};
