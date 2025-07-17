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
import DonationsList from '../../../../shared/components/list/DonationsList';
import DonationsTabs from '../../../../shared/components/tabs/DonationsTabs';

const AccountDonationsPage = () => {
  document.title = "Donaciones a Eventos | EchadosPa'lante";
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
          <Breadcrumb title="Cuenta" breadcrumbItem="Donaciones" />

          <DonationsTabs activeTab={activeTab} toggle={toggleActiveTab} />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <TabContent activeTab={activeTab} className="p-4">
                    <TabPane tabId="1">
                      <DonationsList type="sent" />
                    </TabPane>

                    <TabPane tabId="2">
                      <DonationsList type="received" />
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

export default AccountDonationsPage;
