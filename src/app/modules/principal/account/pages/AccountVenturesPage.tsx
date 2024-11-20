import React, { Fragment } from "react";

import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Pagination,
  Row,
} from "reactstrap";

import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";
import OwnedVentureCard from "../../../../shared/components/card/OwnedVentureCard";
import OwnedVenturesFiltersForm from "../../../../shared/components/forms/OwnedVenturesFiltersForm";
import AppSpinner from "../../../../shared/components/loader/Spinner";
import useOwnedVentures from "../hooks/useOwnedVentures";

const AccountVenturesPage = () => {
  //meta title
  document.title = "Tus emprendimientos | Echadospalante";
  const { error, items, fetchOwnedVentures, loading, setPage, total, filters } =
    useOwnedVentures();
  const navigate = useNavigate();

  const handleSetCurrentPage = (page: number) => {
    // table.setPageIndex(page + 1);
    setPage(page);
  };

  const handleNavigateToCreate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    return navigate("/principal/cuenta/emprendimientos/nuevo", {
      replace: true,
    });
  };

  return (
    <div className="page-content">
      <Container fluid>
        {/* Render Breadcrumbs */}
        <Breadcrumb title="Cuenta" breadcrumbItem="Tus emprendimientos" />

        <Col lg="12">
          <Card>
            <CardBody className="border-bottom">
              <div className="d-flex align-items-center">
                <h5 className="mb-0 card-title flex-grow-1">
                  Listado de tus emprendimientos
                </h5>
                <div className="flex-shrink-0 d-flex flex-row align-items-center">
                  <Button
                    className="btn btn-success mx-2 mb-2"
                    onClick={handleNavigateToCreate}
                  >
                    Crear emprendimiento
                    <i className="bx bx-plus mx-1"></i>
                  </Button>

                  <Button
                    type="button"
                    onClick={fetchOwnedVentures}
                    className="btn btn-light mx-2 mb-2"
                  >
                    <i className="mdi mdi-refresh"></i>
                  </Button>
                </div>
              </div>

              {error && (
                <div className="alert alert-danger text-center" role="alert">
                  Ha habido un error al consultar tus emprendimientos, por favor
                  intente nuevamente.
                </div>
              )}
            </CardBody>

            <CardBody>
              <Fragment>
                <OwnedVenturesFiltersForm />

                {loading ? (
                  <div style={{ marginTop: "200px" }}>
                    <AppSpinner />
                  </div>
                ) : (
                  <Row>
                    {items.map((venture) => (
                      <OwnedVentureCard key={venture.id} venture={venture} />
                    ))}
                  </Row>
                )}

                <Row>
                  <Col sm={12} md={5} lg={6}>
                    <div className="dataTables_info">
                      Página {filters.page + 1} de{" "}
                      {Math.ceil(total / filters.size) || 1}, con un total de{" "}
                      {total} emprendimientos
                    </div>
                  </Col>
                  <Col
                    sm={12}
                    md={7}
                    lg={6}
                    className="d-flex justify-content-end"
                  >
                    <Pagination
                      perPageData={filters.size}
                      length={total}
                      currentPage={filters.page + 1}
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
      </Container>
    </div>
  );
};

export default AccountVenturesPage;
