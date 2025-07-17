import { Action, Dispatch } from '@reduxjs/toolkit';

import {
  setGlobalAlert,
  SeverityLevel,
} from '../../../../../config/redux/reducers/shared/user-interface.reducer';
import UserProfileInfoApi from '../http/user-profile-info.api';

export const fetchUserContactInfoMiddleware = () => {
  return async (dispatch: Dispatch<Action>) => {
    return UserProfileInfoApi.fetchUserContactInfo()
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        dispatch(
          setGlobalAlert({
            position: 'top-right',
            title: 'Error al obtener información de contacto',
            message:
              'Por favor intente nuevamente, si el error persiste contacte al administrador.',
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          }),
        );
        throw new Error('Error en login');
      });
  };
};
