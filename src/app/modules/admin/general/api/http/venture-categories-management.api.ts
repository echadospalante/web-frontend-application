import axios from 'axios';

import { VentureCategory, VentureCategoryCreate } from 'echadospalante-domain';
import { PaginatedBody } from 'echadospalante-domain/dist/app/modules/domain/common/pagination';

import env from '../../../../../../environment/environment';

export interface VentureCategoriesStats {
  id: string;
  name: string;
  slug: string;
  venturesCount: number;
}

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

  public static fetchVentureCategoriesStats(): Promise<
    VentureCategoriesStats[]
  > {
    // return axios
    //   .get<
    //     VentureCategoriesStats[]
    //   >(`${VentureCategoriesApi.API_BASE_URL}/stats`, { withCredentials: true })
    //   .then(({ data }) => data);

    const res: VentureCategoriesStats[] = [
      {
        id: crypto.randomUUID(),
        name: 'Test Category 1',
        slug: 'test-category-1',
        venturesCount: 5,
      },
      {
        id: crypto.randomUUID(),
        name: 'Test Category 2',
        slug: 'test-category-2',
        venturesCount: 3,
      },
      {
        id: crypto.randomUUID(),
        name: 'Test Category 3',
        slug: 'test-category-3',
        venturesCount: 15,
      },
      {
        id: crypto.randomUUID(),
        name: 'Test Category 4',
        slug: 'test-category-4',
        venturesCount: 2,
      },
      {
        id: crypto.randomUUID(),
        name: 'Test Category 5',
        slug: 'test-category-5',
        venturesCount: 50,
      },
    ];

    return Promise.resolve(res);
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
