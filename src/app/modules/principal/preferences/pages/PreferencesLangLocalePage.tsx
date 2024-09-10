/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";

import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  UncontrolledAlert,
} from "reactstrap";
import Select from "react-select";

import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";

import counties from "./all";

const PreferencesLangLocalePage = () => {
  document.title = "Idioma y Localización | Preferencias";
  const [geoInfo, setGeoInfo] = useState<
    { region: string; countries: { name: string; flag: string }[] }[]
  >([]);

  useEffect(() => {
    const uniqueRegions = [...new Set(counties.map((item) => item.region))];
    const regionsSet = uniqueRegions.map((region) => {
      const countries = counties
        .filter((item) => item.region === region)
        .map((item) => ({ name: item.name.common, flag: item.flag }));
      return { region, countries };
    });
    setGeoInfo(regionsSet);
  }, []);

  return (
    <Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumb
            title="Preferencias"
            breadcrumbItem="Tema y Personalización"
          />

          <Container>
            <div data-simplebar className="h-100">
              <Card>
                <CardBody className="border-bottom">
                  <div className="d-flex align-items-center">
                    <h5 className="mb-0 card-title flex-grow-1">
                      Gestión de Idioma y Localización
                    </h5>
                    <div className="flex-shrink-0">
                      <Button
                        type="button"
                        // onClick={fetchQuoteAreas}
                        className="btn btn-light me-1"
                      >
                        <i className="mdi mdi-refresh"></i>
                      </Button>
                    </div>
                  </div>
                </CardBody>

                <CardTitle>
                  <div className="px-3 mt-2 mx-2 pt-3 fw-normal">
                    <UncontrolledAlert color="info" role="alert">
                      <i className="mdi mdi-bullseye-arrow me-2"></i>
                      <b>Tenga en cuenta:</b> Estas preferencias serán guardadas
                      y se sincronizarán automáticamente en todos los
                      dispositivos que use para acceder.
                    </UncontrolledAlert>
                  </div>
                </CardTitle>

                <CardBody>
                  {/* <Row className="justify-content-center text-center">
                    <Col xl={4}>
                      <div className="mb-4">
                        <h4>Browse Job By Categories</h4>
                        <p className="text-muted">
                          Post a job to tell us about your project. We'll
                          quickly match you with the right freelancers.
                        </p>
                      </div>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col lg={3} md={6} sm={12} className="mb-3">
                      <label className="control-label">País</label>
                      <Select
                        isDisabled={false}
                        value={{ label: "Colombia", value: 0 }}
                        isMulti={false}
                        isSearchable={true}
                        isClearable={true}
                        onChange={(selected) => {
                          console.log({ selected });
                        }}
                        // Group countries by region in the options
                        options={geoInfo.map((item) => ({
                          label: item.region,
                          options: item.countries.map((country) => ({
                            label: country.name,
                            value: Math.random(),
                          })),
                        }))}
                      ></Select>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="mb-3">
                      <label className="control-label">Zona Horaria</label>
                      <Select
                        isDisabled={false}
                        value={[{ label: "UTC-05:00", value: 0 }]}
                        isMulti={false}
                        isClearable={true}
                        isSearchable={false}
                        onChange={(selected) => {
                          console.log({ selected });
                        }}
                        options={[
                          { label: "UTC+03:00", value: 0 },
                          { label: "UTC+04:00", value: 1 },
                          { label: "UTC+06:00", value: 2 },
                          { label: "UTC+07:00", value: 4 },
                          { label: "UTC+08:00", value: 5 },
                          { label: "UTC+09:00", value: 6 },
                          { label: "UTC+10:00", value: 7 },
                          { label: "UTC+11:00", value: 8 },
                          { label: "UTC+12:00", value: 9 },
                        ]}
                      ></Select>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="mb-3">
                      <label className="control-label">Moneda</label>
                      <Select
                        isDisabled={false}
                        value={[{ label: "Peso Colombiano", value: 1 }]}
                        isMulti={false}
                        isClearable={true}
                        isSearchable={false}
                        onChange={(selected) => {
                          console.log({ selected });
                        }}
                        options={[
                          { label: "USD - Dólar americano", value: 0 },
                          { label: "COP - Peso colombiano", value: 1 },
                        ]}
                      ></Select>
                    </Col>

                    <Col lg={3} md={6} sm={12} className="mb-3">
                      <label className="control-label">Lenguaje</label>
                      <Select
                        isDisabled={false}
                        value={[{ label: "Español", value: 0 }]}
                        isMulti={false}
                        isClearable={true}
                        isSearchable={false}
                        onChange={(selected) => {
                          console.log({ selected });
                        }}
                        options={[
                          { label: "es - Español", value: 0 },
                          { label: "en - English", value: 1 },
                        ]}
                      ></Select>
                    </Col>
                  </Row>

                  <div>
                    <Link
                      to="#"
                      className="btn btn-success btn-block mt-3"
                      target="_blank"
                    >
                      <i className="bx bx-save" /> Guardar
                    </Link>

                    <Link
                      to="#"
                      className="btn btn-info btn-block mt-3 mx-2"
                      target="_blank"
                    >
                      <i className="bx bx-reset" /> Restaurar
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Container>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default PreferencesLangLocalePage;
