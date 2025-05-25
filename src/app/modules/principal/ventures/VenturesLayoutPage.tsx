import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Container } from 'reactstrap';

import { selectAuthentication } from '../../../config/redux/reducers/auth/auth.reducer';
import { selectLayout } from '../../../config/redux/reducers/shared/layout.reducer';
import HorizontalLayout from '../../../shared/components/layout/HorizontalLayout';
import VerticalLayout from '../../../shared/components/layout/VerticalLayout';
import { LayoutType } from '../../common/domain/layout.interfaces';

const VenturesLayoutPage = () => {
  const { layoutType } = useSelector(selectLayout);
  const { onboardingCompleted } = useSelector(selectAuthentication);

  document.title = 'Emprendimientos | Principal';

  if (!onboardingCompleted) {
    return <Navigate to={'/registro'} replace={true} />;
  }

  return (
    <React.Fragment>
      <React.Fragment>
        {layoutType === LayoutType.HORIZONTAL ? (
          <HorizontalLayout>
            <Outlet />
          </HorizontalLayout>
        ) : (
          <VerticalLayout>
            <Outlet />
          </VerticalLayout>
        )}
      </React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <Breadcrumb title={t("Dashboards")} breadcrumbItem={t("Dashboard")} /> */}
        </Container>
      </div>
    </React.Fragment>
  );
};

export const Dashboard404Page = () => {
  return <h1>404 Not found</h1>;
};

export default VenturesLayoutPage;
