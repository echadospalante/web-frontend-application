import Select from "react-select";
import { Col, Input, Row } from "reactstrap";

import useOwnedVenturesFilters from "../../../modules/admin/general/hooks/useOwnedVenturesFilter";

const OwnedVenturesFiltersForm = () => {
  const { filters, setSearchTerm, setSize } = useOwnedVenturesFilters();

  return (
    <Row className="mb-2">
      <Col sm={3} lg={2}>
        <label className="control-label">Elementos por Página</label>
        <Select
          className=""
          value={{
            label: filters.size + "",
            value: filters.size,
          }}
          isMulti={false}
          isSearchable={false}
          onChange={(selected) => {
            //   table.setPageIndex(0);
            //   table.setPageSize(Number(selected?.value));
            if (!selected) return;
            setSize(selected.value);

            //   setPagination({
            //     page: 0,
            //     size: selected?.value || 20,
            //   });
          }}
          options={[
            { label: "20", value: 20 },
            { label: "50", value: 50 },
            { label: "100", value: 100 },
          ]}
        ></Select>
      </Col>

      <Col lg={3} md={12} sm={12}>
        <label className="control-label">Búsqueda por Coincidencia</label>
        <Input
          style={{ height: "37px" }}
          value={filters.search}
          onChange={({ target }) => setSearchTerm(target.value)}
          className="form-control"
          type="text"
        />
      </Col>
    </Row>
  );
};

export default OwnedVenturesFiltersForm;
