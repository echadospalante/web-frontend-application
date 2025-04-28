import { Fragment } from "react";

import { faker } from "@faker-js/faker";
import { VenturePublication } from "echadospalante-core";
import { Link } from "react-router-dom";

import PublicationTypeIcon from "../content/PublicationTypeIcon";

type VenturePublicationProps = {
  detailButton?: boolean;
  publication: VenturePublication;
};

const VenturePublicationCard = ({
  detailButton = true,
  publication,
}: VenturePublicationProps) => {
  return (
    <Fragment>
      <hr className="mb-4" />

      <div>
        <h5>
          <Link to="#" className="text-dark">
            Beautiful Day with Friends
          </Link>
        </h5>
        <p className="text-muted">10 Ago, 2024</p>

        <div className="position-relative w-75 mx-auto mb-3">
          <img
            src={faker.image.url({ width: 1820, height: 1080 })}
            alt=""
            className="img-thumbnail"
          />
        </div>

        <div className="d-flex my-3">
          {<PublicationTypeIcon type={publication.type} />}
        </div>

        <ul className="list-inline">
          <li className="list-inline-item mr-3">
            <Link to="#" className="text-muted">
              <i className="bx bx-comment-dots align-middle text-muted me-1"></i>{" "}
              12 Comentarios
            </Link>
          </li>
        </ul>
        <p>{publication.description}</p>

        {detailButton && (
          <div>
            <Link to="#" className="text-primary">
              Ver detalle <i className="mdi mdi-arrow-right"></i>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default VenturePublicationCard;
