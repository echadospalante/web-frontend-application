import { useState, type SVGProps } from 'react';

import { Venture } from 'echadospalante-domain';
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Row,
  UncontrolledTooltip,
} from 'reactstrap';

import { textToRGB } from '../../helpers/colors';
import VentureCardFooter from '../footer/VentureCardFooter';
import VentureCardHeader from '../header/VentureCardHeader';
import VentureMapModal from '../modal/VentureMapModal';
import TruncatedItems from '../text/TruncatedItems';
import TruncatedText from '../text/TruncatedText';

export type VentureCardProps = {
  venture: Venture;
  ownerButtons?: boolean;
  showFooter?: boolean;
  showActive?: boolean;
};

const VentureCard = ({
  venture,
  ownerButtons = true,
  showFooter = true,
  showActive = false
}: VentureCardProps) => {
  const [showMapModal, setShowMapModal] = useState(false);

  const parseLocation = (locationDescription: string) => {
    const parts = locationDescription.split(',');
    if (parts.length >= 2) {
      const municipality = parts[parts.length - 2].trim();
      const department = parts[parts.length - 1].trim();
      return `${municipality}, ${department}`;
    }
    return locationDescription;
  };

  const handleMapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMapModal(true);
  };

  return (
    <>
      {showMapModal && (
        <VentureMapModal
          title={`Ubicación del Emprendimiento: ${venture.name}`}
          modal={showMapModal}
          toggle={() => setShowMapModal(false)}
          address={venture.location?.description || 'Descripción no disponible'}
          coords={{
            lat: venture.location?.location?.coordinates[1] || 0,
            lng: venture.location?.location?.coordinates[0] || 0,
          }}
        />
      )}

      <a target="_blank" href={`/principal/emprendimientos/${venture.slug}`}>
        <Card className="border border-success overflow-hidden">
          <VentureCardHeader venture={venture} ownerIndicators={ownerButtons} />

          <CardBody className="mb-0 pb-0">
            <Row className="d-flex">
              <Col lg={6} md={6} sm={12} className="mx-auto mb-4">
                <img
                  src={venture.coverPhoto}
                  className="w-100 bg-light text-danger font-size-16 rounded-2"
                  alt={venture.name}
                />
              </Col>

              <Col
                lg={6}
                md={6}
                sm={12}
                className="flex-grow-1 overflow-hidden"
              >
                <p className="p-0 m-0">
                  <p className="text-dark font-size-18 mb-1">{venture.name}</p>
                  <Badge
                    className={`py-1 px-2 mb-2  ${
                      venture.verified ? 'bg-success' : 'bg-secondary'
                    }`}
                  >
                    <i
                      className={`bx ${
                        venture.verified ? 'bx-badge-check' : 'bx bx-badge'
                      } me-2`}
                    ></i>
                    {venture.verified
                      ? 'Emprendimiento Verificado'
                      : ' Emprendimiento no verificado'}
                  </Badge>
                </p>

                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center text-muted">
                      <i className="mdi mdi-map-marker me-2 text-success"></i>
                      <span className="me-1 font-size-10">
                        {parseLocation(
                          venture.location?.description ||
                            'Ubicación no disponible',
                        )}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      color="outline-success"
                      className="d-flex align-items-center"
                      onClick={handleMapClick}
                    >
                      <i className="mdi mdi-map-outline me-1"></i>
                      Ver en mapa
                    </Button>
                  </div>
                </div>
                <TruncatedText
                  textClassName="text-muted"
                  text={venture.description}
                  maxChars={150}
                />
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
              </Col>
            </Row>
          </CardBody>

          {showActive && (
            <div className="px-4 mb-2">
              <ul className="list-inline mb-0">
                <div className="mt-0 d-flex justify-content-between">
                  {ownerButtons && (
                    <Badge
                      className={`py-1 px-2 bg-${
                        venture.active ? 'success' : 'danger'
                      }`}
                    >
                      {venture.active ? 'Activo' : 'Inactivo'}
                    </Badge>
                  )}
                </div>
              </ul>
            </div>
          )}

          {showFooter && (
            <div className="border-top bg-light">
              <VentureCardFooter
                venture={venture}
                ownerButtons={ownerButtons}
              />
            </div>
          )}
        </Card>
      </a>
    </>
  );
};

export default VentureCard;

export function UilMegaphone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19.991 2.002a1 1 0 0 0-1 1v.637a9.04 9.04 0 0 1-7 3.363h-6a3.003 3.003 0 0 0-3 3v2a3.003 3.003 0 0 0 3 3h.484l-2.403 5.606a1 1 0 0 0 .92 1.394h4a1 1 0 0 0 .918-.606l2.724-6.356a9.03 9.03 0 0 1 6.357 3.325v.637a1 1 0 0 0 2 0v-16a1 1 0 0 0-1-1m-14 11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v4Zm2.341 7H6.508l2.142-5h1.825Zm10.66-4.478a11.05 11.05 0 0 0-7-2.522h-3v-4h3a11.05 11.05 0 0 0 7-2.522Z"
      ></path>
    </svg>
  );
}
