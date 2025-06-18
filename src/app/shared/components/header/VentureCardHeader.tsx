import { Venture } from "echadospalante-domain";
import { useState } from "react";
import { getIconName, stringToColor } from "../../helpers/colors";
import { formatDate } from "../../helpers/dates";
import { Badge } from "reactstrap";

export interface VentureCardHeaderProps {
  venture: Venture;
  ownerIndicators: boolean;
}

const VentureCardHeader: React.FC<VentureCardHeaderProps> = ({ venture, ownerIndicators }) => {
  const [displayPicture, setDisplayPicture] = useState<boolean>(true);
  
  return (
    <>
      <div className="px-4 py-3 border-bottom bg-light">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            {displayPicture ? (
              <img
                className="rounded-circle header-profile-user"
                src={venture.owner!.picture}
                alt={`${venture.owner!.firstName} ${venture.owner!.lastName} Profile picture`}
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                  marginRight: '10px',
                }}
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
                  marginRight: '10px',
                }}
              >
                {getIconName(
                  `${venture.owner!.firstName} ${venture.owner!.lastName}`,
                )}
              </div>
            )}

            {/* <img
              src={venture.owner!.picture}
              alt={`${venture.owner!.firstName} ${venture.owner!.lastName}`}
              className="rounded-circle me-3"
              style={{ width: '48px', height: '48px', objectFit: 'cover' }}
            /> */}

            <div>
              <h6 className="mb-0 fw-semibold">
                {venture.owner!.firstName} {venture.owner!.lastName}
              </h6>
              <small className="text-muted d-flex align-items-center">
                <i className="mdi mdi-calendar-clock me-1 fs-5"></i>
                {formatDate(venture.createdAt)}
              </small>
            </div>
          </div>

          <div className="d-flex gap-2">
            {ownerIndicators && (
              <Badge
                className={`py-1 px-2 d-flex align-items-center ${
                  venture.active ? 'bg-success' : 'bg-danger'
                }`}
              >
                {venture.active ? 'Activo' : 'Inactivo'}
              </Badge>
            )}
            <Badge
              className={`py-1 px-2 d-flex align-items-center ${
                venture.owner!.verified ? 'bg-success' : 'bg-secondary'
              }`}
            >
              <i
                className={`bx ${
                  venture.owner!.verified ? 'bx-badge-check' : 'bx-badge'
                } me-1 fs-5`}
              ></i>
              {venture.owner!.verified
                ? 'Usuario verificado'
                : 'Usuario no verificado'}
            </Badge>
          </div>
        </div>
      </div>
    </>
  );
}

export default VentureCardHeader;