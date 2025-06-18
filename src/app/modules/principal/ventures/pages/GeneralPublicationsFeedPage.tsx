import { Fragment } from 'react';

import { useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'reactstrap';

import PublicationCard from '../../../../shared/components/card/PublicationCard';
import PublicationsFeedRightSidebar from '../../../../shared/components/rightbar/PublicationsFeedRightSidebar';
import useFetchPublications from '../hooks/useFetchPublications';
import GeneralPublicationsHeader from '../../../../shared/components/header/GeneralPublicationsHeader';
import VenturePublicationsHeader from '../../../../shared/components/header/VenturePublicationsHeader';

const GeneralPublicationsFeedPage = () => {
  document.title = "Feed de Publicaciones | Echadospa'lante";
  const { ventureId } = useParams();

  const { items, total, isLoading, isError, refetch } =
    useFetchPublications(ventureId);

  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={9}>
              {ventureId ? (
                <VenturePublicationsHeader
                  ventureId={ventureId}
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

            <Col lg={3}>
              <PublicationsFeedRightSidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default GeneralPublicationsFeedPage;
