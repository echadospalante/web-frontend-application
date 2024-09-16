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

import { QuoteAdvisor } from "../../../modules/principal/commercial/domain/advisor";
import useQuoteAdvisors from "../../../modules/principal/commercial/hooks/useQuoteAdvisors";
import AppSpinner from "../loader/Spinner";
import EditAdvisorModal from "../modal/EditAdvisorModal";
import Pagination from "../pagination/Pagination";

const QuoteAdvisorsTable = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    size: 20,
  });
  const [advisorToEdit, setAdvisorToEdit] = useState<QuoteAdvisor>();

  const { page, size } = pagination;

  const { loading, error, items, total, fetchQuoteAdvisors } = useQuoteAdvisors(
    { page, size }
  );

  const columns = getColumns(handleEditAdvisor);

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
    setAdvisorToEdit(undefined);
  };

  function handleEditAdvisor(id: number) {
    const advisor = items.find((advisor) => advisor.id === id);
    if (advisor) setAdvisorToEdit(advisor);
  }

  return (
    <Row>
      {advisorToEdit && (
        <EditAdvisorModal
          show={!!advisorToEdit}
          onCloseClick={handleCloseEditModal}
          advisor={advisorToEdit}
        />
      )}

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          Error al cargar los asesores de cotización, por favor intente de nuevo
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
                  Seguimiento de Asesores
                </h5>
                <div className="flex-shrink-0">
                  <Button
                    type="button"
                    onClick={fetchQuoteAdvisors}
                    className="btn btn-light me-1"
                  >
                    <i className="mdi mdi-refresh"></i>
                  </Button>
                </div>
              </div>
            </CardBody>

            <CardBody>
              <Fragment>
                <Row className="mb-2">
                  <Col sm={2}>
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
                      un tatal de {total} asesores
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

const getColumns = (handleEditAdvisor: (id: number) => void) => {
  return [
    {
      header: "No",
      accessorKey: "id",
      enableColumnFilter: false,
      enableSorting: true,
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
      header: "Identificacion",
      accessorKey: "identification",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Celular",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const phoneCode = cellProps.row.original.phoneCode as number;
        const phoneNumber = cellProps.row.original.phoneNumber as number;
        return (
          <section>
            <p>
              +{phoneCode} {phoneNumber}
            </p>
          </section>
        );
      },
    },
    {
      header: "Fecha Creación",
      accessorKey: "createdAt",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Última Actualización",
      accessorKey: "updatedAt",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Estado",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const active = cellProps.row.original.active as boolean;
        return (
          <section>
            <span
              className={`badge bg-${
                active ? "success" : "danger"
              } rounded-pill p-2`}
            >
              {active ? "Activo" : "Inactivo"}
            </span>
          </section>
        );
      },
    },
    {
      header: "Acciones",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (value: any) => {
        const advisorId = value.row.original.id as number;
        return (
          <section>
            <Button
              onClick={() => handleEditAdvisor(advisorId)}
              color="info"
              className="mx-1"
            >
              <i className="bx bx-edit font-size-16 align-middle me-1 text-white" />
              <span>Editar</span>
            </Button>

            <Button
              // onClick={() => deleteQuote(value.row.original as Quote)}
              color="danger"
              className="mx-1"
            >
              <i className="bx bx-trash font-size-16 align-middle me-1 text-white" />
              <span>Eliminar</span>
            </Button>
          </section>
        );
      },
    },
  ];
};

export default QuoteAdvisorsTable;
