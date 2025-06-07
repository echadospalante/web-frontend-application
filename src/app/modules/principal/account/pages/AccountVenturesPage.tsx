import React, { Fragment, useState } from 'react';

import { User, Venture } from 'echadospalante-domain';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Pagination,
  Row,
} from 'reactstrap';
import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import VentureCard from '../../../../shared/components/card/VentureCard';
import OwnedVenturesFiltersForm from '../../../../shared/components/forms/OwnedVenturesFiltersForm';
import AppSpinner from '../../../../shared/components/loader/Spinner';
import EditUserModal from '../../../../shared/components/modal/EditUserModal';
import useOwnedVentures from '../../../admin/general/hooks/useOwnedVentures';

const AccountVenturesPage = () => {
  document.title = 'Tus emprendimientos | Echadospalante';
  // const [ventures, setVentures] = useState<Venture[]>([
  //   {
  //     id: '123',
  //     name: 'Some test venturename',
  //     slug: 'some-test-name',
  //     coverPhoto:
  //       'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
  //     description: 'Soem awesome description',
  //     active: true,
  //     verified: true,
  //     categories: [
  //       {
  //         id: '123',
  //         name: 'Some Awesome',
  //         description: 'Some awesome desc of the category',
  //         slug: 'some-category',
  //         users: [],
  //         ventures: [],
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //       {
  //         id: '456',
  //         name: 'Some cat 2',
  //         description: 'Some awesome desc of the category 2',
  //         slug: 'some-category-2',
  //         users: [],
  //         ventures: [],
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //     ],
  //     contact: undefined,
  //     location: undefined,
  //     createdAt: new Date(),
  //     events: [],
  //     sponsorships: [],
  //     subscriptions: [],
  //     publications: [],
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: '456',
  //     name: 'Cremas marielita',
  //     slug: 'cremas marielita',
  //     coverPhoto:
  //       'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
  //     description:
  //       'Cremas marielita es un emprendimiento de cremas ubicado en la Ceja, Antoniquia, a la orden las cremas',
  //     active: true,
  //     verified: true,
  //     categories: [
  //       {
  //         id: '123',
  //         name: 'Cremas',
  //         description: 'Some awesome desc of the category',
  //         slug: 'some-category',
  //         users: [],
  //         ventures: [],
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //       {
  //         id: '456',
  //         name: 'Helados',
  //         description: 'Some awesome desc of the category 2',
  //         slug: 'some-category-2',
  //         users: [],
  //         ventures: [],
  //         createdAt: new Date(),
  //         updatedAt: new Date(),
  //       },
  //     ],
  //     contact: undefined,
  //     location: undefined,
  //     createdAt: new Date(),
  //     events: [],
  //     sponsorships: [],
  //     subscriptions: [],
  //     publications: [],
  //     updatedAt: new Date(),
  //   },
  // ]);

  const [activeUserToEdit, setActiveUserToEdit] = useState<User>();
  const navigate = useNavigate();

  const {
    loading,
    error,
    items: ventures,
    total,
    page,
    size,
    setPage,
    retryFetch: fetchOwnedVentures,
  } = useOwnedVentures();

  const handleSetCurrentPage = (page: number) => {
    // table.setPageIndex(page + 1);
    setPage(page);
  };

  const handleCloseEditModal = () => {
    setActiveUserToEdit(undefined);
  };

  const handleNavigateToCreate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault();
    return navigate('/principal/cuenta/emprendimientos/nuevo', {
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
                  <div style={{ marginTop: '200px' }}>
                    <AppSpinner />
                  </div>
                ) : (
                  <Row>
                    <Col xl={6} lg={6} md={6} sm={12}>
                      {ventures.map((venture) => (
                        <VentureCard key={venture.id} venture={venture} />
                      ))}
                    </Col>
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
