import axios from 'axios';
import { VentureCategory } from 'echadospalante-domain';
import { PaginatedBody } from 'echadospalante-domain';

export default class VentureCategoriesApi {
  private static readonly BASE_URL = `${
    import.meta.env.VITE_API_URL
  }/api/v1/ventures/categories`;

  public static async getVentureCategories() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return axios
      .get<PaginatedBody<VentureCategory>>(`${this.BASE_URL}/all`, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }
}
