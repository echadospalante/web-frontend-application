import { Fragment } from "react/jsx-runtime";
import {
  Button,
  Card,
  CardBody,
  Container,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";

import AppSpinner from "../loader/Spinner";
import QuoteForm from "../content/QuoteForm";
import QuoteSteps from "../steps/QuoteSteps";
import useQuoteDetail from "../../../modules/principal/commercial/hooks/useQuoteDetail";

type DeleteModalProps = {
  quoteId: string;
  show: boolean;
  onCloseClick: () => void;
};

const QuoteDetailModal = ({
  quoteId,
  show,
  onCloseClick,
}: DeleteModalProps) => {
  const { quote, loading, error, fetchQuoteDetail } = useQuoteDetail(quoteId);

  return (
    // Fullscreen modal
    <Modal fullscreen isOpen={show} toggle={onCloseClick} centered={true}>
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
                  Detalle de Cotización
                </h5>
                <div className="flex-shrink-0">
                  <Button
                    type="button"
                    onClick={fetchQuoteDetail}
                    className="btn btn-light me-1"
                  >
                    <i className="mdi mdi-refresh"></i>
                  </Button>
                </div>
              </div>
            </CardBody>

            <CardBody>
              {error && (
                <div className="alert alert-danger text-center" role="alert">
                  Error al cargar el detalle de la cotización, por favor intente
                  de nuevo
                </div>
              )}

              {loading ? (
                <AppSpinner />
              ) : (
                <Fragment>
                  {
                    <Row>
                      <Container>
                        <QuoteSteps />
                      </Container>
                    </Row>
                  }

                  {
                    <Row>
                      <QuoteForm />
                    </Row>
                  }
                </Fragment>
              )}
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

export default QuoteDetailModal;
