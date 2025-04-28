import { Venture } from "echadospalante-core";

import axios from "axios";
import env from "../../../../../../environment/environment";
import { VentureFilter } from "../../../../../config/redux/reducers/principal/ventures.reducer";
import { PaginatedBody } from "../../domain/api";

export class VenturesApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures`;

  public static fetchVentureDetailBySlug(slug: string) {
    return axios
      .get<Venture>(`${VenturesApi.API_BASE_URL}/slug/${slug}`, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }

  public static async fetchVentures(
    filters: VentureFilter
  ): Promise<PaginatedBody<Venture>> {
    const params = new URLSearchParams();
    params.set("page", filters.page.toString());
    params.set("size", filters.size.toString());
    filters.search && params.set("search", filters.search);
    filters.department && params.set("departmentId", filters.department);
    const categoriesSlugs = filters.categoriesSlugs.join(",");
    categoriesSlugs.length > 0 &&
      params.set("categoriesSlugs", categoriesSlugs);

    return axios
      .get<PaginatedBody<Venture>>(
        `${VenturesApi.API_BASE_URL}`,

        { params, withCredentials: true }
      )
      .then(({ data }) => data);
  }

  public static async deletePublication(id: string): Promise<void> {
    console.log({ id });
    return Promise.resolve();
  }

  public static async fetchVentureDetail(id: string): Promise<Venture> {
    // return axios
    //   .get<VenturePublication>(`${VenturesApi.API_BASE_URL}/${id}`)
    //   .then(({ data }) => data);
    throw new Error("Not implemented");
  }
}
