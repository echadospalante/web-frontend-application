import { PublicationType, VenturePublication } from "echadospalante-core";
import { faker } from "@faker-js/faker";

import env from "../../../../../../environment/environment";
import { VenturePublicationsFilter } from "../../../../../config/redux/reducers/admin/venture-publications-management.reducer";
import { PaginatedBody } from "../../../../principal/ventures/domain/api";

export class VenturePublicationsApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures/publications`;

  public static fetchVenturePublications(
    venturePublicationsFilter: VenturePublicationsFilter
  ): Promise<PaginatedBody<VenturePublication>> {
    // const { page, size, ...rest } = venturePublicationsFilter;
    // const otherPrams = filterFalsyValues(rest);
    // const params = new URLSearchParams(otherPrams as Record<string, string>);
    // params.set("page", page.toString());
    // params.set("size", size.toString());
    // return axios
    //   .get<PaginatedBody<VenturePublication>>(
    //     `${VenturePublicationsApi.API_BASE_URL}`,
    //     {
    //       withCredentials: true,
    //       params,
    //     }
    //   )
    //   .then(({ data }) => data);
    return Promise.resolve({
      items: this.generateRandomPublications(20),
      total: 100,
    });
  }

  private static generateRandomPublications(
    length: number
  ): VenturePublication[] {
    const array = new Array(length).fill(null);

    return array.map(() => {
      return {
        id: crypto.randomUUID(),
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        type: this.randomEnumValue(),
        claps: [],
        comments: [],
        body: [],
        url: faker.internet.url(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      };
    });
  }

  private static randomEnumValue() {
    const values = Object.values(PublicationType);
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  }
}
