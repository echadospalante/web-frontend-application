import React, { useEffect, useState } from 'react';

import { Alert, Button, Card, CardBody, Collapse, Label } from 'reactstrap';
import SimpleBar from 'simplebar-react';

import useHighlightedPublications from '../../../modules/principal/ventures/hooks/useHighlightedPublications';
import usePublicationsRightSidebar from '../../../modules/principal/ventures/hooks/usePublicationsRightSidebar';
import AlertWithReload from '../alert/AlertWithReload';
import LatestPublicationCard from '../card/LatestPublicationCard';
import TrendingPublicationCard from '../card/TrendingPublicationCard';
import VentureCategoriesList from '../list/VentureCategoriesList';
import HighlightedPublicationsModal from '../modal/HighlightedPublicationsModal';

const PublicationsFeedRightSidebar: React.FC = () => {
  const { setSearch, search, showFilters, toggleShowFilters } =
    usePublicationsRightSidebar();
  const [scrollY, setScrollY] = useState(0);
  const {
    error,
    refetchHighlightedPublications,
    isLoading,
    isError,
    highlightedPublications,
  } = useHighlightedPublications();

  const [showHighlighted, setShowHighlighted] = useState<
    'latest' | 'trending' | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {highlightedPublications && showHighlighted !== null ? (
        <HighlightedPublicationsModal
          items={highlightedPublications[showHighlighted]}
          type={showHighlighted}
          display={true}
          toggle={() => setShowHighlighted(null)}
        />
      ) : (
        <></>
      )}

      <div
        style={{
          position: 'fixed',
          top: scrollY > 100 ? '95px' : '140px',
          right: '30px',
          zIndex: 1000,
        }}
      >
        {!showFilters && (
          <Button
            color="success"
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
              <CardBody className="border-success border rounded-2 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Filtros de búsqueda</h5>
                  {/* <Button
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
                  </Button> */}
                </div>

                <div className="search-box">
                  <Label htmlFor="ventures-search">
                    Busca por coincidencias
                  </Label>
                  <div className="position-relative">
                    <input
                      id="ventures-search"
                      type="text"
                      className="form-control rounded border-light"
                      placeholder="Busca aquí..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <i className="mdi mdi-magnify search-icon"></i>
                  </div>
                </div>

                <hr className="my-3" />

                <VentureCategoriesList maxDisplayed={5} />

                <div>
                  {isError && (
                    <AlertWithReload
                      message="Ha habido un error al consultar las publicaciones, por favor intente nuevamente."
                      onReload={refetchHighlightedPublications}
                    />
                  )}

                  {isLoading || !highlightedPublications ? (
                    <div className="d-flex justify-content-center">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Cargando...</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <Label htmlFor="categories" className="mt-3">
                          Publicaciones Populares
                        </Label>

                        <></>
                        <div className="list-group list-group-flush">
                          {highlightedPublications.trending
                            .slice(0, 3)
                            .map((item) => (
                              <TrendingPublicationCard
                                key={item.id}
                                publication={item}
                              />
                            ))}
                        </div>

                        {highlightedPublications.trending.length === 0 ? (
                          <Alert color="info" className="text-muted my-3">
                            Lo sentimos, no hay publicaciones populares en este
                            momento.
                          </Alert>
                        ) : (
                          <Button
                            color="success"
                            size="sm"
                            className="btn btn-outline my-0"
                            onClick={() => setShowHighlighted('trending')}
                          >
                            Ver más
                          </Button>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="categories" className="mt-3">
                          Últimas Publicaciones
                        </Label>

                        <div className="list-group list-group-flush">
                          {highlightedPublications.latest
                            .slice(0, 3)
                            .map((item) => (
                              <LatestPublicationCard
                                key={item.id}
                                publication={item}
                              />
                            ))}
                        </div>

                        {highlightedPublications.latest.length === 0 ? (
                          <Alert color="info" className="text-muted my-3">
                            Lo sentimos, no hay publicaciones recientes en este
                            momento.
                          </Alert>
                        ) : (
                          <Button
                            color="success"
                            size="sm"
                            className="btn btn-outline my-0"
                            onClick={() => setShowHighlighted('latest')}
                          >
                            Ver más
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>
          </SimpleBar>
        </Collapse>
      </div>
    </>
  );
};

export default PublicationsFeedRightSidebar;
