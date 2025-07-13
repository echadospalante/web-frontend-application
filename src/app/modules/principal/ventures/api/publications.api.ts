import axios from 'axios';
import {
  PaginatedBody,
  Venture,
  VenturePublication,
} from 'echadospalante-domain';

import { PublicationFilter } from '../../../../config/redux/reducers/principal/publications.reducer';
import { tr } from '@faker-js/faker';

export default class PublicationsApi {
  private static readonly BASE_URL = `${
    import.meta.env.VITE_API_URL
  }/api/v1/ventures`;

  public static async getPublicationDetail(
    id: string,
  ): Promise<VenturePublication> {
    return axios
      .get<VenturePublication>(
        `${PublicationsApi.BASE_URL}/_/publications/${id}`,
        { withCredentials: true },
      )
      .then(({ data }) => data);
  }

  public static async getGeneralPublications(
    filters: PublicationFilter,
    ventureSlug: string = '_', // "_" is used to indicate all ventures in the API call
  ) {
    const { pagination, categoriesIds, dateRange, search } = filters;
    const params = new URLSearchParams();
    search && params.set('search', search);
    categoriesIds &&
      categoriesIds.length > 0 &&
      params.set('categoriesIds', categoriesIds.join(','));
    dateRange && dateRange.from && params.set('from', dateRange.from);
    dateRange && dateRange.to && params.set('to', dateRange.to);
    params.set('skip', pagination.skip.toString());
    params.set('take', pagination.take.toString());

    return axios
      .get<PaginatedBody<VenturePublication>>(
        `${PublicationsApi.BASE_URL}/${ventureSlug}/publications`,
        {
          withCredentials: true,
          params,
        },
      )
      .then(({ data }) => data);
  }

  public static async fetchHighlightedPublications(
    filters: PublicationFilter,
  ): Promise<{ trending: VenturePublication[]; latest: VenturePublication[] }> {
    const { categoriesIds, search, dateRange } = filters;
    const params = new URLSearchParams();
    search && params.set('search', search);
    categoriesIds &&
      categoriesIds.length > 0 &&
      params.set('categoriesIds', categoriesIds.join(','));
    dateRange && dateRange.from && params.set('from', dateRange.from);
    dateRange && dateRange.to && params.set('to', dateRange.to);

    return axios
      .get<{ trending: VenturePublication[]; latest: VenturePublication[] }>(
        `${PublicationsApi.BASE_URL}/_/publications/highlighted`,
        {
          withCredentials: true,
          params,
        },
      )
      .then(({ data }) => data);
  }
}
