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
} from "../../../config/redux/reducers/user-interface.reducer";
import { useAppDispatch } from "../../../config/redux/store/store.config";
import { QuoteAreaCreate } from "../../../modules/principal/ventures/domain/area";
import useQuoteAreas from "../../../modules/principal/ventures/hooks/useQuoteAreas";

type CreateQuoteAreaFormProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const CreateQuoteAreaForm = ({ setActiveTab }: CreateQuoteAreaFormProps) => {
  const dispatch = useAppDispatch();

  const { createQuoteArea, existsByName } = useQuoteAreas({
    page: 0,
    size: 1,
    fetch: false,
  });

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
        .required("Por favor ingrese el nombre")
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(50, "El nombre debe tener máximo 50 caracteres")
        .test("exists", "El área comercial ya existe", async (value) => {
          if (value) {
            const exists = await existsByName(value.trim());
            return !exists;
          }
          return false;
        }),
    }),
    onSubmit: (values) => {
      createQuoteArea({
        name: values.name.trim(),
      });
    },
  });

  const handleCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    dispatch(
      setGlobalAlert({
        message: "La creación del área comercial ha sido cancelada",
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
        <h4 className="card-title py-3">
          Creación de Área Comercial para Cotizaciones
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
            {/* {JSON.stringify({
              values: validation.values,
              exists: existsByName(validation.values.name || ""),
            })} */}
            <Col md="12">
              <FormGroup className="mb-3">
                <Label htmlFor="validationCustom01">Nombre (*)</Label>
                <Input
                  name="name"
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  onChange={(e) => handleInputChange(e)}
                  onBlur={validation.handleBlur}
                  value={validation.values.name || ""}
                  invalid={
                    validation.touched.name && validation.errors.name
                      ? true
                      : false
                  }
                />
                {validation.touched.name && validation.errors.name ? (
                  <FormFeedback type="invalid">
                    {validation.errors.name}
                  </FormFeedback>
                ) : null}
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

export default CreateQuoteAreaForm;
