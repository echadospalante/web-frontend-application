import { Fragment } from 'react';

import { useFormik } from 'formik';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import SimpleBar from 'simplebar-react';

import { useRegisterPreferences } from '../../../modules/auth/hooks/useRegister';
import useFetchVentureCategories from '../../../modules/principal/ventures/hooks/useFetchVentureCategories';
import VentureCategoryWidget from '../widgets/VentureCategoryWidget';

const UserPreferencesForm = () => {
  const { preferencesIds, togglePreference } = useRegisterPreferences();
  const { data, isError, isLoading } = useFetchVentureCategories();

  // const [data, setData] = useState<VentureCategory[]>();

  const form = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="alert alert-danger" role="alert">
          Error al cargar las categorías de emprendimiento
        </div>
      </div>
    );
  }

  if (!data || data.items.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="alert alert-danger" role="alert">
          No hay categorías de emprendimiento disponibles
        </div>
      </div>
    );
  }

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
          maxHeight: '80vh',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <Row className="mt-4">
          {data.items
            // .filter((item) =>
            //   item.name.toLowerCase().includes(form.values.search.toLowerCase())
            // )
            .map((item) => (
              <Col
                lg={3}
                md={4}
                sm={2}
                onClick={() => togglePreference(item.id)}
              >
                <VentureCategoryWidget
                  name={item.name}
                  count={10}
                  percentageGrowth={10}
                  icon={'bx bx-user'}
                  backgroundColor={'success'}
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
