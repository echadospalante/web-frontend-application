import { useState } from 'react';

import { VentureEvent } from 'echadospalante-domain';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';

import { Link } from 'react-router-dom';

import VentureDetailCard from '../../../../shared/components/card/VentureDetailcard.tsx';
import VentureDetailHeader from '../../../../shared/components/footer/VentureDetailHeader';
import VentureDetailTabs from '../../../../shared/components/tabs/VentureDetailTabs.tsx';
import useFetchVentureBySlug from '../hooks/useFetchVentureBySlug.ts';
import PublicationsFeedPage from './GeneralPublicationsFeedPage.tsx';
import EventCard from '../../../../shared/components/card/EventCard.tsx';
import GeneralEventsPage from './GeneralEventsPage.tsx';

export type VentureDetailTab = 'publications' | 'events' | 'about';

const VentureDetailPage = () => {
  const [activeTab, setActiveTab] = useState<VentureDetailTab>('publications');

  const {
    data: venture,
    isError,
    isLoading,
    retryFetch,
  } = useFetchVentureBySlug();

  if (isLoading) {
    return (
      <Container className="page-content mt-5">
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">
              Cargando información del emprendimiento...
            </span>
          </div>
        </div>
      </Container>
    );
  }

  if (!venture) {
    return (
      <Container className="page-content mt-5">
        <div className="text-center">
          <h3>No se encontró el emprendimiento</h3>
          <Button outline className="m-1" color="primary" onClick={retryFetch}>
            <i className="mdi mdi-refresh me-1"></i>
            Reintentar
          </Button>

          <Link to="/principal/emprendimientos" className="btn btn-primary m-1">
            Volver a la lista de emprendimientos
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <div className="page-content">
      <Container fluid>
        <VentureDetailHeader venture={venture} />

        <Card className="shadow-sm">
          <CardBody className="p-0">
            <VentureDetailTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              publicationsCount={0}
              eventsCount={0}
            />

            <TabContent
              activeTab={activeTab}
              className="p-4"
              style={{ zIndex: 100, position: 'relative' }}
            >
              <TabPane tabId="publications">
                <PublicationsFeedPage />
              </TabPane>

              <TabPane tabId="events">
                <GeneralEventsPage />
              </TabPane>

              <TabPane tabId="about">
                <VentureDetailCard venture={venture} />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default VentureDetailPage;
