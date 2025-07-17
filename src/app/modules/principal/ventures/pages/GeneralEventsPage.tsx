/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from 'react';

import { Col, Container, Row } from 'reactstrap';

import { useSelector } from 'react-redux';
import {
  EventsViewMode,
  selectEvents,
} from '../../../../config/redux/reducers/principal/events.reducer';
import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import EventsCalendar from '../../../../shared/components/calendar/EventsCalendar';
import VentureEventsList from '../../../../shared/components/list/VentureEventsList';
import VentureEventsMap from '../../../../shared/components/map/EventsMap';
import EventsRightSidebar from '../../../../shared/components/rightbar/EventsRightSidebar';

const GeneralEventsPage = () => {
  const { filters } = useSelector(selectEvents);
  const { viewMode } = filters;

  return (
    <Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb
            title="Eventos"
            breadcrumbItem={
              viewMode === EventsViewMode.calendar
                ? 'Calendario'
                : viewMode === EventsViewMode.map
                  ? 'Mapa'
                  : 'Lista'
            }
          />

          <Row>
            {viewMode === EventsViewMode.calendar && (
              <Row>
                <Col lg={9}>
                  <EventsCalendar />
                </Col>

                <Col lg={3}>
                  <EventsRightSidebar
                    multipleMunicipalities={false}
                    dateRangeFilter={false}
                  />
                </Col>
              </Row>
            )}

            {viewMode === EventsViewMode.map && (
              <Row>
                <Col lg={9}>
                  <VentureEventsMap />
                </Col>
                <Col lg={3}>
                  <EventsRightSidebar
                    multipleMunicipalities={false}
                    dateRangeFilter
                  />
                </Col>
              </Row>
            )}

            {viewMode === EventsViewMode.feed && (
              <Row>
                <Col lg={9}>
                  <VentureEventsList />
                </Col>
                <Col lg={3}>
                  <EventsRightSidebar
                    multipleMunicipalities={false}
                    dateRangeFilter
                  />
                </Col>
              </Row>
            )}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default GeneralEventsPage;
