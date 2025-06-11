import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Card, CardBody } from 'reactstrap';
import SimpleBar from 'simplebar-react';

import { VenturesViewMode } from '../../../config/redux/reducers/principal/ventures.reducer';
import useVenturesRightSidebar from '../../../modules/principal/ventures/hooks/useVenturesRightSidebar';
import { popularPosts, tagsData } from '../../data/feed/feed';
import ventureCategories from '../../data/misc/venture-categories';
import VentureCategoriesList from '../list/VentureCategoriesList';

const VenturesFeedRightSidebar = () => {
  const { setViewMode, setSearch, viewMode, search } = useVenturesRightSidebar();

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
              <p className="text-muted">Busca por coincidencias</p>
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control rounded bg-light border-light"
                  placeholder="Busca aquí..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <i className="mdi mdi-magnify search-icon"></i>
              </div>

              <ButtonGroup className="mt-3 w-100">
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

            <hr className="my-3" />

            <div>
              <p className="text-muted">Categorías</p>
              <VentureCategoriesList />
            </div>

            <hr className="my-4" />

            {/* <div>
              <p className="text-muted">Historiales</p>

              <ul className="list-unstyled fw-medium">
                {(archiveData || []).map((item, index) => (
                  <li key={index}>
                    <Link to="#" className="text-muted py-2 d-block">
                      <i className="mdi mdi-chevron-right me-1"></i> {item.year}{" "}
                      <span className="badge badge-soft-success rounded-pill float-end ms-1 font-size-12">
                        {item.badgeCount}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            <hr className="my-4" />

            <div>
              <p className="text-muted mb-2">Publicaciones Populares</p>

              <div className="list-group list-group-flush">
                {(popularPosts || []).map((item, index) => (
                  <Link
                    to="#"
                    className="list-group-item text-muted py-3 px-2"
                    key={index}
                  >
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <img
                          src={item.imageSrc}
                          alt=""
                          className="avatar-md h-auto d-block rounded"
                        />
                      </div>
                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="font-size-13 text-truncate">
                          {item.title}
                        </h5>
                        <p className="mb-0 text-truncate">{item.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <hr className="my-4" />

            <div>
              <p className="text-muted mb-1">Etiquetas</p>

              <ul className="list-inline widget-tag">
                {(tagsData || []).map((item) => (
                  <li className="list-inline-item" key={item.id}>
                    <Link to="#" className="badge bg-light font-size-12 mt-2">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </CardBody>
        </Card>
      </SimpleBar>
    </div>
  );
};

export default VenturesFeedRightSidebar;
