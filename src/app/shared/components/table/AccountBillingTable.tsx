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
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Row,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

import { Link } from "react-router-dom";
import useQuoteAreas from "../../../modules/principal/ventures/hooks/useQuoteAreas";
import AppSpinner from "../loader/Spinner";
import EcommerceOrdersModal from "../modal/BillingDetailModal";
import Pagination from "../pagination/Pagination";

const AccountBillingTable = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    size: 20,
  });
  const [showModal, setShowModal] = useState(false);
  const { page, size } = pagination;

  const { loading, error, total, fetchQuoteAreas } = useQuoteAreas({
    page,
    size,
  });

  const handleShowModal = () => {
    setShowModal(true);
  };

  const columns = getColumns(handleShowModal);

  const table = useReactTable({
    columns,
    data: getOrders() || [],
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
      <EcommerceOrdersModal
        title={""}
        show={showModal}
        onCloseClick={() => {
          setShowModal(false);
        }}
        warningMessage={false}
      />
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          Error al cargar las facturas, por favor intente de nuevo
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
                  Listado de Facturas
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

const getColumns = (showBill: () => void) => {
  /*
   "id": 1,
   "name": "Analítica de Datos",
   "quotes": null,
   "createdAt": null
  */
  return [
    {
      header: "Id",
      accessorKey: "orderId",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps) => {
        return (
          <Link to="#" className="text-body fw-bold">
            {cellProps.row.original.orderId}
          </Link>
        );
      },
    },
    // {
    //   header: "Nombre",
    //   accessorKey: "billingName",
    //   enableColumnFilter: false,
    //   enableSorting: true,
    // },
    {
      header: "Rango de Fecha",
      accessorKey: "orderDate",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Total",
      accessorKey: "total",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps) => {
        return `$ ${cellProps.row.original.total}`;
      },
    },
    {
      header: "Estado de Pago",
      accessorKey: "paymentStatus",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps) => {
        return (
          <Badge
            className={
              "font-size-12 badge-soft-" +
              (cellProps.row.original.paymentStatus === "Paid"
                ? "success"
                : "danger" && cellProps.row.original.paymentStatus === "Refund"
                ? "warning"
                : "danger")
            }
          >
            {cellProps.row.original.paymentStatus}
          </Badge>
        );
      },
    },
    {
      header: "Método de Pago",
      accessorKey: "paymentMethod",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cellProps) => {
        return (
          <span>
            <i
              className={
                cellProps.row.original.paymentMethod === "Paypal"
                  ? "fab fa-cc-paypal me-1"
                  : "" || cellProps.row.original.paymentMethod === "COD"
                  ? "fab fas fa-money-bill-alt me-1"
                  : "" || cellProps.row.original.paymentMethod === "Mastercard"
                  ? "fab fa-cc-mastercard me-1"
                  : "" || cellProps.row.original.paymentMethod === "Visa"
                  ? "fab fa-cc-visa me-1"
                  : ""
              }
            />{" "}
            {cellProps.row.original.paymentMethod}
          </span>
        );
      },
    },
    {
      header: "Detalle",
      enableColumnFilter: false,
      enableSorting: false,
      cell: (cellProps) => {
        return (
          <Button
            type="button"
            color="primary"
            className="btn-sm btn-rounded"
            onClick={() => {
              const orderData = cellProps.row.original;
              showBill();
              //   toggleViewModal(orderData);
              //   setTransaction(cellProps.row.original);
            }}
          >
            Ver detalle
          </Button>
        );
      },
    },
    {
      header: "Acciones",
      accessorKey: "action",
      enableColumnFilter: false,
      enableSorting: false,
      cell: (cellProps) => {
        return (
          <div className="d-flex gap-3">
            <Link
              to="#"
              className="text-success"
              onClick={() => {
                const orderData = cellProps.row.original;
                // handleOrderClick(orderData);
              }}
            >
              <i className="mdi mdi-pencil font-size-18" id="edittooltip" />
              <UncontrolledTooltip placement="top" target="edittooltip">
                Edit
              </UncontrolledTooltip>
            </Link>
            <Link
              to="#"
              className="text-danger"
              onClick={() => {
                const orderData = cellProps.row.original;
                // onClickDelete(orderData);
              }}
            >
              <i className="mdi mdi-delete font-size-18" id="deletetooltip" />
              <UncontrolledTooltip placement="top" target="deletetooltip">
                Delete
              </UncontrolledTooltip>
            </Link>
          </div>
        );
      },
    },
  ];
};

export default AccountBillingTable;

function getOrders() {
  return [
    {
      id: "customCheck2",
      orderId: "#SK2540",
      billingName: "Neal Matthews",
      orderDate: "2019-10-08",
      total: "$400",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
      coin: "Bitcoin",
      type: "Buy",
    },
    {
      id: "customCheck3",
      orderId: "#SK2541",
      billingName: "Jamal Burnett",
      orderDate: "2019-10-07",
      total: "$380",
      badgeClass: "danger",
      paymentStatus: "Chargeback",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Visa",
      coin: "Ethereum",
      type: "Sell",
    },
    {
      id: "customCheck4",
      orderId: "#SK2542",
      billingName: "Juan Mitchell",
      orderDate: "2019-10-06",
      total: "$384",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      coin: "Bitcoin",
      type: "Buy",
    },
    {
      id: "customCheck5",
      orderId: "#SK2543",
      billingName: "Barry Dick",
      orderDate: "2019-10-05",
      total: "$412",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
      coin: "litecoin",
      type: "Sell",
    },
    {
      id: "customCheck6",
      orderId: "#SK2544",
      billingName: "Ronald Taylor",
      orderDate: "2019-10-04",
      total: "$404",
      badgeClass: "warning",
      paymentStatus: "Refund",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Visa",
      coin: "Bitcoin",
      type: "Buy",
    },
    {
      id: "customCheck7",
      orderId: "#SK2545",
      billingName: "Jacob Hunter",
      orderDate: "2019-10-04",
      total: "$392",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      coin: "Ethereum",
      type: "Sell",
    },
    {
      id: "customCheck8",
      orderId: "#SK2546",
      billingName: "William Cruz",
      orderDate: "2019-10-03",
      total: "$374",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fas fa-money-bill-alt",
      paymentMethod: "COD",
      coin: "Bitcoin",
      type: "Buy",
    },
    {
      id: "customCheck9",
      orderId: "#SK2547",
      billingName: "Dustin Moser",
      orderDate: "2019-10-02",
      total: "$350",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Mastercard",
      coin: "Bitcoin",
      type: "Sell",
    },
    {
      id: "customCheck10",
      orderId: "#SK2548",
      billingName: "Clark Benson",
      orderDate: "2019-10-01",
      total: "$345",
      badgeClass: "warning",
      paymentStatus: "Refund",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Visa",
      coin: "Ethereum",
      type: "Buy",
    },
    {
      id: "customCheck11",
      orderId: "#SK2540",
      billingName: "Neal Matthews",
      orderDate: "2019-10-08",
      total: "$400",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
      coin: "Ethereum",
      type: "Sell",
    },
    {
      id: "customCheck12",
      orderId: "#SK2541",
      billingName: "Jamal Burnett",
      orderDate: "2019-10-07",
      total: "$380",
      badgeClass: "danger",
      paymentStatus: "Chargeback",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Visa",
      coin: "litecoin",
      type: "Buy",
    },
    {
      id: "customCheck13",
      orderId: "#SK2542",
      billingName: "Juan Mitchell",
      orderDate: "2019-10-06",
      total: "$384",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      coin: "litecoin",
      type: "Sell",
    },
    {
      id: "customCheck14",
      orderId: "#SK2543",
      billingName: "Barry Dick",
      orderDate: "2019-10-05",
      total: "$412",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
      coin: "litecoin",
      type: "Buy",
    },
  ];
}
