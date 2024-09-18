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
import { Button, Card, CardBody, Col, Container, Row, Table } from "reactstrap";

import {
  getVentureStateColor,
  VentureState,
} from "../../modules/principal/ventures/domain/state";
import useQuoteFilters from "../../modules/principal/ventures/hooks/useQuoteFilters";
import useQuotes from "../../modules/principal/ventures/hooks/useQuotes";
import QuoteForm from "../content/QuoteForm";
import QuotesFilter from "../filters/QuoteFilters";
import AppSpinner from "../loader/Spinner";
import DeleteModal from "../modal/DeleteModal";
import QuoteDetailModal from "../modal/QuoteDetailModal";
import Pagination from "../pagination/Pagination";
import QuoteSteps from "../steps/QuoteSteps";

const AdminQuotesTable = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    size: 25,
  });
  const { page, size } = pagination;

  const { loading, error, quotes, fetchQuotes, handleDeleteQuote } = useQuotes({
    page: 0,
    size: 10,
  });

  const { handleChangeIncludedFields, filters } = useQuoteFilters();
  const [quoteToDelete, setQuoteToDelete] = useState<Quote>();
  const [activeQuote, setActiveQuote] = useState<Quote>();

  const deleteQuote = (quote: Quote) => {
    setQuoteToDelete(quote);
  };

  const handleSetActiveQuote = (quote: Quote) => {
    setActiveQuote(quote);
  };

  const columns = getColumns(handleSetActiveQuote, deleteQuote);

  const table = useReactTable({
    columns,
    data: quotes.items || [],
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

  const handleConfirmDelete = (): void => {
    handleDeleteQuote(quoteToDelete!.id).finally(() => {
      setQuoteToDelete(undefined);
    });
  };

  const handleCancelDelete = (): void => {
    setQuoteToDelete(undefined);
  };

  const handleClearActiveQuote = (): void => {
    setActiveQuote(undefined);
  };

  return (
    <Row>
      <DeleteModal
        title={`¿Estás seguro que deseas eliminar la cotización con código ${quoteToDelete?.code}?`}
        onCloseClick={handleCancelDelete}
        onDeleteClick={handleConfirmDelete}
        show={!!quoteToDelete}
        warningMessage={true}
      />

      {activeQuote?.id && (
        <QuoteDetailModal
          onCloseClick={handleClearActiveQuote}
          quoteId={activeQuote?.id}
          show={!!activeQuote}
        />
      )}

      <Col lg="12">
        <Card>
          <CardBody className="border-bottom">
            <div className="d-flex align-items-center">
              <h5 className="mb-0 card-title flex-grow-1">
                Seguimiento de Cotizaciones
              </h5>
              <div className="flex-shrink-0">
                <Button
                  type="button"
                  onClick={fetchQuotes}
                  className="btn btn-light me-1"
                >
                  <i className="mdi mdi-refresh"></i>
                </Button>
              </div>
            </div>
          </CardBody>

          <CardBody>
            <QuotesFilter />

            <Row className="mt-5 mb-2">
              <Col sm={2}>
                <label className="control-label my-0 mt-0">
                  Elementos por página
                </label>

                <Select
                  className=""
                  isDisabled={loading}
                  value={{
                    label: size,
                    value: size,
                  }}
                  isMulti={false}
                  isSearchable={false}
                  onChange={(value) => {
                    table.setPageIndex(0);
                    table.setPageSize(Number(value?.value || 25));
                    setPagination({
                      page: 0,
                      size: Number(value?.value || 25),
                    });
                  }}
                  options={[
                    { label: 25, value: 25 },
                    { label: 50, value: 50 },
                    { label: 100, value: 100 },
                  ]}
                ></Select>
              </Col>

              <Col lg={4} md={12} sm={12}>
                <label className="control-label  my-0 mt-0">
                  Información Adicional
                </label>
                <Select
                  value={filters.include.map((include) => ({
                    value: include,
                    label: include,
                  }))}
                  isMulti={true}
                  placeholder="Selecciona uno o más campos"
                  onChange={(values) => {
                    console.log(
                      values.map(({ value }) => value as QuoteInclude)
                    );
                    handleChangeIncludedFields(
                      values.map(({ value }) => value as QuoteInclude)
                    );
                  }}
                  options={[
                    ...Object.keys(QuoteInclude).map((include) => ({
                      label: include as QuoteInclude,
                      value: include as QuoteInclude,
                    })),
                  ]}
                  className="select2-selection"
                />
              </Col>
            </Row>

            {error && (
              <div className="alert alert-danger text-center mt-3" role="alert">
                Error al cargar las cotizaciones, por favor intente de nuevo
              </div>
            )}

            {loading ? (
              <AppSpinner />
            ) : (
              <Fragment>
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
                          <Fragment>
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
                            {filters.include.includes(QuoteInclude.Etapas) && (
                              <tr>
                                <td colSpan={columns.length}>
                                  <Row>
                                    <Container>
                                      <QuoteSteps />
                                    </Container>
                                  </Row>
                                </td>
                              </tr>
                            )}
                            {filters.include.includes(
                              QuoteInclude.Formulario
                            ) && (
                              <tr>
                                <td colSpan={columns.length}>
                                  <Row>
                                    <QuoteForm />
                                  </Row>
                                </td>
                              </tr>
                            )}
                          </Fragment>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>

                <Row>
                  <Col sm={12} md={5} lg={6}>
                    <div className="dataTables_info">
                      Página {page + 1} de {Math.ceil(quotes.total / size) || 1}
                      , con un tatal de {quotes.total} asesores
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
                      length={quotes.total}
                      currentPage={page + 1}
                      setCurrentPage={handleSetCurrentPage}
                      paginationDiv="col-lg-12"
                      paginationClass="pagination pagination-rounded justify-content-center mt-3 mb-4 pb-1"
                    />
                  </Col>
                </Row>
              </Fragment>
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

const getColumns = (
  setActiveQuote: (quote: Quote) => void,
  deleteQuote: (quote: Quote) => void
) => {
  return [
    {
      header: "No",
      accessorKey: "id",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Código",
      accessorKey: "code",
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
      header: "Estado",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const state = cellProps.row.original.estado as VentureState;
        console.log({ cellProps });
        const color = getVentureStateColor(state);
        return (
          <section>
            <span className={`badge bg-${color} rounded-pill p-2`}>
              {state.replace("_", " ")}
            </span>
          </section>
        );
      },
    },
    {
      header: "Fecha de Cotización",
      accessorKey: "date",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const date = new Date(cellProps.row.original.fechaCreacion as string);
        return <section>{new Date(date).toISOString().split("T")[0]}</section>;
      },
    },
    {
      header: "Area de Cotización",
      accessorKey: "area.name",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Asesor",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const firstName = cellProps.row.original.asesor.firstName as string;
        const lastName = cellProps.row.original.asesor.lastName as string;
        return (
          <section>
            {lastName}, {firstName}
          </section>
        );
      },
    },
    {
      header: "Cliente",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const firstName = cellProps.row.original.cliente.nombres as string;
        const lastName = cellProps.row.original.cliente.apellidos as string;
        return (
          <section>
            {lastName}, {firstName}
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
              onClick={() => setActiveQuote(value.row.original as Quote)}
              color="success"
              className="mx-1"
            >
              <i className="bx bx-detail font-size-16 align-middle me-1 text-white" />
              <span>Detalle</span>
            </Button>

            <Button
              onClick={() => deleteQuote(value.row.original as Quote)}
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

export default AdminQuotesTable;
