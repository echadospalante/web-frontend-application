import { Modal, ModalBody } from 'reactstrap';
import AlertWithReload from '../alert/AlertWithReload';

type DeleteModalProps = {
  onCloseClick: () => void;
  onDeleteClick: () => void;
  show: boolean;
  title: string;
  showDeletedItems?: boolean;
  deletedItems?: string[];
  imageSrc?: string;
  loading?: boolean;
  error?: boolean;
};

const DeleteModal = ({
  show,
  onDeleteClick,
  onCloseClick,
  title,
  loading = false,
  error = false,
  deletedItems = [],
  showDeletedItems = false,
  imageSrc,
}: DeleteModalProps) => {
  return (
    <Modal size="md" isOpen={show} toggle={onCloseClick} centered={true}>
      <div className="modal-content">
        <ModalBody className="px-4 py-5 text-center">
          {imageSrc && (
            <div className="mb-4">
              <img
                src={imageSrc}
                alt="deleted"
                className="img-fluid rounded-3 w-50"
              />
            </div>
          )}

          <button
            type="button"
            onClick={onCloseClick}
            className="btn-close position-absolute end-0 top-0 m-3"
          ></button>
          <div className="avatar-sm mb-4 mx-auto">
            <div className="avatar-title bg-danger text-danger bg-opacity-10 font-size-20 rounded-3">
              <i className="mdi mdi-trash-can-outline"></i>
            </div>
          </div>
          <p className="text-muted font-size-16 mb-4">{title}</p>

          {showDeletedItems && deletedItems.length > 0 ? (
            <div className="text-muted">
              <span className="fw-bold">Esto es lo que sucederá</span>
              <ul className="list-unstyled mt-1 mb-4">
                {deletedItems.map((value, i) => (
                  <li key={i}>
                    {' '}
                    <i className="mdi mdi-chevron-right fw-medium text-danger"></i>{' '}
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div>
            {error && (
              <div className="m-3">
                <AlertWithReload
                  message={`Error al eliminar, intente de nuevo.`}
                  onReload={() => {}}
                />
              </div>
            )}
          </div>
          <div className="hstack gap-2 justify-content-center mb-0">
            <button
              type="button"
              className="btn btn-danger"
              onClick={onDeleteClick}
              disabled={loading}
            >
              {loading ? 'Eliminando...' : 'Eliminar'}
              {loading ? <i className="bx bx-loader bx-spin mx-1"></i> : <></>}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCloseClick}
              disabled={loading}
            >
              Cancelar
            </button>
          </div>
          <p className="text-warning mt-3">
            Tenga en cuenta que esta acción es irreversible.
          </p>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default DeleteModal;
