import { Fragment } from 'react';

import Select from 'react-select';
import { Col, Row } from 'reactstrap';

import useUsersFilters from '../../../modules/admin/general/hooks/useUsersFilters';
import useRoles from '../../../modules/auth/hooks/useRoles';
import { genders } from '../../data/misc/genders';

const UsersFiltersForm = () => {
  const { error: errorRoles, loading: loadingRoles, roles } = useRoles();
  const { filters, setRole, setGender, setSearchTerm, setSize } =
    useUsersFilters();

  return (
    <Fragment>
      {errorRoles && (
        <div className="alert alert-danger text-center" role="alert">
          Ha habido un error al cargar los roles, por favor intente nuevamente.
        </div>
      )}

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

        <Col sm={6} lg={3}>
          <label className="control-label">Role (Todos por defecto)</label>
          <Select
            className=""
            isDisabled={loadingRoles}
            value={
              filters.role
                ? {
                    label: roles.find((r) => r.name === filters.role)?.label,
                    value: filters.role,
                  }
                : null
            }
            isMulti={false}
            isSearchable={false}
            onChange={(selected) => {
              //   table.setPageIndex(0);
              if (!selected) return;
              setRole(selected.value);
            }}
            options={roles.map(({ label, name }) => ({
              label,
              value: name,
            }))}
          ></Select>
        </Col>

        <Col sm={6} lg={3}>
          <label className="control-label">Género (Todos por defecto)</label>
          <Select
            className=""
            value={
              filters.gender
                ? {
                    label:
                      genders.find((r) => r.value === filters.gender)?.label ||
                      '',
                    value: filters.gender as 'M' | 'F' | 'O' | null,
                  }
                : null
            }
            isMulti={false}
            isSearchable={false}
            onChange={(selected) => {
              //   table.setPageIndex(0);
              if (!selected) return;
              setGender(selected.value as 'M' | 'F' | 'O' | null);
            }}
            options={[
              ...genders.map((g) => ({
                label: g.label,
                value: g.value as 'M' | 'F' | 'O' | null,
              })),
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
    </Fragment>
  );
};

export default UsersFiltersForm;
