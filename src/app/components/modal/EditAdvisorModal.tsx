import {
  Col,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { QuoteAdvisor } from "../../modules/principal/commercial/domain/advisor";
import * as Yup from "yup";
import { useFormik } from "formik";
import countryCodes from "../../data/geo/country-codes";
import useQuoteAdvisors from "../../modules/principal/commercial/hooks/useQuoteAdvisors";

type EditAdvisorModalProps = {
  show: boolean;
  onCloseClick: () => void;
  advisor: QuoteAdvisor;
};

const EditAdvisorModal = ({
  show,
  onCloseClick,
  advisor,
}: EditAdvisorModalProps) => {
  const { editQuoteAdvisor } = useQuoteAdvisors({
    page: 0,
    size: 1,
    fetch: false,
  });
  const validation = useFormik<QuoteAdvisor>({
    initialValues: {
      id: advisor.id,
      firstName: advisor.firstName,
      lastName: advisor.lastName,
      identification: advisor.identification,
      phoneCode: advisor.phoneCode,
      phoneNumber: advisor.phoneNumber,
      createdAt: advisor.createdAt,
      updatedAt: advisor.updatedAt,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Por favor ingrese los nombres"),
      lastName: Yup.string().required("Por favor ingrese los apellidos"),
      identification: Yup.string().required(
        "Por favor ingrese la identificación"
      ),
      phoneCode: Yup.number().required("Por favor ingrese el código de país"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Solo se permiten números")
        .required("Por favor ingrese el número de teléfono"),
      createdAt: Yup.date().required("Por favor ingrese la fecha de creación"),
      updatedAt: Yup.date().required(
        "Por favor ingrese la fecha de actualización"
      ),
    }),
    onSubmit: (values) => {
      createQuoteAdvisor({
        firstName: values.firstName,
        lastName: values.lastName,
      });
      console.log({ values });
    },
  });
  return (
    <Modal isOpen={show} toggle={onCloseClick}>
      <ModalHeader toggle={onCloseClick} tag="h4">
        Editar Asesor
      </ModalHeader>
      <ModalBody>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}
        >
          <Row>
            <Col xs={12}>
              <div className="mb-3">
                <Label className="form-label">Nombres</Label>
                <Input
                  name="firstName"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.firstName || ""}
                  invalid={
                    validation.touched.firstName && validation.errors.firstName
                      ? true
                      : false
                  }
                />
                {validation.touched.firstName && validation.errors.firstName ? (
                  <FormFeedback type="invalid">
                    {validation.errors.firstName}
                  </FormFeedback>
                ) : null}
              </div>

              <div className="mb-3">
                <Label className="form-label">Apellidos</Label>
                <Input
                  name="lastName"
                  label="Designation"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.lastName || ""}
                  invalid={
                    validation.touched.lastName && validation.errors.lastName
                      ? true
                      : false
                  }
                />
                {validation.touched.lastName && validation.errors.lastName ? (
                  <FormFeedback type="invalid">
                    {validation.errors.lastName}
                  </FormFeedback>
                ) : null}
              </div>

              <div className="mb-3">
                <Label className="form-label">Identificación</Label>
                <Input
                  name="identification"
                  type="email"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.identification || ""}
                  invalid={
                    validation.touched.identification &&
                    validation.errors.identification
                      ? true
                      : false
                  }
                />
                {validation.touched.identification &&
                validation.errors.identification ? (
                  <FormFeedback type="invalid">
                    {validation.errors.identification}
                  </FormFeedback>
                ) : null}
              </div>

              <div className="mb-3">
                <Label className="form-label">Código telefónico</Label>
                <Input
                  name="phoneCode"
                  type="select"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.phoneCode || ""}
                  invalid={
                    validation.touched.phoneCode && validation.errors.phoneCode
                      ? true
                      : false
                  }
                >
                  {countryCodes.map((country) => (
                    <option
                      key={country.code}
                      value={parseInt(country.phoneCode)}
                    >
                      {country.name} (+{country.phoneCode})
                    </option>
                  ))}
                </Input>
                {validation.touched.phoneCode && validation.errors.phoneCode ? (
                  <FormFeedback type="invalid">
                    {validation.errors.phoneCode}
                  </FormFeedback>
                ) : null}
              </div>

              <div className="mb-3">
                <Label className="form-label">Número de Teléfono</Label>
                <Input
                  name="phoneNumber"
                  type="text"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.phoneNumber || ""}
                  invalid={
                    validation.touched.phoneNumber &&
                    validation.errors.phoneNumber
                      ? true
                      : false
                  }
                />
                {validation.touched.phoneNumber &&
                validation.errors.phoneNumber ? (
                  <FormFeedback type="invalid">
                    {validation.errors.phoneNumber}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="text-end">
                <button type="submit" className="btn btn-success save-user">
                  Save
                </button>
              </div>
            </Col>
          </Row>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditAdvisorModal;
