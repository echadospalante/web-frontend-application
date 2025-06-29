import { Fragment, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectAuthentication } from '../redux/reducers/auth/auth.reducer';
import ScrollToFragment from '../../shared/components/scroll/ScrollToFragment';

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
      <ScrollToFragment />
    </Fragment>
  );
};

export default PublicRoute;
