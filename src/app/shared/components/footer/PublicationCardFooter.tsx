import { VenturePublication } from "echadospalante-domain";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import usePublicationInteractions from "../../../modules/principal/ventures/hooks/usePublicationInteractions";

export interface PublicationCardFooterProps {
  publication: VenturePublication
}

const PublicationCardFooter: React.FC<PublicationCardFooterProps> = ({ publication }) => {
  const {} = usePublicationInteractions
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <Link
          color="primary"
          className="me-2 btn btn-outline-primary"
          to={`/principal/emprendimientos/publicaciones/${publication.id}#nuevo-comentario`}
        >
          <i className="mdi mdi-comment-plus-outline me-1"></i>
          Comentar
        </Link>
      </div>
      <div>
        <span className="text-muted me-3">
          <i className="mdi mdi-party-popper me-1"></i>
          {publication.clapsCount}{' '}
          {publication.clapsCount === 1 ? 'Aplauso' : 'Aplausos'}
        </span>
        <span className="text-muted">
          <i className="bx bx-comment-dots me-1"></i>
          {publication.commentsCount}{' '}
          {publication.commentsCount === 1 ? 'Comentario' : 'Comentarios'}
        </span>
      </div>
    </div>
  );
};

export default PublicationCardFooter;