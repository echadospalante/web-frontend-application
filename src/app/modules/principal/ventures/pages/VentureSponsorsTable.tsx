import { Fragment } from "react";

import { Button, Card, CardBody, Col, Row } from "reactstrap";

import SponsorsBubbleChart from "../../../../shared/components/charts/SponsorsBubbleChart";
import VenturePublicationsFiltersForm from "../../../../shared/components/forms/VenturePublicationsFiltersForm";
import AppSpinner from "../../../../shared/components/loader/Spinner";
import useVentureSponsorships from "../../../admin/general/hooks/useVentureSponsorships";

type AdminVentureSponsorsTableProps = {
  ventureId: string;
};

const VentureSponsorsTable = ({
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
                  <div style={{ marginTop: "200px" }}>
                    <AppSpinner />
                  </div>
                ) : (
                  <SponsorsBubbleChart items={items} />
                )}
              </Fragment>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default VentureSponsorsTable;
