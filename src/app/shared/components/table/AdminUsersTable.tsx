/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { User, UserDetail } from "echadospalante-domain";
import { Button, Card, CardBody, Col, Row, Table } from "reactstrap";

import useFetchUsers from "../../../modules/admin/general/hooks/useFetchUsers";
import { AppRole, Role } from "../../../modules/auth/domain/Role";
import { textToRGB } from "../../helpers/colors";
import {
  getDepartmentByMunicipalityId,
  getMunicipalityNameById,
} from "../../helpers/department-helpers";
import UsersFiltersForm from "../forms/UsersFiltersForm";
import AppSpinner from "../loader/Spinner";
import EditUserModal from "../modal/EditUserModal";
import Pagination from "../pagination/Pagination";
import IconTooltip from "../tooltips/IconTooltip";

const AdminUsersTable = () => {
  const [activeUserToEdit, setActiveUserToEdit] = useState<User>();

  const { loading, error, users, toggleLockUserAccount, page, size, setPage } =
    useFetchUsers();

  const columns = getColumns(toggleLockUserAccount, setActiveUserToEdit);

  const table = useReactTable({
    columns,
    data: users?.items || [],
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const { getHeaderGroups, getRowModel } = table;

  const handleSetCurrentPage = (page: number) => {
    table.setPageIndex(page + 1);
    setPage(page);
  };

  const handleCloseEditModal = () => {
    setActiveUserToEdit(undefined);
  };

  return (
    <Row>
      {activeUserToEdit && (
        <EditUserModal
          show={!!activeUserToEdit}
          onCloseClick={handleCloseEditModal}
          // onSuccessfulEdit={fetchUsers}
          onSuccessfulEdit={() => {}}
          user={activeUserToEdit}
        />
      )}

      <Col lg="12">
        <Card>
          <CardBody className="border-bottom">
            <div className="d-flex align-items-center">
              <h5 className="mb-0 card-title flex-grow-1">
                Listado de usuarios
              </h5>
              <div className="flex-shrink-0 d-flex flex-row align-items-center">
                <div className="btn-group h-100" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btn-list"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-primary" htmlFor="btn-list">
                    <i className="bx bx-list-ul"></i>
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btn-grid"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-primary" htmlFor="btn-grid">
                    <i className="bx bx-grid"></i>
                  </label>
                </div>

                <Button
                  type="button"
                  // onClick={fetchUsers}
                  onClick={() => {}}
                  className="btn btn-light mx-2 mb-2"
                >
                  <i className="mdi mdi-refresh"></i>
                </Button>
              </div>
            </div>

            {error && (
              <div className="alert alert-danger text-center" role="alert">
                Ha habido un error al consultar los usuarios, por favor intente
                nuevamente.
              </div>
            )}
          </CardBody>

          <CardBody>
            <Fragment>
              <UsersFiltersForm />

              {loading ? (
                <div style={{ marginTop: "200px" }}>
                  <AppSpinner />
                </div>
              ) : (
                <div className="table-responsive">
                  <Table hover bordered={false}>
                    <thead>
                      {getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                          {headerGroup.headers.map((header) => {
                            return (
                              <th
                                key={header.id}
                                colSpan={header.colSpan}
                                className={`${
                                  header.column.columnDef.enableSorting
                                    ? "sorting sorting_desc"
                                    : ""
                                }`}
                              >
                                {header.isPlaceholder ? null : (
                                  <Fragment>
                                    <div>
                                      {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                      )}
                                    </div>
                                  </Fragment>
                                )}
                              </th>
                            );
                          })}
                        </tr>
                      ))}
                    </thead>

                    <tbody>
                      {getRowModel().rows.map((row) => {
                        return (
                          <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => {
                              return (
                                <td key={cell.id}>
                                  {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              )}

              {users && (
                <Row>
                  <Col sm={12} md={5} lg={6}>
                    <div className="dataTables_info">
                      Página {page + 1} de {Math.ceil(users.total / size) || 1},
                      con un tatal de {users.total} usuarios
                    </div>
                  </Col>
                  <Col
                    sm={12}
                    md={7}
                    lg={6}
                    className="d-flex justify-content-end"
                  >
                    <Pagination
                      perPageData={size}
                      length={users.total}
                      currentPage={page + 1}
                      setCurrentPage={handleSetCurrentPage}
                      paginationDiv="col-lg-12"
                      paginationClass="pagination pagination-rounded justify-content-center mt-3 mb-4 pb-1"
                    />
                  </Col>
                </Row>
              )}
            </Fragment>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

const getColumns = (
  toggleLockUserAccount: (user: User) => void,
  setActiveUserToEdit: (user: User) => void
) => {
  return [
    {
      header: "Foto",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const user = cellProps.row.original as User;
        return (
          <section>
            <img
              src={user.picture}
              alt="user"
              className="avatar-xs rounded-circle"
            />
          </section>
        );
      },
    },
    {
      header: "Verificado",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const verified = cellProps.row.original.verified;
        if (!verified) return <></>;
        return (
          <section className="d-flex justify-content-center">
            <i className="bx bx-badge-check text-primary fs-3"></i>
          </section>
        );
      },
    },
    {
      header: "Nombres",
      accessorKey: "firstName",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Apellidos",
      accessorKey: "lastName",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Email",
      accessorKey: "email",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Género",
      accessorKey: "detail.gender",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Fecha de Nacimiento",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const userDetail = cellProps.row.original.detail as UserDetail | null;
        if (!userDetail) return <></>;
        return (
          <section>
            <span>
              {new Date(userDetail.birthDate).toISOString().split("T")[0]}
            </span>
          </section>
        );
      },
    },
    {
      header: "Municipio",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const userDetail = cellProps.row.original.detail;
        if (!userDetail) return <></>;
        return (
          <section>
            <span>
              {getMunicipalityNameById(userDetail.municipalityId)},{" "}
              {getDepartmentByMunicipalityId(userDetail.municipalityId)?.name}
            </span>
          </section>
        );
      },
    },
    {
      header: "Completó registro",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const onboardingCompleted = cellProps.row.original.onboardingCompleted;
        return (
          <section>
            <span
              className={`badge bg-${
                onboardingCompleted ? "success" : "danger"
              } rounded-pill p-2 px-3`}
            >
              {onboardingCompleted ? "Sí" : "No"}
            </span>
          </section>
        );
      },
    },
    {
      header: "Estado",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const active = cellProps.row.original.active;
        return (
          <section>
            <span
              className={`badge bg-${
                active ? "success" : "danger"
              } rounded-pill p-2 px-3`}
            >
              {active ? "Activo" : "Inactivo"}
            </span>
          </section>
        );
      },
    },
    {
      header: "Roles",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const roles = cellProps.row.original.roles as Role[];
        return (
          <section className="d-flex">
            {roles.map((role) => (
              <span
                key={role.id}
                className={`badge rounded-3  px-1 py-2 m-1`}
                style={{ backgroundColor: textToRGB(role.label) }}
              >
                {role.label}
              </span>
            ))}
          </section>
        );
      },
    },
    {
      header: "Fecha de creación",
      accessorKey: "createdAt",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const date = new Date(cellProps.row.original.createdAt as string);
        return <section>{new Date(date).toISOString().split("T")[0]}</section>;
      },
    },
    {
      header: "Acciones",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (value: any) => {
        const user = value.row.original as User;
        if (user.roles.some((role) => role.name === AppRole.ADMIN)) {
          return <></>;
        }
        return (
          <section className="d-flex flex-column">
            {user.active ? (
              <Button
                onClick={() =>
                  toggleLockUserAccount(value.row.original as User)
                }
                color="danger"
                className="px-3 py-1 mx-1 w-100"
              >
                <IconTooltip
                  tooltipId={"reenable-user"}
                  tooltipHtml={"<h6>Deshabilitar usuario</h6>"}
                  tooltipPlace={"top"}
                  iconClassName={"bx bx-x font-size-16 align-middle text-white"}
                />
              </Button>
            ) : (
              <Button
                onClick={() =>
                  toggleLockUserAccount(value.row.original as User)
                }
                color="info"
                className="px-3 py-1 mx-1 w-100"
              >
                <IconTooltip
                  tooltipId={"disable-user"}
                  tooltipHtml={"<h6>Reactivar usuario</h6>"}
                  tooltipPlace={"top"}
                  iconClassName={
                    "bx bx-reset font-size-16 align-middle text-white"
                  }
                />
              </Button>
            )}

            <Button
              onClick={() => setActiveUserToEdit(value.row.original as User)}
              color="primary"
              className="px-3 py-1 mt-1 mx-1 w-100"
            >
              <IconTooltip
                tooltipId={"modify-user"}
                tooltipHtml={"<h6>Editar</h6>"}
                tooltipPlace={"top"}
                iconClassName={
                  "bx bxs-edit font-size-16 align-middle text-white"
                }
              />
            </Button>
          </section>
        );
      },
    },
  ];
};

export default AdminUsersTable;
