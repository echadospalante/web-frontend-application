import axios from 'axios';

import { VentureCategory, VentureCategoryCreate } from 'echadospalante-domain';
import { PaginatedBody } from 'echadospalante-domain/dist/app/modules/domain/common/pagination';

import env from '../../../../../../environment/environment';
import { VentureCategoriesFilter } from '../../../../../config/redux/reducers/admin/venture-categories-management.reducer';
import filterFalsyValues from '../../../../../shared/helpers/object-utils';

export class VentureCategoriesApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures/categories`;

  public static fetchVentureCategories(
    ventureCategoriesFilter: VentureCategoriesFilter,
  ): Promise<PaginatedBody<VentureCategory>> {
    const { page, size, ...rest } = ventureCategoriesFilter;
    const otherPrams = filterFalsyValues(rest);
    const params = new URLSearchParams(otherPrams as Record<string, string>);
    params.set('page', page.toString());
    params.set('size', size.toString());
    return axios
      .get<PaginatedBody<VentureCategory>>(
        `${VentureCategoriesApi.API_BASE_URL}`,
        {
          withCredentials: true,
          params,
        },
      )
      .then(({ data }) => data);
    // return Promise.resolve({
    //   items: [
    //     {
    //       id: "1",
    //       name: "Category 1",
    //       description:
    //         "Category 1 description lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //       ventures: [],
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       slug: "category-1",
    //       users: [],
    //     },
    //     {
    //       id: "2",
    //       name: "Category 1",
    //       description:
    //         "Category 1 description lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //       ventures: [],
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       slug: "category-1",
    //       users: [],
    //     },
    //     {
    //       id: "3",
    //       name: "Category 1",
    //       description:
    //         "Category 1 description lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //       ventures: [],
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       slug: "category-1",
    //       users: [],
    //     },
    //     {
    //       id: "4",
    //       name: "Category 1",
    //       description:
    //         "Category 1 description lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //       ventures: [],
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       slug: "category-1",
    //       users: [],
    //     },
    //     {
    //       id: "5",
    //       name: "Category 1",
    //       description:
    //         "Category 1 description lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //       ventures: [],
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       slug: "category-1",
    //       users: [],
    //     },
    //   ],
    //   total: 10,
    // });
  }

  public static updateVentureCategory(
    id: string,
    category: VentureCategory,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public static createVentureCategory(
    category: VentureCategoryCreate,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
