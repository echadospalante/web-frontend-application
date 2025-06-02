import { useState } from 'react';

import { Role, User } from 'echadospalante-domain';

import { useAppDispatch } from '../../../../config/redux/store/store.config';
import { AppRole } from '../../../auth/domain/Role';
import {
  lockUserAccountMiddleware,
  unlockUserAccountMiddleware,
  unverifyUserAccountMiddleware,
  updateUserRolesMiddleware,
  verifyUserAccountMiddleware,
} from '../api/middleware/users.middleware';

const useEditUser = (initialInfo: User) => {
  const dispatch = useAppDispatch();
  const [operation, setOperation] = useState({
    loading: false,
    message: '',
    error: false,
    user: initialInfo,
  });
  const { email } = initialInfo;

  const handleEditRoles = (roles: Role[]): Promise<void> => {
    setOperation((operation) => ({
      ...operation,
      loading: true,
      error: false,
      message: 'Actualizando roles...',
    }));
    return dispatch(
      updateUserRolesMiddleware(
        email,
        roles.map(({ name }) => name),
      ),
    )
      .then(() => {
        const baseRoles = operation.user.roles.filter(
          ({ name }) => name === AppRole.ADMIN || name === AppRole.USER,
        );
        const otherRoles = roles.filter(
          ({ name }) => !baseRoles.map(({ name }) => name).includes(name),
        );
        setOperation((operation) => ({
          ...operation,
          loading: false,
          error: false,
          message: '',
          user: {
            ...operation.user,
            roles: [...baseRoles, ...otherRoles],
          },
        }));
      })
      .catch(() => {
        setOperation((operation) => ({
          ...operation,
          loading: false,
          error: true,
          message: 'Error al actualizar roles',
        }));
      });
  };

  const handleToggleActive = (email: string) => {
    setOperation((operation) => ({
      ...operation,
      loading: true,
      error: false,
      message: 'Actualizando estado...',
    }));
    if (operation.user.active) {
      return dispatch(lockUserAccountMiddleware(email))
        .then(() => {
          setOperation((operation) => ({
            ...operation,
            loading: false,
            error: false,
            message: '',
            user: {
              ...operation.user,
              active: false,
            },
          }));
        })
        .catch(() => {
          setOperation((operation) => ({
            ...operation,
            loading: false,
            error: true,
            message: 'Error al actualizar estado',
          }));
        });
    }
    return dispatch(unlockUserAccountMiddleware(email))
      .then(() => {
        setOperation((operation) => ({
          ...operation,
          loading: false,
          error: false,
          message: '',
          user: {
            ...operation.user,
            active: true,
          },
        }));
      })
      .catch(() => {
        setOperation((operation) => ({
          ...operation,
          loading: false,
          error: true,
          message: 'Error al actualizar estado',
        }));
      });
  };

  const handleToggleVerified = (email: string) => {
    setOperation((operation) => ({
      ...operation,
      loading: true,
      error: false,
      message: 'Actualizando verificación...',
    }));
    if (operation.user.verified) {
      return dispatch(unverifyUserAccountMiddleware(email))
        .then(() => {
          setOperation((operation) => ({
            ...operation,
            loading: false,
            error: false,
            message: '',
            user: {
              ...operation.user,
              verified: false,
            },
          }));
        })
        .catch(() => {
          setOperation((operation) => ({
            ...operation,
            loading: false,
            error: true,
            message: 'Error al actualizar verificación',
          }));
        });
    }
    return dispatch(verifyUserAccountMiddleware(email))
      .then(() => {
        setOperation((operation) => ({
          ...operation,
          loading: false,
          error: false,
          message: '',
          user: {
            ...operation.user,
            verified: true,
          },
        }));
      })
      .catch(() => {
        setOperation((operation) => ({
          ...operation,
          loading: false,
          error: true,
          message: 'Error al actualizar verificación',
        }));
      });
  };

  return {
    ...operation,
    handleEditRoles,
    handleToggleActive,
    handleToggleVerified,
  };
};

export default useEditUser;
