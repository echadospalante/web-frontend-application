import { faker } from '@faker-js/faker';
import { VentureEvent } from 'echadospalante-domain';

import { PaginatedBody } from 'echadospalante-domain/dist/app/modules/domain/common/pagination';
import env from '../../../../../../environment/environment';
import { VentureEventsFilter } from '../../../../../config/redux/reducers/admin/venture-events-management.reducer';

export class VentureEventsApi {
  // private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures/events`;

  public static fetchVentureEvents(
    ventureEventsFilter: VentureEventsFilter,
  ): Promise<PaginatedBody<VentureEvent>> {
    console.log('ventureEventsFilter', ventureEventsFilter);
    // const { page, size, ...rest } = ventureEventsFilter;
    // const otherPrams = filterFalsyValues(rest);
    // const params = new URLSearchParams(otherPrams as Record<string, string>);
    // params.set("page", page.toString());
    // params.set("size", size.toString());
    // return axios
    //   .get<PaginatedBody<VentureEvent>>(
    //     `${VentureEventsApi.API_BASE_URL}`,
    //     {
    //       withCredentials: true,
    //       params,
    //     }
    //   )
    //   .then(({ data }) => data);
    return Promise.resolve({
      items: this.generateRandomEvents(20),
      total: 100,
    });
  }

  private static generateRandomEvents(length: number): VentureEvent[] {
    console.log(length);
    return [];
  }
}
