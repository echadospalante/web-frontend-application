import { Fragment } from 'react';

import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';

import AlertWithReload from '../../../../shared/components/alert/AlertWithReload';
import AppSpinner from '../../../../shared/components/loader/Spinner';
import FeedRightSidebar from '../../../../shared/components/rightbar/FeedRightSidebar';
import useFetchVentures from '../hooks/useFetchVentures';
import VentureCard from '../../../../shared/components/card/VentureCard';

const VenturesFeedPage = () => {
  document.title = "Feed de Emprendimientos | Echadospa'lante";

  const { items, isLoading, isError, retryFetch } = useFetchVentures();

  if (isLoading) {
    return <AppSpinner />;
  }

  if (isError) {
    return (
      <AlertWithReload
        message={
          'Error al cargar los emprendimientos. Por favor, intente nuevamente.'
        }
        onReload={retryFetch}
      />
    );
  }

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

              <Card className="text-center mt-4 shadow-sm border-0">
                <CardBody>
                  <CardTitle tag="h5">Sin elementos disponibles</CardTitle>
                  <CardText>
                    No se encontraron resultados para mostrar. Por favor,
                    intenta con otros filtros o vuelve más tarde.
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col lg={3}>
              <FeedRightSidebar />
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
            </Col>

            <Col lg={3}>
              <FeedRightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default VenturesFeedPage;
