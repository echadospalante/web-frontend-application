import { Fragment, useState } from 'react';

import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';

import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import SponsorshipsList from '../../../../shared/components/list/SponsorshipsList';
import SponsorshipsTabs from '../../../../shared/components/tabs/SponsorshipsTabs';

const AccountSponsorshipsPage = () => {
  document.title = "Patrocinios a Emprendimientos | EchadosPa'lante";
  const [activeTab, setActiveTab] = useState('1');

  const toggleActiveTab = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Cuenta" breadcrumbItem="Patrocinios" />

          <SponsorshipsTabs activeTab={activeTab} toggle={toggleActiveTab} />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <TabContent activeTab={activeTab} className="p-4">
                    <TabPane tabId="1">
                      <SponsorshipsList type="sent" />
                    </TabPane>

                    <TabPane tabId="2">
                      <SponsorshipsList type="received" />
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default AccountSponsorshipsPage;
