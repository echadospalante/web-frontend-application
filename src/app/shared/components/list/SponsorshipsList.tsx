import { Fragment } from 'react/jsx-runtime';
import { Alert, Breadcrumb, Col, Container, Row, Spinner } from 'reactstrap';

import NoItemsFoundCard from '../card/NoItemsFoundCard';
import AlertWithReload from '../alert/AlertWithReload';
import SearchablePagination from '../pagination/SearchablePagination';
import SponsorshipCard from '../card/SponsorshipCard';
import useFetchSponsorships from '../../../modules/principal/ventures/hooks/useVentureSponsorships';

export interface SponsorshipsListProps {
  type: 'sent' | 'received';
}

const SponsorshipsList: React.FC<SponsorshipsListProps> = ({ type }) => {
  const { items, total, isLoading, isError, setSkip, retryFetch, skip, take } =
    useFetchSponsorships(type);

  if (isLoading) {
    return (
      <Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumb title="Cuenta" breadcrumbItem="Patrocinios" />
            <div className="text-center py-5">
              <Spinner color="primary" />
              <div className="mt-2">
                Cargando patrocinios {type === 'sent' ? 'enviadas' : 'recibidas'}
                ...
              </div>
            </div>
          </Container>
        </div>
      </Fragment>
    );
  }

  if (isError) {
    return (
      <Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumb title="Cuenta" breadcrumbItem="Patrocinios" />
            <AlertWithReload
              message={`Error al cargar los patrocinios ${
                type === 'sent' ? 'enviados' : 'recibidos'
              }. Por favor, intenta de nuevo.`}
              onReload={retryFetch}
            />
          </Container>
        </div>
      </Fragment>
    );
  }

  if (total === 0) {
    return (
      <Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumb title="Cuenta" breadcrumbItem="Patrocinios" />
            <Alert className="text-center" color="info">
              {type === 'sent'
                ? 'Oops! No has realizado patrocinios hasta el momento.'
                : 'Oops! Aún no has recibido patrocinios.'}
            </Alert>

            <NoItemsFoundCard
              title={`Sin patrocinios ${type === 'sent' ? 'enviadas' : 'recibidas'}`}
              message="No tienes patrocinios aún. Explora nuestros ventureos y échales una mano a los emprendedores, ellos también podrían colaborarte!."
            />
          </Container>
        </div>
      </Fragment>
    );
  }

  return (
    <Row>
      <Col
        lg={6}
        md={6}
        sm={12}
        className="d-flex  w-100 justify-content-center px-4 d-flex align-items-center"
      >
        <p>
          Página {Math.floor(skip / take) + 1} de {Math.ceil(total / take)} (
          {total} patrocinios)
        </p>

        <SearchablePagination
          perPageData={take}
          length={total}
          currentPage={Math.floor(skip / take) + 1}
          setCurrentPage={() => setSkip(Math.floor(skip / take) + 1)}
          isShowingPageLength={false}
          paginationDiv="col-lg-12"
          showPageNumbers={false}
          showInputText
          paginationClass="pagination pagination-rounded align-items-center justify-content-center mt-3 mb-4 pb-1 px-3"
        />
      </Col>

      {items.map((sponsorship) => (
        <Col key={sponsorship.id} sm={12} md={6} lg={4} className="mb-4">
          <SponsorshipCard sponsorship={sponsorship} type={type} />
        </Col>
      ))}

      <Col
        lg={6}
        md={6}
        sm={12}
        className="d-flex  w-100 justify-content-center px-4 d-flex align-items-center"
      >
        <p>
          Página {Math.floor(skip / take) + 1} de {Math.ceil(total / take)} (
          {total} patrocinios)
        </p>

        <SearchablePagination
          perPageData={take}
          length={total}
          currentPage={Math.floor(skip / take) + 1}
          setCurrentPage={() => setSkip(Math.floor(skip / take) + 1)}
          isShowingPageLength={false}
          paginationDiv="col-lg-12"
          showPageNumbers={false}
          showInputText
          paginationClass="pagination pagination-rounded align-items-center justify-content-center mt-3 mb-4 pb-1 px-3"
        />
      </Col>
    </Row>
  );
};

export default SponsorshipsList;
