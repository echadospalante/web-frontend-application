import { Fragment } from 'react';

import { Alert, Breadcrumb, Col, Container, Row, Spinner } from 'reactstrap';

import useEventDonations from '../../../modules/principal/ventures/hooks/useDonations';
import AlertWithReload from '../alert/AlertWithReload';
import DonationCard from '../card/DonationCard';
import NoItemsFoundCard from '../card/NoItemsFoundCard';
import SearchablePagination from '../pagination/SearchablePagination';

export interface DonationsListProps {
  type: 'sent' | 'received';
}

const DonationsList: React.FC<DonationsListProps> = ({ type }) => {
  const { items, total, isLoading, isError, setSkip, retryFetch, skip, take } =
    useEventDonations(type);

  if (isLoading) {
    return (
      <Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumb title="Cuenta" breadcrumbItem="Donaciones" />
            <div className="text-center py-5">
              <Spinner color="primary" />
              <div className="mt-2">
                Cargando donaciones {type === 'sent' ? 'enviadas' : 'recibidas'}
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
            <Breadcrumb title="Cuenta" breadcrumbItem="Donaciones" />
            <AlertWithReload
              message={`Error al cargar las donaciones ${
                type === 'sent' ? 'enviadas' : 'recibidas'
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
            <Breadcrumb title="Cuenta" breadcrumbItem="Donaciones" />
            <Alert className="text-center" color="info">
              {type === 'sent'
                ? 'Oops! No has realizado donaciones hasta el momento.'
                : 'Aún no has recibido donaciones.'}
            </Alert>

            <NoItemsFoundCard
              title={`Sin donaciones ${type === 'sent' ? 'enviadas' : 'recibidas'}`}
              message="No tienes donaciones aún. Explora nuestros eventos y échales una mano a los emprendedores, ellos también podrían colaborarte!."
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
          {total} donaciones)
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

      {items.map((donation) => (
        <Col key={donation.id} sm={12} md={12} lg={6} className="mb-4">
          <DonationCard donation={donation} type={type} />
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
          {total} donaciones)
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

export default DonationsList;
