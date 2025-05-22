import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { User } from "echadospalante-domain";

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Card className="text-center">
      <CardBody>
        {!user.picture ? (
          <div className="avatar-sm mx-auto mb-4">
            <span
              className={
                "avatar-title rounded-circle bg-success-subtle text-success font-size-16"
              }
            >
              {user.firstName.charAt(0)}
            </span>
          </div>
        ) : (
          <div className="mb-4">
            <img
              className="rounded-circle avatar-sm"
              src={user.picture}
              alt=""
            />
          </div>
        )}

        <h5 className="font-size-15 mb-0">
          <Link to="#" className="text-dark">
            {user.firstName} {user.lastName}
          </Link>
        </h5>
        <p className="text-muted">{user.email}</p>
        <hr />
      </CardBody>
    </Card>
  );
};

export default UserCard;
