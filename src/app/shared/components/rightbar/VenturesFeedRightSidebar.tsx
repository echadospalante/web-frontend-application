import { Link } from "react-router-dom";
import { Card, CardBody, Input } from "reactstrap";

import SimpleBar from "simplebar-react";
import {
  archiveData,
  categoriesData,
  popularPosts,
  tagsData,
} from "../../data/feed/feed";
import Select from "react-select";
import departments from "../../data/geo/departments";
import { Form, useFormik } from "formik";

const VenturesFeedRightSidebar = () => {
  // const form = useFormik({
  //   initialValues: {
  //     departmentId: [] as string[],
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });

  return (
    <div
      style={{
        position: "fixed",
        top: "95px",
      }}
    >
      <SimpleBar
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
          width: "370px",
        }}
      >
        {/* <Form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
            return false;
          }}
        ></Form> */}
        <Card>
          <CardBody className="p-4">
            <p className="text-muted">Busca por coincidencias</p>
            <Input
              type="text"
              style={{ height: "37px" }}
              className=""
              placeholder="Buscar"
            />
            <hr className="my-4" />
            <div>
              <p className="text-muted">
                Departamentos (Tu departamento de residencia defecto)
              </p>

              <Select
                value={[] as any}
                placeholder="Departamentos"
                isMulti={true}
                onChange={(value) => {
                  if (!value) return;
                }}
                options={departments
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(({ id, name }) => ({
                    label: name,
                    value: id,
                  }))}
                className="select2-selection"
              />
            </div>
            <div className="mt-4">
              <p className="text-muted">Categorías (Todas por defecto)</p>

              <Select
                value={[] as any}
                placeholder="Categorías"
                isMulti={true}
                onChange={(value) => {
                  if (!value) return;
                }}
                options={departments
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(({ id, name }) => ({
                    label: name,
                    value: id,
                  }))}
                className="select2-selection"
              />
            </div>
            <hr className="my-4" />
            Resumen de resultados por departamento...
            <br />
            Resumen de resultados por categoría...
          </CardBody>
        </Card>
        {/* </Form> */}
      </SimpleBar>
    </div>
  );
};

export default VenturesFeedRightSidebar;
