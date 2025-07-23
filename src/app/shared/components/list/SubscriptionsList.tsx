import { Alert, Col, Row, Spinner } from 'reactstrap';

import useSubscriptionsByCategory from '../../../modules/principal/account/hooks/useSubscriptionsByCategory';
import SubscriptionCard from '../card/SubscriptionCard';
import SearchablePagination from '../pagination/SearchablePagination';

export interface SubscriptionsListProps {
  categoryId: string | null;
}

const SubscriptionsList: React.FC<SubscriptionsListProps> = ({
  categoryId,
}) => {
  const { items, total, isLoading, isError, skip, take, setSkip } =
    useSubscriptionsByCategory(categoryId);

  if (isLoading) {
    return (
      <div className="text-center py-5">
        <Spinner color="success" />
        <div className="mt-2">Cargando suscripciones...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <Alert color="danger">
        Error al cargar las suscripciones. Por favor, intenta de nuevo.
      </Alert>
    );
  }

  if (!items || items.length === 0) {
    return (
      <Alert className="text-center" color="info">
        No tienes suscripciones en esta categoría.
      </Alert>
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
          {total} {total === 1 ? 'Suscripción' : 'Suscripciones'})
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
      {items.map((subscription) => (
        <Col key={subscription.id} sm={12} md={6} lg={3} className="mb-4">
          <SubscriptionCard subscription={subscription} isDeleting={false} />
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
          {total} {total === 1 ? 'Suscripción' : 'Suscripciones'})
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

export default SubscriptionsList;
