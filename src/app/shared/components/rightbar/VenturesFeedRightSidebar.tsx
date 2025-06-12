import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Collapse,
  Label,
} from 'reactstrap';
import SimpleBar from 'simplebar-react';

import { VenturesViewMode } from '../../../config/redux/reducers/principal/ventures.reducer';
import useVenturesRightSidebar from '../../../modules/principal/ventures/hooks/useVenturesRightSidebar';
import VentureLocationFilters from '../filters/VentureLocationFilters';
import VentureCategoriesList from '../list/VentureCategoriesList';

const VenturesFeedRightSidebar = () => {
  const {
    setViewMode,
    setSearch,
    viewMode,
    search,
    showFilters,
    toggleShowFilters,
  } = useVenturesRightSidebar();

  return (
    <div
      style={{
        position: 'fixed',
        top: '95px',
        right: '30px',
        zIndex: 1000,
      }}
    >
      {!showFilters && (
        <Button
          color="primary"
          size="sm"
          onClick={toggleShowFilters}
          style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            marginLeft: 'auto',
            marginBottom: '10px',
          }}
          title="Expandir filtros"
        >
          <i
            className="mdi mdi-filter-variant"
            style={{ fontSize: '20px' }}
          ></i>
        </Button>
      )}

      <Collapse isOpen={showFilters}>
        <SimpleBar
          style={{
            maxHeight: '90vh',
            overflowY: 'auto',
            width: '370px',
          }}
        >
          <Card>
            <CardBody className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Filtros de búsqueda</h5>
                <Button
                  color="light"
                  size="sm"
                  onClick={toggleShowFilters}
                  style={{
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                  }}
                  title="Ocultar filtros"
                >
                  <i
                    className="mdi mdi-chevron-right"
                    style={{ fontSize: '16px' }}
                  ></i>
                </Button>
              </div>

              <div className="search-box">
                <Label htmlFor="ventures-search">Busca por coincidencias</Label>
                <div className="position-relative">
                  <input
                    id="ventures-search"
                    type="text"
                    className="form-control rounded bg-light border-light"
                    placeholder="Busca aquí..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <i className="mdi mdi-magnify search-icon"></i>
                </div>

                <VentureLocationFilters />

                <div className="mt-3">
                  <Label htmlFor="ventures-search">Modo de vista</Label>
                  <ButtonGroup className="w-100">
                    <Button
                      className="w-100"
                      color={
                        viewMode === VenturesViewMode.feed
                          ? 'primary'
                          : 'secondary'
                      }
                      onClick={() => setViewMode(VenturesViewMode.feed)}
                      active={viewMode === VenturesViewMode.feed}
                    >
                      {viewMode === VenturesViewMode.feed && (
                        <i className="mdi mdi-check-circle-outline me-1" />
                      )}
                      Listado
                    </Button>
                    <Button
                      className="w-100"
                      color={
                        viewMode === VenturesViewMode.map
                          ? 'primary'
                          : 'secondary'
                      }
                      onClick={() => setViewMode(VenturesViewMode.map)}
                      active={viewMode === VenturesViewMode.map}
                    >
                      {viewMode === VenturesViewMode.map && (
                        <i className="mdi mdi-check-circle-outline me-1" />
                      )}
                      Mapa
                    </Button>
                  </ButtonGroup>
                </div>
              </div>

              <hr className="my-3" />

              <VentureCategoriesList maxDisplayed={5} />
            </CardBody>
          </Card>
        </SimpleBar>
      </Collapse>
    </div>
  );
};

export default VenturesFeedRightSidebar;
