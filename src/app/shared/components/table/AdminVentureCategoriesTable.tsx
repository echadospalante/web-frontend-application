import { Fragment, useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { VentureCategory } from "echadospalante-domain";
import { Button, Card, CardBody, Col, Row, Table } from "reactstrap";

import useVentureCategories from "../../../modules/admin/general/hooks/useVentureCategories";
import VentureCategoriesFiltersForm from "../forms/VentureCategoriesFiltersForm";
import AppSpinner from "../loader/Spinner";
import EditVentureCategoryModal from "../modal/EditVentureCategoryModal";
import Pagination from "../pagination/Pagination";
import IconTooltip from "../tooltips/IconTooltip";
import CreateVentureCategoryModal from "../modal/CreateVentureCategoryModal";

const AdminVentureCategoriesTable = () => {
  const [activeCategoryToEdit, setActiveCategoryToEdit] =
    useState<VentureCategory>();

  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const {
    loading,
    error,
    page,
    size,
    setPage,
    items,
    total,
    fetchVentureCategories,
  } = useVentureCategories();

  const columns = getColumns(setActiveCategoryToEdit);

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

  const handleCloseEditModal = () => {
    setActiveCategoryToEdit(undefined);
  };

  return (
    <Row>
      {activeCategoryToEdit && (
        <EditVentureCategoryModal
          show={!!activeCategoryToEdit}
          onCloseClick={handleCloseEditModal}
          onSuccessfulEdit={fetchVentureCategories}
          ventureCategory={activeCategoryToEdit}
        />
      )}

      {showCreateCategoryModal && (
        <CreateVentureCategoryModal
          show={showCreateCategoryModal}
          onCloseClick={() => setShowCreateCategoryModal(false)}
          onSuccessfulCreate={fetchVentureCategories}
        />
      )}

      <Col lg="12">
        <Card>
          <CardBody className="border-bottom">
            <div className="d-flex align-items-center">
              <h5 className="mb-0 card-title flex-grow-1">
                Listado de categorías de emprendimientos
              </h5>
              <div className="flex-shrink-0 d-flex flex-row align-items-center">
                <Button
                  type="button"
                  onClick={() => setShowCreateCategoryModal(true)}
                  className="btn btn-success mx-2 mb-2"
                >
                  Crear categoría
                  <i className="bx bx-plus mx-1"></i>
                </Button>

                <Button
                  type="button"
                  onClick={fetchVentureCategories}
                  className="btn btn-light mx-2 mb-2"
                >
                  <i className="mdi mdi-refresh"></i>
                </Button>
              </div>
            </div>

            {error && (
              <div className="alert alert-danger text-center" role="alert">
                Ha habido un error al consultar las categorías de
                emprendimientos, por favor intente nuevamente.
              </div>
            )}
          </CardBody>

          <CardBody>
            <Fragment>
              <VentureCategoriesFiltersForm />

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

const getColumns = (
  setActiveCategoryToEdit: (ventureCategory: VentureCategory) => void
) => {
  return [
    {
      header: "Id",
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
      header: "Slug",
      accessorKey: "slug",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Descripción",
      accessorKey: "description",
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
      header: "Última actualización",
      accessorKey: "updatedAt",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const date = new Date(cellProps.row.original.updatedAt as string);
        return <section>{new Date(date).toISOString().split("T")[0]}</section>;
      },
    },
    {
      header: "Acciones",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (value: any) => {
        const ventureCategory = value.row.original as VentureCategory;
        return (
          <div className="d-flex flex-row">
            <section className="d-flex m-1 flex-column">
              <Button
                onClick={() => setActiveCategoryToEdit(ventureCategory)}
                color="info"
                className="px-3 py-1 mx-1 w-100"
              >
                <IconTooltip
                  tooltipId={"edit-venture-category"}
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
                onClick={() => setActiveCategoryToEdit(ventureCategory)}
                color="danger"
                className="px-3 py-1 mx-1 w-100"
              >
                <IconTooltip
                  tooltipId={"delete-venture-category"}
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

export default AdminVentureCategoriesTable;
