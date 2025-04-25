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
} from "reactstrap";

import { VentureCategory } from "echadospalante-core";
import useEditVentureCategory from "../../../modules/admin/general/hooks/useEditVentureCategory";

type EditVentureCategoryModalProps = {
  show: boolean;
  onCloseClick: () => void;
  ventureCategory: VentureCategory;
  onSuccessfulEdit: () => void;
};

const EditVentureCategoryModal = ({
  show,
  onCloseClick,
  ventureCategory,
}: EditVentureCategoryModalProps) => {
  const { error, form } = useEditVentureCategory(ventureCategory);

  return (
    <Modal isOpen={show} toggle={onCloseClick}>
      <ModalHeader toggle={onCloseClick} tag="h4">
        Editar categoría de emprendimiento
      </ModalHeader>
      <ModalBody>
        <Form>
          <Row className="gx-4">
            <div className="px-2">
              {error && (
                <div className="alert alert-danger text-center" role="alert">
                  Error al actualizar la categoría, por favor intente
                  nuevamente.
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
                style={{ minHeight: "100px", maxHeight: "200px" }}
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
                color="success"
                className="float-end"
                onClick={form.submitForm}
              >
                Editar
              </Button>
            </Col>
          </Row>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditVentureCategoryModal;
