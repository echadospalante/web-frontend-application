import {
  Button,
  Col,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'reactstrap';

import useCreateVentureCategory from '../../../modules/admin/general/hooks/useCreateVentureCategory';

type CreateVentureCategoryModalProps = {
  show: boolean;
  onCloseClick: () => void;
  onSuccessfulCreate: () => void;
};

const CreateVentureCategoryModal = ({
  show,
  onCloseClick,
  onSuccessfulCreate,
}: CreateVentureCategoryModalProps) => {
  const { error, handleSubmit, form } = useCreateVentureCategory();

  const handleCreateCategory = () => {
    return handleSubmit().then(() => {
      onSuccessfulCreate();
    });
  };

  return (
    <Modal isOpen={show} toggle={onCloseClick}>
      <ModalHeader toggle={onCloseClick} tag="h4">
        Crear categoría de emprendimiento
      </ModalHeader>
      <ModalBody>
        <Form>
          <Row className="gx-4">
            <div className="px-2">
              {error && (
                <div className="alert alert-danger text-center" role="alert">
                  Error al crear la categoría, por favor intente nuevamente.
                </div>
              )}
            </div>

            <Col md={12} className="mb-3">
              <Label htmlFor="validationTooltip01">Nombre</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={form.values.name}
                onChange={form.handleChange}
                invalid={!!form.errors.name}
              ></Input>
            </Col>

            <Col md={12} className="mb-3">
              <Label htmlFor="validationTooltip01">Descripción</Label>

              <Input
                type="textarea"
                name="description"
                style={{ minHeight: '100px', maxHeight: '200px' }}
                id="description"
                value={form.values.description}
                onChange={form.handleChange}
                invalid={!!form.errors.description}
              ></Input>
            </Col>
          </Row>

          <Row>
            <Col>
              <hr />
              <Button
                disabled={form.isValid || form.isSubmitting}
                color="success"
                className="float-end"
                onClick={handleCreateCategory}
              >
                Crear
              </Button>
            </Col>
          </Row>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default CreateVentureCategoryModal;
