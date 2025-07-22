import axios from 'axios';
import { VentureSponsorship, PaginatedBody, Pagination } from 'echadospalante-domain';

export default class SponsorShipsApi {
  private static readonly BASE_URL = `${
    import.meta.env.VITE_API_URL
  }/api/v1/ventures`;

  public static async createSponsorship(
    ventureId: string,
    monthlyAmount: number,
  ): Promise<VentureSponsorship> {
    return axios
      .post<VentureSponsorship>(
        `${this.BASE_URL}/${ventureId}/sponsorships`,
        { monthlyAmount },
        { withCredentials: true },
      )
      .then(({ data }) => data);
  }

  public static async getVentureSponsors(
    ventureId: string,
    pagination: Pagination,
  ): Promise<PaginatedBody<VentureSponsorship>> {
    return axios
      .get<PaginatedBody<VentureSponsorship>>(
        `${this.BASE_URL}/${ventureId}/sponsorships`,
        {
          params: pagination,
          withCredentials: true,
        },
      )
      .then(({ data }) => data);
  }
}
