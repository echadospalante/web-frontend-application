import { Card, CardBody, Input } from "reactstrap";

import Select from "react-select";
import { Venture } from "echadospalante-core";

import useVenturesFilters from "../../../modules/admin/general/hooks/useVenturesFilter";
import { PaginatedBody } from "../../../modules/principal/ventures/domain/api";
import departments from "../../data/geo/departments";

type VenturesFeedRightSidebarProps = {
  ventures: PaginatedBody<Venture>;
};

const VenturesFeedRightSidebar = ({
  ventures,
}: VenturesFeedRightSidebarProps) => {
  const { filters, setPage, setSearchTerm, setSize } = useVenturesFilters();

  return (
    <div>
      <Card>
        <CardBody className="p-4">
          <p className="text-muted">Busca por coincidencias</p>
          <Input
            type="text"
            onChange={({ target }) => setSearchTerm(target.value)}
            style={{ height: "37px" }}
            className=""
            placeholder="Buscar"
          />
          <hr className="my-4" />
          <div className="d-flex flex-wrap mb-3">
            <span className="text-muted">Verificados</span>
            <div className="btn-group w-100 pt-3" role="group">
              <input
                type="radio"
                className="btn-check w-100"
                id="btncheck4"
                autoComplete="off"
                defaultChecked
                name="verified"
              />
              <label className="btn btn-outline-primary" htmlFor="btncheck4">
                Todos
              </label>

              <input
                type="radio"
                className="btn-check w-100"
                id="btncheck5"
                autoComplete="off"
                name="verified"
              />
              <label className="btn btn-outline-primary" htmlFor="btncheck5">
                Verificados
              </label>

              <input
                type="radio"
                name="verified"
                className="btn-check w-100"
                id="btncheck6"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btncheck6">
                No verificados
              </label>
            </div>
          </div>
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
            <p className="text-muted">
              Categorías (Tus preferidas por defecto)
            </p>

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
          Se encontraron {ventures.total} emprendimientos basado en los filtros
          aplicados.
        </CardBody>
      </Card>
    </div>
  );
};

export default VenturesFeedRightSidebar;
