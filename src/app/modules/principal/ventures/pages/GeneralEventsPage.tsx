/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from 'react';

import BootstrapTheme from '@fullcalendar/bootstrap';
import { EventClickArg } from '@fullcalendar/core/index.js';
import esLocale from '@fullcalendar/core/locales/es';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import { VentureEvent } from 'echadospalante-domain';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import AppSpinner from '../../../../shared/components/loader/Spinner';
import VentureEventsMap from '../../../../shared/components/map/EventsMap';
import EventDetailModal from '../../../../shared/components/modal/EventDetailModal';
import EventsRightSidebar from '../../../../shared/components/rightbar/EventsRightSidebar';
import useFetchVentureEvents from '../hooks/useFetchVentureEvents';

const GeneralEventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<VentureEvent | null>(null);

  const { total, isLoading, isError, data, viewMode } =
    useFetchVentureEvents('ventureSlug');

  const handleEventClick = (clickedEvent: EventClickArg) => {
    const eventId = clickedEvent.event._def.publicId;

    const event = data.find((e) => e.id === eventId);
    console.log('Clicked event:', event);
    if (event) {
      setSelectedEvent(event);
    }
  };

  return (
    <Fragment>
      {/* <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={() => setDeleteModal(false)}
        title={'Some title'}
        warningMessage={false}
      /> */}

      {JSON.stringify(selectedEvent)}

      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          toggleModal={() => setSelectedEvent(null)}
        />
      )}

      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Eventos" breadcrumbItem="Calendario" />
          {/* {error && (
            <div className="alert alert-danger text-center" role="alert">
              Error al cargar los eventos, por favor intente de nuevo
            </div>
          )} */}

          {isLoading ? (
            <AppSpinner />
          ) : (
            <Row>
              {viewMode === 'calendar' ? (
                <Row>
                  <Col xl={9}>
                    <Card>
                      <CardBody>
                        <FullCalendar
                          plugins={[
                            BootstrapTheme,
                            dayGridPlugin,
                            listPlugin,
                            interactionPlugin,
                          ]}
                          slotDuration={'00:15:00'}
                          handleWindowResize={true}
                          themeSystem="bootstrap"
                          headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right:
                              'dayGridMonth,dayGridWeek,dayGridDay,listWeek',
                          }}
                          locale={esLocale}
                          events={[
                            {
                              id: '123',
                              title: 'Evento de Ejemplo',
                              start: new Date(),
                              end: new Date(),
                              className: 'bg-success text-white',
                              description: 'Descripción del evento de ejemplo',
                              coverPhoto:
                                'https://via.placeholder.com/400x200?text=Evento+de+Ejemplo',
                              location: {
                                description: 'Lugar del evento',
                                location: {
                                  coordinates: [4.60971, -74.08175],
                                },
                              },
                            },
                          ]}
                          editable={false}
                          droppable={false}
                          selectable={true}
                          eventClick={handleEventClick}
                        />
                      </CardBody>
                    </Card>
                  </Col>

                  <Col lg={3}>
                    <EventsRightSidebar multipleMunicipalities={false} />
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col lg={9}>
                    <VentureEventsMap />
                  </Col>
                  <Col lg={3}>
                    <EventsRightSidebar multipleMunicipalities={false} />
                  </Col>
                </Row>
              )}
            </Row>
          )}
        </Container>
      </div>
    </Fragment>
  );
};

export default GeneralEventsPage;
