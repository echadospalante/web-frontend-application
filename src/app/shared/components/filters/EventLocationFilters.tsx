import React from 'react';

import Select, { MultiValue } from 'react-select';
import { Label } from 'reactstrap';

import departments from '../../data/geo/departments';
import municipalities from '../../data/geo/municipalities';
import useEventsRightSidebar from '../../../modules/principal/ventures/hooks/useEventsRightSidebar';

export interface EventLocationFiltersProps {
  multipleMunicipalities?: boolean;
}

const EventLocationFilters: React.FC<EventLocationFiltersProps> = ({
  multipleMunicipalities,
}) => {
  const {
    setMunicipalitiesIds,
    municipalitiesIds,
    activeDepartmentId,
    setActiveDepartmentId,
  } = useEventsRightSidebar();
  return (
    <>
      <div className="mt-3">
        <Label htmlFor="validationTooltip01">Departamentos</Label>
        <Select
          id="departmentId"
          name="departmentId"
          isClearable={false}
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
          isClearable={false}
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
          placeholder={
            activeDepartmentId
              ? 'Selecciona municipios'
              : 'Selecciona un departamento primero'
          }
          isMulti={multipleMunicipalities}
          name="municipalities"
          onChange={(values) => {
            if (multipleMunicipalities) {
              const municipalityIds: number[] = (
                values as MultiValue<{
                  value: number;
                  label: string;
                }>
              ).map(({ value }) => value);
              setMunicipalitiesIds(municipalityIds);
            } else {
              const selectedValue = values as {
                value: number;
                label: string;
              };
              setMunicipalitiesIds(selectedValue ? [selectedValue.value] : []);
            }
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

export default EventLocationFilters;
