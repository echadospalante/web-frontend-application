
import { VentureEvent } from 'echadospalante-domain';
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import UpcomingEventCard from '../card/UpcomingEventCard';
import CurrentEventCard from '../card/CurrentEventCard';

type HighlightedEventsModalProps = {
  items: VentureEvent[];
  type: 'upcoming' | 'current';
  display: boolean;
  toggle: () => void;
};

const HighlightedEventsModal = (props: HighlightedEventsModalProps) => {
  const { display, toggle, type, items } = props;

  return (
    <Modal size="md" isOpen={display} toggle={toggle}>
      <ModalHeader toggle={toggle} tag="h4">
        {type === 'upcoming' ? 'Próximos Eventos' : 'Eventos En Curso'}
      </ModalHeader>
      <ModalBody className="pt-0">
        <Row>
          <Col lg={12}>
          {type === 'current' ? 
            items.map((event) => (
              <CurrentEventCard key={event.id} event={event} />
            )
          ) : (
            items.map((event) => (
              <UpcomingEventCard key={event.id} event={event} />
            ))
          )}
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <div className="text-end">
              <Button onClick={toggle} color="danger" className="save-user">
                <i className="bx bx-x me-1"></i>
                Cerrar
              </Button>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default HighlightedEventsModal;
