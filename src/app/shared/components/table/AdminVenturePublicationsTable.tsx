import { Fragment, useState } from 'react';

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  ContentType,
  PublicationType,
  VenturePublication,
} from 'echadospalante-domain';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  Col,
  Row,
  Table,
  UncontrolledTooltip,
} from 'reactstrap';

import useVenturePublications from '../../../modules/admin/general/hooks/useVenturePublications';
import PublicationTypeIcon from '../content/PublicationTypeIcon';
import VenturePublicationsFiltersForm from '../forms/VenturePublicationsFiltersForm';
import AppSpinner from '../loader/Spinner';
import Pagination from '../pagination/Pagination';
import IconTooltip from '../tooltips/IconTooltip';

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

  console.log(ventureId);

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
                <div style={{ marginTop: '200px' }}>
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
                                    ? 'sorting sorting_desc'
                                    : ''
                                }`}
                              >
                                {header.isPlaceholder ? null : (
                                  <Fragment>
                                    <div>
                                      {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext(),
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
                                <td
                                  key={cell.id}
                                  className={`${
                                    cell.row.original.active
                                      ? 'bg-soft-red'
                                      : ''
                                  }`}
                                >
                                  {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext(),
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
      header: 'Tipo',
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        // const {  } = cellProps.row.original as VenturePublication;
        console.log(cellProps.row.original);
        return <PublicationTypeIcon type={PublicationType.ACHIEVEMENT} />;
      },
    },
    {
      header: 'Recursos',
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const venturePublication = cellProps.row.original as VenturePublication;
        const [images] = useState(
          venturePublication.contents.filter(
            ({ type }) => type === ContentType.IMAGE,
          ),
        );
        const [files] = useState(
          venturePublication.contents.filter(
            ({ type }) => type === ContentType.FILE,
          ),
        );

        return (
          <Fragment>
            {images.length > 0 && (
              <section>
                <small>Imágenes ({images.length})</small>

                <div className="avatar-group">
                  {images.map(({ content, id }, key) => {
                    const [img] = JSON.parse(content);
                    return (
                      <div key={key} className="avatar-group-item">
                        <Link
                          to="#"
                          className="d-inline-block"
                          id={'member' + id}
                        >
                          <img
                            src={img}
                            className="rounded-1 avatar-md"
                            alt=""
                          />
                          <UncontrolledTooltip
                            placement="top"
                            target={'member' + id}
                          >
                            Ver imágen
                          </UncontrolledTooltip>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {files.length > 0 && (
              <section className="mt-3">
                <small className="pt-4">Archivos ({files.length})</small>
                {files.map(({ content, id }, key) => {
                  const [url, name, type, size] = JSON.parse(content);
                  return (
                    <div key={key} className="d-flex">
                      <a href={url} id={'file' + id}>
                        <img
                          src={`/images/filetypes/${type}.png`}
                          height={30}
                          width={25}
                          alt=""
                        />
                        <span className="px-2">
                          {name} - <b>{size}</b>
                        </span>
                        <UncontrolledTooltip
                          placement="top"
                          target={'file' + id}
                        >
                          <i className="bx bx-download me-2"></i>
                          Descargar archivo
                        </UncontrolledTooltip>
                      </a>
                    </div>
                  );
                })}
              </section>
            )}
          </Fragment>
        );
      },
    },
    {
      header: 'Título',
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        return (
          <div
            style={{
              maxWidth: '200px',
              wordBreak: 'break-word',
              whiteSpace: 'normal',
            }}
          >
            <a
              href={cellProps.row.original.url}
              target="_blank"
              rel="noreferrer"
            >
              {cellProps.row.original.title}
              <i className="bx bx-link-external ms-2"></i>
            </a>
          </div>
        );
      },
    },
    {
      header: 'Contenido',
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const venturePublication = cellProps.row.original as VenturePublication;
        const [paragraphs] = useState(
          venturePublication.contents.filter(
            ({ type }) => type === ContentType.TEXT,
          ),
        );

        return (
          <div
            style={{
              maxWidth: '150px',
              wordBreak: 'break-word',
              whiteSpace: 'normal',
            }}
          >
            {paragraphs.map(({ content, id }) => {
              const paragraphs = JSON.parse(content) as string[];
              return paragraphs.map((text) => (
                <p key={id} className="text-muted">
                  {text}
                </p>
              ));
            })}
          </div>
        );
      },
    },
    {
      header: 'Fecha de creación',
      accessorKey: 'createdAt',
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps: any) => {
        const date = new Date(cellProps.row.original.createdAt as string);
        return <section>{new Date(date).toISOString().split('T')[0]}</section>;
      },
    },
    {
      header: 'Acciones',
      enableColumnFilter: false,
      enableSorting: true,
      cell: (value: any) => {
        const venturePublication = value.row.original as VenturePublication;
        return (
          <div className="d-flex flex-row">
            {venturePublication.active ? (
              <section className="d-flex m-1 flex-column">
                <Button
                  // onClick={() => setActivePublicationToEdit(venturePublication)}
                  color="warning"
                  className="px-3 py-1 mx-1 w-100"
                >
                  <IconTooltip
                    tooltipId={'edit-venture-publication'}
                    tooltipHtml={'<h6>Inactivar</h6>'}
                    tooltipPlace={'top'}
                    iconClassName={
                      'bx bx-hide font-size-16 align-middle text-white'
                    }
                  />
                </Button>
              </section>
            ) : (
              <section className="d-flex m-1 flex-column">
                <Button
                  // onClick={() => setActivePublicationToEdit(venturePublication)}
                  color="primary"
                  className="px-3 py-1 mx-1 w-100"
                >
                  <IconTooltip
                    tooltipId={'edit-venture-publication'}
                    tooltipHtml={'<h6>Reactivar</h6>'}
                    tooltipPlace={'top'}
                    iconClassName={
                      'bx bx-show font-size-16 align-middle text-white'
                    }
                  />
                </Button>
              </section>
            )}

            <section className="d-flex m-1 flex-column">
              <Button
                // onClick={() => setActivePublicationToEdit(venturePublication)}
                color="danger"
                className="px-3 py-1 mx-1 w-100"
              >
                <IconTooltip
                  tooltipId={'delete-venture-publication'}
                  tooltipHtml={'<h6>Eliminar publicación</h6>'}
                  tooltipPlace={'top'}
                  iconClassName={
                    'bx bx-trash font-size-16 align-middle text-white'
                  }
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
