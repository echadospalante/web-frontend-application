import axios from "axios";

import env from "../../../../../../environment/environment";
import { QuoteAdvisor } from "../../domain/advisor";
import { ApiResponse, PaginatedBody } from "../../domain/api";

export class QuoteAdvisorsApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/admin/cotizaciones/asesores`;

  public static fetchQuoteAdvisors(
    page: number,
    size: number
  ): Promise<PaginatedBody<QuoteAdvisor>> {
    return axios
      .get<ApiResponse<PaginatedBody<QuoteAdvisor>>>(
        `${QuoteAdvisorsApi.API_BASE_URL}?pagina=${page}&cantidad=${size}`,
        { withCredentials: true }
      )
      .then(({ data }) => data.message);
  }

  public static createQuoteAdvisor(quoteAdvisor: QuoteAdvisor): Promise<void> {
    return axios
      .post<void>(
        `${QuoteAdvisorsApi.API_BASE_URL}`,
        { ...quoteAdvisor }
        //{ withCredentials: true }
      )
      .then(({ data }) => data);
  }
}
