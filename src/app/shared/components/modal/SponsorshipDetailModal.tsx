import { Card, CardBody, Modal, ModalBody } from "reactstrap";

import "leaflet/dist/leaflet.css";

import { User, VentureSponsorship } from "echadospalante-core";
import SponsorCard from "../card/SponsorCard";

type SponsorshipDetailModalProps = {
  owner: User;
  sponsorship: VentureSponsorship;
  onCloseClick: () => void;
};

const SponsorshipDetailModal = ({
  owner,
  sponsorship,
  onCloseClick,
}: SponsorshipDetailModalProps) => {
  return (
    <Modal size="lg" isOpen={true} toggle={onCloseClick} centered={true}>
      <div className="modal-content">
        <ModalBody className="px-4 py-5 text-center">
          <button
            type="button"
            onClick={onCloseClick}
            className="btn-close position-absolute end-0 top-0 m-3"
          ></button>

          <Card>
            <CardBody className="border-bottom">
              <div className="d-flex align-items-center">
                <h5 className="mb-0 card-title flex-grow-1">
                  Detalle del sponsorshipo
                </h5>
              </div>
              <h2 className="mt-4">
                <SponsorCard sponsorship={sponsorship} />
              </h2>
            </CardBody>
          </Card>

          <div className="d-flex justify-content-end mb-0">
            <button
              type="button"
              className="btn btn-info"
              onClick={onCloseClick}
            >
              Cerrar
            </button>
          </div>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default SponsorshipDetailModal;
