import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Card, CardBody, Label } from 'reactstrap';
import SimpleBar from 'simplebar-react';

import { VenturesViewMode } from '../../../config/redux/reducers/principal/ventures.reducer';
import useVenturesRightSidebar from '../../../modules/principal/ventures/hooks/useVenturesRightSidebar';
import { popularPosts, tagsData } from '../../data/feed/feed';
import VentureCategoriesList from '../list/VentureCategoriesList';
import VentureLocationFilters from '../filters/VentureLocationFilters';

const VenturesFeedRightSidebar = () => {
  const { setViewMode, setSearch, viewMode, search } =
    useVenturesRightSidebar();

  return (
    <div
      style={{
        position: 'fixed',
        top: '95px',
        right: '30px',
      }}
    >
      <SimpleBar
        style={{
          maxHeight: '90vh',
          overflowY: 'auto',
          width: '370px',
        }}
      >
        <Card>
          <CardBody className="p-4">
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
                    color={viewMode === 'calendar' ? 'primary' : 'secondary'}
                    onClick={() => setViewMode(VenturesViewMode.calendar)}
                    active={viewMode === 'calendar'}
                  >
                    {viewMode === 'calendar' && (
                      <i className="mdi mdi-check-circle-outline me-1" />
                    )}
                    Calendario
                  </Button>
                  <Button
                    className="w-100"
                    color={viewMode === 'map' ? 'primary' : 'secondary'}
                    onClick={() => setViewMode(VenturesViewMode.map)}
                    active={viewMode === 'map'}
                  >
                    {viewMode === 'map' && (
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
    </div>
  );
};

export default VenturesFeedRightSidebar;
