import React from 'react';
import { ContentType, VenturePublication } from 'echadospalante-domain';
import { Link } from 'react-router-dom';

interface PopularPublicationCardProps {
  publication: VenturePublication;
}

const PopularPublicationCard: React.FC<PopularPublicationCardProps> = ({
  publication,
}) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <Link
      to={`/principal/emprendimientos/publications/${publication.id}`}
      className="list-group-item text-muted py-3 px-2 bg-light-subtle border border-success rounded mb-1 highlighted-publication__card"
      style={{ textDecoration: 'none' }}
    >
      <div className="d-flex align-items-start">
        <div className="me-3 position-relative">
          <img
            src={
              publication.contents.find((c) => c.type === ContentType.IMAGE)
                ?.content || '/epl.png'
            }
            alt=""
            className="avatar-lg d-block rounded"
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
        </div>
        <div className="flex-grow-1 overflow-hidden">
          <h6
            className="font-size-13 text-muted text-wrap mb-2 text-dark"
            title={publication.description}
          >
            {publication.description.length > 80
              ? `${publication.description.substring(0, 80)}...`
              : publication.description}
          </h6>

          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3">
              <div className="d-flex align-items-center">
                <i
                  className="mdi mdi-thumb-up text-primary me-1"
                  style={{ fontSize: '14px' }}
                ></i>
                <span className="font-size-12 text-primary fw-bold">
                  {formatNumber(publication.clapsCount || 0)}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <i
                  className="mdi mdi-comment-outline text-info me-1"
                  style={{ fontSize: '14px' }}
                ></i>
                <span className="font-size-12 text-info fw-bold">
                  {formatNumber(publication.commentsCount || 0)}
                </span>
              </div>
            </div>
          </div>
          <div>
            <Link
              className="font-size-12 text-decoration-none"
              to={`/principal/emprendimientos/${publication.venture?.slug}`}
            >
              {publication.venture?.name}
              <i className="mdi mdi-open-in-new ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularPublicationCard;
