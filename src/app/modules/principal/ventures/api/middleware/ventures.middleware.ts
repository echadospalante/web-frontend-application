import { Action, Dispatch } from "@reduxjs/toolkit";

import {
  setVentures,
  VentureFilter,
} from "../../../../../config/redux/reducers/principal/ventures.reducer";
import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../../../config/redux/reducers/shared/user-interface.reducer";
import { VenturesApi } from "../http/ventures.api";

export const fetchVenturesMiddleware = (ventureFilter: VentureFilter) => {
  return async (dispatch: Dispatch<Action>) => {
    return VenturesApi.fetchVentures(ventureFilter)
      .then((response) => {
        dispatch(setVentures(response));
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al obtener la lista de emprendimientos ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al obtener la lista de emprendimientos");
      });
  };
};

export const fetchVentureDetailMiddleware = (slug: string) => {
  return async (dispatch: Dispatch<Action>) => {
    return VenturesApi.fetchVentureDetailBySlug(slug)
      .then((detail) => {
        return detail;
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: "Error al obtener la lista de emprendimientos ⛔",
            title: "Error",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        throw new Error("Error al obtener la lista de emprendimientos");
      });
  };
};
