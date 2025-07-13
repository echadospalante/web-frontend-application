import { Fragment, useEffect, useRef } from 'react';

import { Button, Card, Col, Container, Row } from 'reactstrap';

import {
  setVenturesSkip,
  VenturesViewMode,
} from '../../../../config/redux/reducers/principal/ventures.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import AlertWithReload from '../../../../shared/components/alert/AlertWithReload';
import NoItemsFoundCard from '../../../../shared/components/card/NoVenturesCard';
import VenturesList from '../../../../shared/components/list/VenturesList';
import AppLoading from '../../../../shared/components/loader/AppLoading';
import VenturesMap from '../../../../shared/components/map/VenturesMap';
import VenturesRightSidebar from '../../../../shared/components/rightbar/VenturesRightSidebar';
import useFetchVentures from '../hooks/useFetchVentures';
import useVenturesRightSidebar from '../hooks/useVenturesRightSidebar';
import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';

const VenturesFeedPage = () => {
  document.title = "Feed de Emprendimientos | Echadospa'lante";
  const dispatch = useAppDispatch();

  const {
    items,
    isLoading,
    isError,
    retryFetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    pagination,
    total,
    viewMode,
  } = useFetchVentures();
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { showFilters } = useVenturesRightSidebar();

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        console.log({
          entries,
          hasNextPage,
          isFetchingNextPage,
          pagination,
          isIntersecting: entries[0].isIntersecting,
          loadMoreRef: loadMoreRef.current,
        });
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          const { skip, take } = pagination;
          dispatch(setVenturesSkip(skip + take));
          fetchNextPage();
        }
      },
      { threshold: 0.1 }, // Triggers when 10% of the target is visible
    );

    observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Breadcrumb title="Emprendimientos" breadcrumbItem="Listado" />
            <Col lg={showFilters ? 9 : 12} md={12} sm={12}>
              <Card className="p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 style={{ padding: 0, margin: 0 }}>
                    {viewMode === VenturesViewMode.feed ? 'Listado' : 'Mapa'} de
                    Emprendimientos
                  </h3>

                  <Button color="success" className="fs-5">
                    <i className="mdi mdi-refresh"></i>
                  </Button>
                </div>
              </Card>

              {/* {JSON.stringify(venturesQuery.data, null, 3)} */}

              {!isLoading && total === 0 ? (
                <NoItemsFoundCard
                  title="Sin elementos disponibles"
                  message="No se encontraron emprendimientos para mostrar. Por favor, intenta con otros filtros o vuelve más tarde."
                />
              ) : viewMode === VenturesViewMode.feed ? (
                <VenturesList ventures={items} />
              ) : (
                <VenturesMap />
              )}
            </Col>

            <Col lg={showFilters ? 9 : 12} md={12} sm={12}>
              {hasNextPage && viewMode === VenturesViewMode.feed ? (
                <div
                  ref={loadMoreRef}
                  style={{ textAlign: 'center', padding: '50px' }}
                >
                  {isFetchingNextPage ? (
                    <AppLoading
                      iconPath={''}
                      message="Cargando más emprendimientos..."
                    />
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                <></>
              )}
            </Col>

            {isError && (
              <Container>
                <AlertWithReload
                  message={
                    'Error al cargar los emprendimientos. Por favor, intente nuevamente.'
                  }
                  onReload={retryFetch}
                />
              </Container>
            )}

            <Col lg={3} md={0} sm={0}>
              <VenturesRightSidebar
                multipleMunicipalities={viewMode === VenturesViewMode.feed}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default VenturesFeedPage;
