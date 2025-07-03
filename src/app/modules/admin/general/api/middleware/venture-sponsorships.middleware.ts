import { Action, Dispatch } from '@reduxjs/toolkit';

import {
  setVentureSponsors,
  VentureSponsorshipsFilter,
} from '../../../../../config/redux/reducers/admin/venture-sponsorships-management.reducer';
import {
  setGlobalAlert,
  SeverityLevel,
} from '../../../../../config/redux/reducers/shared/user-interface.reducer';
import { VentureSponsorshipsApi } from '../http/venture-sponsorships-management.api';
import { User } from 'echadospalante-domain';

export const fetchVentureSponsorshipsMiddleware = (
  ventureSponsorshipsFilters: VentureSponsorshipsFilter,
) => {
  return async (dispatch: Dispatch<Action>) => {
    return VentureSponsorshipsApi.fetchVentureSponsorships(
      ventureSponsorshipsFilters,
    )
      .then((response) => {
        dispatch(setVentureSponsors(response));
        return response;
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            position: 'top-right',
            message: 'Error al obtener la lista de patrocinadores ⛔',
            title: 'Error',
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          }),
        );
        throw new Error('Error al obtener la lista de patrocinadores');
      });
  };
};

export const fetchOwnerBySponsorshipIdMiddleware = (sponsorshipId: string) => {
  return async (dispatch: Dispatch<Action>): Promise<User> => {
    return VentureSponsorshipsApi.fetchOwnerBySponsorshipId(sponsorshipId)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            position: 'top-right',
            message: 'Error al obtener el dueño del patrocinio ⛔',
            title: 'Error',
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          }),
        );
        throw new Error('Error al obtener el dueño del patrocinio');
      });
  };
};
