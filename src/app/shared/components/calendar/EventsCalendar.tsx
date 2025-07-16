import { useState } from 'react';

import BootstrapTheme from '@fullcalendar/bootstrap';
import { EventClickArg } from '@fullcalendar/core/index.js';
import esLocale from '@fullcalendar/core/locales/es';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import { VentureEvent } from 'echadospalante-domain';
import { Card, CardBody } from 'reactstrap';

import useFetchEvents from '../../../modules/principal/ventures/hooks/useFetchEvents';
import EventDetailModal from '../modal/EventDetailModal';

export interface EventsCalendarProps {
  events: VentureEvent[];
}

const EventsCalendar: React.FC = () => {
  const { total, isLoading, isError, items: events } = useFetchEvents();

  const [selectedEvent, setSelectedEvent] = useState<VentureEvent | null>(null);

  const handleEventClick = (clickedEvent: EventClickArg) => {
    console.log(clickedEvent);

    const event = clickedEvent.event._def.extendedProps.event as VentureEvent;

    const foundEvent = events.find((e) => e.id === event.id);
    console.log({ foundEvent });
    console.log('Clicked event:', foundEvent);
    if (foundEvent) {
      setSelectedEvent(foundEvent);
    }
  };

  const eventSlots = events.flatMap((ev) =>
    ev.datesAndHours.flatMap((dah) =>
      dah.workingRanges.map((range) => ({
        id: ev.id,
        event: ev,
        title: ev.title,
        className: 'bg-success',
        start: new Date(dah.date + 'T' + range.start),
        end: new Date(dah.date + 'T' + range.end),
      })),
    ),
  );

  return (
    <>
      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          toggleModal={() => setSelectedEvent(null)}
        />
      )}

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
              right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek',
            }}
            locale={esLocale}
            events={eventSlots}
            editable={false}
            droppable={false}
            selectable={true}
            eventClick={handleEventClick}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default EventsCalendar;
