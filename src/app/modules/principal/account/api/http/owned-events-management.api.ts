import axios from 'axios';

import { EventCreate, VentureEvent } from 'echadospalante-domain';

import env from '../../../../../../environment/environment';

export class OwnedEventsApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures`;

  public static createEvent(
    ventureId: string,
    event: EventCreate,
  ): Promise<VentureEvent> {
    return axios
      .post<VentureEvent>(
        `${OwnedEventsApi.API_BASE_URL}/${ventureId}/events`,
        event,
        { withCredentials: true },
      )
      .then(({ data }) => data);
  }
}
