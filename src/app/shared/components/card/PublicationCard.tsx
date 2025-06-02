/*

import React, { Fragment } from "react";

import { VenturePublication } from "echadospalante-domain";
import { Link } from "react-router-dom";

export interface PublicationCardProps {
  publication: VenturePublication;
}


const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
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

        <div className="position-relative mb-3">
          <img width="100%" src="/epl.png" className="img-thumbnail" />
        </div>

        <ul className="list-inline">
          <li className="list-inline-item mr-3">
            <Link to="#" className="text-muted">
              <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>{' '}
              Nombre Categoría
            </Link>
          </li>
          <li className="list-inline-item mr-3">
            <Link to="#" className="text-muted">
              <i className="bx bx-comment-dots align-middle text-muted me-1"></i>{' '}
              12 Comentarios
            </Link>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero
          sint recusandae ullam molestiae eveniet perferendis alias, omnis
          laboriosam dolorem dignissimos iure quas soluta mollitia error quaerat
          repudiandae at aliquam!
        </p>

        <div>
          <Link to="#" className="text-primary">
            Ver detalle <i className="mdi mdi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default PublicationCard;

*/

import { PublicationContent, VenturePublication } from 'echadospalante-domain';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, CardBody } from 'reactstrap';

export interface PublicationCardProps {
  publication: VenturePublication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const [showAllContents, setShowAllContents] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const getContentStats = () => {
    const stats = {
      TEXT: 0,
      IMAGE: 0,
      VIDEO: 0,
      LINK: 0,
    };

    publication.contents.forEach((content) => {
      switch (content.type) {
        case 'TEXT':
          stats.TEXT += 1;
          break;
        case 'IMAGE':
          stats.IMAGE += 1;
          break;
        case 'VIDEO':
          stats.VIDEO += 1;
          break;
        case 'LINK':
          stats.LINK += 1;
          break;
        default:
          break;
      }
    });

    return stats;
  };

  const renderContent = (content: PublicationContent) => {
    switch (content.type) {
      case 'TEXT':
        return (
          <p key={content.id} className="mb-2">
            {content.content}
          </p>
        );
      case 'IMAGE':
        return (
          <div key={content.id} className="position-relative mb-3">
            <img
              width="100%"
              src={content.content}
              className="img-thumbnail"
              alt="Contenido de publicación"
            />
          </div>
        );
      case 'VIDEO':
        return (
          <div key={content.id} className="position-relative mb-3">
            <video width="100%" controls className="img-thumbnail">
              <source src={content.content} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        );
      case 'LINK':
        return (
          <div key={content.id} className="mb-2">
            <a
              href={content.content}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              <i className="bx bx-link-external me-1"></i>
              {content.content}
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  const contentStats = getContentStats();
  const hasMoreContent = publication.contents.length > 1;
  const contentsToShow = showAllContents
    ? publication.contents
    : publication.contents.slice(0, 1);

  return (
    <Link to={`/principal/emprendimientos/publicaciones/${publication.id}`}>
      <Card className="shadow-sm">
        <CardBody>
          <div className="mb-3">
            <h5 className="mb-2">{publication.description}</h5>
            <p className="text-muted mb-0">
              <i className="bx bx-calendar me-1"></i>
              {formatDate(new Date(publication.createdAt).toISOString())}
            </p>
          </div>

          {publication.categories.length > 0 && (
            <div className="mb-3">
              {publication.categories.map((category) => (
                <Badge
                  key={category.id}
                  color="primary"
                  pill
                  className="me-2 mb-1 p-2"
                >
                  <i className="bx bx-purchase-tag-alt me-1"></i>
                  {category.name}
                </Badge>
              ))}
            </div>
          )}

          {publication.contents.length > 0 && (
            <div className="mb-3">
              {contentsToShow.map((content) => renderContent(content))}

              {hasMoreContent && (
                <div className="text-center">
                  <Button
                    color="link"
                    className="text-primary p-0"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowAllContents(!showAllContents);
                    }}
                  >
                    {showAllContents ? (
                      <>
                        Ver menos <i className="mdi mdi-chevron-up"></i>
                      </>
                    ) : (
                      <>
                        Ver más <i className="mdi mdi-chevron-down"></i>
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          )}

          <div className="mb-3">
            {contentStats.TEXT > 0 && (
              <Badge color="secondary" className="me-2 mb-1 p-2">
                <i className="bx bx-text me-1"></i>
                {contentStats.TEXT} Texto{contentStats.TEXT > 1 ? 's' : ''}
              </Badge>
            )}
            {contentStats.IMAGE > 0 && (
              <Badge color="success" className="me-2 mb-1 p-2">
                <i className="bx bx-image me-1"></i>
                {contentStats.IMAGE} Imágen{contentStats.IMAGE > 1 ? 'es' : ''}
              </Badge>
            )}
            {contentStats.VIDEO > 0 && (
              <Badge color="info" className="me-2 mb-1 p-2">
                <i className="bx bx-video me-1"></i>
                {contentStats.VIDEO} Video{contentStats.VIDEO > 1 ? 's' : ''}
              </Badge>
            )}
            {contentStats.LINK > 0 && (
              <Badge color="warning" className="me-2 mb-1 p-2">
                <i className="bx bx-link me-1"></i>
                {contentStats.LINK} Enlace{contentStats.LINK > 1 ? 's' : ''}
              </Badge>
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="text-muted me-3">
                <i className="mdi mdi-hand-clap me-1"></i>
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
        </CardBody>
      </Card>
    </Link>
  );
};

export default PublicationCard;
