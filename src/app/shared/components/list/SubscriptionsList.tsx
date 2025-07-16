
import { Alert, Col, Row, Spinner } from 'reactstrap';

import useSubscriptionsByCategory from '../../../modules/principal/account/hooks/useSubscriptionsByCategory';
import SubscriptionCard from '../card/SubscriptionCard';

export interface SubscriptionsListProps {
  categoryId: string | null;
}

const SubscriptionsList: React.FC<SubscriptionsListProps> = ({
  categoryId,
}) => {
  const { items, total, isLoading, isError } =
    useSubscriptionsByCategory(categoryId);

  if (isLoading) {
    return (
      <div className="text-center py-5">
        <Spinner color="primary" />
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
      <Alert className='text-center' color="info">No tienes suscripciones en esta categoría.</Alert>
    );
  }

  return (
    <Row>
      {items.map((subscription) => (
        <Col key={subscription.id} sm={12} md={6} lg={3} className="mb-4">
          <SubscriptionCard
            subscription={subscription}
            isDeleting={false}
          />
        </Col>
      ))}
    </Row>
  );
};

export default SubscriptionsList;
