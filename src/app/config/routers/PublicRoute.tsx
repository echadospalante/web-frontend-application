import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { selectAuthentication } from "../redux/reducers/auth.reducer";

export interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = (): JSX.Element => {
  const auth = useSelector(selectAuthentication);
  const { id } = auth;

  if (id) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default PublicRoute;
