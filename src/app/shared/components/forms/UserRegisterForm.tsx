import { Fragment } from "react";

import Select from "react-select";
import { Col, Form, Input, Label, Row } from "reactstrap";
import departments from "../../data/geo/departments";
import { useRegisterUserInfo } from "../../../modules/auth/hooks/useRegister";

const genders = [
  { label: "Masculino", value: "M" },
  { label: "Femenino", value: "F" },
  { label: "Otro", value: "O" },
];

const UserRegisterForm = () => {
  const { form } = useRegisterUserInfo();
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
              value={
                form.values.gender
                  ? {
                      label: genders.find((g) => g.value === form.values.gender)
                        ?.label,
                      value: form.values.gender,
                    }
                  : null
              }
              placeholder="Género"
              isMulti={false}
              name="gender"
              onChange={(value) => {
                if (!value) return;
                form.setFieldValue("gender", value.value);
              }}
              options={genders}
              className="select2-selection"
            />
            {form.touched.gender && form.errors.gender && (
              <p className="bg-danger position-absolute form__invalid-feedback">
                {form.errors.gender}
              </p>
            )}
          </Col>

          <Col md={6}>
            <Label htmlFor="validationTooltip01">Fecha de nacimiento *</Label>
            <Input
              type="date"
              name="birthDate"
              id="birthDate"
              placeholder="Fecha de nacimiento"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
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
              id="departmentId"
              name="departmentId"
              value={
                form.values.departmentId
                  ? {
                      value: form.values.departmentId,
                      label: departments.find(
                        (d) => d.id === form.values.departmentId
                      )?.name,
                    }
                  : null
              }
              placeholder="Departamento de residencia"
              isMulti={false}
              onChange={(value) => {
                if (!value) return;
                form.setFieldValue("departmentId", value.value);
                form.setFieldValue("municipalityId", 0);
              }}
              options={departments
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(({ id, name }) => ({
                  label: name,
                  value: id,
                }))}
              className="select2-selection"
            />
            {form.touched.departmentId && form.errors.departmentId && (
              <p className="bg-danger position-absolute form__invalid-feedback">
                {form.errors.departmentId}
              </p>
            )}
          </Col>

          <Col md={6}>
            <Label htmlFor="validationTooltip01">
              Municipio de residencia *
            </Label>
            <Select
              id="municipality"
              value={
                form.values.municipalityId
                  ? {
                      value: form.values.municipalityId,
                      label: departments
                        .find((d) => d.id === form.values.departmentId)
                        ?.items.find((i) => i.id === form.values.municipalityId)
                        ?.name,
                    }
                  : null
              }
              placeholder="Municipio de residencia"
              isMulti={false}
              name="municipality"
              onChange={(value) => {
                if (!value) return;
                form.setFieldValue("municipalityId", value.value);
              }}
              options={departments
                .find((d) => d.id === form.values.departmentId)
                ?.items.map(({ id, name }) => ({
                  label: name,
                  value: id,
                }))}
              className="select2-selection"
            />
            {form.touched.municipalityId && form.errors.municipalityId && (
              <p className="bg-danger position-absolute form__invalid-feedback">
                {form.errors.municipalityId}
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
            <Input
              type="checkbox"
              id="acceptedTerms"
              className="me-2"
              checked={form.values.acceptedTerms}
              onChange={form.handleChange}
              name="acceptedTerms"
            />
            Acepto los términos y condiciones expresados en
            <a target="_blank" href="/politica-privacidad">
              {" "}
              la política de privacidad{" "}
            </a>
            {form.touched.acceptedTerms && form.errors.acceptedTerms && (
              <p className="bg-danger position-absolute form__invalid-feedback">
                {form.errors.acceptedTerms}
              </p>
            )}
          </Label>
        </Row>
      </Form>
    </Fragment>
  );
};

export default UserRegisterForm;
