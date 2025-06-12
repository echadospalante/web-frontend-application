import { Fragment, useEffect, useRef } from 'react';

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';

import AlertWithReload from '../../../../shared/components/alert/AlertWithReload';
import AppSpinner from '../../../../shared/components/loader/Spinner';
import VenturesFeedRightSidebar from '../../../../shared/components/rightbar/VenturesFeedRightSidebar';
import useFetchVentures from '../hooks/useFetchVentures';
import VentureCard from '../../../../shared/components/card/VentureCard';
import AppLoading from '../../../../shared/components/loader/AppLoading';
import {
  setVenturesSkip,
  VenturesViewMode,
} from '../../../../config/redux/reducers/principal/ventures.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import useVenturesRightSidebar from '../hooks/useVenturesRightSidebar';

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
    venturesQuery,
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

  if (!items || items.length === 0) {
    return (
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={9}>
              <Card className="p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 style={{ padding: 0, margin: 0 }}>
                    Feed de Emprendimientos
                  </h3>

                  <Button color="primary" className="fs-5">
                    <i className="mdi mdi-refresh"></i>
                  </Button>
                </div>
              </Card>

              {isLoading ? (
                <AppLoading
                  iconPath={''}
                  message="Buscando emprendimientos..."
                />
              ) : (
                <Card className="text-center mt-4 shadow-sm border-0">
                  <CardBody>
                    <CardTitle tag="h5">Sin elementos disponibles</CardTitle>
                    <CardText>
                      No se encontraron resultados para mostrar. Por favor,
                      intenta con otros filtros o vuelve más tarde.
                    </CardText>

                    <CardImg src="/empty.jpg" className="w-50 rounded-3 my-3" />
                  </CardBody>
                </Card>
              )}
            </Col>

            <Col lg={3}>
              <VenturesFeedRightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  const leftColumn = items.filter((_, index) => index % 2 === 0);
  const rightColumn = items.filter((_, index) => index % 2 !== 0);

  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            {isLoading ? (
              <AppLoading iconPath={''} message="Buscando emprendimientos..." />
            ) : (
              <>
                <Col lg={showFilters ? 9 : 12} md={12} sm={12}>
                  <Card className="p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <h3 style={{ padding: 0, margin: 0 }}>
                        {viewMode === VenturesViewMode.feed
                          ? 'Listado'
                          : 'Mapa'}{' '}
                        de Emprendimientos
                      </h3>

                      <Button color="primary" className="fs-5">
                        <i className="mdi mdi-refresh"></i>
                      </Button>
                    </div>
                  </Card>

                  {/* {JSON.stringify(venturesQuery.data, null, 3)} */}

                  {total === 0 ? (
                    <Card className="text-center mt-4 shadow-sm border-0">
                      <CardBody>
                        <CardTitle tag="h5">
                          Sin elementos disponibles
                        </CardTitle>
                        <CardText>
                          No se encontraron resultados para mostrar. Por favor,
                          intenta con otros filtros o vuelve más tarde.
                        </CardText>

                        <CardImg
                          src="/empty.jpg"
                          className="w-50 rounded-3 my-3"
                        />
                      </CardBody>
                    </Card>
                  ) : (
                    <Row>
                      <Col md={6}>
                        {leftColumn.map((venture, index) => (
                          <VentureCard
                            key={`left-${index}`}
                            ownerButtons={false}
                            venture={venture}
                          />
                        ))}
                      </Col>

                      <Col md={6}>
                        {rightColumn.map((venture, index) => (
                          <VentureCard
                            key={`right-${index}`}
                            ownerButtons={false}
                            venture={venture}
                          />
                        ))}
                      </Col>
                    </Row>
                  )}
                </Col>
              </>
            )}
            <Col lg={showFilters ? 9 : 12} md={12} sm={12}>
              {hasNextPage && (
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
              )}
            </Col>

            {isError && (
              <AlertWithReload
                message={
                  'Error al cargar los emprendimientos. Por favor, intente nuevamente.'
                }
                onReload={retryFetch}
              />
            )}

            <Col lg={3} md={0} sm={0}>
              <VenturesFeedRightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default VenturesFeedPage;
