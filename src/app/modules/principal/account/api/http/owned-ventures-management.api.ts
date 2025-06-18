import axios from 'axios';

import { Venture, VentureCreate } from 'echadospalante-domain';
import { PaginatedBody } from 'echadospalante-domain/dist/app/modules/domain/common/pagination';

import env from '../../../../../../environment/environment';
import { OwnedVenturesFilter } from '../../../../../config/redux/reducers/principal/owned-ventures.reducer';
import filterFalsyValues from '../../../../../shared/helpers/object-utils';

export class OwnedVenturesApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/ventures`;

  public static fetchOwnedVentures(
    ownedVenturesFilter: OwnedVenturesFilter,
  ): Promise<PaginatedBody<Venture>> {
    const { page, size, ...rest } = ownedVenturesFilter;
    const otherPrams = filterFalsyValues(rest);
    const params = new URLSearchParams(otherPrams as Record<string, string>);
    params.set('skip', page.toString());
    params.set('take', size.toString());
    return axios
      .get<PaginatedBody<Venture>>(`${OwnedVenturesApi.API_BASE_URL}`, {
        withCredentials: true,
        params,
      })
      .then(({ data }) => data);
  }

  public static updateOwnedVenture(
    id: string,
    category: Venture,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public static createVenture(venture: VentureCreate): Promise<Venture> {
    const data = {
      name: venture.name,
      description: venture.description,
      coverPhoto: venture.coverPhoto,
      categoriesIds: venture.categoriesIds,
      municipalityId: venture.location?.municipalityId || '',
      contactEmail: venture.contact?.email || '',
      contactPhoneNumber: venture.contact?.phoneNumber || '',
      locationLat: `${venture.location?.lat || 0}`,
      locationLng: `${venture.location?.lng || 0}`,
      locationDescription: venture.location?.description || '',
    };
    return axios
      .post<Venture>(`${OwnedVenturesApi.API_BASE_URL}`, data, {
        withCredentials: true,
      })
      .then(({ data }) => data);
  }
}
