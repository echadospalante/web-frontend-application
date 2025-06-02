import axios from 'axios';

import {
  PublicationCategory
} from 'echadospalante-domain';
import { PaginatedBody } from 'echadospalante-domain/dist/app/modules/domain/common/pagination';

import env from '../../../../../../environment/environment';

export class PublicationCategoriesApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/publications/categories`;

  public static fetchPublicationCategories(): Promise<
    PaginatedBody<PublicationCategory>
  > {
    return axios
      .get<PaginatedBody<PublicationCategory>>(
        `${PublicationCategoriesApi.API_BASE_URL}`,
        {
          withCredentials: true,
        },
      )
      .then(({ data }) => data);
  }
}
