import {
  ContentType,
  PublicationType,
  VenturePublication,
} from 'echadospalante-domain';
import { faker } from '@faker-js/faker';

import env from '../../../../../../environment/environment';
import { VenturePublicationsFilter } from '../../../../../config/redux/reducers/admin/venture-publications-management.reducer';
import { PaginatedBody } from 'echadospalante-domain/dist/app/modules/domain/common/pagination';

export class VenturePublicationsApi {
  // private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures/publications`;

  public static fetchVenturePublications(
    venturePublicationsFilter: VenturePublicationsFilter,
  ): Promise<PaginatedBody<VenturePublication>> {
    console.log('venturePublicationsFilter', venturePublicationsFilter);
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
    length: number,
  ): VenturePublication[] {
    console.log(length);
    return [];
  }
}
