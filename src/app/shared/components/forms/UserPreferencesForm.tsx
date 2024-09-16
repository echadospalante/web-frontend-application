import { Fragment } from "react";

import { useFormik } from "formik";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import SimpleBar from "simplebar-react";

import { useRegisterPreferences } from "../../../modules/auth/hooks/useRegister";
import VentureCategoryWidget from "../widgets/VentureCategoryWidget";

const ventureCategories = [
  {
    id: 1,
    icon: "mdi mdi-tractor-variant",
    title: "Agroindustria",
    count: 124,
    percentage: 21,
  },
  {
    id: 2,
    icon: "mdi mdi-account-hard-hat",
    title: "Construcción",
    count: 231,
    percentage: 64,
  },
  {
    id: 3,
    icon: "mdi mdi-lightning-bolt",
    title: "Energía",
    count: 234,
    percentage: 14,
  },
  {
    id: 4,
    icon: "mdi mdi-devices",
    title: "Tecnología",
    count: 756,
    percentage: 45,
  },
  {
    id: 5,
    icon: "mdi mdi-bottle-tonic-plus-outline",
    title: "Salud",
    count: 786,
    percentage: 25,
  },
  {
    id: 6,
    icon: "mdi mdi-school-outline",
    title: "Educación",
    count: 645,
    percentage: 63,
  },
  {
    id: 7,
    icon: "mdi mdi-airplane",
    title: "Turismo",
    count: 345,
    percentage: 15,
  },
  {
    id: 8,
    icon: "mdi mdi-bus",
    title: "Transporte",
    count: 354,
    percentage: 27,
  },
  {
    id: 9,
    icon: "mdi mdi-finance",
    title: "Finanzas",
    count: 623,
    percentage: 38,
  },
  {
    id: 10,
    icon: "mdi mdi-cart",
    title: "Retail",
    count: 635,
    percentage: 72,
  },
  {
    id: 11,
    icon: "mdi mdi-factory",
    title: "Manufactura",
    count: 235,
    percentage: 62,
  },
  {
    id: 12,
    icon: "mdi mdi-toolbox-outline",
    title: "Servicios Profesionales",
    count: 634,
    percentage: 15,
  },
  {
    id: 13,
    icon: "mdi mdi-water",
    title: "Servicios Públicos",
    count: 432,
    percentage: 41,
  },
  {
    id: 14,
    icon: "mdi mdi-account-voice",
    title: "Servicios de Comunicación",
    count: 324,
    percentage: 12,
  },
  {
    id: 15,
    icon: "mdi mdi-cellphone-information",
    title: "Servicios de Información",
    count: 345,
    percentage: 11,
  },
  {
    id: 16,
    icon: "mdi mdi-movie-open-outline",
    title: "Servicios de Entretenimiento",
    count: 453,
    percentage: 65,
  },
  {
    id: 17,
    icon: "mdi mdi-home-city-outline",
    title: "Bienes Raíces",
    count: 234,
    percentage: 5,
  },
  {
    id: 18,
    icon: "mdi mdi-silverware-fork-knife",
    title: "Alimentación y Consumo",
    count: 354,
    percentage: 4,
  },
  {
    id: 19,
    icon: "mdi mdi-human-cane",
    title: "Seguros y Pensiones",
    count: 674,
    percentage: 34,
  },
  {
    id: 20,
    icon: "mdi mdi-earth-arrow-right",
    title: "Logística y Distribución",
    count: 655,
    percentage: 43,
  },
];

const UserPreferencesForm = () => {
  const { preferencesIds, togglePreference } = useRegisterPreferences();

  const form = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  return (
    <Fragment>
      <Form className="mt-3">
        <FormGroup>
          <Label for="search">Busca categorías por coincidencia:</Label>
          <Input
            type="text"
            name="search"
            id="search"
            placeholder="Busca aquí"
            onChange={form.handleChange}
          />
        </FormGroup>
      </Form>

      <SimpleBar
        style={{
          maxHeight: "80vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Row className="mt-4">
          {ventureCategories
            .filter((item) =>
              item.title
                .toLowerCase()
                .includes(form.values.search.toLowerCase())
            )
            .map((item) => (
              <Col
                lg={3}
                md={4}
                sm={2}
                onClick={() => togglePreference(item.id)}
              >
                <VentureCategoryWidget
                  name={item.title}
                  count={item.count}
                  percentageGrowth={item.percentage}
                  icon={item.icon}
                  backgroundColor={"success"}
                  checked={preferencesIds.includes(item.id)}
                />
              </Col>
            ))}
        </Row>
      </SimpleBar>
    </Fragment>
  );
};

export default UserPreferencesForm;
