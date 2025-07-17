import { UserContact } from 'echadospalante-domain';

import env from '../../../../../../environment/environment';
import axios from 'axios';

export interface UserUsageStatistics {
  venturesCount: number;
  publicationsCount: number;
  eventsCount: number;
  subscriptionsCount: number;
  generalSubscribersCount: number;
  donationsGivenCount: number;
  donationsReceivedCount: number;
  sponsorshipsGivenCount: number;
  sponsorshipsReceivedCount: number;
  commentsAndReactionsCount: string;
}

export default class UserProfileInfoApi {
  private static readonly BASE_URL = `${env.API_URL}/api/v1/users`;

  public static fetchUserContactInfo(): Promise<UserContact> {
    // return axios
    //   .get<UserContact>(`${this.BASE_URL}/contact`, { withCredentials: true })
    //   .then(({ data }) => data);

    const res: UserContact = {
      id: '123',
      phoneNumber: '3122555362',
      address: 'Carrera 20 # 10-20, La Ceja, Ant',
      facebookUrl: 'https://www.facebook.com/test',
      linkedinUrl: 'https://www.linkedin.com/in/test',
      twitterUrl: 'https://twitter.com/test',
      instagramUrl: 'https://www.instagram.com/test',
      updatedAt: new Date(),
      createdAt: new Date(),
    };

    return Promise.resolve(res);
  }

  public static fetchUserUsageStatistics(): Promise<UserUsageStatistics> {
    return axios.get<UserUsageStatistics>(
      `${this.BASE_URL}/usage/statistics`,
      { withCredentials: true },
    ).then(({ data }) => data);
  }
}
