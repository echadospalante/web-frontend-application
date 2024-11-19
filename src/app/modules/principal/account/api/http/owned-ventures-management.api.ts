import axios from "axios";

import { Venture, VentureCreate } from "echadospalante-core";

import env from "../../../../../../environment/environment";
import { OwnedVenturesFilter } from "../../../../../config/redux/reducers/principal/owned-ventures-management.reducer";
import filterFalsyValues from "../../../../../shared/helpers/object-utils";
import { PaginatedBody } from "../../../ventures/domain/api";

export class OwnedVenturesApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures/categories`;

  public static fetchOwnedVentures(
    ownedVenturesFilter: OwnedVenturesFilter
  ): Promise<PaginatedBody<Venture>> {
    const { page, size, ...rest } = ownedVenturesFilter;
    const otherPrams = filterFalsyValues(rest);
    const params = new URLSearchParams(otherPrams as Record<string, string>);
    params.set("page", page.toString());
    params.set("size", size.toString());
    return axios
      .get<PaginatedBody<Venture>>(`${OwnedVenturesApi.API_BASE_URL}`, {
        withCredentials: true,
        params,
      })
      .then(({ data }) => data);
  }

  public static updateOwnedVenture(
    id: string,
    category: Venture
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public static createOwnedVenture(category: VentureCreate): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
