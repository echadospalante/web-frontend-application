import React from "react";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectAuthentication } from "../redux/reducers/auth.reducer";

export interface PrivateRouteProps {
  allRequiredRoles?: string[];
  anyRequiredRole?: string[];
}

const PrivateRoute = ({
  allRequiredRoles = [],
  anyRequiredRole = [],
}: PrivateRouteProps): JSX.Element => {
  const auth = useSelector(selectAuthentication);

  // if (!auth.active) return <Navigate to="/" />;

  const { roles = [] } = auth;

  const verifyUserHasAllRoles = (
    roles: string[],
    allRequiredRoles: string[]
  ): boolean => {
    return allRequiredRoles.every((requiredRole) =>
      roles.some((role) => role === requiredRole)
    );
  };

  const verifyUserHasAnyRole = (
    roles: string[],
    anyRequiredRole: string[]
  ): boolean => {
    const result = anyRequiredRole.some((requiredRole) =>
      roles.some((role) => role === requiredRole)
    );
    return result;
  };

  const verifyAuthorization = (
    roles: string[],
    allRequiredRoles: string[],
    anyRequiredRole: string[]
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
    // return <Navigate to="/" />;
  }

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default PrivateRoute;
