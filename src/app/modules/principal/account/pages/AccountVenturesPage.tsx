import React, { Fragment, useEffect, useMemo, useState } from "react";

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
import { User, Venture } from "echadospalante-core";
import OwnedVenturesFiltersForm from "../../../../shared/components/forms/OwnedVenturesFiltersForm";
import AppSpinner from "../../../../shared/components/loader/Spinner";
import EditUserModal from "../../../../shared/components/modal/EditUserModal";
import useUsers from "../../../admin/general/hooks/useUsers";
import useOwnedVentures from "../../../admin/general/hooks/useOwnedVentures";
import { Link, useNavigate } from "react-router-dom";

const AccountVenturesPage = () => {
  //meta title
  document.title = "Tus emprendimientos | Echadospalante";
  const [ventures, setVentures] = useState<Venture[]>([
    {
      id: "123",
      name: "Empanadas Don Pepe",
      slug: "empanadas-don-pepe",
      coverPhoto:
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
      description:
        "Empandas Don Pepe es un gran emprendimiento local, están todos cordialmente invitados a probar mis deliciosas empanadas.",
      active: true,
      verified: true,
      ownerDetail: undefined,
      categories: [
        {
          id: "123",
          name: "Empanadas",
          description: "Some awesome desc of the category",
          slug: "some-category",
          users: [],
          ventures: [],
        },
        {
          id: "456",
          name: "Fritos y pasabocas",
          description: "Some awesome desc of the category 2",
          slug: "some-category-2",
          users: [],
          ventures: [],
        },
      ],
      contact: undefined,
      location: undefined,
      createdAt: new Date(),
    },
    {
      id: "456",
      name: "Cremas Doña Mariela",
      slug: "cremas-doña-mariela",
      coverPhoto:
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
      description:
        "Cremas Doña Mariela es un emprendimiento de deliciosas cremas de pura fruta, ubicado en la Ceja, Antioquia, a la orden las cremas",
      active: true,
      verified: true,
      ownerDetail: undefined,
      categories: [
        {
          id: "123",
          name: "Cremas",
          description: "Some awesome desc of the category",
          slug: "some-category",
          users: [],
          ventures: [],
        },
        {
          id: "456",
          name: "Helados",
          description: "Some awesome desc of the category 2",
          slug: "some-category-2",
          users: [],
          ventures: [],
        },
      ],
      contact: undefined,
      location: undefined,
      createdAt: new Date(),
    },
  ]);
  const [activeUserToEdit, setActiveUserToEdit] = useState<User>();
  const navigate = useNavigate();

  const {
    loading,
    error,
    items,
    total,
    fetchOwnedVentures,
    page,
    size,
    setPage,
  } = useOwnedVentures();

  const handleSetCurrentPage = (page: number) => {
    // table.setPageIndex(page + 1);
    setPage(page);
  };

  const handleCloseEditModal = () => {
    setActiveUserToEdit(undefined);
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
        {activeUserToEdit && (
          <EditUserModal
            show={!!activeUserToEdit}
            onCloseClick={handleCloseEditModal}
            onSuccessfulEdit={fetchOwnedVentures}
            user={activeUserToEdit}
          />
        )}

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
                    // onClick={fetchUsers}
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
                    {ventures.map((venture) => (
                      <OwnedVentureCard key={venture.id} venture={venture} />
                    ))}
                  </Row>
                )}

                <Row>
                  <Col sm={12} md={5} lg={6}>
                    <div className="dataTables_info">
                      Página {page + 1} de {Math.ceil(total / size) || 1}, con
                      un tatal de {total} emprendimientos
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
      </Container>
    </div>
  );
};

export default AccountVenturesPage;
