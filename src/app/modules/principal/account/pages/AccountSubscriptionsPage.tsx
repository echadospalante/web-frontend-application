import { Fragment, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  Alert,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Spinner,
} from 'reactstrap';

import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import NoItemsFoundCard from '../../../../shared/components/card/NoItemsFoundCard';
import SubscriptionsList from '../../../../shared/components/list/SubscriptionsList';
import SearchablePagination from '../../../../shared/components/pagination/SearchablePagination';
import VentureSubscriptionsCategoryTabs from '../../../../shared/components/tabs/VentureSubscriptionsCategoryTabs';
import { SubscriptionStats } from '../domain/subscription';

const fetchSubscriptionStats = async (): Promise<SubscriptionStats[]> => {
  const response = await axios.get<SubscriptionStats[]>(
    'http://localhost:5000/api/v1/ventures/owned/subscriptions/stats',
    { withCredentials: true },
  );
  return response.data;
};

const deleteSubscription = async (subscriptionId: string): Promise<void> => {
  const response = await fetch(
    `http://localhost:5000/api/v1/ventures/owned/subscriptions/${subscriptionId}`,
    {
      method: 'DELETE',
    },
  );
  if (!response.ok) {
    throw new Error('Failed to delete subscription');
  }
};

const useSubscriptionStats = () => {
  return useQuery({
    queryKey: ['subscriptions', 'stats'],
    queryFn: fetchSubscriptionStats,
  });
};

const AccountSubscriptionsPage = () => {
  document.title = "Suscripciones a Emprendimientos | EchadosPa'lante";

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const {
    data: statsData,
    isLoading: statsLoading,
    error: statsError,
  } = useSubscriptionStats();

  if (statsData && statsData.length > 0 && !activeCategory) {
    setActiveCategory(statsData[0].category.id);
  }

  if (statsLoading) {
    return (
      <Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumb title="Cuenta" breadcrumbItem="Suscripciones" />
            <div className="text-center py-5">
              <Spinner color="success" />
              <div className="mt-2">Cargando categorías...</div>
            </div>
          </Container>
        </div>
      </Fragment>
    );
  }

  if (statsError) {
    return (
      <Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumb title="Cuenta" breadcrumbItem="Suscripciones" />
            <Alert className="text-center" color="danger">
              Error al cargar las categorías. Por favor, intenta de nuevo.
            </Alert>
          </Container>
        </div>
      </Fragment>
    );
  }

  if (!statsData || statsData.length === 0) {
    return (
      <Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumb title="Cuenta" breadcrumbItem="Suscripciones" />
            <Alert className="text-center" color="info">
              Oops! No tienes suscripciones activas en este momento.
            </Alert>

            <NoItemsFoundCard
              title="Sin suscripciones"
              message="No tienes suscripciones activas. Explora nuestros emprendimientos y suscríbete a los que más te interesen."
            />
          </Container>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Cuenta" breadcrumbItem="Suscripciones" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <VentureSubscriptionsCategoryTabs
                    categories={statsData}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                  />

                  <SubscriptionsList categoryId={activeCategory} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default AccountSubscriptionsPage;
