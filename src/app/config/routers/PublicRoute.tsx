import { Fragment, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectAuthentication } from '../redux/reducers/auth/auth.reducer';

export interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = (): JSX.Element => {
  const auth = useSelector(selectAuthentication);
  const { id } = auth;

  if (id) {
    return <Navigate to="/principal" />;
  }

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default PublicRoute;
