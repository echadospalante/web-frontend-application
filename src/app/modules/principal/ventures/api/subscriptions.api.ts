import axios from 'axios';
import { PaginatedBody, Pagination, User, VentureSubscription } from 'echadospalante-domain';


export default class SubscriptionsApi {
  private static readonly BASE_URL = `${
    import.meta.env.VITE_API_URL
  }/api/v1/ventures`;

  public static async createSubscription(
    ventureId: string,
  ): Promise<VentureSubscription> {
    return axios
      .post<VentureSubscription>(`${this.BASE_URL}/${ventureId}/subscriptions`, {}, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }

  public static async getSubscriptionStatus(ventureId: string) {
    return axios
      .get<{ subscribed: boolean }>(
        `${this.BASE_URL}/${ventureId}/subscription-status`,
        { withCredentials: true },
      )
      .then(({ data }) => data.subscribed);
  }
  
  public static async getSubscriptions(ventureId: string, pagination: Pagination) {
    return axios
      .get<PaginatedBody<User>>(
        `${this.BASE_URL}/${ventureId}/subscriptions`,
        { withCredentials: true, params: pagination },
      )
      .then(({ data }) => data);
  }

  public static deleteSubscription(
    ventureId: string,
  ): Promise<void> {
    return axios
      .delete(`${this.BASE_URL}/${ventureId}/subscriptions`, {
        withCredentials: true,
      })
      .then(() => {});
  }
}