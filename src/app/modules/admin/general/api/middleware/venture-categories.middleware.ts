import { Action, Dispatch } from "@reduxjs/toolkit";

import { VentureCategory, VentureCategoryCreate } from "echadospalante-domain";

import {
  addVentureCategory,
  setVentureCategories,
  updateVentureCategory,
  VentureCategoriesFilter,
} from "../../../../../config/redux/reducers/admin/venture-categories-management.reducer";
import {
  finishGlobalLoading,
  setGlobalAlert,
  SeverityLevel,
} from "../../../../../config/redux/reducers/shared/user-interface.reducer";
import { VentureCategoriesApi } from "../http/venture-categories-management.api";

export const updateVentureCategoryMiddleware = (
  id: string,
  ventureCategory: VentureCategory
) => {
  return async (dispatch: Dispatch) => {
    return VentureCategoriesApi.updateVentureCategory(id, ventureCategory)
      .then(() => {
        dispatch(updateVentureCategory(ventureCategory));
        dispatch(
          setGlobalAlert({
            title: "Categoria actualizada",
            message: "La categoría ha sido actualizada exitosamente.",
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
        throw new Error("Error al actualizar la categoría");
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const createVentureCategoryMiddleware = (
  ventureCategory: VentureCategoryCreate
) => {
  return async (dispatch: Dispatch) => {
    return VentureCategoriesApi.createVentureCategory(ventureCategory)
      .then(() => {
        dispatch(
          setGlobalAlert({
            title: "Categoria creada",
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
        throw new Error("Error al actualizar la categoría");
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const fetchVentureCategoriesMiddleware = (
  ventureCategoriesFilters: VentureCategoriesFilter
) => {
  return async (dispatch: Dispatch<Action>) => {
    return VentureCategoriesApi.fetchVentureCategories(ventureCategoriesFilters)
      .then((response) => {
        dispatch(setVentureCategories(response));
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

export const fetchAllVentureCategoriesMiddleware = (
) => {
  return async (dispatch: Dispatch<Action>) => {
    return VentureCategoriesApi.fetchVentureCategories({
      search: "",
      page: 0,
      size: -1
    })
      .then((response) => response.items)
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
