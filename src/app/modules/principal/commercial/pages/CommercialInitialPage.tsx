import React from "react";

import { Container, Row, Col } from "reactstrap";

import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import CardUser from "../../../../components/card/UserCard";
import CardWelcome from "../../../../components/card/CardWelcome";
import MiniWidget from "../../../../components/widgets/MiniWidget";
import Earning from "../../../../components/graphics/Earning";
import SalesAnalytics from "../../../../components/graphics/SalesAnalytics";
import TotalSelling from "../../../../components/graphics/TotalSelling";
import CompanySummary from "../../../../components/card/CompanySummary";
import ActivityFeed from "../../../../components/card/ActivityFeed";
import AddedJobs from "../../../../components/card/AdedJobs";
import RecommendedInfo from "../../../../components/card/RecommendedInfo";

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
