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
import Select from "react-select";
import { Button, Card, CardBody, Col, Row, Table } from "reactstrap";

import { User } from "x-ventures-domain";
import useUsers from "../../../modules/admin/general/hooks/useUsers";
import { AppRole, Role } from "../../../modules/auth/domain/Role";
import AppSpinner from "../loader/Spinner";
import EditUserModal from "../modal/EditUserModal";
import Pagination from "../pagination/Pagination";
import IconTooltip from "../tooltips/IconTooltip";

const AdminUsersTable = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    size: 20,
  });
  const [activeUserToEdit, setActiveUserToEdit] = useState<User>();
  const { page, size } = pagination;

  const { loading, error, items, total, fetchUsers, toggleLockUserAccount } =
    useUsers({
      page,
      size,
    });

  const columns = getColumns(toggleLockUserAccount, setActiveUserToEdit);

  const table = useReactTable({
    columns,
    data: items || [],
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const { getHeaderGroups, getRowModel } = table;

  const handleSetCurrentPage = (page: number) => {
    table.setPageIndex(page + 1);
    setPagination({ ...pagination, page });
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
          onSuccessfulEdit={fetchUsers}
          user={activeUserToEdit}
        />
      )}
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          Ha habido un error, por favor intente nuevamente.
        </div>
      )}

      <Col lg="12">
        {loading ? (
          <AppSpinner />
        ) : (
          <Card>
            <CardBody className="border-bottom">
              <div className="d-flex align-items-center">
                <h5 className="mb-0 card-title flex-grow-1">
                  Listado de usuario
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
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btn-list"
                    >
                      <i className="bx bx-list-ul"></i>
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btn-grid"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btn-grid"
                    >
                      <i className="bx bx-grid"></i>
                    </label>
                  </div>

                  <Button
                    type="button"
                    onClick={fetchUsers}
                    className="btn btn-light mx-2 mb-2"
                  >
                    <i className="mdi mdi-refresh"></i>
                  </Button>
                </div>
              </div>
            </CardBody>

            <CardBody>
              <Fragment>
                <Row className="mb-2">
                  <Col sm={3} lg={2}>
                    <label className="control-label">
                      Elementos por Página
                    </label>
                    <Select
                      className=""
                      isDisabled={loading}
                      value={{
                        label: size + "",
                        value: size,
                      }}
                      isMulti={false}
                      isSearchable={false}
                      onChange={(selected) => {
                        table.setPageIndex(0);
                        table.setPageSize(Number(selected?.value));
                        setPagination({
                          page: 0,
                          size: selected?.value || 20,
                        });
                      }}
                      options={[
                        { label: "20", value: 25 },
                        { label: "50", value: 50 },
                        { label: "100", value: 100 },
                      ]}
                    ></Select>
                  </Col>

                  <Col sm={6} lg={3}>
                    <label className="control-label">
                      Roles (Todos por defecto)
                    </label>
                    <Select
                      className=""
                      isDisabled={loading}
                      value={[{ label: "Usuario", value: AppRole.USER }]}
                      isMulti={true}
                      isSearchable={false}
                      closeMenuOnSelect={false}
                      onChange={(selected) => {
                        table.setPageIndex(0);
                        console.log({ selected });
                      }}
                      options={[
                        { label: "Administrador", value: AppRole.ADMIN },
                        { label: "Moderador", value: AppRole.MODERATOR },
                        {
                          label: "Publicador de Noticias",
                          value: AppRole.NEWS_WRITER,
                        },
                        { label: "Usuario", value: AppRole.USER },
                      ]}
                    ></Select>
                  </Col>

                  <Col lg={3} md={12} sm={12}>
                    <label className="control-label">
                      Búsqueda por Coincidencia
                    </label>
                    <input className="form-control" type="text" />
                  </Col>
                </Row>

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

                <Row>
                  <Col sm={12} md={5} lg={6}>
                    <div className="dataTables_info">
                      Página {page + 1} de {Math.ceil(total / size) || 1}, con
                      un tatal de {total} usuarios
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
                      length={total}
                      currentPage={page + 1}
                      setCurrentPage={handleSetCurrentPage}
                      paginationDiv="col-lg-12"
                      paginationClass="pagination pagination-rounded justify-content-center mt-3 mb-4 pb-1"
                    />
                  </Col>
                </Row>
              </Fragment>
            </CardBody>
          </Card>
        )}
      </Col>
    </Row>
  );
};

const getColumns = (
  toggleLockUserAccount: (user: User) => void,
  setActiveUserToEdit: (user: User) => void
) => {
  /*
   "id": 1,
   "name": "Analítica de Datos",
   "quotes": null,
   "createdAt": null
  */
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
                className={`badge bg-secondary rounded-3 p-1 px-2 m-1`}
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
          <section>
            {user.active ? (
              <Button
                onClick={() =>
                  toggleLockUserAccount(value.row.original as User)
                }
                color="danger"
                className="px-3 mx-1"
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
                className="px-3 mx-1"
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
              className="px-3"
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
