import axios from 'axios';
import { PaginatedBody, VentureEvent } from 'echadospalante-domain';

import { EventFilter } from '../../../../config/redux/reducers/principal/events.reducer';

export default class EventsApi {
  private static readonly BASE_URL = `${
    import.meta.env.VITE_API_URL
  }/api/v1/ventures`;

  public static async fetchHighlightedEvents(
    filters: EventFilter,
  ): Promise<{ current: VentureEvent[]; upcoming: VentureEvent[] }> {
    const { categoriesIds, search /* dateRange */ } = filters;
    const params = new URLSearchParams();
    search && params.set('search', search);
    categoriesIds &&
      categoriesIds.length > 0 &&
      params.set('categoriesIds', categoriesIds.join(','));
    // dateRange && dateRange.from && params.set('from', dateRange.from);
    // dateRange && dateRange.to && params.set('to', dateRange.to);

    return axios
      .get<{ current: VentureEvent[]; upcoming: VentureEvent[] }>(
        `${EventsApi.BASE_URL}/_/events/highlighted`,
        {
          withCredentials: true,
          params,
        },
      )
      .then(({ data }) => data);
  }

  public static searchEvents(ventureId: string, filters: EventFilter) {
    const { search, categoriesIds, municipalitiesIds, dateRange } = filters;
    const params = new URLSearchParams();
    search && params.set('search', search);
    categoriesIds &&
      categoriesIds.length > 0 &&
      params.set('categoriesIds', categoriesIds.join(','));
    municipalitiesIds &&
      municipalitiesIds.length === 1 &&
      params.set('municipalityId', `${municipalitiesIds[0]}`);
    dateRange &&
      dateRange.from &&
      params.set('from', dateRange.from.toISOString());
    dateRange && dateRange.to && params.set('to', dateRange.to.toISOString());
    params.set('skip', filters.pagination.skip.toString());
    params.set('take', filters.pagination.take.toString());

    return axios
      .get<PaginatedBody<VentureEvent>>(
        `${EventsApi.BASE_URL}/${ventureId}/events`,
        {
          withCredentials: true,
          params,
        },
      )
      .then(({ data }) => data);
  }
}
