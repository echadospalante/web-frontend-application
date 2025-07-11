import Select from 'react-select';
import { Col, Row } from 'reactstrap';

import useVentureCategoriesFilters from '../../../modules/admin/general/hooks/useVentureCategoriesFilter';

const VentureCategoriesFiltersForm = () => {
  const { filters, setSearchTerm, setSize } = useVentureCategoriesFilters();

  return (
    <Row className="mb-2">
      <Col sm={3} lg={2}>
        <label className="control-label">Elementos por Página</label>
        <Select
          className=""
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

      <Col lg={3} md={12} sm={12}>
        <label className="control-label">Búsqueda por Coincidencia</label>
        <input
          value={filters.search}
          onChange={({ target }) => setSearchTerm(target.value)}
          className="form-control"
          type="text"
        />
      </Col>
    </Row>
  );
};

export default VentureCategoriesFiltersForm;
