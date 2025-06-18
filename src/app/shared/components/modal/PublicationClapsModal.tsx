import { PublicationClap, VenturePublication } from 'echadospalante-domain';
import moment from 'moment';
import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import PublicationClapCard from '../card/PublicationClapCard';

export interface PublicationClapsModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  detail: VenturePublication;
}

const PublicationClapsModal: React.FC<PublicationClapsModalProps> = ({
  setShowModal,
  showModal,
  detail,
}) => {
  
  return (
    <Modal isOpen={showModal} toggle={() => setShowModal(false)} centered>
      <ModalHeader toggle={() => setShowModal(false)}>
        <i className="bx bx-like me-2"></i>
        Aplausos ({detail.claps.length})
      </ModalHeader>
      <ModalBody className="p-0">
        {detail.claps.length > 0 ? (
          <ListGroup flush>
            {detail.claps.map((clap) => (
              <ListGroupItem key={clap.id}>
                <PublicationClapCard clap={clap} />
              </ListGroupItem>
            ))}
          </ListGroup>
        ) : (
          <div className="text-center py-4">
            <i
              className="bx bx-like text-muted"
              style={{ fontSize: '3rem' }}
            ></i>
            <p className="text-muted mt-2 mb-0">Aún no hay aplausos</p>
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};

export default PublicationClapsModal;
