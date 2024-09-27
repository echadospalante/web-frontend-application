import departments from "../data/geo/departments";
import { Location } from "../data/geo/departments";

export const getDepartmentByMunicipalityId = (
  municipalityId: number
): Location | undefined => {
  return departments.find(({ items }) => {
    if (!items) return false;
    return items.some(({ id }) => id === municipalityId);
  });
};

export const getMunicipalityNameById = (
  municipalityId: number
): string | undefined => {
  return departments
    .flatMap(({ items }) => items)
    .filter((items) => items !== undefined)
    .map(({ id, name }) => ({ id, name }))
    .find(({ id }) => id === municipalityId)?.name;
};
