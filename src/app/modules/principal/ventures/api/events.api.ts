import axios from 'axios';
import { VentureEvent } from 'echadospalante-domain';

import { EventFilter } from '../../../../config/redux/reducers/principal/events.reducer';

export default class VenturesApi {
  private static readonly BASE_URL = `${
    import.meta.env.VITE_API_URL
  }/api/v1/ventures`;

  public static async fetchHighlightedEvents(
      filters: EventFilter,
    ): Promise<{ current: VentureEvent[]; upcoming: VentureEvent[] }> {
      const { categoriesIds, search, /* dateRange */ } = filters;
      const params = new URLSearchParams();
      search && params.set('search', search);
      categoriesIds &&
        categoriesIds.length > 0 &&
        params.set('categoriesIds', categoriesIds.join(','));
      // dateRange && dateRange.from && params.set('from', dateRange.from);
      // dateRange && dateRange.to && params.set('to', dateRange.to);
  
      return axios
        .get<{ current: VentureEvent[]; upcoming: VentureEvent[] }>(
          `${VenturesApi.BASE_URL}/_/events/highlighted`,
          {
            withCredentials: true,
            params,
          },
        )
        .then(({ data }) => data);
    }
}
