import { Action, Dispatch } from '@reduxjs/toolkit';

import {
  setVenturePublications,
  VenturePublicationsFilter,
} from '../../../../../config/redux/reducers/admin/venture-publications-management.reducer';
import {
  setGlobalAlert,
  SeverityLevel,
} from '../../../../../config/redux/reducers/shared/user-interface.reducer';
import { VenturePublicationsApi } from '../http/venture-publications-management.api';

export const fetchVenturePublicationsMiddleware = (
  venturePublicationsFilters: VenturePublicationsFilter,
) => {
  return async (dispatch: Dispatch<Action>) => {
    return VenturePublicationsApi.fetchVenturePublications(
      venturePublicationsFilters,
    )
      .then((response) => {
        dispatch(setVenturePublications(response));
        return response;
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            message: 'Error al obtener la lista de publicaciones ⛔',
            title: 'Error',
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          }),
        );
        throw new Error('Error al obtener la lista de publicaciones');
      });
  };
};
