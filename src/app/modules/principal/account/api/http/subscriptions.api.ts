import axios from "axios";

import { SubscriptionStats } from "../../domain/subscription";
import env from "../../../../../../environment/environment";

export class SubscriptionsApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures`;

  public static fetchSubscriptionStats(): Promise<SubscriptionStats[]> {
    return axios.get<SubscriptionStats[]>(
      `${SubscriptionsApi.API_BASE_URL}/owned/subscriptions/stats`,
      { withCredentials: true },
    ).then(({ data }) => data);
  }

  public static deleteSubscription(
    subscriptionId: string,
  ): Promise<void> {
    return axios.delete<void>(
      `${SubscriptionsApi.API_BASE_URL}/owned/subscriptions/${subscriptionId}`,
      { withCredentials: true },
    ).then(({ data }) => data);
    
  }
}