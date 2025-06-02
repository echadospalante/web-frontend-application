import Select from 'react-select';
import { Col, Label, Row } from 'reactstrap';

import useFetchAllVentureCategories from '../../../modules/principal/account/hooks/useAllVentureCategories';
import useOwnedVenturesFilters from '../../../modules/admin/general/hooks/useOwnedVenturesFilter';
import AlertWithReload from '../alert/AlertWithReload';
import { useAppDispatch } from '../../../config/redux/store/store.config';
import { setOwnedVenturesFilters } from '../../../config/redux/reducers/principal/owned-ventures.reducer';

const OwnedVenturesFiltersForm = () => {
  const { filters, setSearchTerm, setSize } = useOwnedVenturesFilters();
  const dispatch = useAppDispatch();
  const {
    data: categories,
    error: errorCategories,
    loading: loadingCategories,
    retryFetch: fetchAllVentureCategories,
  } = useFetchAllVentureCategories();

  return (
    <Row className="mb-2">
      <Col lg={2} sm={3}>
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

      <Col lg={7} md={12} sm={12}>
        <Label htmlFor="categoriesIds">
          Categorías ({filters.categoriesIds.length})
        </Label>
        {errorCategories && (
          <AlertWithReload
            message="Ha habido un error al consultar las categorias, por favor intente nuevamente."
            onReload={fetchAllVentureCategories}
          />
        )}
        <Select
          id="categoriesIds"
          name="categoriesIds"
          value={filters.categoriesIds.map((id) => ({
            label: categories.find((c) => c.id === id)?.name,
            value: id,
          }))}
          closeMenuOnSelect={false}
          placeholder="Selecciona las categorias, maximo 10"
          isMulti
          isSearchable
          isLoading={loadingCategories}
          onChange={(values) => {
            console.log(values);
            dispatch(
              setOwnedVenturesFilters({
                ...filters,
                categoriesIds: values.map((option) => option.value),
              }),
            );
          }}
          options={categories.map(({ name, id }) => ({
            label: name,
            value: id,
          }))}
          className="select2-selection"
        />
      </Col>
    </Row>
  );
};

export default OwnedVenturesFiltersForm;
