/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from 'react';

import { Col, Container, Row } from 'reactstrap';
import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import ActivityFeed from '../../../../shared/components/card/ActivityFeed';
import AddedJobs from '../../../../shared/components/card/AdedJobs';
import CardWelcome from '../../../../shared/components/card/CardWelcome';
import CompanySummary from '../../../../shared/components/card/CompanySummary';
import Earning from '../../../../shared/components/graphics/Earning';
import SalesAnalytics from '../../../../shared/components/graphics/SalesAnalytics';
import TotalSelling from '../../../../shared/components/graphics/TotalSelling';
import MiniWidget from '../../../../shared/components/widgets/MiniWidget';

const ApplicationMetricsPage = () => {
  document.title = 'Métricas de Aplicación | Administración';

  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Métricas" breadcrumbItem="Aplicación" />

          <Row>
            <CardWelcome />

            <Col xl="8">
              <Row>
                <MiniWidget />
              </Row>
            </Col>
          </Row>

          <Row>
            <Earning dataColors='["--bs-primary"]' />

            <SalesAnalytics dataColors='["--bs-primary", "--bs-success", "--bs-danger"]' />
          </Row>

          <Row>
            <TotalSelling />
            <ActivityFeed />
            <AddedJobs />
          </Row>
          <Row>
            <CompanySummary />
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default ApplicationMetricsPage;
