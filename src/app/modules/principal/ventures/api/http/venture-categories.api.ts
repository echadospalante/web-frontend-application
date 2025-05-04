import axios from "axios";
import { VentureCategory } from "echadospalante-core";

export default class VentureCategoriesApi {
  private static readonly BASE_URL = `${import.meta.env.VITE_API_URL}/api/v1/ventures/categories`;

  public static async getVentureCategories() {
   await new Promise((resolve) => setTimeout(resolve, 3000));
    return axios
      .get<{
        items: VentureCategory[];
        total: number;
      }>(`${this.BASE_URL}`, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }
}