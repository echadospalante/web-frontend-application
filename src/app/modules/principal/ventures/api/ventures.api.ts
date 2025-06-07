import axios from 'axios';
import { Venture } from 'echadospalante-domain';

import { PaginatedBody } from 'echadospalante-domain/dist/app/modules/domain/common/pagination';
import { VentureFilter } from '../../../../config/redux/reducers/principal/ventures.reducer';

export default class VenturesApi {
  private static readonly BASE_URL = `${
    import.meta.env.VITE_API_URL
  }/api/v1/ventures`;

  public static fetchVentures(
    filters: VentureFilter,
  ) {
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
      .get<PaginatedBody<Venture>>(
        `${VenturesApi.BASE_URL}`,
        {
          withCredentials: true,
          params,
        },
      )
      .then(({ data }) => data);
  }
}
