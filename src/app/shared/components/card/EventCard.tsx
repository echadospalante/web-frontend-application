import React from 'react';

import { VentureEvent } from 'echadospalante-domain';
import { Badge, Button, Card, CardBody, CardImg, Col, Row } from 'reactstrap';

export interface EventCardProps {
  event: VentureEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
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
  );
};

export default EventCard;
