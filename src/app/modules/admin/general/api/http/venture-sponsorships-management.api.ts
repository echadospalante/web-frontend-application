import { faker, th } from '@faker-js/faker';
import { User, VentureSponsorship } from 'echadospalante-domain';
import { PaginatedBody } from 'echadospalante-domain/dist/app/modules/domain/common/pagination';

import env from '../../../../../../environment/environment';
import { VentureSponsorshipsFilter } from '../../../../../config/redux/reducers/admin/venture-sponsorships-management.reducer';

export class VentureSponsorshipsApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures/sponsorships`;

  public static fetchVentureSponsorships(
    ventureSponsorshipsFilter: VentureSponsorshipsFilter,
  ): Promise<PaginatedBody<VentureSponsorship>> {
    console.log(
      'ventureSponsorshipsFilter',
      ventureSponsorshipsFilter,
      this.API_BASE_URL,
    );
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
    length: number,
  ): VentureSponsorship[] {
    console.log(length);
    return [];
  }

  public static fetchOwnerBySponsorshipId(
    sponsorshipId: string,
  ): Promise<User> {
    console.log('sponsorshipId', sponsorshipId);
    throw new Error('Method not implemented.');
  }
}
