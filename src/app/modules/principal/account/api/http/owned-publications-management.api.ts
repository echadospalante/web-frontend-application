import axios from 'axios';

import {VenturePublication} from "echadospalante-domain"

import env from '../../../../../../environment/environment';
import { PublicationCreate } from '../../hooks/usePublicationCreate';

export class OwnedPublicationsApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures`;

  public static createPublication(
    ventureId: string,
    publication: PublicationCreate,
  ): Promise<VenturePublication> {
    return axios
      .post<VenturePublication>(
        `${OwnedPublicationsApi.API_BASE_URL}/${ventureId}/publications`,
        publication,
        { withCredentials: true },
      )
      .then(({ data }) => data);
  }
}
