import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Table,
  UncontrolledTooltip,
} from 'reactstrap';

import useUserContactInfo from '../../../modules/principal/account/hooks/useUserContactInfo';
import AlertWithReload from '../alert/AlertWithReload';
import AppSpinner from '../loader/Spinner';
import TinyMap from '../map/TinyMap';
import { useSelector } from 'react-redux';
import { selectAuthentication } from '../../../config/redux/reducers/auth/auth.reducer';
import TruncatedItems from '../text/TruncatedItems';
import { textToRGB } from '../../helpers/colors';

const UserContactCard = () => {
  const { error, loading, fetchUserContactInfo } = useUserContactInfo();
  const { municipality } = useSelector(selectAuthentication);
  const userInfo = useSelector(selectAuthentication);

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  if (loading) {
  }

  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-4">Información de ubicación:</CardTitle>
        <div className="mb-5">
          <TinyMap
            coords={{
              lat: municipality!.lat,
              lng: municipality!.lng,
            }}
            address={municipality!.name}
            height={'300px'}
          />
        </div>

        <CardTitle className="mb-4">Información de contacto:</CardTitle>
        <p className="text-muted mb-4">
          Aquí podrás ver y modificar la información de contacto de tu perfil.
        </p>

        {error && (
          <AlertWithReload
            message="Ha habido un error al consultar tu información personal, por favor intenta nuevamente."
            onReload={fetchUserContactInfo}
          />
        )}
        {loading ? (
          <AppSpinner />
        ) : (
          !error && (
            <div className="table-responsive">
              <Table className="table-nowrap mb-0">
                <tbody>
                  <tr>
                    <th scope="row">Fecha de Registro :</th>
                    <td>{formatDate(userInfo.createdAt!)} </td>
                  </tr>
                  <tr>
                    <th scope="row">Estado :</th>
                    <td>
                      <Badge
                        className={`py-1 px-2 bg-${
                          userInfo.active ? 'success' : 'danger'
                        }`}
                      >
                        {userInfo.active ? 'Activo' : 'Inactivo'}
                      </Badge>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Verificación :</th>
                    <td>
                      <Badge
                        className={`py-1 px-2 mb-2  ${
                          userInfo.verified ? 'bg-success' : 'bg-secondary'
                        }`}
                      >
                        <i
                          className={`bx ${
                            userInfo.verified ? 'bx-badge-check' : 'bx bx-badge'
                          } me-2`}
                        ></i>
                        {userInfo.verified ? 'Verificado' : 'No verificado'}
                      </Badge>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Preferencias :</th>
                    <td>
                      <ul className="list-inline my-2">
                        <TruncatedItems
                          items={userInfo.preferences!.map((category) => (
                            <li
                              key={category.id}
                              className="list-inline-item my-1 mx-1"
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
                          maxItems={3}
                          all={'todas'}
                        />
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )
        )}
      </CardBody>
    </Card>
  );
};

export default UserContactCard;
