import { Fragment, useRef, useState } from "react";

import moment from "moment";
import { Calendar, EventProps, momentLocalizer } from "react-big-calendar";
import Select from "react-select";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Row,
} from "reactstrap";

import VentureEventsCalendar from "../../../../shared/components/calendar/VentureEventsCalendar";
import useVentureEvents, {
  CalendarEvent,
} from "../../../admin/general/hooks/useVentureEvents";
import EventDetailModal from "../../../../shared/components/modal/EventDetailModal";
import VenturesFeedRightSidebar from "../../../../shared/components/rightbar/VenturesFeedRightSidebar";

moment.locale("es");

const localizer = momentLocalizer(moment);

const EventsCalendarPage = () => {
  const { loading, error, items, total, calendarEvents, fetchVentureEvents } =
    useVentureEvents();
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent>();

  // Ref to fetchEvents button
  const fetchEventsButtonRef = useRef(null);

  const CustomEvent = ({ event }: EventProps<CalendarEvent>) => (
    <div>
      <strong>{event.title}</strong>
      <p>{event.description}</p>
    </div>
  );

  const eventStyleGetter = (
    event: CalendarEvent,
    start: Date,
    end: Date,
    isSelected: boolean
  ) => {
    return {
      style: {
        color: "white",
        borderRadius: "5px",
        padding: "5px",
      },
    };
  };

  const handleResetSelectedEvent = () => {
    setSelectedEvent(undefined);
  };

  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <Breadcrumb title="Emprendimientos" breadcrumbItem="Publicaciones" /> */}

          <Row>
            <Col lg={9}>
              <Card>
                <Row>
                  <Col lg={11} className="mx-auto">
                    <div>
                      <Row className="align-items-center py-3">
                        <Col xs={4}>
                          <div>
                            <h5 className="mb-0">Lista de eventos</h5>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <div>
                          {selectedEvent && (
                            <EventDetailModal
                              event={selectedEvent}
                              onCloseClick={handleResetSelectedEvent}
                            />
                          )}

                          <Row>
                            <Col lg="12">
                              <Card>
                                <CardBody className="border-bottom">
                                  <div className="d-flex align-items-center">
                                    <h5 className="mb-0 card-title flex-grow-1">
                                      Listado de próximos eventos
                                    </h5>
                                    <div className="flex-shrink-0 d-flex flex-row align-items-center">
                                      <button
                                        ref={fetchEventsButtonRef}
                                        type="button"
                                        onClick={fetchVentureEvents}
                                        className="btn btn-light mx-2 mb-2"
                                      >
                                        <i className="mdi mdi-refresh"></i>
                                      </button>
                                    </div>
                                  </div>

                                  {error && (
                                    <div
                                      className="alert alert-danger text-center"
                                      role="alert"
                                    >
                                      Ha habido un error al consultar los
                                      eventos de este emprendimiento, por favor
                                      intente nuevamente.
                                    </div>
                                  )}
                                </CardBody>

                                <CardBody>
                                  <Fragment>
                                    <Row>
                                      <Col xs={12} sm={12}>
                                        <Row>
                                          <Col xl={12}>
                                            <Card>
                                              <CardBody>
                                                <Calendar
                                                  localizer={localizer}
                                                  events={calendarEvents}
                                                  startAccessor="start"
                                                  endAccessor="end"
                                                  style={{
                                                    height: "600px",
                                                    width: "100%",
                                                    overflow: "auto",
                                                  }}
                                                  defaultView="month"
                                                  components={{
                                                    event: CustomEvent,
                                                  }}
                                                  onSelectEvent={(event) => {
                                                    setSelectedEvent(event);
                                                  }}
                                                  eventPropGetter={
                                                    eventStyleGetter
                                                  }
                                                  messages={{
                                                    today: "Hoy",
                                                    previous: "Anterior",
                                                    next: "Siguiente",
                                                    month: "Mes",
                                                    week: "Semana",
                                                    day: "Día",
                                                    agenda: "Agenda",
                                                    date: "Fecha",
                                                    time: "Hora",
                                                    event: "Evento",
                                                    noEventsInRange:
                                                      "No hay eventos en este rango.",
                                                  }}
                                                />
                                              </CardBody>
                                            </Card>
                                          </Col>
                                        </Row>
                                      </Col>
                                    </Row>
                                  </Fragment>
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                        </div>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col lg={3}>
              <VenturesFeedRightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default EventsCalendarPage;
