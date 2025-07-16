import { useState } from "react";

import { VentureSubscription } from "echadospalante-domain";
import { Link } from "react-router-dom";
import {
  Badge,
  Button, Card, CardBody,
  CardText,
  CardTitle, Spinner,
  UncontrolledTooltip
} from "reactstrap";

import useDeleteSubscription from "../../../modules/principal/account/hooks/useDeleteSubscription";
import { textToRGB } from "../../helpers/colors";
import DeleteModal from "../modal/DeleteModal";
import TruncatedItems from "../text/TruncatedItems";
import TruncatedText from "../text/TruncatedText";

export interface SubscriptionCardProps {
  subscription: VentureSubscription;
  isDeleting: boolean;
}

const SubscriptionCard = ({
  subscription,
  isDeleting,
}: SubscriptionCardProps) => {
  const ventureId = subscription.venture!.id;
  
  const {
    isPending: loadingDelete,
    isCompleted,
    isError: errorDelete,
    handleDeleteSubscription,
  } = useDeleteSubscription(ventureId);

  const [ShowDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if(isCompleted) {
    return <></>
  }

  return (
    <>
      {ShowDeleteModal && (
        <DeleteModal
          onCloseClick={() => setShowDeleteModal(false)}
          onDeleteClick={() => handleDeleteSubscription()}
          show={true}
          imageSrc={subscription.venture?.coverPhoto || ''}
          showDeletedItems
          deletedItems={[
            'Se eliminará de tu lista de suscripciones.',
            'No recibirás más notificaciones de este emprendimiento.',
            'No priorizaremos este emprendimiento en tu feed.',
          ]}
          title={'Estás seguro que deseas eliminar esta suscripción?'}
          error={errorDelete}
          loading={loadingDelete}
        />
      )}
      <Card className="border border-success shadow-sm rounded-2">
        <div className="position-relative">
          <img
            src={subscription.venture?.coverPhoto}
            alt={subscription.venture?.name}
            className="card-img-top p-2"
          />
          {subscription.venture?.verified && (
            <Badge
              color="success"
              className="position-absolute top-0 end-0 m-2"
            >
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
            <CardText className="mb-3">
              <TruncatedText
                textClassName="text-muted"
                text={
                  subscription.venture?.description ||
                  'Descripción no disponible'
                }
                maxChars={150}
              />
            </CardText>
            <div className="mb-3">
              <ul className="list-inline my-2">
                <TruncatedItems
                  items={
                    subscription.venture?.categories.map((category) => (
                      <li
                        key={category.id}
                        className="list-inline-item my-1"
                        style={{ cursor: 'pointer', marginRight: '3px' }}
                      >
                        <UncontrolledTooltip
                          placement="top"
                          target={`category-${category.id}`}
                        >
                          <p>{category.description}</p>
                        </UncontrolledTooltip>
                        <span
                          id={`category-${category.id}`}
                          className="p-1"
                          style={{
                            backgroundColor: textToRGB(category.name),
                            color: 'white',
                            fontSize: '12px',
                            borderRadius: '5px',
                          }}
                        >
                          {category.name}
                        </span>
                      </li>
                    )) || []
                  }
                  maxItems={3}
                  all={'todas'}
                />
              </ul>
            </div>
            <div className="mb-3">
              <p className="text-muted">
                {subscription.venture?.subscriptionsCount}{' '}
                {subscription.venture?.subscriptionsCount === 1
                  ? 'suscriptor (Tú)'
                  : 'suscripciones'}
              </p>
            </div>
          </div>
          <div className="d-flex gap-2">
            <Link
              className="flex-grow-1 bg-success text-white text-center py-2 rounded"
              to={`/principal/emprendimientos/${subscription.venture?.slug}`}
              target="_blank"
            >
              Ver Emprendimiento
            </Link>
            <Button
              color="danger"
              size="sm"
              outline
              onClick={() => setShowDeleteModal(true)}
              disabled={isDeleting}
            >
              {isDeleting ? <Spinner size="sm" /> : 'Cancelar suscripción'}
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default SubscriptionCard;