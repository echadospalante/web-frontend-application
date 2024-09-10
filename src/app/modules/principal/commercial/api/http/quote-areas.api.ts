import axios from "axios";

import env from "../../../../../../environment/environment";
import { AreaSummary, QuoteArea } from "../../domain/area";
import { ApiResponse, PaginatedBody } from "../../domain/api";

export class QuoteAreasApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1`;

  public static fetchQuoteAreas(
    page: number,
    size: number
  ): Promise<PaginatedBody<QuoteArea>> {
    return axios
      .get<ApiResponse<PaginatedBody<QuoteArea>>>(
        `${QuoteAreasApi.API_BASE_URL}/cotizaciones/areas`,
        {
          params: { pagina: page, cantidad: size },
        }
        //{ withCredentials: true }
      )
      .then(({ data }) => data.message);
  }

  static fetchQuoteAreaSummary(areaId: number) {
    return axios
      .get<ApiResponse<AreaSummary[]>>(
        `${QuoteAreasApi.API_BASE_URL}/admin/cotizaciones/areas/resumen/${areaId}`
        //{ withCredentials: true }
      )
      .then(({ data }) => data.message);
  }

  public static createQuoteArea(area: QuoteArea) {
    return axios
      .post<void>(
        `${QuoteAreasApi.API_BASE_URL}/admin/cotizaciones/areas`,
        { ...area },
        { withCredentials: true }
      )
      .then((response) => response.data);
  }

  public static fetchQuoteAlreadyExists(name: string): Promise<boolean> {
    return axios
      .get<ApiResponse<{ exists: boolean }>>(
        `${QuoteAreasApi.API_BASE_URL}/admin/cotizaciones/areas/exists/name/${name}`
        //{ withCredentials: true }
      )
      .then(({ data }) => data.message.exists);
  }
}
