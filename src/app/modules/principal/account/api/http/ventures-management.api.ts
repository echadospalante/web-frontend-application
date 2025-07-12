import { PaginatedBody, VentureEvent } from 'echadospalante-domain';
import env from '../../../../../../environment/environment';
import axios from 'axios';

export class VentureEventsApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures`;

  public static async getVentureEvents(
    ventureId: string,
  ): Promise<PaginatedBody<VentureEvent>> {
    return axios
      .get<
        PaginatedBody<VentureEvent>
      >(`${VentureEventsApi.API_BASE_URL}/${ventureId}/events`, { withCredentials: true })
      .then(({ data }) => data);
  }
}
