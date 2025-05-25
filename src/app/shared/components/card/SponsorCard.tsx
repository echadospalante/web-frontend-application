import { VentureSponsorship } from "echadospalante-domain";
import moment from "moment";
import "moment/locale/es";
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, UncontrolledTooltip } from "reactstrap";

import useSponsorshipOwner from "../../../modules/admin/general/hooks/useSponsorshipOwner";
import { textToRGB } from "../../helpers/colors";
import AppSpinner from "../loader/Spinner";

moment.locale("es");

type SponsorCardProps = {
  sponsorship: VentureSponsorship;
};

const SponsorCard = ({ sponsorship }: SponsorCardProps) => {
  const { error, fetchAllVentureCategories, loading, owner } =
    useSponsorshipOwner(sponsorship.id);

  if (loading || !owner) {
    return <AppSpinner />;
  }

  return (
    <Card className="text-center">
      <CardBody>
        {!owner.picture ? (
          <div className="avatar-sm mx-auto mb-4">
            <span
              className={"avatar-title rounded-circle"}
              style={{
                backgroundColor: textToRGB(owner.firstName + owner.lastName),
              }}
            >
              {owner.firstName[0]} {owner.lastName[0]}
            </span>
          </div>
        ) : (
          <div className="mb-4">
            <img
              className="rounded-circle avatar-sm"
              src={owner.picture}
              alt="avatar"
            />
          </div>
        )}

        <h6 className="font-size-15 mb-1">
          <Link to="#" className="text-dark">
            {owner.firstName} {owner.lastName}
          </Link>
        </h6>

        <p>
          Se realizó el:{" "}
          <span className="text-muted">
            {moment(sponsorship.createdAt).fromNow()}
          </span>
        </p>

        <h5>
          {sponsorship.monthlyAmount.toFixed(2)}
          <span className="font-size-15">€</span>
        </h5>
      </CardBody>

      <CardFooter className="bg-transparent border-top">
        <div className="contact-links d-flex font-size-20">
          <div className="flex-fill">
            <Link
              to={`/principal/perfiles/${owner.id}`}
              target="_blank"
              id={"profile-" + owner.id}
            >
              <i className="bx bx-message-square-dots" />
              <UncontrolledTooltip
                placement="top"
                target={"profile-" + owner.id}
              >
                Ver perfil
              </UncontrolledTooltip>
            </Link>
          </div>

          <div className="flex-fill">
            <Link
              to={`/principal/perfiles/${owner.id}?tab=${"emprendimientos"}`}
              target="_blank"
              id={"ventures-" + owner.id}
            >
              <i className="bx bx-pie-chart-alt text-primary" />
              <UncontrolledTooltip
                placement="top"
                target={"ventures-" + owner.id}
              >
                Emprendimientos
              </UncontrolledTooltip>
            </Link>
          </div>

          <div className="flex-fill">
            <Link
              to={`/principal/perfiles/${owner.id}?tab=${"comentarios"}`}
              target="_blank"
              id={"comments-" + owner.id}
            >
              <i className="bx bx-user-circle text-success" />
              <UncontrolledTooltip
                placement="top"
                target={"comments-" + owner.id}
              >
                Perfil
              </UncontrolledTooltip>
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SponsorCard;
