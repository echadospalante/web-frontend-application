import { Fragment, useState } from "react";

import { useFormik } from "formik";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { Col, Form, Input, Label, Row } from "reactstrap";
import * as Yup from "yup";

import countries from "../../data/geo/countries";
import countryCodes from "../../data/geo/country-codes";

// Gender: M, F, O --> Type Enum
// Birthdate: Date
// Colombian department: Antioquia, Atlántico, Bolívar, Boyacá, Caldas, Caquetá, Casanare, Cauca, Cesar, Chocó, Córdoba, Cundinamarca, Guainía, Guaviare, Huila, La Guajira, Magdalena, Meta, Nariño, Norte de Santander, Putumayo, Quindío, Risaralda, San Andrés y Providencia, Santander, Sucre, Tolima, Valle del Cauca, Vaupés, Vichada
// Colombian city: Medellín, Barranquilla, Cartagena, Tunja, Manizales, Florencia, Yopal, Popayán, Valledupar, Quibdó, Montería, Bogotá, Inírida, San José del Guaviare, Neiva, Riohacha, Santa Marta, Villavicencio, Pasto, Cúcuta, Mocoa, Armenia, Pereira, San Andrés, Bucaramanga, Sincelejo, Ibagué, Cali, Mitú, Puerto Carreño

const userSchema = Yup.object().shape({
  gender: Yup.string()
    .required("Este campo es requerido")
    .oneOf(["M", "F", "O"]),
  birthDate: Yup.date().required("Este campo es requerido"),
  department: Yup.string().required("Este campo es requerido").oneOf([]),
  municipality: Yup.string().required("Este campo es requerido").oneOf([]),
});

const RegisterUserForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form = useFormik({
    initialValues: {
      gender: "",
      birthDate: "",
      department: "",
      municipality: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log({ values });
    },
  });
  const [selectedLangs] = useState([
    {
      id: 1,
      name: "Español",
    },
    {
      id: 2,
      name: "Inglés",
    },
  ]);

  return (
    <Fragment>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
          return false;
        }}
        className="contact-form needs-validation animate__animated animate__zoomIn"
      >
        <Row className="gx-4">
          <Col md={6}>
            <Label htmlFor="validationTooltip01">Género *</Label>
            <Select
              id="gender"
              value={null}
              placeholder="Género"
              isMulti={false}
              name="gender"
              onChange={(value) => {
                console.log({ value });
              }}
              options={[
                { label: "Masculino", value: "M" },
                { label: "Femenino", value: "F" },
                { label: "Otro", value: "O" },
              ]}
              className="select2-selection"
              styles={{
                control: (styles) => ({
                  ...styles,
                }),
              }}
            />
            {form.touched.gender && form.errors.gender && (
              <p className="bg-danger position-absolute form__invalid-feedback">
                {form.errors.gender}
              </p>
            )}
          </Col>

          <Col md={6}>
            <Label htmlFor="validationTooltip01">Fecha de nacimiento *</Label>
            <Flatpickr
              className="form-control d-block"
              placeholder="dd M,yyyy"
              options={{
                mode: "range",
                dateFormat: "Y-m-d",
                minDate: "today",
                maxDate: undefined,
                locale: "es",
              }}
            />
            {form.touched.birthDate && form.errors.birthDate && (
              <p className="bg-danger position-absolute form__invalid-feedback">
                {form.errors.birthDate}
              </p>
            )}
          </Col>
        </Row>

        <Row className="mt-4 gx-4">
          <Col md={6}>
            <Label htmlFor="validationTooltip01">
              Departamento de Residencia *
            </Label>
            <Select
              id="department"
              value={null}
              placeholder="Departmento de residencia"
              isMulti={false}
              name="department"
              onChange={(value) => {
                console.log({ value });
              }}
              options={[
                { label: "Masculino", value: "M" },
                { label: "Femenino", value: "F" },
                { label: "Otro", value: "O" },
              ]}
              className="select2-selection"
              styles={{
                control: (styles) => ({
                  ...styles,
                }),
              }}
            />
            {form.touched.department && form.errors.department && (
              <p className="bg-danger position-absolute form__invalid-feedback">
                {form.errors.department}
              </p>
            )}
          </Col>

          <Col md={6}>
            <Label htmlFor="validationTooltip01">
              Municipio de residencia *
            </Label>
            <Select
              id="municipality"
              value={null}
              placeholder="municipality de residencia"
              isMulti={false}
              name="Municipio"
              onChange={(value) => {
                console.log({ value });
              }}
              options={[
                { label: "Masculino", value: "M" },
                { label: "Femenino", value: "F" },
                { label: "Otro", value: "O" },
              ]}
              className="select2-selection"
              styles={{
                control: (styles) => ({
                  ...styles,
                }),
              }}
            />
            {form.touched.municipality && form.errors.municipality && (
              <p className="bg-danger position-absolute form__invalid-feedback">
                {form.errors.municipality}
              </p>
            )}
          </Col>
        </Row>

        <Row className="mt-4 gx-4">
          <p>
            <span className="fw-bold">Nota:</span> Recuerda que usaremos esta
            información única y exclusivamente para mejorar la calidad de las
            recomendaciones de emprendimientos, eventos, publicaciones y
            noticias.
          </p>
          <hr />
          <Label>
            <Input type="checkbox" id="terms" className="me-2" />
            Acepto los términos y condiciones expresados en
            <a target="_blank" href="/politica-privacidad">
              {" "}
              la política de privacidad{" "}
            </a>
          </Label>
        </Row>
      </Form>
    </Fragment>
  );
};

export default RegisterUserForm;
