import { Modal, ModalBody, ModalHeader, Spinner } from "reactstrap";

type ModalLoadingProps = {
  message: string;
};

const ModalLoading = ({ message }: ModalLoadingProps) => {
  return (
    <Modal
      isOpen={true}
      role="dialog"
      autoFocus={true}
      centered
      data-toggle="modal"
    >
      <div>
        <ModalHeader className="border-bottom-0"></ModalHeader>
      </div>
      <ModalBody>
        <div className="text-center mb-3">
          <div className="avatar-md mx-auto mb-0">
            <Spinner color="primary" />
          </div>

          <p className="text-muted font-size-14 mt-0 mb-1">{message}</p>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalLoading;
