import { Fragment } from "react";

import { useFormik } from "formik";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import SimpleBar from "simplebar-react";

import { useRegisterPreferences } from "../../../modules/auth/hooks/useRegister";
import VentureCategoryWidget from "../widgets/VentureCategoryWidget";

const UserPreferencesForm = () => {
  const { preferencesIds, togglePreference } = useRegisterPreferences();
  const {} = useFetchVentureCategories();

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
              item.name.toLowerCase().includes(form.values.search.toLowerCase())
            )
            .map((item) => (
              <Col
                lg={3}
                md={4}
                sm={2}
                onClick={() => togglePreference(item.id)}
              >
                <VentureCategoryWidget
                  name={item.name}
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
