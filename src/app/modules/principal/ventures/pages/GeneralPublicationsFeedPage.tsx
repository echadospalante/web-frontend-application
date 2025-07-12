import { Fragment } from 'react';

import { useParams } from 'react-router-dom';
import { Card, Col, Container, Row } from 'reactstrap';

import PublicationCard from '../../../../shared/components/card/PublicationCard';
import PublicationsFeedRightSidebar from '../../../../shared/components/rightbar/PublicationsFeedRightSidebar';
import useFetchPublications from '../hooks/useFetchPublications';
import GeneralPublicationsHeader from '../../../../shared/components/header/GeneralPublicationsHeader';
import VenturePublicationsHeader from '../../../../shared/components/header/VenturePublicationsHeader';

const GeneralPublicationsFeedPage = () => {
  document.title = "Feed de Publicaciones | Echadospa'lante";
  const { ventureSlug } = useParams();

  const { items, total, isLoading, isError, refetch } =
    useFetchPublications(ventureSlug);

  return (
    <Fragment>
      <div className="full-page-content">
        <Container fluid>
          <Row>
            <Col lg={ventureSlug ? 12 : 9}>
              {ventureSlug ? (
                <VenturePublicationsHeader
                  ventureSlug={ventureSlug}
                  onReload={refetch}
                />
              ) : (
                <GeneralPublicationsHeader onReload={refetch} />
              )}

              {items.map((publication) => (
                <Card key={publication.id} className="p-3">
                  <PublicationCard publication={publication} />
                </Card>
              ))}
            </Col>

            {items.length === 0 && (
              <Col lg={ventureSlug ? 12 : 9}>
                <Card className="p-4 text-center">
                  <h5>No hay publicaciones disponibles</h5>
                  <p>Intenta recargar la página o vuelve más tarde.</p>
                </Card>
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

export default GeneralPublicationsFeedPage;
