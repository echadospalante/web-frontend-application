import { PublicationClap } from 'echadospalante-domain';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

export interface PublicationClapCardProps {
  clap: PublicationClap;
}

const PublicationClapCard: React.FC<PublicationClapCardProps> = ({ clap }) => {
  const formatRelativeDate = (dateString: Date) => {
    const date = new Date(dateString);
    return moment(date).fromNow();
  };

  return (
    <div className="d-flex align-items-center py-3 border-0">
      <img
        src={clap.user.picture}
        alt={`${clap.user.firstName} ${clap.user.lastName}`}
        className="rounded-circle me-3"
        width="40"
        height="40"
      />
      <div className="flex-grow-1">
        <h6 className="mb-0 d-flex align-items-center">
          {clap.user.firstName} {clap.user.lastName}
          {clap.user.verified && (
            <i className="bx bx-badge-check text-primary ms-1"></i>
          )}
        </h6>
        <small className="text-muted">
          {formatRelativeDate(clap.createdAt)}
        </small>
      </div>
    </div>
  );
};
export default PublicationClapCard;
