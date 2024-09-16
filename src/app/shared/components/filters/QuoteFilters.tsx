/* eslint-disable @typescript-eslint/no-explicit-any */

import "leaflet/dist/leaflet.css";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { Col, Row } from "reactstrap";

import "flatpickr/dist/themes/material_blue.css";

import { QuoteAdvisor } from "../../../modules/principal/commercial/domain/advisor";
import { QuoteState } from "../../../modules/principal/commercial/domain/state";
import useQuoteAdvisors from "../../../modules/principal/commercial/hooks/useQuoteAdvisors";
import useQuoteAreas from "../../../modules/principal/commercial/hooks/useQuoteAreas";
import useQuoteFilters from "../../../modules/principal/commercial/hooks/useQuoteFilters";

const QuotesFilter = () => {
  const {
    filters,
    handleChangeAreas,
    handleChangeAdvisors,
    handleChangeStates,
    handleChangeDateRange,
    handleChangeSearch,
  } = useQuoteFilters();

  const {
    items: allAreas,
    loading: loadingAreas,
    error: errorAreas,
  } = useQuoteAreas({
    page: 0,
    size: 10,
    fetch: true,
  });

  const {
    items: allAdvisors,
    loading: loadingAdvisors,
    error: errorAdvisors,
  } = useQuoteAdvisors({ page: 0, size: 10, fetch: true });

  const { search, areas, advisors, dateRange, states } = filters;

  return (
    <Row>
      <Col xl={12} md={12} sm={12}>
        {errorAreas && (
          <div className="alert alert-danger text-center" role="alert">
            Error al cargar las áreas, por favor intente nuevamente.
          </div>
        )}
        {errorAdvisors && (
          <div className="alert alert-danger text-center" role="alert">
            Error al cargar los asesores, por favor intente nuevamente.
          </div>
        )}
      </Col>

      <Col lg={4} md={12} sm={12}>
        <label className="control-label mt-2 mb-0">
          Búsqueda por Coincidencia
        </label>

        <input
          className="form-control"
          type="text"
          onChange={handleChangeSearch}
        />
      </Col>

      <Col lg={4} md={12} sm={12}>
        <label className="control-label mt-2 mb-0">
          Áreas (Todas por defecto)
        </label>
        <Select
          value={areas.map(({ id, name }) => ({
            label: name,
            value: id,
          }))}
          closeMenuOnSelect={false}
          placeholder="Selecciona uno o más áreas"
          isMulti={true}
          isSearchable={true}
          isLoading={loadingAreas}
          onChange={(values) =>
            handleChangeAreas(
              values.map(({ label, value }) => ({
                id: value,
                name: label,
              }))
            )
          }
          options={[
            {
              options: [
                ...allAreas.map(({ id, name }) => ({
                  value: id,
                  label: name,
                })),
              ],
            },
          ]}
          className="select2-selection"
        />
      </Col>

      <Col lg={4} md={12} sm={12}>
        <label className="control-label mt-2 mb-0">
          Asesores (Todos por defecto)
        </label>
        <Select
          value={advisors.map(({ id, firstName, lastName }) => ({
            label: `${firstName} ${lastName}`,
            value: id,
          }))}
          closeMenuOnSelect={false}
          placeholder="Selecciona uno o más asesores"
          isMulti={true}
          isSearchable={true}
          isLoading={loadingAdvisors}
          onChange={(values) => {
            const selectedAdvisor = values
              .map(({ value }) => allAdvisors.find(({ id }) => id === value))
              .filter(Boolean) as QuoteAdvisor[];
            handleChangeAdvisors(selectedAdvisor);
          }}
          options={[
            {
              options: [
                ...allAdvisors.map(({ id, firstName, lastName }) => ({
                  label: `${firstName} ${lastName}`,
                  value: id,
                })),
              ],
            },
          ]}
          className="select2-selection"
        />
      </Col>

      <Col lg={4} md={12} sm={12}>
        <label className="control-label mt-2 mb-0">
          Estados (Todos por defecto)
        </label>
        <Select
          value={states.map((state) => ({
            value: state as QuoteState,
            label: QuoteState[
              state.toString() as keyof typeof QuoteState
            ].replace("_", " "),
          }))}
          isMulti={true}
          placeholder="Selecciona uno o más estados"
          onChange={(values) =>
            handleChangeStates(values.map(({ value }) => value))
          }
          options={[
            {
              options: [
                ...Object.keys(QuoteState).map((state) => ({
                  label: QuoteState[state as keyof typeof QuoteState].replace(
                    "_",
                    " "
                  ),
                  value: state as QuoteState,
                })),
              ],
            },
          ]}
          className="select2-selection"
        />
      </Col>

      <Col lg={4} md={12} sm={12}>
        <label className="control-label mt-2 mb-0">Rango de Fecha</label>
        <Flatpickr
          className="form-control d-block"
          placeholder="dd M,yyyy"
          options={{
            mode: "range",
            dateFormat: "Y-m-d",
            maxDate: "today",
          }}
        />
      </Col>

      <Col lg={2} md={6} sm={6}>
        <label className="control-label mt-2 mb-0">Presupuesto Desde</label>

        <input
          className="form-control"
          type="text"
          onChange={handleChangeSearch}
        />
      </Col>

      <Col lg={2} md={6} sm={6}>
        <label className="control-label mt-2 mb-0">Presupuesto Hasta</label>

        <input
          className="form-control"
          type="text"
          onChange={handleChangeSearch}
        />
      </Col>
      {/* <Col lg={4} md={12} sm={12}>
        <Row className="my-0 bg-danger py-0">
        </Row>
      </Col> */}
    </Row>
  );
};

export default QuotesFilter;
