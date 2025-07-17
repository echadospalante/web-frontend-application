import { Fragment } from 'react';

import { useParams } from 'react-router-dom';
import { Card, Col, Container, Row } from 'reactstrap';

import PublicationCard from '../../../../shared/components/card/PublicationCard';
import PublicationsFeedRightSidebar from '../../../../shared/components/rightbar/PublicationsFeedRightSidebar';
import useFetchPublications from '../hooks/useFetchPublications';
import GeneralPublicationsHeader from '../../../../shared/components/header/GeneralPublicationsHeader';
import VenturePublicationsHeader from '../../../../shared/components/header/VenturePublicationsHeader';
import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import NoItemsFoundCard from '../../../../shared/components/card/NoItemsFoundCard';

const PublicationsFeedPage = () => {
  document.title = "Feed de Publicaciones | Echadospa'lante";
  const { ventureSlug } = useParams();

  const { items, total, isLoading, isError, refetch } =
    useFetchPublications(ventureSlug);

  return (
    <Fragment>
      <div className="page-content">
        <Breadcrumb title="Emprendimientos" breadcrumbItem="Publicaciones" />

        <Container fluid>
          <Row>
            <Col lg={ventureSlug ? 12 : 9}>
              {/* {ventureSlug ? (
                <VenturePublicationsHeader
                  ventureSlug={ventureSlug}
                  onReload={refetch}
                />
              ) : (
                <GeneralPublicationsHeader onReload={refetch} />
              )} */}

              {items.map((publication) => (
                <Card key={publication.id} className="p-3">
                  <PublicationCard publication={publication} />
                </Card>
              ))}
            </Col>

            {items.length === 0 && (
              <Col lg={ventureSlug ? 12 : 9}>
                <NoItemsFoundCard
                  title="Sin publicaciones disponibles"
                  message="No se encontraron publicaciones para mostrar. Por favor, intenta con otros filtros o vuelve más tarde."
                />
              </Col>
            )}

            {!ventureSlug && (
              <Col lg={3}>
                <PublicationsFeedRightSidebar />
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default PublicationsFeedPage;
