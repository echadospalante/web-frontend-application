import React, { useEffect, useState } from 'react';

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Collapse,
  Label,
} from 'reactstrap';
import SimpleBar from 'simplebar-react';

import { EventsViewMode } from '../../../config/redux/reducers/principal/events.reducer';
import useEventsRightSidebar from '../../../modules/principal/ventures/hooks/useEventsRightSidebar';
import useHighlightedEvents from '../../../modules/principal/ventures/hooks/useHighlightedEvents';
import AlertWithReload from '../alert/AlertWithReload';
import UpcomingEventCard from '../card/UpcomingEventCard';
import EventLocationFilters from '../filters/EventLocationFilters';
import EventCategoriesList from '../list/EventCategoriesList';
import HighlightedEventsModal from '../modal/HighlightedEventsModal';

export interface EventsRightSidebarProps {
  multipleMunicipalities: boolean;
}

const EventsRightSidebar: React.FC<EventsRightSidebarProps> = ({
  multipleMunicipalities,
}) => {
  const {
    setViewMode,
    setSearch,
    viewMode,
    search,
    showFilters,
    toggleShowFilters,
  } = useEventsRightSidebar();
  const [scrollY, setScrollY] = useState(0);
const [showHighlighted, setShowHighlighted] = useState<
    'upcoming' | 'current' | null
  >(null);

    const {
      error,
      refetchHighlightedEvents,
      isLoading,
      isError,
      highlightedEvents,
    } = useHighlightedEvents();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {highlightedEvents && showHighlighted !== null ? (
        <HighlightedEventsModal
          items={highlightedEvents[showHighlighted]}
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
                </div>

                <div className="search-box">
                  <Label htmlFor="events-search">Busca por coincidencias</Label>
                  <div className="position-relative">
                    <input
                      id="events-search"
                      type="text"
                      className="form-control rounded border-light"
                      placeholder="Busca aquí..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <i className="mdi mdi-magnify search-icon"></i>
                  </div>

                  <EventLocationFilters
                    multipleMunicipalities={multipleMunicipalities}
                  />

                  <div className="mt-3">
                    <Label htmlFor="events-search">Modo de vista</Label>
                    <ButtonGroup className="w-100">
                      <Button
                        className="w-100"
                        color={
                          viewMode === EventsViewMode.calendar
                            ? 'success'
                            : 'secondary'
                        }
                        onClick={() => setViewMode(EventsViewMode.calendar)}
                        active={viewMode === EventsViewMode.calendar}
                      >
                        {viewMode === EventsViewMode.calendar && (
                          <i className="mdi mdi-check-circle-outline me-1" />
                        )}
                        Agenda
                      </Button>

                      <Button
                        className="w-100"
                        color={
                          viewMode === EventsViewMode.map
                            ? 'success'
                            : 'secondary'
                        }
                        onClick={() => setViewMode(EventsViewMode.map)}
                        active={viewMode === EventsViewMode.map}
                      >
                        {viewMode === EventsViewMode.map && (
                          <i className="mdi mdi-check-circle-outline me-1" />
                        )}
                        Mapa
                      </Button>

                      <Button
                        className="w-100"
                        color={
                          viewMode === EventsViewMode.feed
                            ? 'success'
                            : 'secondary'
                        }
                        onClick={() => setViewMode(EventsViewMode.feed)}
                        active={viewMode === EventsViewMode.feed}
                      >
                        {viewMode === EventsViewMode.feed && (
                          <i className="mdi mdi-check-circle-outline me-1" />
                        )}
                        Lista
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>

                <hr className="my-3" />

                <EventCategoriesList maxDisplayed={5} />

                <hr className="my-3" />

                <div>
                  {isError && (
                    <AlertWithReload
                      message="Ha habido un error al consultar los eventos, por favor intente nuevamente."
                      onReload={refetchHighlightedEvents}
                    />
                  )}

                  {isLoading || !highlightedEvents ? (
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

                        <div className="list-group list-group-flush">
                          {highlightedEvents.trending
                            .slice(0, 3)
                            .map((item) => (
                              <UpcomingEventCard key={item.id} event={item} />
                            ))}
                        </div>

                        <Button
                          color="success"
                          size="sm"
                          className="btn btn-outline my-0"
                          onClick={() => setShowHighlighted('trending')}
                        >
                          Ver más
                        </Button>
                      </div>

                      <div>
                        <Label htmlFor="categories" className="mt-3">
                          Últimas Publicaciones
                        </Label>

                        <div className="list-group list-group-flush">
                          {highlightedEvents.latest.slice(0, 3).map((item) => (
                            <LatestPublicationCard
                              key={item.id}
                              publication={item}
                            />
                          ))}
                        </div>

                        <Button
                          color="success"
                          size="sm"
                          className="btn btn-outline my-0"
                          onClick={() => setShowHighlighted('latest')}
                        >
                          Ver más
                        </Button>
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

export default EventsRightSidebar;
