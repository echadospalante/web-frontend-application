import { useState } from 'react';

import { Venture } from 'echadospalante-domain';
import {
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Row,
  UncontrolledTooltip,
} from 'reactstrap';

import useAuthentication from '../../../modules/auth/hooks/useAuthentication';
import useVentureSubscription from '../../../modules/principal/ventures/hooks/useVentureSubscription';
import { getIconName, stringToColor, textToRGB } from '../../helpers/colors';
import TinyMap from '../map/TinyMap';
import TruncatedItems from '../text/TruncatedItems';
import SponsorshipCreateModal from '../modal/SponsorshipCreateModal';
import useSponsorshipStatus from '../../../modules/principal/ventures/hooks/useSponsorshipStatus';
import useCancelSponsorship from '../../../modules/principal/ventures/hooks/useCancelSponsorship';

export interface VentureDetailHeaderProps {
  venture: Venture;
}

const VentureDetailHeader: React.FC<VentureDetailHeaderProps> = ({
  venture,
}) => {
  const { email: authenticatedEmail } = useAuthentication();
  const { status, subscriptionId, loading, error } = useSponsorshipStatus(
    venture.id,
  );
  const [displayPicture, setDisplayPicture] = useState<boolean>(true);
  const [showSponsorshipModal, setShowSponsorshipModal] =
    useState<boolean>(false);
  const {
    isSubscribed,
    // subscriptionStatus,
    statusError,
    statusLoading,

    handleSubscribe,
    handleUnsubscribe,

    subscribeCompleted,
    subscribeError,
    subscribeLoading,

    unsubscribeCompleted,
    unsubscribeError,
    unsubscribeLoading,
  } = useVentureSubscription(venture.id);

  const { isCancelling, cancelError, handleCancelSponsorship } =
    useCancelSponsorship(venture.id, venture.slug);

  const formatDate = (dateString: Date) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency,
    }).format(amount);
  };

  const handleCreateSponsorship = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault();
    setShowSponsorshipModal(true);
  };

  return (
    <>
      {showSponsorshipModal && (
        <SponsorshipCreateModal
          modal={showSponsorshipModal}
          toggle={() => setShowSponsorshipModal(false)}
          venture={venture}
        />
      )}
      <Card className="shadow-lg border-0 mb-4">
        <Row className="g-0">
          <Col md={4}>
            <CardImg
              src={venture.coverPhoto}
              alt={venture.name}
              className="h-100 object-fit-cover rounded-start"
              style={{ minHeight: '300px' }}
            />
          </Col>
          <Col md={8}>
            <CardBody className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h2 className="h3 mb-2 fw-bold text-primary">
                    {venture.name}
                  </h2>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <Badge
                      className="px-2 py-1"
                      color={venture.verified ? 'success' : 'warning'}
                      pill
                    >
                      {venture.verified ? 'Verificado' : 'No Verificado'}
                    </Badge>
                    {/* <Badge color={venture.active ? 'success' : 'secondary'} pill>
                    {venture.active ? 'Activo' : 'Inactivo'}
                  </Badge> */}
                  </div>
                </div>
                <div className="d-flex gap-2">
                  {/* <Button color="outline-success" size="md">
                  <i className="mdi mdi-share-outline me-2 font-size-15" />
                  Compartir
                </Button> */}

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <FacebookShareButton
                      url={window.location.href}
                      title={venture.name}
                    >
                      <FacebookIcon size={40} round />
                    </FacebookShareButton>

                    <RedditShareButton
                      url={window.location.href}
                      title={venture.name}
                    >
                      <RedditIcon size={40} round />
                    </RedditShareButton>

                    <LinkedinShareButton
                      url={window.location.href}
                      title={venture.name}
                    >
                      <LinkedinIcon size={40} round />
                    </LinkedinShareButton>

                    <WhatsappShareButton
                      url={window.location.href}
                      title={venture.name}
                    >
                      <WhatsappIcon size={40} round />
                    </WhatsappShareButton>

                    <TwitterShareButton
                      url={window.location.href}
                      title={venture.name}
                    >
                      <TwitterIcon size={40} round />
                    </TwitterShareButton>

                    <TelegramShareButton
                      url={window.location.href}
                      title={venture.name}
                    >
                      <TelegramIcon size={40} round />
                    </TelegramShareButton>
                  </div>

                  {venture.owner?.email !== authenticatedEmail &&
                    (isSubscribed ? (
                      <Button
                        onClick={handleUnsubscribe}
                        color="danger"
                        size="md"
                      >
                        <i className="mdi mdi-eye-minus-outline me-2 font-size-15" />
                        Eliminar suscripción
                      </Button>
                    ) : (
                      <>
                        <Button
                          onClick={handleSubscribe}
                          color="success"
                          size="md"
                        >
                          <i className="mdi mdi-eye-plus-outline me-2 font-size-15" />
                          Suscribirme
                        </Button>
                      </>
                    ))}
                  {venture.owner?.email !== authenticatedEmail && !loading && (
                    <>
                      {status ? (
                        <Button
                          color="danger"
                          size="md"
                          onClick={() =>
                            handleCancelSponsorship(subscriptionId)
                          }
                        >
                          <i className="mdi mdi-heart-off-outline me-2 font-size-15" />
                          Cancelar patrocinio
                        </Button>
                      ) : (
                        <Button
                          onClick={handleCreateSponsorship}
                          color="success"
                          outline
                          size="md"
                        >
                          <i className="mdi mdi-heart me-2 font-size-15" />
                          Patrocinar
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>
              <p className="text-muted mb-3">{venture.description}</p>

              <Row className="g-3 mb-3">
                <Col lg={4} md={12} sm={12}>
                  <div className="d-flex align-items-center text-muted">
                    <i className="mdi mdi-map-marker me-2 text-success font-size-20" />
                    <small>{venture.location?.description}</small>
                  </div>
                </Col>
                <Col lg={4} md={12} sm={12}>
                  <div className="d-flex align-items-center justify-content-center text-muted">
                    <i className="mdi mdi-city me-1 text-success font-size-20" />
                    <small>
                      {venture.location?.municipality.name}
                      {/* {venture.location?.municipality.department.name} */}
                    </small>
                  </div>
                </Col>

                <Col lg={4} md={12} sm={12}>
                  <div className="d-flex align-items-center justify-content-end text-muted">
                    <i className="mdi mdi-calendar me-1 text-success font-size-20" />
                    <small>Creado el {formatDate(venture.createdAt)}</small>
                  </div>
                </Col>
              </Row>

              {venture.location?.location?.coordinates[1] &&
              venture.location?.location?.coordinates[0] ? (
                <div className="my-3">
                  <TinyMap
                    coords={{
                      lat: venture.location?.location?.coordinates[1] || 0,
                      lng: venture.location?.location?.coordinates[0] || 0,
                    }}
                    address={venture.location?.description || venture.name}
                    height="200px"
                  />
                </div>
              ) : (
                <></>
              )}
              <div className="row g-3 mb-3">
                <div className="col-md-3 col-sm-12">
                  <div className="text-center p-2 bg-light rounded">
                    {/*<Users size={20} className="text-primary mb-1" />*/}
                    <i className="mdi mdi-account-multiple-outline me-1 fs-1" />
                    <div className="fw-bold">{venture.subscriptionsCount}</div>
                    <small className="text-muted">
                      {venture.subscriptionsCount === 1
                        ? 'Suscriptor'
                        : 'Suscriptores'}
                    </small>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="text-center p-2 bg-light rounded">
                    <i className="mdi mdi-handshake me-1 fs-1" />
                    <div className="fw-bold">{venture.sponsorshipsCount}</div>
                    <small className="text-muted">
                      {venture.sponsorshipsCount === 1
                        ? 'Patrocinador'
                        : 'Patrocinadores'}
                    </small>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="text-center p-2 bg-light rounded">
                    <i className="mdi mdi-currency-usd me-1 fs-1" />
                    <div className="fw-bold">
                      COP {formatCurrency(venture.totalSponsorships, 'COP')}
                    </div>
                    <small className="text-muted">
                      Total Recaudado en Patrocinios
                    </small>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    {displayPicture ? (
                      <img
                        className="rounded-circle"
                        src={venture.owner?.picture}
                        alt="Profile picture"
                        width={54}
                        height={54}
                        onError={() => setDisplayPicture(false)}
                      />
                    ) : (
                      <div
                        title={`${venture.owner!.firstName} ${venture.owner!.lastName}`}
                        className="rounded-circle d-inline-flex btn-soft-primary"
                        style={{
                          width: '40px',
                          backgroundColor: stringToColor(
                            `${venture.owner!.firstName} ${venture.owner!.lastName}`,
                          ),
                          height: '40px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        {getIconName(
                          `${venture.owner!.firstName} ${venture.owner!.lastName}`,
                        )}
                      </div>
                    )}
                    <div>
                      <div
                        className="fw-semibold mt-1 text-center"
                        style={{ fontSize: '0.875rem' }}
                      >
                        {venture.owner!.firstName} {venture.owner!.lastName}
                      </div>
                      <p className="text-muted text-xs text-center">
                        Propietario
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="list-inline my-2">
                <TruncatedItems
                  items={venture.categories.map((category) => (
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
                  ))}
                  maxItems={5}
                  all={'todas'}
                />
              </ul>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default VentureDetailHeader;
