import Select from 'react-select';
import { Col, Row } from 'reactstrap';

import useVenturePublicationsFilters from '../../../modules/admin/general/hooks/useVenturePublicationsFilter';

const VenturePublicationsFiltersForm = () => {
  const { filters, setSearchTerm, setSize } = useVenturePublicationsFilters();

  return (
    <Row className="mb-2">
      <Col sm={12} md={6} lg={4}>
        <label className="control-label">Elementos por Página</label>
        <Select
          value={{
            label: filters.size + '',
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
            { label: '20', value: 20 },
            { label: '50', value: 50 },
            { label: '100', value: 100 },
          ]}
        ></Select>
      </Col>

      <Col lg={4} md={6} sm={12}>
        <label className="control-label">Búsqueda por Coincidencia</label>
        <input
          value={filters.search}
          style={{ height: '37px' }}
          onChange={({ target }) => setSearchTerm(target.value)}
          className="form-control"
          type="text"
        />
      </Col>
    </Row>
  );
};

export default VenturePublicationsFiltersForm;
