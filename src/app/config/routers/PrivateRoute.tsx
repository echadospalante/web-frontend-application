import React from "react";

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectAuthentication } from "../redux/reducers/auth/auth.reducer";
import { AppRole, Role } from "../../modules/auth/domain/Role";

export interface PrivateRouteProps {
  allRequiredRoles?: AppRole[];
  anyRequiredRole?: AppRole[];
}

const PrivateRoute = ({
  allRequiredRoles = [],
  anyRequiredRole = [],
}: PrivateRouteProps): JSX.Element => {
  const { roles = [], active } = useSelector(selectAuthentication);

  if (!active) return <Navigate to="/" />;
  const verifyUserHasAllRoles = (
    roles: Role[],
    allRequiredRoles: string[]
  ): boolean => {
    return allRequiredRoles.every((requiredRole) =>
      roles.some((role) => role.name === requiredRole)
    );
  };

  const verifyUserHasAnyRole = (
    roles: Role[],
    anyRequiredRole: string[]
  ): boolean => {
    const result = anyRequiredRole.some((requiredRole) =>
      roles.some((role) => role.name === requiredRole)
    );
    return result;
  };

  const verifyAuthorization = (
    roles: Role[],
    allRequiredRoles: AppRole[],
    anyRequiredRole: AppRole[]
  ): boolean => {
    if (roles.length === 0) {
      return false;
    }
    if (allRequiredRoles.length > 0 && anyRequiredRole.length > 0) {
      return false;
    }
    if (allRequiredRoles.length === 0 && anyRequiredRole.length === 0) {
      return false;
    }
    if (allRequiredRoles.length > 0) {
      return verifyUserHasAllRoles(roles, allRequiredRoles);
    }
    if (anyRequiredRole.length > 0) {
      return verifyUserHasAnyRole(roles, anyRequiredRole);
    }
    return false;
  };

  const authorized = verifyAuthorization(
    roles,
    allRequiredRoles,
    anyRequiredRole
  );

  if (!authorized) {
    return <Navigate to="/" />;
  }

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default PrivateRoute;
