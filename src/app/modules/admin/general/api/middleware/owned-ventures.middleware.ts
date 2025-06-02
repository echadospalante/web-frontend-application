import { Action, Dispatch } from '@reduxjs/toolkit';

import { Venture, VentureCreate } from 'echadospalante-domain';

import {
  OwnedVenturesFilter,
  setOwnedVentures,
  updateOwnedVenture,
} from '../../../../../config/redux/reducers/principal/owned-ventures.reducer';
import {
  finishGlobalLoading,
  setGlobalAlert,
  SeverityLevel,
} from '../../../../../config/redux/reducers/shared/user-interface.reducer';
import { OwnedVenturesApi } from '../../../../principal/account/api/http/owned-ventures-management.api';

export const updateOwnedVentureMiddleware = (
  id: string,
  ownedVenture: Venture,
) => {
  return async (dispatch: Dispatch) => {
    return OwnedVenturesApi.updateOwnedVenture(id, ownedVenture)
      .then(() => {
        dispatch(updateOwnedVenture(ownedVenture));
        dispatch(
          setGlobalAlert({
            title: 'Emprendimiento actualizada',
            message: 'El emprendimiento ha sido actualizado exitosamente.',
            timeout: 5000,
            severity: SeverityLevel.SUCCESS,
          }),
        );
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            title: 'Error',
            message:
              'Por favor intente nuevamente, si el error persiste contacte al administrador.',
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          }),
        );
        throw new Error('Error al actualizar el emprendimiento');
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const createOwnedVentureMiddleware = (ownedVenture: VentureCreate) => {
  return async (dispatch: Dispatch) => {
    return OwnedVenturesApi.createOwnedVenture(ownedVenture)
      .then(() => {
        dispatch(
          setGlobalAlert({
            title: 'Emprendimiento creado',
            message: 'La categoría ha sido creada exitosamente.',
            timeout: 5000,
            severity: SeverityLevel.SUCCESS,
          }),
        );
      })
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            title: 'Error',
            message:
              'Por favor intente nuevamente, si el error persiste contacte al administrador.',
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          }),
        );
        throw new Error('Error al crear el emprendimiento');
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};