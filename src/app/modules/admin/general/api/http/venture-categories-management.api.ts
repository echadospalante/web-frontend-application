import axios from "axios";

import { VentureCategory, VentureCategoryCreate } from "echadospalante-core";

import env from "../../../../../../environment/environment";
import { VentureCategoriesFilter } from "../../../../../config/redux/reducers/admin/venture-categories-management.reducer";
import filterFalsyValues from "../../../../../shared/helpers/object-utils";
import { PaginatedBody } from "../../../../principal/ventures/domain/api";

export class VentureCategoriesApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures/categories`;

  public static fetchVentureCategories(
    ventureCategoriesFilter: VentureCategoriesFilter
  ): Promise<PaginatedBody<VentureCategory>> {
    const { page, size, ...rest } = ventureCategoriesFilter;
    const otherPrams = filterFalsyValues(rest);
    const params = new URLSearchParams(otherPrams as Record<string, string>);
    params.set("page", page.toString());
    params.set("size", size.toString());
    return axios
      .get<PaginatedBody<VentureCategory>>(
        `${VentureCategoriesApi.API_BASE_URL}`,
        {
          withCredentials: true,
          params,
        }
      )
      .then(({ data }) => data);
  }

  public static updateVentureCategory(
    id: string,
    category: VentureCategory
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public static createVentureCategory(
    category: VentureCategoryCreate
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
