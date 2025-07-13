import { Fragment, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Badge,
  Spinner,
  Alert,
} from 'reactstrap';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import axios from 'axios';
import { PaginatedBody, VentureSubscription } from 'echadospalante-domain';

// Types
interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

interface Venture {
  id: string;
  name: string;
  slug: string;
  coverPhoto: string;
  description: string;
  active: boolean;
  verified: boolean;
  subscriptionsCount: number;
  categories: Category[];
}

interface Subscription {
  id: string;
  createdAt: string;
  venture: Venture;
}

interface SubscriptionStats {
  category: Category;
  total: number;
}

const fetchSubscriptionStats = async (): Promise<SubscriptionStats[]> => {
  const response = await axios.get<SubscriptionStats[]>(
    'http://localhost:5000/api/v1/ventures/owned/subscriptions/stats',
    { withCredentials: true },
  );
  return response.data;
};

const fetchSubscriptionsByCategory = async (
  categoryId: string,
  skip: number = 0,
  take: number = 10,
): Promise<PaginatedBody<VentureSubscription>> => {
  const response = await axios.get<PaginatedBody<VentureSubscription>>(
    `http://localhost:5000/api/v1/ventures/owned/subscriptions/${categoryId}?skip=${skip}&take=${take}`,
    { withCredentials: true },
  );
  
  return response.data
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

// Custom hooks
const useSubscriptionStats = () => {
  return useQuery({
    queryKey: ['subscriptionStats'],
    queryFn: fetchSubscriptionStats,
  });
};

const useSubscriptionsByCategory = (categoryId: string | null) => {
  return useQuery({
    queryKey: ['subscriptionsByCategory', categoryId],
    queryFn: () =>
      categoryId
        ? fetchSubscriptionsByCategory(categoryId)
        : Promise.resolve({ items: [], total: 0 }),
    enabled: !!categoryId,
  });
};

const useDeleteSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSubscription,
    onSuccess: () => {
      // Invalidate and refetch subscription stats and current category subscriptions
      queryClient.invalidateQueries({ queryKey: ['subscriptionStats'] });
      queryClient.invalidateQueries({ queryKey: ['subscriptionsByCategory'] });
    },
  });
};

// Components
const CategoryTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
}: {
  categories: SubscriptionStats[];
  activeCategory: string | null;
  onCategoryChange: (categoryId: string) => void;
}) => {
  return (
    <div className="mb-4" style={{ overflowX: 'auto' }}>
      <Nav pills className="flex-nowrap" style={{ whiteSpace: 'nowrap' }}>
        {categories.map((stat) => (
          <NavItem key={stat.category.id} className="flex-shrink-0">
            <NavLink
              className={`cursor-pointer ${activeCategory === stat.category.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(stat.category.id)}
            >
              {stat.category.name}
              <Badge color="secondary" className="ms-2">
                {stat.total}
              </Badge>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

const SubscriptionCard = ({
  subscription,
  onDelete,
  isDeleting,
}: {
  subscription: VentureSubscription;
  onDelete: (id: string) => void;
  isDeleting: boolean;
}) => {
  const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Card className="h-100">
      <div className="position-relative">
        <img
          src={subscription.venture?.coverPhoto}
          alt={subscription.venture?.name}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        {subscription.venture?.verified && (
          <Badge color="success" className="position-absolute top-0 end-0 m-2">
            Verificado
          </Badge>
        )}
      </div>
      <CardBody className="d-flex flex-column">
        <div className="flex-grow-1">
          <CardTitle tag="h5" className="mb-2">
            {subscription.venture?.name}
          </CardTitle>
          <CardText className="text-muted small mb-2">
            Suscrito desde: {formatDate(subscription.createdAt)}
          </CardText>
          <CardText
            className="mb-3"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {subscription.venture?.description}
          </CardText>
          <div className="mb-3">
            <small className="text-muted">Categorías:</small>
            <div className="mt-1">
              {subscription.venture?.categories.map((category) => (
                <Badge key={category.id} color="light" className="me-1">
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <small className="text-muted">
              {subscription.venture?.subscriptionsCount} suscriptores
            </small>
          </div>
        </div>
        <div className="d-flex gap-2">
          <Button
            color="primary"
            size="sm"
            outline
            className="flex-grow-1"
            onClick={() =>
              window.open(
                `/emprendimientos/${subscription.venture?.slug}`,
                '_blank',
              )
            }
          >
            Ver Emprendimiento
          </Button>
          <Button
            color="danger"
            size="sm"
            outline
            onClick={() => onDelete(subscription.id)}
            disabled={isDeleting}
          >
            {isDeleting ? <Spinner size="sm" /> : 'Cancelar'}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

const SubscriptionsList = ({ categoryId }: { categoryId: string | null }) => {
  const {
    data: subscriptionsData,
    isLoading,
    error,
  } = useSubscriptionsByCategory(categoryId);
  const deleteSubscriptionMutation = useDeleteSubscription();

  const handleDeleteSubscription = (subscriptionId: string) => {
    if (
      window.confirm('¿Estás seguro de que quieres cancelar esta suscripción?')
    ) {
      deleteSubscriptionMutation.mutate(subscriptionId);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-5">
        <Spinner color="primary" />
        <div className="mt-2">Cargando suscripciones...</div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert color="danger">
        Error al cargar las suscripciones. Por favor, intenta de nuevo.
      </Alert>
    );
  }

  if (!subscriptionsData || subscriptionsData.items.length === 0) {
    return (
      <Alert color="info">No tienes suscripciones en esta categoría.</Alert>
    );
  }

  return (
    <Row>
      {subscriptionsData.items.map((subscription) => (
        <Col key={subscription.id} md={6} lg={4} className="mb-4">
          <SubscriptionCard
            subscription={subscription}
            onDelete={handleDeleteSubscription}
            isDeleting={deleteSubscriptionMutation.isPending}
          />
        </Col>
      ))}
    </Row>
  );
};

const AccountSubscriptionsPage = () => {
  document.title = "Suscripciones a Emprendimientos | EchadosPa'lante";

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const {
    data: statsData,
    isLoading: statsLoading,
    error: statsError,
  } = useSubscriptionStats();

  // Set first category as active when data loads
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
              <Spinner color="primary" />
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
            <Alert color="danger">
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
            <Alert color="info">
              No tienes suscripciones a ningún emprendimiento aún.
            </Alert>
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
                  <CategoryTabs
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
