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

import { AreaSummary } from "../../../modules/principal/ventures/domain/area";
import {
  VentureState,
  getVentureStateColor,
} from "../../../modules/principal/ventures/domain/state";
import useQuoteAreas from "../../../modules/principal/ventures/hooks/useQuoteAreas";
import AppSpinner from "../loader/Spinner";
import Pagination from "../pagination/Pagination";

const AccountCollaboratorsTable = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    size: 20,
  });
  const { page, size } = pagination;

  const { loading, error, items, total, fetchQuoteAreas } = useQuoteAreas({
    page,
    size,
  });

  const columns = getColumns();

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

  return (
    <Row>
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          Error al cargar los usuarios, por favor intente de nuevo
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
                  Listado de Colaboradores
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
                    onClick={fetchQuoteAreas}
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

                  <Col sm={2}>
                    <label className="control-label">Áreas</label>
                    <Select
                      className=""
                      isDisabled={loading}
                      value={[{ label: "Todas", value: 0 }]}
                      isMulti={true}
                      isSearchable={false}
                      onChange={(selected) => {
                        table.setPageIndex(0);
                        console.log({ selected });
                      }}
                      options={[
                        { label: "Area 1", value: 25 },
                        { label: "Area 2", value: 50 },
                        { label: "Area 3", value: 100 },
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
                      un tatal de {total} colaboradores
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

const getColumns = () => {
  /*
   "id": 1,
   "name": "Analítica de Datos",
   "quotes": null,
   "createdAt": null
  */
  return [
    {
      header: "No",
      accessorKey: "id",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Nombre",
      accessorKey: "name",
      enableColumnFilter: false,
      enableSorting: true,
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
      header: "Activas",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const summaries = (cellProps.row.original.summaries ||
          []) as AreaSummary[];
        const summary = summaries.find(
          (summary) => summary.estado === VentureState.ACTIVE
        );
        if (!summary) return <></>;
        const color = getVentureStateColor(summary.estado);
        const label =
          summary.count === 1
            ? summary.estado.replace("_", " ")
            : summary.estado.replace("_", " ") + "S";
        return (
          <section className="d-flex flex-col flex-nowrap">
            <div className="mx-1">
              <span className={`badge bg-${color} rounded-pill p-2`}>
                <span className="display-7">{summary.count}</span> {label}
              </span>
            </div>
          </section>
        );
      },
    },
    {
      header: "Terminadas",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const summaries = (cellProps.row.original.summaries ||
          []) as AreaSummary[];
        const summary = summaries.find(
          (summary) => summary.estado === VentureState.COMPLETED
        );
        if (!summary) return <></>;
        const color = getVentureStateColor(summary.estado);
        const label =
          summary.count === 1
            ? summary.estado.replace("_", " ")
            : summary.estado.replace("_", " ") + "S";
        return (
          <section className="d-flex flex-col flex-nowrap">
            <div className="mx-1">
              <span className={`badge bg-${color} rounded-pill p-2`}>
                <span className="display-7">{summary.count}</span> {label}
              </span>
            </div>
          </section>
        );
      },
    },
    {
      header: "No Terminadas",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const summaries = (cellProps.row.original.summaries ||
          []) as AreaSummary[];
        const summary = summaries.find(
          (summary) => summary.estado === VentureState.NOT_COMPLETED
        );
        if (!summary) return <></>;
        const color = getVentureStateColor(summary.estado);
        const label =
          summary.count === 1
            ? summary.estado.replace("_", " ")
            : summary.estado.replace("_", " ") + "S";
        return (
          <section className="d-flex flex-col flex-nowrap">
            <div className="mx-1">
              <span className={`badge bg-${color} rounded-pill p-2`}>
                <span className="display-7">{summary.count}</span> {label}
              </span>
            </div>
          </section>
        );
      },
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
              {active ? "Activa" : "Inactiva"}
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
        return (
          <section>
            <Button color="info" className="mx-1">
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

export default AccountCollaboratorsTable;
