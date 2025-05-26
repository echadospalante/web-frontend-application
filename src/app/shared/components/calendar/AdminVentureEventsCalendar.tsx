/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useRef, useState } from 'react';

import moment from 'moment';
import 'moment/locale/es';
import { Calendar, EventProps, momentLocalizer } from 'react-big-calendar';
import Select from 'react-select';
import { Button, Card, CardBody, Col, Form, Input, Row } from 'reactstrap';

import useVentureEvents, {
  CalendarEvent,
} from '../../../modules/admin/general/hooks/useVentureEvents';
import EventDetailModal from '../modal/EventDetailModal';

moment.locale('es');

const localizer = momentLocalizer(moment);

type AdminVentureEventsCalendarProps = {
  ventureId: string;
};

const AdminVentureEventsCalendar = ({
  ventureId,
}: AdminVentureEventsCalendarProps) => {
  const { error, calendarEvents, fetchVentureEvents } = useVentureEvents();
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent>();

  console.log({ ventureId });
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
    isSelected: boolean,
  ) => {
    console.log({
      event,
      start,
      end,
      isSelected,
    });
    return {
      style: {
        color: 'white',
        borderRadius: '5px',
        padding: '5px',
      },
    };
  };

  const handleResetSelectedEvent = () => {
    setSelectedEvent(undefined);
  };

  return (
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
                  Listado de eventos del emprendimiento
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
                <div className="alert alert-danger text-center" role="alert">
                  Ha habido un error al consultar los eventos de este
                  emprendimiento, por favor intente nuevamente.
                </div>
              )}
            </CardBody>

            <CardBody>
              <Fragment>
                {/* <VentureEventsFiltersForm /> */}

                <Row>
                  <Col xs={12} sm={12}>
                    <Row>
                      <Col xl={3} md={3} sm={12}>
                        <Card>
                          <CardBody>
                            <Form className="d-flex gap-2">
                              <Row className="flex-grow-1">
                                <Col lg={12} className="mb-3">
                                  <label className="control-label">
                                    Buscar por coincidencia
                                  </label>
                                  <Input
                                    type="text"
                                    placeholder="Buscar por coincidencia"
                                    style={{ height: '37px' }}
                                  />
                                </Col>

                                <Col lg={12} className="mb-3">
                                  <label className="control-label">
                                    Categorías (Todas por defecto)
                                  </label>
                                  <Select
                                    isDisabled={false}
                                    value={[{ label: 'Área 1', value: 0 }]}
                                    isMulti={false}
                                    isClearable={true}
                                    isSearchable={false}
                                    onChange={(selected) => {
                                      console.log({ selected });
                                    }}
                                    options={[
                                      { label: 'Área 1', value: 0 },
                                      { label: 'Área 2', value: 1 },
                                      { label: 'Área 3', value: 2 },
                                      { label: 'Área 4', value: 3 },
                                      { label: 'Área 5', value: 4 },
                                    ]}
                                  ></Select>
                                </Col>
                              </Row>
                            </Form>

                            <Button color="success" className="font-16">
                              <i className="bx bx-filter fs-4 me-1" />
                              Filter
                            </Button>

                            <div id="external-events" className="mt-2">
                              <br />
                            </div>

                            <Row className="justify-content-center mt-5">
                              <img
                                src="/images/calendar.svg"
                                alt=""
                                className="img-fluid d-block"
                              />
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col xl={9}>
                        <Card>
                          <CardBody>
                            <Calendar
                              localizer={localizer}
                              events={calendarEvents}
                              startAccessor="start"
                              endAccessor="end"
                              style={{
                                height: '600px',
                                width: '100%',
                                overflow: 'auto',
                              }}
                              defaultView="month"
                              components={{
                                event: CustomEvent,
                              }}
                              onSelectEvent={(event: any) => {
                                setSelectedEvent(event);
                              }}
                              eventPropGetter={eventStyleGetter}
                              messages={{
                                today: 'Hoy',
                                previous: 'Anterior',
                                next: 'Siguiente',
                                month: 'Mes',
                                week: 'Semana',
                                day: 'Día',
                                agenda: 'Agenda',
                                date: 'Fecha',
                                time: 'Hora',
                                event: 'Evento',
                                noEventsInRange:
                                  'No hay eventos en este rango.',
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
  );
};

export default AdminVentureEventsCalendar;
