import { useState } from "react";
import { Role, User } from "x-ventures-domain";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import {
  lockUserAccountMiddleware,
  unlockUserAccountMiddleware,
  unverifyUserAccountMiddleware,
  updateUserRolesMiddleware,
  verifyUserAccountMiddleware,
} from "../api/middleware/users.middleware";
import { userInfo } from "os";

const useEditUser = (initialInfo: User) => {
  const dispatch = useAppDispatch();
  const [operation, setOperation] = useState({
    loading: false,
    message: "",
    error: false,
    user: initialInfo,
  });
  const { email } = initialInfo;

  const handleEditRoles = (roles: Role[]): Promise<void> => {
    setOperation((operation) => ({
      ...operation,
      loading: true,
      error: false,
      message: "Actualizando roles...",
    }));
    return dispatch(
      updateUserRolesMiddleware(
        email,
        roles.map(({ name }) => name)
      )
    )
      .then(() => {
        setOperation((operation) => ({
          ...operation,
          loading: false,
          error: false,
          message: "",
          user: {
            ...operation.user,
            roles: [...operation.user.roles, ...roles],
          },
        }));
      })
      .catch(() => {
        setOperation((operation) => ({
          ...operation,
          loading: false,
          error: true,
          message: "Error al actualizar roles",
        }));
      });
  };

  const handleToggleActive = (email: string) => {
    setOperation((operation) => ({
      ...operation,
      loading: true,
      error: false,
      message: "Actualizando estado...",
    }));
    if (operation.user.active) {
      return dispatch(lockUserAccountMiddleware(email))
        .then(() => {
          setOperation((operation) => ({
            ...operation,
            loading: false,
            error: false,
            message: "",
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
            message: "Error al actualizar estado",
          }));
        });
    }
    return dispatch(unlockUserAccountMiddleware(email))
      .then(() => {
        setOperation((operation) => ({
          ...operation,
          loading: false,
          error: false,
          message: "",
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
          message: "Error al actualizar estado",
        }));
      });
  };

  const handleToggleVerified = (email: string) => {
    setOperation((operation) => ({
      ...operation,
      loading: true,
      error: false,
      message: "Actualizando verificación...",
    }));
    if (operation.user.verified) {
      return dispatch(unverifyUserAccountMiddleware(email))
        .then(() => {
          setOperation((operation) => ({
            ...operation,
            loading: false,
            error: false,
            message: "",
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
            message: "Error al actualizar verificación",
          }));
        });
    }
    return dispatch(verifyUserAccountMiddleware(email))
      .then(() => {
        setOperation((operation) => ({
          ...operation,
          loading: false,
          error: false,
          message: "",
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
          message: "Error al actualizar verificación",
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
