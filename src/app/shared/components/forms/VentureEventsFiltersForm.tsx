import Flatpickr from "react-flatpickr";
import { Col, Row } from "reactstrap";

import useVentureEventsFilters from "../../../modules/admin/general/hooks/useVentureEventsFilter";

const VentureEventsFiltersForm = () => {
  const { filters, setFrom, setTo, setSearchTerm } = useVentureEventsFilters();

  return (
    <Row className="mb-2">
      <Col sm={12} md={6} lg={4}>
        <label className="control-label">Rango de fecha</label>
        <Flatpickr
          value={filters.from} // Assuming filters has `from` date
          onChange={(selectedDates) => setFrom(selectedDates[0])} // Adjust based on `useVentureEventsFilters` behavior
          options={{
            dateFormat: "Y-m-d",
            mode: "range",
            onChange: (selectedDates) => {
              setFrom(selectedDates[0]);
              setTo(selectedDates[1]);
            },
          }}
          className="form-control"
          style={{ height: "37px" }}
        />
      </Col>

      <Col lg={4} md={6} sm={12}>
        <label className="control-label">Búsqueda por Coincidencia</label>
        <input
          value={filters.search}
          style={{ height: "37px" }}
          onChange={({ target }) => setSearchTerm(target.value)}
          className="form-control"
          type="text"
        />
      </Col>
    </Row>
  );
};

export default VentureEventsFiltersForm;
