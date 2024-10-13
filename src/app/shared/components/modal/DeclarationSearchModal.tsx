import { useFormik } from "formik";
import {
  Card,
  CardBody,
  Col,
  FormFeedback,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import * as Yup from "yup";

import { QuoteAreaCreate } from "../../../modules/principal/ventures/domain/area";

type CreateDeclarationModal = {
  modal: boolean;
  toggleModal: () => void;
};

const DeclarationSearchModal = ({
  modal,
  toggleModal,
}: CreateDeclarationModal) => {
  const validation = useFormik<QuoteAreaCreate>({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(
          // El nombre solo puede contener letras, números, espacios y guiones medios y la letra ñ
          /^[a-zA-Z0-9ñÑ\s-]*$/,
          "El nombre solo puede contener letras, números, espacios y guiones medios"
        )
        .required("Por favor ingrese el código de consulta")
        .length(8, "El código debe tener 8 caracteres"),
    }),
    onSubmit: (values) => {
      console.log({ values });
      // createQuoteArea({
      //   name: values.name.trim(),
      // });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validation.handleChange(e);
  };

  return (
    <Modal
      isOpen={modal}
      role="dialog"
      autoFocus={true}
      fullscreen
      centered
      id="verificationModal"
      toggle={toggleModal}
    >
      <div className="modal-content">
        <ModalHeader toggle={toggleModal}>
          Consultar Declaración de Interés
        </ModalHeader>
        <ModalBody>
          <Row className="justify-content-center mt-lg-5">
            <Col xl="5" sm="8">
              <Card>
                <CardBody>
                  <div className="text-center">
                    <Row className="justify-content-center">
                      <Col lg="10">
                        <h4 className="mt-4 fw-semibold">
                          Consulta el Estado de tu Declaración de Interés
                        </h4>
                        <p className="text-muted mt-3">
                          Ingresa el código de consulta para ver el estado de tu
                          declaración de interés.
                        </p>

                        <div className="mt-4">
                          <FormGroup className="mb-3">
                            <Input
                              name="name"
                              type="text"
                              className="form-control"
                              id="validationCustom01"
                              onChange={(e) => handleInputChange(e)}
                              onBlur={validation.handleBlur}
                              value={validation.values.name || ""}
                              invalid={
                                validation.touched.name &&
                                validation.errors.name
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.name &&
                            validation.errors.name ? (
                              <FormFeedback
                                className="w-100 text-start"
                                type="invalid"
                              >
                                <p>{validation.errors.name}</p>
                              </FormFeedback>
                            ) : null}
                          </FormGroup>
                        </div>
                      </Col>
                    </Row>

                    <Row className="justify-content-center mt-5 mb-2">
                      <Col sm="6" xs="8">
                        <div>
                          <img
                            src="/images/landing/team.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default DeclarationSearchModal;
