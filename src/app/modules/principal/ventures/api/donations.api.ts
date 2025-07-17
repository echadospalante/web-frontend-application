import axios from 'axios';
import { EventDonation, PaginatedBody, Pagination } from 'echadospalante-domain';

export default class DonationsApi {
  private static readonly BASE_URL = `${
    import.meta.env.VITE_API_URL
  }/api/v1/events`;

  public static async createDonation(
    eventId: string,
    amount: number,
  ): Promise<EventDonation> {
    return axios
      .post<EventDonation>(
        `${this.BASE_URL}/${eventId}/donations`,
        { amount },
        { withCredentials: true },
      )
      .then(({ data }) => data);
  }

  public static async getEventDonations(
    eventId: string,
    pagination: Pagination,
  ): Promise<PaginatedBody<EventDonation>> {
    return axios
      .get<PaginatedBody<EventDonation>>(
        `${this.BASE_URL}/${eventId}/donations`,
        {
          params: pagination,
          withCredentials: true,
        },
      )
      .then(({ data }) => data);
  }
}
