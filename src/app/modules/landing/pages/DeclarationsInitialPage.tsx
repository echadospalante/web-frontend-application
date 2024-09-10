import React, { useState } from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

//Dropzone
import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import LandingNavbar from "../../../components/navbar/LandingNavbar";
import DeclarationCreateModal from "../../../components/modal/DeclarationCreateModal";
import DeclarationSearchModal from "../../../components/modal/DeclarationSearchModal";

const DeclarationsInitialPage = () => {
  //meta title
  document.title =
    "KYC Application | Skote - Vite React Admin & Dashboard Template";

  const [activeModal, setActiveModal] = useState<"CREATE" | "SEARCH">();

  const toggleModal = (activeModal?: "CREATE" | "SEARCH") => {
    setActiveModal(activeModal);
  };

  /**
   * Formats the size
   */

  return (
    <React.Fragment>
      <LandingNavbar />

      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb
            title="Comercial"
            breadcrumbItem="Declaraciones de Interés"
          />

          <Row className="justify-content-center mt-lg-5">
            <Col xl="5" sm="8">
              <Card>
                <CardBody>
                  <div className="text-center">
                    <Row className="justify-content-center">
                      <Col lg="10">
                        <h4 className="mt-4 fw-semibold">
                          Declaraciones de Interés
                          <i className="mdi mdi-information-outline mx-1"></i>
                        </h4>
                        <p className="text-muted mt-3">
                          ¡Bienvenido, aquí podrás crear o consultar tus
                          declaraciones de interés!
                        </p>

                        <div className="mt-4 d-flex flex-column">
                          <Button
                            type="button"
                            className="mb-3 fs-5 btn-soft-success"
                            onClick={() => toggleModal("CREATE")}
                          >
                            <i className="mdi mdi-plus-circle-outline me-2"></i>
                            Crear declaración de interés
                          </Button>

                          <Button
                            type="button"
                            className="mb-3 fs-5 btn-soft-primary"
                            onClick={() => toggleModal("SEARCH")}
                          >
                            <i className="mdi mdi-magnify me-2"></i>
                            Consultar declaración de interés
                          </Button>
                        </div>
                      </Col>
                    </Row>

                    <Row className="justify-content-center mt-5 mb-2">
                      <Col sm="6" xs="8">
                        <div>
                          <img
                            src="/images/landing/team.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {activeModal === "CREATE" && (
            <DeclarationCreateModal
              modal={activeModal === "CREATE"}
              toggleModal={toggleModal}
            />
          )}

          {activeModal === "SEARCH" && (
            <DeclarationSearchModal
              modal={activeModal === "SEARCH"}
              toggleModal={toggleModal}
            />
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DeclarationsInitialPage;
