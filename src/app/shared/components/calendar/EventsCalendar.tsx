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
    const eventId = clickedEvent.event._def.publicId;

    const event = events.find((e) => e.id === eventId);
    console.log('Clicked event:', event);
    if (event) {
      setSelectedEvent(event);
    }
  };

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
          {JSON.stringify(
            events.flatMap((event) => {
              event.datesAndHours.flatMap((dateAndHours) =>
                dateAndHours.workingRanges.map((range) => ({
                  id: event.id,
                  title: event.title,
                  start: new Date(dateAndHours.date + 'T' + range.start),
                  end: new Date(dateAndHours.date + 'T' + range.end),
                  className: 'bg-success text-white',
                  description: event.description,
                  coverPhoto: event.coverPhoto,
                  location: event.location,
                })),
              );
            }),
            null,
            2,
          )}
          
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
            events={[
              events.flatMap((event) => {
                event.datesAndHours.flatMap((dateAndHours) =>
                  dateAndHours.workingRanges.map((range) => ({
                    id: event.id,
                    title: event.title,
                    start: new Date(dateAndHours.date + 'T' + range.start),
                    end: new Date(dateAndHours.date + 'T' + range.end),
                    className: 'bg-success text-white',
                    description: event.description,
                    coverPhoto: event.coverPhoto,
                    location: event.location,
                  })),
                );
              }),
              // {
              //   id: '123',
              //   title: 'Evento de Ejemplo',
              //   start: new Date(),
              //   end: new Date(),
              //   className: 'bg-success text-white',
              //   description: 'Descripción del evento de ejemplo',
              //   coverPhoto:
              //     'https://via.placeholder.com/400x200?text=Evento+de+Ejemplo',
              //   location: {
              //     description: 'Lugar del evento',
              //     location: {
              //       coordinates: [4.60971, -74.08175],
              //     },
              //   },
              // },
            ]}
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
