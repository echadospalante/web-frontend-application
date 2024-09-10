/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

import { Col, Container, Row } from "reactstrap";

import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import ActivityFeed from "../../../../components/card/ActivityFeed";
import AddedJobs from "../../../../components/card/AdedJobs";
import CardWelcome from "../../../../components/card/CardWelcome";
import CompanySummary from "../../../../components/card/CompanySummary";
import Earning from "../../../../components/graphics/Earning";
import SalesAnalytics from "../../../../components/graphics/SalesAnalytics";
import TotalSelling from "../../../../components/graphics/TotalSelling";
import MiniWidget from "../../../../components/widgets/MiniWidget";

const ActivityDashboardPage = () => {
  document.title = "Dashboard de Actividad | Administración";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Dashboards" breadcrumbItem="Saas" />

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
    </React.Fragment>
  );
};

export default ActivityDashboardPage;
