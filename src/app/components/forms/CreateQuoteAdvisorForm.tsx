/* eslint-disable @typescript-eslint/no-explicit-any */

import { useFormik } from "formik";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import * as Yup from "yup";

import {
  setGlobalAlert,
  SeverityLevel,
} from "../../config/redux/reducers/user-interface.reducer";
import { useAppDispatch } from "../../config/redux/store/store.config";
import useQuoteAdvisors from "../../modules/principal/commercial/hooks/useQuoteAdvisors";

type CreateQuoteAdvisorFormProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const CreateQuoteAdvisorForm = ({
  setActiveTab,
}: CreateQuoteAdvisorFormProps) => {
  const dispatch = useAppDispatch();
  const { createQuoteAdvisor } = useQuoteAdvisors({
    page: 0,
    size: 1,
    fetch: false,
  });

  const validation = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      //   city: "City",
      //   state: "",
      //   zip: "Zip",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Por favor ingrese los nombres"),
      lastName: Yup.string().required("Por favor ingrese los apellidos"),
      //   city: Yup.string().required("Please Enter Your City"),
      //   state: Yup.string().required("Please Enter Your State"),
      //   zip: Yup.string().required("Please Enter Your Zip"),
    }),
    onSubmit: (values) => {
      // createQuoteAdvisor({
      //   firstName: values.firstName,
      //   lastName: values.lastName,
      // });
    },
  });

  const handleCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    dispatch(
      setGlobalAlert({
        message: "La creación del asesor comercial ha sido cancelada",
        title: "Importante",
        timeout: 5000,
        severity: SeverityLevel.INFO,
      })
    );
    setActiveTab("1");
  };

  return (
    <Card>
      <CardBody>
        <h4 className="card-title py-3">
          Creación de Asesor Comercial para Cotizaciones
        </h4>

        <Form
          className="needs-validation"
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}
        >
          <Row>
            <Col md="6">
              <FormGroup className="mb-3">
                <Label htmlFor="validationCustom01">Nombres (*)</Label>
                <Input
                  name="firstName"
                  type="text"
                  className="form-control"
                  id="validationCustom01"
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
              </FormGroup>
            </Col>

            <Col md="6">
              <FormGroup className="mb-3">
                <Label htmlFor="validationCustom02">Apellidos (*)</Label>
                <Input
                  name="lastName"
                  type="text"
                  className="form-control"
                  id="validationCustom02"
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
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <FormGroup className="mb-3">
                <Label htmlFor="validationCustom04">State</Label>
                <Input
                  name="state"
                  placeholder="State"
                  type="text"
                  className="form-control"
                  id="validationCustom04"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  // value={validation.values.state || ""}
                  // invalid={
                  //   validation.touched.state && validation.errors.state
                  //     ? true
                  //     : false
                  // }
                />
                {/* {validation.touched.state && validation.errors.state ? (
                  <FormFeedback type="invalid">
                    {validation.errors.state}
                  </FormFeedback>
                ) : null} */}
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup className="mb-3">
                <Label htmlFor="validationCustom03">City</Label>
                <Input
                  name="city"
                  placeholder="City"
                  type="text"
                  className="form-control"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  // value={validation.values.city || ""}
                  // invalid={
                  //   validation.touched.city && validation.errors.city
                  //     ? true
                  //     : false
                  // }
                />
                {/* {validation.touched.city && validation.errors.city ? (
                  <FormFeedback type="invalid">
                    {validation.errors.city}
                  </FormFeedback>
                ) : null} */}
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup className="mb-3">
                <Label htmlFor="validationCustom05">Zip</Label>
                <Input
                  name="zip"
                  placeholder="Zip Code"
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  // value={validation.values.zip || ""}
                  // invalid={
                  //   validation.touched.zip && validation.errors.zip
                  //     ? true
                  //     : false
                  // }
                />
                {/* {validation.touched.zip && validation.errors.zip ? (
                  <FormFeedback type="invalid">
                    {validation.errors.zip}
                  </FormFeedback>
                ) : null} */}
              </FormGroup>
            </Col>
          </Row>

          <Button color="primary" type="submit">
            Guardar
          </Button>

          <Button
            onClick={handleCancel}
            color="danger"
            type="reset"
            className="m-1"
          >
            Cancelar
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default CreateQuoteAdvisorForm;
