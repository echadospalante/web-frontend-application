import { Action, Dispatch } from "@reduxjs/toolkit";

import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../../../config/redux/reducers/user-interface.reducer";
import { QuoteAdvisorsApi } from "../http/quote-advisors.api";
import { QuoteAdvisor } from "../../domain/advisor";

export const fetchQuoteAdvisorsMiddleware = (page: number, size: number) => {
  return async (dispatch: Dispatch<Action>) => {
    return QuoteAdvisorsApi.fetchQuoteAdvisors(page, size)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al obtener los asesores de cotizaciones ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al obtener los asesores de cotizaciones");
      });
  };
};

export const createQuoteAdvisorMiddleware = (quoteAdvisor: QuoteAdvisor) => {
  return async (dispatch: Dispatch<Action>): Promise<void> => {
    return QuoteAdvisorsApi.createQuoteAdvisor(quoteAdvisor)
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al crear el asesor de cotizaciones ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al crear el asesor de cotizaciones");
      });
  };
};
