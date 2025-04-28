import { Action, Dispatch } from "@reduxjs/toolkit";

import {
  setVentureEvents,
  VentureEventsFilter,
} from "../../../../../config/redux/reducers/admin/venture-events-management.reducer";
import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../../../config/redux/reducers/shared/user-interface.reducer";
import { VentureEventsApi } from "../http/venture-events-management.api";

export const fetchVentureEventsMiddleware = (
  ventureEventsFilters: VentureEventsFilter
) => {
  return async (dispatch: Dispatch<Action>) => {
    return VentureEventsApi.fetchVentureEvents(ventureEventsFilters)
      .then((response) => {
        dispatch(setVentureEvents(response));
        return response;
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al obtener la lista de eventos ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al obtener la lista de eventos");
      });
  };
};
