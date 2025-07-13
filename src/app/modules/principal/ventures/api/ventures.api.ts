import axios from 'axios';
import { PaginatedBody, Venture, VentureStats } from 'echadospalante-domain';

import { VentureFilter } from '../../../../config/redux/reducers/principal/ventures.reducer';

export default class VenturesApi {
  private static readonly BASE_URL = `${
    import.meta.env.VITE_API_URL
  }/api/v1/ventures`;

  public static fetchVentures(filters: VentureFilter) {
    const { search, pagination, categoriesIds, municipalitiesIds } = filters;
    const params = new URLSearchParams();
    search && params.set('search', search);
    categoriesIds &&
      categoriesIds.length > 0 &&
      params.set('categoriesIds', categoriesIds.join(','));
    municipalitiesIds &&
      municipalitiesIds.length > 0 &&
      params.set('municipalitiesIds', municipalitiesIds.join(','));

    params.set('skip', pagination.skip.toString());
    params.set('take', pagination.take.toString());

    return axios
      .get<PaginatedBody<Venture>>(`${VenturesApi.BASE_URL}`, {
        withCredentials: true,
        params,
      })
      .then(({ data }) => data);
  }

  public static fetchVenturesForMap(filters: VentureFilter) {
    const { search, categoriesIds, municipalitiesIds } = filters;
    const params = new URLSearchParams();
    search && params.set('search', search);
    categoriesIds &&
      categoriesIds.length > 0 &&
      params.set('categoriesIds', categoriesIds.join(','));
    municipalitiesIds &&
      municipalitiesIds.length === 1 &&
      params.set('municipalityId', municipalitiesIds[0].toString());

    return axios
      .get<PaginatedBody<Venture>>(`${VenturesApi.BASE_URL}/map`, {
        withCredentials: true,
        params,
      })
      .then(({ data }) => data);
  }

  public static fetchVentureStats(ventureId: string) {
    return axios
      .get<VentureStats>(`${VenturesApi.BASE_URL}/${ventureId}/stats`, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }

  public static fetchVentureDetail(ventureId: string): Promise<Venture> {
    return axios
      .get<Venture>(`${VenturesApi.BASE_URL}/${ventureId}`, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }

  public static fetchVentureDetailBySlug(
    ventureSlug: string,
  ): Promise<Venture> {
    return axios
      .get<Venture>(`${VenturesApi.BASE_URL}/slug/${ventureSlug}`, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }
}
