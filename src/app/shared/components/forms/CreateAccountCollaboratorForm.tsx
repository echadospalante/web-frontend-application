/* eslint-disable @typescript-eslint/no-explicit-any */

import "flatpickr/dist/themes/material_blue.css";
import { useFormik } from "formik";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
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
} from "../../../config/redux/reducers/user-interface.reducer";
import { useAppDispatch } from "../../../config/redux/store/store.config";
import useQuoteAreas from "../../../modules/principal/ventures/hooks/useQuoteAreas";

type CreateAccountCollaboratorFormProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const CreateAccountCollaboratorForm = ({
  setActiveTab,
}: CreateAccountCollaboratorFormProps) => {
  const dispatch = useAppDispatch();

  const { createQuoteArea, existsByName } = useQuoteAreas({
    page: 0,
    size: 1,
    fetch: false,
  });

  // const validation = useFormik<QuoteAreaCreate>({
  const validation = useFormik<{ email: string }>({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Por favor ingrese un correo electrónico válido")
        .required("Por favor ingrese el correo electrónico"),
    }),
    onSubmit: (values) => {
      console.log({ values });
      // createQuoteArea({
      //   name: values.email.trim(),
      // });
    },
  });

  const handleCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    dispatch(
      setGlobalAlert({
        message: "La creación del colaborador ha sido cancelada",
        title: "Importante",
        timeout: 5000,
        severity: SeverityLevel.INFO,
      })
    );
    setActiveTab("1");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validation.handleChange(e);
  };

  return (
    <Card>
      <CardBody>
        <h4 className="card-title py-3">Creación de Colaborador</h4>

        <Form
          className="needs-validation"
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}
        >
          <Row>
            {/* {JSON.stringify({
              values: validation.values,
              exists: existsByName(validation.values.name || ""),
            })} */}
            <Col lg={6} md={12}>
              <FormGroup className="mb-3">
                <Label htmlFor="validationCustom01">
                  Correo electrónico (*)
                </Label>
                <Input
                  name="name"
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  onChange={(e) => handleInputChange(e)}
                  onBlur={validation.handleBlur}
                  value={validation.values.email || ""}
                  invalid={
                    validation.touched.email && validation.errors.email
                      ? true
                      : false
                  }
                />
                {validation.touched.email && validation.errors.email ? (
                  <FormFeedback type="invalid">
                    {validation.errors.email}
                  </FormFeedback>
                ) : null}
              </FormGroup>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <label className="control-label">Áreas</label>
              <Select
                className=""
                isDisabled={false}
                value={[{ label: "Todas", value: 0 }]}
                isMulti={true}
                isSearchable={false}
                onChange={(selected) => {
                  // table.setPageIndex(0);
                  console.log({ selected });
                }}
                options={[
                  { label: "Area 1", value: 25 },
                  { label: "Area 2", value: 50 },
                  { label: "Area 3", value: 100 },
                ]}
              ></Select>
            </Col>

            <Col lg={3} md={6} sm={12}>
              <label className="control-label mt-2 mb-0">Rango de Fecha</label>
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

export default CreateAccountCollaboratorForm;
