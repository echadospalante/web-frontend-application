import React from "react";

import { Container, Row, Col } from "reactstrap";

import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";
import CardUser from "../../../../shared/components/card/UserCard";
import CardWelcome from "../../../../shared/components/card/CardWelcome";
import MiniWidget from "../../../../shared/components/widgets/MiniWidget";
import Earning from "../../../../shared/components/graphics/Earning";
import SalesAnalytics from "../../../../shared/components/graphics/SalesAnalytics";
import TotalSelling from "../../../../shared/components/graphics/TotalSelling";
import CompanySummary from "../../../../shared/components/card/CompanySummary";
import ActivityFeed from "../../../../shared/components/card/ActivityFeed";
import AddedJobs from "../../../../shared/components/card/AdedJobs";
import RecommendedInfo from "../../../../shared/components/card/RecommendedInfo";

const CommercialInitialPage = () => {
  //meta title
  document.title =
    "Saas Dashboard | Echadospa'lante - Vite React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Dashboards" breadcrumbItem="Saas" />

          <Row>
            <Col lg={7} md={12}>
              <CardUser />
            </Col>
            <Col lg={5} md={12}>
              <RecommendedInfo />
            </Col>
          </Row>

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

export default CommercialInitialPage;
