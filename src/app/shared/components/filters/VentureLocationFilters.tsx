import Select from 'react-select';
import { Label } from 'reactstrap';

import departments from '../../data/geo/departments';
import municipalities from '../../data/geo/municipalities';
import { useState } from 'react';
import useVenturesRightSidebar from '../../../modules/principal/ventures/hooks/useVenturesRightSidebar';

const VentureLocationFilters = () => {
  const { setMunicipalitiesIds, municipalitiesIds, activeDepartmentId, setActiveDepartmentId } = useVenturesRightSidebar()
  return (
    <>
      <div className="mt-3">
        <Label htmlFor="validationTooltip01">Departamentos</Label>
        <Select
          id="departmentId"
          name="departmentId"
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
            control: (base) => ({
              ...base,
              zIndex: 9999,
            }),
          }}
          menuPortalTarget={document.body}
          value={
            activeDepartmentId
              ? {
                  value: activeDepartmentId,
                  label: departments.find(({ id }) => id === activeDepartmentId)
                    ?.name,
                }
              : null
          }
          placeholder="Selecciona departamentos"
          isMulti={false}
          onChange={(value) => {
            if (!value) return;
            setActiveDepartmentId(value.value);
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

      <div className="mt-3">
        <Label htmlFor="validationTooltip01">Municipios</Label>
        <Select
          id="municipalities"
          value={
            activeDepartmentId
              ? municipalitiesIds
                  .map((municipalityId) =>
                    municipalities.find(({ id }) => id === municipalityId),
                  )
                  .filter((municipality) => municipality !== undefined)
                  .map(({ id, name }) => ({
                    value: id,
                    label: name,
                  }))
              : null
          }
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
            control: (base) => ({
              ...base,
              zIndex: 9999,
            }),
          }}
          menuPortalTarget={document.body}
          isDisabled={!activeDepartmentId}
          placeholder={activeDepartmentId ? "Selecciona municipios" : "Selecciona un departamento primero"}
          isMulti={true}
          name="municipalities"
          onChange={(values) => {
            const municipalityIds: number[] = values.map(({ value }) => value);
            setMunicipalitiesIds(municipalityIds);
          }}
          options={municipalities
            .filter(({ departmentId }) => departmentId === activeDepartmentId)
            .map(({ id, name }) => ({
              label: name,
              value: id,
            }))}
          className="select2-selection"
        />
      </div>
    </>
  );
};

export default VentureLocationFilters;
