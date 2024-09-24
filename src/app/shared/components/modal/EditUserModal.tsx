import Select, { MultiValue } from "react-select";
import {
  Col,
  Form,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

import { User } from "x-ventures-domain";
import useEditUser from "../../../modules/admin/general/hooks/useEditUser";
import { AppRole } from "../../../modules/auth/domain/Role";
import useRoles from "../../../modules/auth/hooks/useRoles";

type EditUserModalProps = {
  show: boolean;
  onCloseClick: () => void;
  user: User;
  onSuccessfulEdit: () => void;
};

const EditUserModal = ({
  show,
  onCloseClick,
  user,
  onSuccessfulEdit,
}: EditUserModalProps) => {
  const {
    error,
    loading,
    handleEditRoles,
    handleToggleActive,
    handleToggleVerified,
    message,
  } = useEditUser(user);

  const { error: errorRoles, loading: loadingRoles, roles } = useRoles();

  const handleEvaluateRolesChange = (
    values: MultiValue<{ label: string; value: AppRole }>
  ) => {
    if (!values) return;
    const selectedRoles = roles.filter((role) =>
      values.map(({ value }) => value).includes(role.name)
    );
    handleEditRoles(selectedRoles).then(() => {
      onSuccessfulEdit();
    });
  };

  return (
    <Modal isOpen={show} toggle={onCloseClick}>
      <ModalHeader toggle={onCloseClick} tag="h4">
        Editar usuario
      </ModalHeader>
      <ModalBody>
        <Form>
          <Row className="mt-4 gx-4">
            <div className="px-2">
              {errorRoles && (
                <div className="alert alert-danger text-center" role="alert">
                  Error al cargar los roles, por favor intente nuevamente.
                </div>
              )}
            </div>

            <Col md={12} className="mb-3">
              <Label htmlFor="validationTooltip01">Roles de usuario</Label>
              <Select
                id="departmentId"
                name="departmentId"
                value={user.roles
                  .filter(
                    ({ name }) =>
                      name === AppRole.MODERATOR || name === AppRole.NEWS_WRITER
                  )
                  .map(({ name, label }) => ({
                    label: label,
                    value: name,
                  }))}
                placeholder="Selecciona los roles del usuario"
                isMulti={true}
                isLoading={loadingRoles}
                onChange={(value) => {
                  handleEvaluateRolesChange(value);
                }}
                options={roles
                  .filter(
                    ({ name }) =>
                      name === AppRole.MODERATOR || name === AppRole.NEWS_WRITER
                  )
                  .map((role) => ({
                    label: role.label,
                    value: role.name,
                  }))
                  .map((role) => role)}
                className="select2-selection"
              />
            </Col>

            <Col md={12} className="mb-3">
              <Label htmlFor="validationTooltip01">Estado</Label>
              <Select
                id="departmentId"
                name="departmentId"
                value={
                  user.active
                    ? {
                        label: "Activo",
                        value: true,
                        backgroundColor: "green",
                      }
                    : {
                        label: "Inactivo",
                        value: false,
                      }
                }
                placeholder="Selecciona los roles del usuario"
                isMulti={false}
                onChange={(value) => {
                  if (!value) return;
                  console.log({ value });
                }}
                options={[
                  {
                    label: "Activo",
                    value: true,
                  },
                  {
                    label: "Inactivo",
                    value: false,
                  },
                ]}
                className="select2-selection"
              />
            </Col>

            <Col md={12} className="mb-3">
              <Label htmlFor="validationTooltip01">Verificación</Label>
              <Select
                id="departmentId"
                name="departmentId"
                value={
                  user.active
                    ? {
                        label: "Verificado",
                        value: true,
                      }
                    : {
                        label: "No verificado",
                        value: false,
                      }
                }
                placeholder="Selecciona el estado de verificación"
                isMulti={false}
                onChange={(value) => {
                  if (!value) return;
                  console.log({ value });
                }}
                options={[
                  {
                    label: "Verificado",
                    value: true,
                  },
                  {
                    label: "No verificado",
                    value: false,
                  },
                ]}
                className="select2-selection"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <hr />
              <p className="text-center">
                Los cambios en las cuentas de usuario se aplican
                automáticamente.
              </p>
            </Col>
          </Row>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditUserModal;
