import { Venture } from "echadospalante-core";

import env from "../../../../../../environment/environment";
import { VentureFilter } from "../../../../../config/redux/reducers/principal/ventures.reducer";
import axios from "axios";

export class VenturesApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures`;

  public static fetchVentureDetailBySlug(slug: string) {
    return axios
      .get<Venture>(`${VenturesApi.API_BASE_URL}/slug/${slug}`, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }

  public static async fetchVentures(
    filters: VentureFilter
  ): Promise<Venture[]> {
    const params = new URLSearchParams();
    // params.set("pagina", "0");
    // params.set("cantidad", "20");
    // filters.search && params.set("busqueda", filters.search);
    // filters.department && params.set("departamento", filters.department);
    // const slugs = filters.categoriesSlugs.join(",");
    // slugs && params.set("categorias", slugs);
    // return axios
    //   .get<ApiResponse<PaginatedBody<VenturePublication>>>(
    //     `${VenturesApi.API_BASE_URL}`,

    //     { params, withCredentials: true }
    //   )
    //   .then(({ data }) => data.message);
    await new Promise((resolve) => setTimeout(() => resolve(""), 1000));
    return Promise.resolve([
      {
        id: "123",
        name: "Empanadas Don Pepe",
        slug: "empanadas-don-pepe",
        coverPhoto:
          "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        description:
          "Empandas Don Pepe es un gran emprendimiento local, están todos cordialmente invitados a probar mis deliciosas empanadas.",
        active: true,
        verified: false,
        ownerDetail: undefined,
        categories: [
          {
            id: "123",
            name: "Empanadas",
            description: "Some awesome desc of the category",
            slug: "some-category",
            users: [],
            ventures: [],
          },
          {
            id: "456",
            name: "Fritos y pasabocas",
            description: "Some awesome desc of the category 2",
            slug: "some-category-2",
            users: [],
            ventures: [],
          },
        ],
        contact: undefined,
        location: {
          id: "location-123",
          description: "La Ceja, Antioquia",
          lat: 6.025275394547856,
          lng: -75.43107974837727,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        createdAt: new Date(),
      },
      {
        id: "456",
        name: "Cremas Doña Mariela",
        slug: "cremas-doña-mariela",
        coverPhoto:
          "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        description:
          "Cremas Doña Mariela es un emprendimiento de deliciosas cremas de pura fruta, ubicado en la Ceja, Antioquia, a la orden las cremas",
        active: true,
        verified: true,
        ownerDetail: undefined,
        categories: [
          {
            id: "123",
            name: "Cremas",
            description: "Some awesome desc of the category",
            slug: "some-category",
            users: [],
            ventures: [],
          },
          {
            id: "456",
            name: "Helados",
            description: "Some awesome desc of the category 2",
            slug: "some-category-2",
            users: [],
            ventures: [],
          },
        ],
        contact: undefined,
        location: {
          id: "location-123",
          description: "La Ceja, Antioquia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        createdAt: new Date(),
      },
    ]);
  }

  public static async deletePublication(id: string): Promise<void> {
    console.log({ id });
    return Promise.resolve();
  }

  public static async fetchVentureDetail(id: string): Promise<Venture> {
    // return axios
    //   .get<VenturePublication>(`${VenturesApi.API_BASE_URL}/${id}`)
    //   .then(({ data }) => data);
    throw new Error("Not implemented");
  }
}
