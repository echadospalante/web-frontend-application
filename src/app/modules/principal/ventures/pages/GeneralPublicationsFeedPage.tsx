import { Fragment } from 'react';

import { Button, Card, Col, Container, Row } from 'reactstrap';

import PublicationCard from '../../../../shared/components/card/PublicationCard';
import VenturesFeedRightSidebar from '../../../../shared/components/rightbar/VenturesFeedRightSidebar';
import useFetchPublications from '../hooks/useFetchPublications';
import PublicationsFeedRightSidebar from '../../../../shared/components/rightbar/PublicationsFeedRightSidebar';

const GeneralPublicationsFeedPage = () => {
  document.title = "Feed de Publicaciones | Echadospa'lante";

  const { items, total, isLoading, isError } = useFetchPublications();

  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={9}>
              <Card className="p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h3 style={{ padding: 0, margin: 0 }}>
                    Publicaciones de emprendimientos
                  </h3>

                  <Button color="primary" className="fs-5">
                    <i className="mdi mdi-refresh"></i>
                  </Button>
                </div>
              </Card>

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
