import axios from 'axios';

import { VentureCategory, VentureCategoryCreate } from 'echadospalante-domain';
import { PaginatedBody } from 'echadospalante-domain/dist/app/modules/domain/common/pagination';

import env from '../../../../../../environment/environment';

export class VentureCategoriesApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures/categories`;

  public static fetchVentureCategories(): Promise<
    PaginatedBody<VentureCategory>
  > {
    return axios
      .get<PaginatedBody<VentureCategory>>(
        `${VentureCategoriesApi.API_BASE_URL}`,
        {
          withCredentials: true,
        },
      )
      .then(({ data }) => data);
  }

  public static updateVentureCategory(
    id: string,
    category: VentureCategory,
  ): Promise<void> {
    console.log({ id, category });
    throw new Error('Method not implemented.');
  }

  public static createVentureCategory(
    category: VentureCategoryCreate,
  ): Promise<void> {
    console.log({ category });
    throw new Error('Method not implemented.');
  }
}
