import React from 'react';

import { VentureEvent } from 'echadospalante-domain';
import { Link } from 'react-router-dom';

interface CurrentEventCardProps {
  event: VentureEvent;
}

const CurrentEventCard: React.FC<CurrentEventCardProps> = ({
  event,
}) => {
  const formatDate = (dateString: Date): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60),
    );

    if (diffInHours < 1) {
      return 'Hace pocos minutos';
    } else if (diffInHours < 24) {
      return `Hace ${diffInHours}h`;
    } else if (diffInHours < 48) {
      return 'Ayer';
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 7) {
        return `Hace ${diffInDays} días`;
      } else {
        return date.toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'short',
        });
      }
    }
  };

  return (
    <Link
      to={`/principal/emprendimientos/events/${event.id}`}
      className="list-group-item text-muted py-3 px-2 bg-light-subtle border rounded mb-1 highlighted-event__card"
      style={{ textDecoration: 'none' }}
    >
      <div className="d-flex align-items-start">
        <div className="me-3 position-relative">
          <img
            src={
              event.coverPhoto
            }
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

          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i
                className="mdi mdi-clock-outline text-success me-1"
                style={{ fontSize: '14px' }}
              ></i>
              <span className="font-size-12 text-success fw-bold">
                {formatDate(event.createdAt)}
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

export default CurrentEventCard;
