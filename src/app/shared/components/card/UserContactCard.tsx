import { Card, CardBody, CardTitle, Table } from 'reactstrap';

import useUserContactInfo from '../../../modules/principal/account/hooks/useUserContactInfo';
import AlertWithReload from '../alert/AlertWithReload';
import AppSpinner from '../loader/Spinner';

const UserContactCard = () => {
  const { error, loading, fetchUserContactInfo } = useUserContactInfo();

  if (loading) {
  }

  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-4">Información de contacto:</CardTitle>
        <p className="text-muted mb-4">
          Aquí podrás ver y modificar la información de contacto de tu perfil.
        </p>

        {error && (
          <AlertWithReload
            message="Ha habido un error al consultar los usuarios, por favor intente nuevamente."
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
                    <th scope="row">Dirección :</th>
                    <td>Test </td>
                  </tr>
                  <tr>
                    <th scope="row">Teléfono :</th>
                    <td>Test </td>
                  </tr>
                  <tr>
                    <th scope="row">Facebook :</th>
                    <td>Test </td>
                  </tr>
                  <tr>
                    <th scope="row">Instagram :</th>
                    <td>Test </td>
                  </tr>
                  <tr>
                    <th scope="row">X :</th>
                    <td>Test </td>
                  </tr>
                  <tr>
                    <th scope="row">LinkedIn :</th>
                    <td>Test </td>
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
