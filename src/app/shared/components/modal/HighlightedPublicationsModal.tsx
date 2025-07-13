
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { VenturePublication } from 'echadospalante-domain';
import LatestPublicationCard from '../card/LatestPublicationCard';
import TrendingPublicationCard from '../card/TrendingPublicationCard';

type HighlightedPublicationsModalProps = {
  items: VenturePublication[];
  type: 'latest' | 'trending';
  display: boolean;
  toggle: () => void;
};

const HighlightedPublicationsModal = (props: HighlightedPublicationsModalProps) => {
  const { display, toggle, type } = props;

  return (
    <Modal size="md" isOpen={display} toggle={toggle}>
      <ModalHeader toggle={toggle} tag="h4">
        {type === 'latest' ? 'Publicaciones Recientes' : 'Publicaciones Populares'}
      </ModalHeader>
      <ModalBody className="pt-0">
        <Row>
          <Col lg={12}>
          {type === 'latest' ? 
            props.items.map((publication) => (
              <LatestPublicationCard key={publication.id} publication={publication} />
            )
          ) : (
            props.items.map((publication) => (
              <TrendingPublicationCard key={publication.id} publication={publication} />
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

export default HighlightedPublicationsModal;
