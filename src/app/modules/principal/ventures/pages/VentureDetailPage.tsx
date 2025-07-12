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
import GeneralPublicationsFeedPage from './GeneralPublicationsFeedPage.tsx';

const EventsTab = ({ events }: { events: VentureEvent[] }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div>
      {events.map((event) => (
        <Card key={event.id} className="mb-4 shadow-sm">
          <Row className="g-0">
            <Col md={4}>
              <CardImg
                src={event.coverPhoto}
                alt={event.title}
                className="h-100 object-fit-cover"
                style={{ minHeight: '200px' }}
              />
            </Col>
            <Col md={8}>
              <CardBody>
                <h5 className="card-title fw-bold">{event.title}</h5>
                <p className="card-text text-muted mb-3">{event.description}</p>

                <div className="mb-3">
                  <div className="d-flex align-items-center text-muted mb-2">
                    {/*<MapPin size={16} className="me-2" />*/}
                    <i className="mdi mdi-map-marker me-2 text-primary" />
                    <span>HOLA</span>
                  </div>
                  <div className="d-flex align-items-center text-muted">
                    {/*<Calendar size={16} className="me-2" />*/}
                    <i className="mdi mdi-calendar-multiselect me-2 text-primary" />
                    <span>Fechas disponibles:</span>
                  </div>
                  <div className="ms-4 mt-2">
                    {event.datesAndHours.map((dateHour, index) => (
                      <div key={index} className="mb-1">
                        <strong>{formatDate(dateHour.date)}</strong>
                        <div className="ms-3">
                          {dateHour.workingRanges.map((range, rangeIndex) => (
                            <Badge
                              key={rangeIndex}
                              color="light"
                              className="me-2"
                            >
                              {range.start} - {range.end}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <Button color="primary" size="sm">
                    Ver Detalles
                  </Button>
                  {event.categories.length > 0 && (
                    <div className="d-flex flex-wrap gap-1">
                      {event.categories.map((category) => (
                        <Badge key={category.id} color="outline-secondary" pill>
                          {category.name}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardBody>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

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
                <GeneralPublicationsFeedPage />
              </TabPane>

              <TabPane tabId="events">
                <EventsTab
                  events={[
                    {
                      id: '123',
                      title: 'Hola',
                      slug: 'hola',
                      description: 'lorem ipsum dolor sit amet',
                      coverPhoto:
                        'https://placehold.co/600x400?text=Foto%20del%20evento',
                      location: {
                        id: '123',
                        municipality: {
                          id: 1,
                          name: 'La Ceja',
                          department: {
                            id: 1,
                            name: 'Antioquia',
                            municipalities: [],
                            createdAt: new Date(),
                            updatedAt: new Date(),
                          },
                          lat: 6.123,
                          lng: -75.432,
                          ventureLocations: [],
                          eventLocations: [],
                          users: [],
                          createdAt: new Date(),
                          updatedAt: new Date(),
                        },
                      },
                      contact: {
                        id: '123',
                      },
                      categories: [],
                      donations: [],
                      datesAndHours: [
                        {
                          date: '2025-07-10',
                          workingRanges: [
                            {
                              start: '08:00',
                              end: '10:00',
                            },
                            {
                              start: '13:00',
                              end: '15:00',
                            },
                          ],
                        },
                        {
                          date: '2025-07-11',
                          workingRanges: [
                            {
                              start: '08:00',
                              end: '10:00',
                            },
                            {
                              start: '13:00',
                              end: '15:00',
                            },
                          ],
                        },
                      ],
                      createdAt: new Date(),
                      updatedAt: new Date(),
                    },
                  ]}
                />
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
