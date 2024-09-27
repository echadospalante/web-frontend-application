import { Action, Dispatch } from "@reduxjs/toolkit";

import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../../../config/redux/reducers/shared/user-interface.reducer";
import { QuotesApi } from "../http/quotes.api";
import { Quote } from "../../domain/quote";
import { PaginatedBody } from "../../domain/api";

export const fetchQuotesMiddleware = (page: number, size: number) => {
  return async (dispatch: Dispatch<Action>): Promise<PaginatedBody<Quote>> => {
    return QuotesApi.fetchQuotes(page, size)
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

export const deleteQuoteMiddleware = (id: string) => {
  return async (dispatch: Dispatch<Action>): Promise<void> => {
    return QuotesApi.deleteQuote(id)
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

export const fetchQuoteDetailMiddleware = (id: string) => {
  return async (dispatch: Dispatch<Action>): Promise<Quote> => {
    return QuotesApi.fetchQuoteDetail(id)
      .then((quote) => quote)
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
