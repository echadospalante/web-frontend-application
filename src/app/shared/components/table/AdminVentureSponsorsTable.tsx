import { Fragment } from 'react/jsx-runtime';
import { Button, Card, CardBody, Col, Pagination, Row } from 'reactstrap';
import useVentureSponsorships from '../../../modules/admin/general/hooks/useVentureSponsorships';
import SponsorCard from '../card/SponsorCard';
import VenturePublicationsFiltersForm from '../forms/VenturePublicationsFiltersForm';
import AppSpinner from '../loader/Spinner';
import SponsorsBubbleChart from '../charts/SponsorsBubbleChart';

type AdminVentureSponsorsTableProps = {
  ventureId: string;
};

const AdminVentureSponsorsTable = ({
  ventureId,
}: AdminVentureSponsorsTableProps) => {
  const {
    loading,
    error,
    page,
    size,
    setPage,
    items,
    total,
    fetchVentureSponsors,
  } = useVentureSponsorships();

  return (
    <div>
      <Row>
        <Col lg="12">
          <Card>
            <CardBody className="border-bottom">
              <div className="d-flex align-items-center">
                <h5 className="mb-0 card-title flex-grow-1">
                  Listado de patrocinadores del emprendimiento
                </h5>
                <div className="flex-shrink-0 d-flex flex-row align-items-center">
                  <Button type="button" className="btn btn-light mx-2 mb-2">
                    <i className="bx bx-grid"></i>
                  </Button>
                  <Button
                    type="button"
                    onClick={fetchVentureSponsors}
                    className="btn btn-light mx-2 mb-2"
                  >
                    <i className="mdi mdi-refresh"></i>
                  </Button>
                </div>
              </div>

              {error && (
                <div className="alert alert-danger text-center" role="alert">
                  Ha habido un error al consultar los patrocinadores de este
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
                  <SponsorsBubbleChart items={items} />
                )}

                <Row>
                  <Col sm={12} md={5} lg={6}>
                    <div className="dataTables_info">
                      Página {page + 1} de {Math.ceil(total / size) || 1}, con
                      un tatal de {total} usuarios
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
                      setCurrentPage={setPage}
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
    </div>
  );
};

export default AdminVentureSponsorsTable;
