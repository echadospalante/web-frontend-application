import { Fragment } from 'react';

import { useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'reactstrap';

import PublicationCard from '../../../../shared/components/card/PublicationCard';
import FeedRightSidebar from '../../../../shared/components/rightbar/FeedRightSidebar';
import useFetchPublications from '../hooks/useFetchPublications';

const GeneralPublicationsFeedPage = () => {
  document.title = "Feed de Publicaciones | Echadospa'lante";
  const { ventureId } = useParams();
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
                    Publicaciones del emprendimiento
                  </h3>

                  <Button color="primary" className="fs-5">
                    <i className="mdi mdi-refresh"></i>
                  </Button>
                </div>
              </Card>

              {items.map((publication) => (
                <Card className="p-3">
                  <PublicationCard publication={publication} />
                </Card>
              ))}
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

export default GeneralPublicationsFeedPage;
