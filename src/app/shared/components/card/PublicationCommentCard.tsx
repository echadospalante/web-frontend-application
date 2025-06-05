import { PublicationComment } from 'echadospalante-domain';
import { getIconName, stringToColor } from '../../helpers/colors';
import { useState } from 'react';

export interface PublicationCommentCardProps {
  comment: PublicationComment;
}

const PublicationCommentCard: React.FC<PublicationCommentCardProps> = ({
  comment,
}) => {
  const [displayPicture, setDisplayPicture] = useState(true);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatRelativeDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60),
    );

    if (diffInHours < 1) return 'Hace unos minutos';
    if (diffInHours < 24)
      return `Hace ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7)
      return `Hace ${diffInDays} día${diffInDays > 1 ? 's' : ''}`;

    return formatDate(dateString);
  };

  return (
    <div key={comment.id} className="d-flex mb-4 pb-3 border-bottom">
      <div className="flex-shrink-0 me-3">
        {displayPicture ? (
          <img
            className="rounded-circle header-profile-user"
            src={comment.author.picture}
            alt="Profile picture"
            onError={() => setDisplayPicture(false)}
          />
        ) : (
          <div
            title={`${comment.author.firstName} ${comment.author.lastName}`}
            className="rounded-circle d-inline-flex btn-soft-primary"
            style={{
              width: '40px',
              backgroundColor: stringToColor(
                `${comment.author.firstName} ${comment.author.lastName}`,
              ),
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {getIconName(
              `${comment.author.firstName} ${comment.author.lastName}`,
            )}
          </div>
        )}
      </div>
      <div className="flex-grow-1">
        <div className="d-flex align-items-center mb-1">
          <h6 className="mb-0 me-2">
            {comment.author.firstName} {comment.author.lastName}
          </h6>
          {comment.author.verified && (
            <i className="bx bx-badge-check text-primary"></i>
          )}
        </div>
        <p className="text-muted small mb-2">
          {formatRelativeDate(new Date(comment.createdAt).toISOString())}
        </p>
        <p className="mb-0">{comment.content}</p>
      </div>
    </div>
  );
};

export default PublicationCommentCard;
