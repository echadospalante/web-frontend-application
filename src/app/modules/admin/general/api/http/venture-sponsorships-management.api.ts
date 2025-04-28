import { faker } from "@faker-js/faker";
import { ContentType, User, VentureSponsorship } from "echadospalante-core";

import env from "../../../../../../environment/environment";
import { VentureSponsorshipsFilter } from "../../../../../config/redux/reducers/admin/venture-sponsorships-management.reducer";
import { PaginatedBody } from "../../../../principal/ventures/domain/api";

export class VentureSponsorshipsApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures/sponsorships`;

  public static fetchVentureSponsorships(
    ventureSponsorshipsFilter: VentureSponsorshipsFilter
  ): Promise<PaginatedBody<VentureSponsorship>> {
    // const { page, size, ...rest } = ventureSponsorshipsFilter;
    // const otherPrams = filterFalsyValues(rest);
    // const params = new URLSearchParams(otherPrams as Record<string, string>);
    // params.set("page", page.toString());
    // params.set("size", size.toString());
    // return axios
    //   .get<PaginatedBody<VentureSponsorship>>(
    //     `${VentureSponsorshipsApi.API_BASE_URL}`,
    //     {
    //       withCredentials: true,
    //       params,
    //     }
    //   )
    //   .then(({ data }) => data);
    return Promise.resolve({
      items: this.generateRandomSponsorships(20),
      total: 100,
    });
  }

  private static generateRandomSponsorships(
    length: number
  ): VentureSponsorship[] {
    const array = new Array(length).fill(null);

    return array.map(() => {
      return {
        id: crypto.randomUUID(),
        createdAt: faker.date.recent(),
        monthlyAmount: Math.random() * 1000,
      };
    });
  }

  public static fetchOwnerBySponsorshipId(
    sponsorshipId: string
  ): Promise<User> {
    const user: User = {
      id: crypto.randomUUID(),
      picture: faker.image.avatar(),
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      active: true,
      verified: false,
      roles: [],
      preferences: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      onboardingCompleted: false,
    };
    return Promise.resolve(user);
  }
}
