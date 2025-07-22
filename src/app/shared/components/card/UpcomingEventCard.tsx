import React from 'react';

import { VentureEvent } from 'echadospalante-domain';
import { Link } from 'react-router-dom';

interface UpcomingEventCardProps {
  event: VentureEvent;
}

const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({ event }) => {
  return (
    <Link
      to={`/principal/emprendimientos/events/${event.id}`}
      title={event.description}
      className="list-group-item text-muted py-3 px-2 bg-light-subtle border border-success rounded mb-1 highlighted-event__card"
      style={{ textDecoration: 'none' }}
    >
      <div className="d-flex align-items-start">
        <div className="me-3 position-relative">
          <img
            src={event.coverPhoto}
            alt={event.title}
            className="avatar-lg d-block rounded"
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
        </div>
        <div className="flex-grow-1 overflow-hidden">
          <h6
            className="font-size-13 text-wrap mb-2 text-dark"
            title={event.description}
          >
            {event.description.length > 80
              ? `${event.description.substring(0, 80)}...`
              : event.description}
          </h6>

          <div className="d-flex flex-column justify-content-between align-items-start mb-2">
            <div className="d-flex align-items-center">
              <i
                className="mdi mdi-clock-outline text-success me-1"
                style={{ fontSize: '14px' }}
              ></i>
              <span className="font-size-12 text-success fw-bold">
                Desde:{' '}
                {new Date(event.datesAndHours[0].date).toLocaleDateString(
                  'es-CO',
                  {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  },
                )}{' '}
              </span>
            </div>
            <div className="d-flex align-items-center">
              <i
                className="mdi mdi-clock-outline text-success me-1"
                style={{ fontSize: '14px' }}
              ></i>
              <span className="font-size-12 text-success fw-bold">
                Hasta:{' '}
                {new Date(
                  event.datesAndHours[event.datesAndHours.length - 1].date,
                ).toLocaleDateString('es-CO', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}{' '}
              </span>
            </div>
          </div>
          <div>
            <Link
              className="font-size-12 text-decoration-none"
              to={`/principal/emprendimientos/${event.venture?.slug}`}
            >
              {event.venture?.name}
              <i className="mdi mdi-open-in-new ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UpcomingEventCard;
