import { useState } from 'react';

import { Button, Label } from 'reactstrap';

import useVentureCategoriesStats from '../../../modules/admin/general/hooks/useVentureCategoriesStats';
import useVenturesRightSidebar from '../../../modules/principal/ventures/hooks/useVenturesRightSidebar';
import RemovableChip from '../chips/RemovableChip';
import AppLoading from '../loader/AppLoading';

export interface VentureCategoriesListProps {
  maxDisplayed: number;
}

const VentureCategoriesList: React.FC<VentureCategoriesListProps> = ({
  maxDisplayed,
}) => {
  const [displayAll, setDisplayAll] = useState(false);
  const { isError, isLoading, refetch, items, total } =
    useVentureCategoriesStats();
  const { setCategoriesIds, categoriesIds } = useVenturesRightSidebar();

  if (isLoading) {
    return <AppLoading message="Cargando categorías" iconPath={''} />;
  }

  return (
    <div>
      <Label htmlFor="categories">Categorías</Label>

      <div>
        {categoriesIds.map((id) => (
          <RemovableChip
            key={id}
            text={items.find((item) => item.id === id)?.name || 'Desconocida'}
            onRemove={() => {
              setCategoriesIds(
                categoriesIds.filter((categoryId) => categoryId !== id),
              );
            }}
          />
        ))}

        {categoriesIds.length === 0 && (
          <small className="text-muted">No hay categorías seleccionadas</small>
        )}
        {categoriesIds.length > 0 && (
          <div>
            <Button
              size="sm"
              color="danger"
              className="btn btn-outline mt-1 mb-2"
              onClick={() => setCategoriesIds([])}
            >
              Limpiar todas
            </Button>
          </div>
        )}
      </div>

      <ul
        className="list-unstyled fw-medium"
        style={{
          maxHeight: '400px',
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: '0 1rem',
        }}
      >
        {items
          .sort((a, b) => b.venturesCount - a.venturesCount)
          .slice(0, displayAll ? undefined : maxDisplayed)
          .map((item, index) => (
            <li key={index}>
              <span className="text-muted py-2 d-block">
                <input
                  type="checkbox"
                  name="venture-categories"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCategoriesIds([...categoriesIds, item.id]);
                    } else {
                      setCategoriesIds(
                        categoriesIds.filter((id) => id !== item.id),
                      );
                    }
                  }}
                  id={`venture-category-${item.id}`}
                  value={item.id}
                  className="float-end mt-1"
                  checked={categoriesIds.includes(item.id)}
                />
                <label htmlFor={`venture-category-${item.id}`}>
                  {item.name} ({item.venturesCount})
                </label>
              </span>
            </li>
          ))}
      </ul>
      {total > maxDisplayed && (
        <Button
          size="sm"
          className="btn btn-outline my-0"
          color="primary"
          onClick={() => setDisplayAll(!displayAll)}
        >
          {displayAll ? 'Mostrar menos' : 'Mostrar todas'}
        </Button>
      )}
    </div>
  );
};

export default VentureCategoriesList;
