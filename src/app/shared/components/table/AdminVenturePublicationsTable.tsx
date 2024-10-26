import { Fragment, useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { VenturePublication } from "echadospalante-core";
import { Button, Card, CardBody, Col, Row, Table } from "reactstrap";

import useVenturePublications from "../../../modules/admin/general/hooks/useVenturePublications";
import VenturePublicationsFiltersForm from "../forms/VenturePublicationsFiltersForm";
import AppSpinner from "../loader/Spinner";
import Pagination from "../pagination/Pagination";
import IconTooltip from "../tooltips/IconTooltip";

type AdminVenturePublicationsTableProps = {
  ventureId: string;
};

const AdminVenturePublicationsTable = ({
  ventureId,
}: AdminVenturePublicationsTableProps) => {
  const {
    loading,
    error,
    page,
    size,
    setPage,
    items,
    total,
    fetchVenturePublications,
  } = useVenturePublications();

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
    setPage(page);
  };

  return (
    <Row>
      <Col lg="12">
        <Card>
          <CardBody className="border-bottom">
            <div className="d-flex align-items-center">
              <h5 className="mb-0 card-title flex-grow-1">
                Listado de publicaciones del emprendimiento
              </h5>
              <div className="flex-shrink-0 d-flex flex-row align-items-center">
                <Button
                  type="button"
                  onClick={fetchVenturePublications}
                  className="btn btn-light mx-2 mb-2"
                >
                  <i className="mdi mdi-refresh"></i>
                </Button>
              </div>
            </div>

            {error && (
              <div className="alert alert-danger text-center" role="alert">
                Ha habido un error al consultar las publicaciones de este
                emprendimiento, por favor intente nuevamente.
              </div>
            )}
          </CardBody>

          <CardBody>
            <Fragment>
              <VenturePublicationsFiltersForm />

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

              <Row>
                <Col sm={12} md={5} lg={6}>
                  <div className="dataTables_info">
                    Página {page + 1} de {Math.ceil(total / size) || 1}, con un
                    tatal de {total} usuarios
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
      </Col>
    </Row>
  );
};

const getColumns = () => {
  return [
    {
      header: "Tipo",
      accessorKey: "type",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Título",
      accessorKey: "title",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Contenido",
      accessorKey: "body",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Url",
      accessorKey: "url",
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
      header: "Acciones",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (value: any) => {
        const venturePublication = value.row.original as VenturePublication;
        return (
          <div className="d-flex flex-row">
            <section className="d-flex m-1 flex-column">
              <Button
                // onClick={() => setActivePublicationToEdit(venturePublication)}
                color="info"
                className="px-3 py-1 mx-1 w-100"
              >
                <IconTooltip
                  tooltipId={"edit-venture-publication"}
                  tooltipHtml={"<h6>Editar categoría</h6>"}
                  tooltipPlace={"top"}
                  iconClassName={
                    "bx bx-edit font-size-16 align-middle text-white"
                  }
                />
              </Button>
            </section>
            <section className="d-flex m-1 flex-column">
              <Button
                // onClick={() => setActivePublicationToEdit(venturePublication)}
                color="danger"
                className="px-3 py-1 mx-1 w-100"
              >
                <IconTooltip
                  tooltipId={"delete-venture-publication"}
                  tooltipHtml={"<h6>Eliminar categoría</h6>"}
                  tooltipPlace={"top"}
                  iconClassName={"bx bx-x font-size-16 align-middle text-white"}
                />
              </Button>
            </section>
          </div>
        );
      },
    },
  ];
};

export default AdminVenturePublicationsTable;
