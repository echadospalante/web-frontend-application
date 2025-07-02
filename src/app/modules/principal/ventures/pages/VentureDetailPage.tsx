
import { useState } from 'react';
import { Venture, VentureEvent } from 'echadospalante-domain';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import VentureDetailHeader from '../../../../shared/components/footer/VentureDetailHeader';
import VentureDetailCard from '../../../../shared/components/card/VentureDetailcard.tsx';

// Datos de ejemplo
const mockVenture: Venture = {
  id: '96ab7403-39d7-4979-a8cd-8dac7b36ea66',
  name: 'Mi nuevo emprendimiento',
  slug: 'mi-nuevo-emprendimiento',
  coverPhoto:
    'https://storage.googleapis.com/echadospalante-ventures-bucket/7ad7063a-64c8-4a6e-a434-8bbc200da257.jpeg',
  description:
    'llevamos la tradición a tu mesa con empanadas 100% colombianas, hechas con masa de maíz crocante y rellenos caseros llenos de sabor. Desde la clásica empanada de carne hasta opciones innovadoras como pollo con champiñones o queso con guayaba, cada empanada es una explosión de cultura y sazón.',
  active: true,
  verified: false,
  createdAt: new Date('2025-06-28T23:09:38.687Z'),
  updatedAt: new Date('2025-06-28T23:09:38.687Z'),
  location: {
    id: 'd47603d7-d895-483c-80b4-a269639acf8b',
    location: {
      type: 'Point',
      coordinates: [-75.43079544, 6.031959852],
    },
    description: 'A una cuadra del parque de la Ceja',
    createdAt: new Date('2025-06-28T23:09:38.687Z'),
    updatedAt: new Date('2025-06-28T23:09:38.687Z'),
    municipality: {
      id: 1,
      name: 'La Ceja',
      department: {
        id: 0,
        name: 'Antioquia',
        municipalities: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      lat: 0,
      lng: 0,
      ventureLocations: [],
      eventLocations: [],
      users: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  owner: {
    id: '81e45c81-dd7b-4314-999d-701710d5712d',
    picture:
      'https://lh3.googleusercontent.com/a/ACg8ocLGFm5F3zf3Mmj5tRQ2-zZcItMGdMrvO0S7upkw-Fvn2lLz9hI_Yw=s96-c',
    email: 'juancamilo19997814@gmail.com',
    firstName: 'Juan Camilo',
    lastName: 'Cardona',
    active: false,
    verified: false,
    onboardingCompleted: false,
    roles: [],
    preferences: [],
    gender: 'M',
    birthDate: new Date(),
    comments: [],
    donations: [],
    notifications: [],
    publicationClaps: [],
    sponsorships: [],
    subscriptions: [],
    ventures: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  categories: [
    {
      id: 'fdf91e64-9ed3-40a7-bb03-0710fd98e92f',
      name: 'Retail',
      slug: 'retail',
      description: 'Descripción de prueba',
      createdAt: new Date('2024-09-17T16:58:28.522Z'),
      updatedAt: new Date('2024-09-17T16:58:28.522Z'),
    },
    {
      id: 'b7da29f0-8b30-4913-b2d8-99ba6e5b2c3f',
      name: 'Alimentación y Consumo',
      slug: 'alimentación_y_consumo',
      description: 'Descripción de prueba',
      createdAt: new Date('2024-09-17T16:58:28.525Z'),
      updatedAt: new Date('2024-09-17T16:58:28.525Z'),
    },
  ],
  events: [],
  sponsorships: [],
  subscriptions: [],
  publications: [],
};

const mockPublications = [
  {
    id: 'ffee56a2-ebac-441d-95fe-0db4312e43a5',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    active: true,
    clapsCount: 2,
    commentsCount: 3,
    contents: [
      {
        id: 'adcdfb62-94a5-486f-9bfb-2a8060736086',
        type: 'IMAGE',
        content:
          'https://storage.googleapis.com/echadospalante-publications-bucket/motivacion-laboral.png',
        createdAt: '2025-06-13T02:13:43.476Z',
        updatedAt: '2025-06-13T02:13:43.476Z',
      },
      {
        id: '79e5bd05-5ea3-463f-9c83-3fc6ae97b21f',
        type: 'TEXT',
        content:
          'Contrary to popular belief, Lorem Ipsum is not simply random text...',
        createdAt: '2025-06-13T02:13:43.476Z',
        updatedAt: '2025-06-13T02:13:43.476Z',
      },
    ],
    categories: [
      {
        id: '243c2655-5dba-4f17-8323-630b9c24a75b',
        name: 'Charla Motivacional',
        slug: 'charla-motivacional',
        description: 'Charlas inspiradoras para emprendedores.',
        createdAt: '2025-06-03T16:34:13.029Z',
        updatedAt: '2025-06-03T16:34:13.029Z',
      },
    ],
    createdAt: '2025-06-13T02:13:43.467Z',
  },
];

const mockEvents: VentureEvent[] = [
  {
    id: '63bf3aa2-9008-445c-80d2-2718e2b569d2',
    title: 'Some title for my first event....',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    coverPhoto:
      'https://storage.googleapis.com/echadospalante-publications-bucket/empanadas-event.jpeg',
    slug: 'some-title-for-my-first-event',
    location: {
      id: '986a41a4-cf08-455e-9060-dba1f21260ea',
      location: {
        type: 'Point',
        coordinates: [-75.4359, 6.0282],
      },
      description: 'Cerca al parque de la Ceja',
      municipality: {
        id: 0,
        name: '',
        lat: 0,
        lng: 0,
        ventureLocations: [],
        eventLocations: [],
        users: [],
        department: {
          id: 0,
          name: '',
          municipalities: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    categories: [],
    datesAndHours: [
      {
        date: '2025-07-04',
        workingRanges: [
          {
            end: '17:00',
            start: '09:00',
          },
        ],
      },
    ],
    createdAt: new Date('2025-06-29T01:05:07.631Z'),
    updatedAt: new Date('2025-06-29T01:05:07.631Z'),
    contact: {
      id: '',
    },
    donations: [],
  },
];

const mockSubscription = {
  id: "sub-1",
  subscribersCount: 156
};

const mockSponsorship = {
  id: "spon-1",
  monthlyAmount: 250000,
  currency: "COP"
};

// Custom Hooks
const useVentureData = (ventureId: string) => {
  // Simulando React Query
  return {
    data: mockVenture,
    isLoading: false,
    error: null
  };
};

const usePublications = (ventureId: string) => {
  return {
    data: mockPublications,
    isLoading: false,
    error: null
  };
};

const useEvents = (ventureId: string) => {
  return {
    data: mockEvents,
    isLoading: false,
    error: null
  };
};

const useSubscriptions = (ventureId: string) => {
  return {
    data: mockSubscription,
    isLoading: false,
    error: null
  };
};

const useSponsorships = (ventureId: string) => {
  return {
    data: mockSponsorship,
    isLoading: false,
    error: null
  };
};

const PublicationsTab = ({ publications }: { publications: any[] }) => {
  return (
    <div>
      {publications.map((publication) => (
        <Card key={publication.id} className="mb-4 shadow-sm">
          <CardBody>
            <p className="mb-3">{publication.description}</p>

            <div className="mb-3">
              {publication.contents.map((content: any) => (
                <div key={content.id} className="mb-3">
                  {content.type === 'IMAGE' ? (
                    <img
                      src={content.content}
                      alt="Contenido de publicación"
                      className="img-fluid rounded"
                      style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <p className="text-muted">{content.content}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3">
                <div className="d-flex align-items-center text-muted">
                  {/*<Heart size={16} className="me-1" />*/}
                  <i className="mdi mdi-heart-outline me-1" />
                  <span>{publication.clapsCount}</span>
                </div>
                <div className="d-flex align-items-center text-muted">
                  {/*<MessageCircle size={16} className="me-1" />*/}
                  <i className="mdi mdi-comment-outline me-1" />
                  <span>{publication.commentsCount}</span>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-1">
                {publication.categories.map((category: any) => (
                  <Badge key={category.id} color="outline-primary" pill>
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

const EventsTab = ({ events }: { events: VentureEvent[] }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
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
                            <Badge key={rangeIndex} color="light" className="me-2">
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

const VentureDetailPage = () => {
  const [activeTab, setActiveTab] = useState('publications');
  const ventureId = mockVenture.id;
  // Hooks de datos
  const { data: venture, isLoading: ventureLoading } = useVentureData(ventureId);
  const { data: publications, isLoading: publicationsLoading } = usePublications(ventureId);
  const { data: events, isLoading: eventsLoading } = useEvents(ventureId);
  const { data: subscription, isLoading: subscriptionLoading } = useSubscriptions(ventureId);
  const { data: sponsorship, isLoading: sponsorshipLoading } = useSponsorships(ventureId);

  if (ventureLoading || subscriptionLoading || sponsorshipLoading) {
    return (
      <Container className="py-5">
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      </Container>
    );
  }

  if (!venture || !subscription || !sponsorship) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h3>No se encontró el emprendimiento</h3>
        </div>
      </Container>
    );
  }

  return (
      <div className="page-content">
        <Container fluid>

      <VentureDetailHeader
        venture={venture}
        subscriptionsCount={10}
        sponsorshipsCount={12}
      />

      <Card className="shadow-sm">
        <CardBody className="p-0">
          <Nav tabs className="border-bottom">
            <NavItem>
              <NavLink
                className={`cursor-pointer ${activeTab === 'publications' ? 'active' : ''}`}
                onClick={() => setActiveTab('publications')}
              >
                {/*<MessageCircle size={16} className="me-2" />*/}
                <i className="mdi mdi-bullhorn-outline me-2"></i>
                Publicaciones
                {publications && <Badge color="secondary" className="ms-2">{publications.length}</Badge>}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`cursor-pointer ${activeTab === 'events' ? 'active' : ''}`}
                onClick={() => setActiveTab('events')}
              >
                <i className="mdi mdi-calendar-outline me-2"></i>
                Eventos
                {events && <Badge color="secondary" className="ms-2">{events.length}</Badge>}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`cursor-pointer ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => setActiveTab('about')}
              >
                {/*<Eye size={16} className="me-2" />*/}
                <i className="mdi mdi-information-outline me-2"></i>
                Acerca de
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activeTab} className="p-4">
            <TabPane tabId="publications">
              {publicationsLoading ? (
                <div className="text-center py-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando publicaciones...</span>
                  </div>
                </div>
              ) : publications && publications.length > 0 ? (
                <PublicationsTab publications={publications} />
              ) : (
                <div className="text-center py-5 text-muted">
                  {/*<MessageCircle size={48} className="mb-3" />*/}
                  <i className="mdi mdi-bullhorn-outline text-muted mb-3" style={{ fontSize: '48px' }}></i>
                  <h5>No hay publicaciones disponibles</h5>
                  <p>Este emprendimiento aún no ha publicado contenido.</p>
                </div>
              )}
            </TabPane>

            <TabPane tabId="events">
              {eventsLoading ? (
                <div className="text-center py-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando eventos...</span>
                  </div>
                </div>
              ) : events && events.length > 0 ? (
                <EventsTab events={events} />
              ) : (
                <div className="text-center py-5 text-muted">
                  {/*<Calendar size={48} className="mb-3" />*/}
                  <i className="mdi mdi-calendar-multiselect text-muted mb-3" style={{ fontSize: '48px' }}></i>
                  <h5>No hay eventos programados</h5>
                  <p>Este emprendimiento no tiene eventos disponibles en este momento.</p>
                </div>
              )}
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