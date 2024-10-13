import React, { Fragment, useEffect, useMemo, useState } from "react";

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  FormFeedback,
  Input,
  Label,
  Row,
  Form,
  UncontrolledTooltip,
} from "reactstrap";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import Select from "react-select";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";
import Dropzone from "react-dropzone";
import SimpleBar from "simplebar-react";
import { useFormik } from "formik";
import { VentureCreate } from "echadospalante-core";
import useVentureCategories from "../../../admin/general/hooks/useVentureCategories";
import useAllVentureCategories from "../../../admin/general/hooks/useAllVentureCategories";
import AlertWithReload from "../../../../shared/components/alert/AlertWithReload";
import useAuthentication from "../../../auth/hooks/useAuthentication";

enum LocationMode {
  "CURRENT",
  "OTHER",
  "NONE",
}

const SetMapCenter = ({ position }: { position: [number, number] }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

const AccountVentureCreatePage = () => {
  //meta title
  document.title = "Nuevo emprendimiento | Echadospalante";
  const {
    categories,
    loading: loadingCategories,
    error: errorCategories,
    fetchAllVentureCategories,
  } = useAllVentureCategories();
  const { email } = useAuthentication();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [locationMode, setLocationMode] = useState<LocationMode>(
    LocationMode.NONE
  );

  // validation
  const validation = useFormik<VentureCreate>({
    initialValues: {
      name: "Nombre de prueba",
      coverPhoto: null,
      description: "",
      categoriesIds: [],
      contact: {
        email: email,
        phoneNumber: "",
      },
      location: {
        lat: 0,
        lng: 0,
        description: "",
      },
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").max(50),
      coverPhoto: Yup.mixed<File>()
        .required("La foto de portada es requerida")
        .test(
          "fileType",
          "Unsupported file format. Please upload an image in JPEG or PNG.",
          (value) => {
            return (
              value &&
              ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
            );
          }
        ),
      description: Yup.string().required("Description is required").max(300),
      categories: Yup.array().required("Category is required").min(1),
      contact: Yup.object().shape({
        email: Yup.string().required("Email is required").email().optional(),
        phoneNumber: Yup.string()
          .required("Phone number is required")
          .matches(/^[0-9]+$/)
          .optional(),
      }),
      location: Yup.object().shape({
        lat: Yup.number().required("Latitude is required").optional(),
        lng: Yup.number().required("Longitude is required").optional(),
        description: Yup.string(),
      }),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const markerIconInstance = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        validation.setFieldValue("coverPhoto", file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="page-content">
      <Container fluid>
        {/* Render Breadcrumbs */}
        <Breadcrumb title="Cuenta" breadcrumbItem="Nuevo emprendimiento" />

        <Col lg="12">
          <Card>
            <CardBody className="border-bottom">
              <div className="d-flex align-items-center">
                <h5 className="mb-0 card-title flex-grow-1">
                  Crea aquí tu nuevo emprendimiento
                </h5>
              </div>
            </CardBody>

            <Form
              id="createproject-form"
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}
            >
              <Row>
                <Col lg={7}>
                  <Card>
                    <CardBody>
                      <input
                        type="hidden"
                        className="form-control"
                        id="formAction"
                        name="formAction"
                        defaultValue="add"
                      />
                      <input
                        type="hidden"
                        className="form-control"
                        id="project-id-input"
                      />
                      <div className="mb-3">
                        <Label htmlFor="projectname-input">
                          Nombre del emprendimiento
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Ingresa el nombre del emprendimiento"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.name || ""}
                        />
                        {validation.touched.name && validation.errors.name ? (
                          <FormFeedback type="invalid" className="d-block">
                            {validation.errors.name}
                          </FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Imagen de portada</Label>

                        <div className="text-center">
                          <div className="position-relative d-flex justify-content-center">
                            <div className="position-absolute d-flex">
                              <Label
                                htmlFor="project-image-input"
                                className="mb-0"
                                id="projectImageInput"
                              >
                                <div className="m-1">
                                  <div className="d-flex bg-light p-1 border text-muted cursor-pointer shadow font-size-16">
                                    <i className="bx bxs-image-alt"></i>
                                    <small>
                                      {selectedImage
                                        ? "Cambiar foto"
                                        : "Subir foto"}
                                    </small>
                                  </div>
                                </div>
                              </Label>

                              <input
                                className="form-control d-none"
                                id="project-image-input"
                                type="file"
                                multiple={false}
                                accept="image/png, image/gif, image/jpeg"
                                onChange={handleImageUpload}
                              />

                              {selectedImage && (
                                <p
                                  onClick={() => setSelectedImage("")}
                                  className="mb-0 fw-medium"
                                >
                                  <div className="m-1">
                                    <div className="d-flex bg-danger text-white p-1 border border-danger cursor-pointer shadow font-size-16">
                                      <i className="bx bx-trash"></i>
                                      <small>Eliminar foto</small>
                                    </div>
                                  </div>
                                </p>
                              )}
                            </div>

                            <div className="">
                              <img
                                src={selectedImage || ""}
                                id="projectlogo-img"
                                width="100%"
                                className="h-auto"
                              />
                            </div>
                          </div>

                          {validation.touched.coverPhoto &&
                          validation.errors.coverPhoto ? (
                            <FormFeedback type="invalid" className="d-block">
                              {validation.errors.coverPhoto}
                            </FormFeedback>
                          ) : null}
                        </div>
                      </div>

                      <div className="mb-3">
                        <Label htmlFor="projectdesc-input">
                          Descripción corta del emprendimiento
                        </Label>
                        <div>
                          <textarea
                            className="form-control w-100"
                            style={{
                              minHeight: "50px",
                              maxHeight: "150px",
                              height: "100px",
                            }}
                            id="description"
                            name="description"
                            placeholder="Ingrese la descripción del emprendimiento"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.description || ""}
                          />
                        </div>

                        {validation.touched.description &&
                        validation.errors.description ? (
                          <FormFeedback type="invalid" className="d-block">
                            {validation.errors.description}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label htmlFor="projectdesc-input">
                          Categorias del emprendimiento
                        </Label>
                        {errorCategories && (
                          <AlertWithReload
                            message="Ha habido un error al consultar las categorias, por favor intente nuevamente."
                            onReload={fetchAllVentureCategories}
                          />
                        )}
                        <Select
                          id="categoriesIds"
                          name="categoriesIds"
                          value={validation.values.categoriesIds.map((id) => ({
                            label: categories.find((c) => c.id === id)?.name,
                            value: id,
                          }))}
                          placeholder="Selecciona las categorias, maximo 10"
                          isMulti={true}
                          isLoading={loadingCategories}
                          onChange={(value) => {
                            validation.setFieldValue(
                              "categoriesIds",
                              value.map((category) => category.value)
                            );
                          }}
                          options={categories.map(({ name, id }) => ({
                            label: name,
                            value: id,
                          }))}
                          className="select2-selection"
                        />

                        {validation.touched.description &&
                        validation.errors.description ? (
                          <FormFeedback type="invalid" className="d-block">
                            {validation.errors.description}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={5}>
                  <Row>
                    <Col lg={12}>
                      <Card>
                        <CardBody>
                          <h5 className="card-title mb-3">Contacto</h5>
                          <div className="mb-3">
                            <Label htmlFor="projectname-input">Email</Label>
                            <Input
                              id="contact.email"
                              name="contact.email"
                              type="email"
                              placeholder="Ingresa el email de contacto"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={validation.values.contact?.email || ""}
                            />

                            {validation.touched.contact &&
                            validation.errors.contact ? (
                              <FormFeedback type="invalid" className="d-block">
                                {validation.errors.contact}
                              </FormFeedback>
                            ) : null}
                          </div>

                          <div>
                            <Label htmlFor="project-visibility-input">
                              Numero de telefono
                            </Label>
                            <Input
                              id="contact.phoneNumbe"
                              name="contact.phoneNumber"
                              type="text"
                              placeholder="Ingresa el telefono de contacto"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              value={
                                validation.values.contact?.phoneNumber || ""
                              }
                            />

                            {validation.touched.contact &&
                            validation.errors.contact ? (
                              <FormFeedback type="invalid" className="d-block">
                                {validation.errors.contact}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={12}>
                      <Card>
                        <CardBody>
                          <h5 className="card-title mb-3">Ubicacion</h5>
                          <div className="btn-group w-100" role="group">
                            <input
                              type="radio"
                              className="btn-check w-100"
                              name="btnradio"
                              id="btnradio4"
                              onChange={(e) => {
                                setLocationMode(LocationMode.CURRENT);
                              }}
                              autoComplete="off"
                              defaultChecked
                            />
                            <label
                              className="btn btn-outline-primary"
                              htmlFor="btnradio4"
                            >
                              Mi ubicacion
                            </label>

                            <input
                              type="radio"
                              className="btn-check w-100"
                              name="btnradio"
                              onChange={(e) => {
                                setLocationMode(LocationMode.OTHER);
                              }}
                              id="btnradio5"
                              autoComplete="off"
                            />
                            <label
                              className="btn btn-outline-primary"
                              htmlFor="btnradio5"
                            >
                              Otra ubicacion
                            </label>

                            <input
                              type="radio"
                              className="btn-check w-100"
                              name="btnradio"
                              onChange={() => {
                                setLocationMode(LocationMode.NONE);
                                validation.setFieldValue("location.lat", 0);
                                validation.setFieldValue("location.lng", 0);
                              }}
                              id="btnradio6"
                              autoComplete="off"
                            />
                            <label
                              className="btn btn-outline-primary"
                              htmlFor="btnradio6"
                            >
                              Ninguna
                            </label>
                          </div>

                          {locationMode === 0 && (
                            <Button
                              className="btn btn-info w-100 my-2"
                              onClick={() => {
                                navigator.geolocation.getCurrentPosition(
                                  (position) => {
                                    validation.setFieldValue(
                                      "location.lat",
                                      position.coords.latitude
                                    );
                                    validation.setFieldValue(
                                      "location.lng",
                                      position.coords.longitude
                                    );
                                  },
                                  (error) => {
                                    console.error(error);
                                  }
                                );
                              }}
                            >
                              <i className="bx bx-map me-1"></i>
                              Obtener mi ubicacion actual
                            </Button>
                          )}

                          {locationMode === 1 && (
                            <Row>
                              <Col lg={6}>
                                <div className="mb-3">
                                  <Label htmlFor="projectname-input">
                                    Latitud
                                  </Label>
                                  <Input
                                    id="lat"
                                    name="location.lat"
                                    type="number"
                                    placeholder="Ingresa la latitud"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.location?.lat || ""
                                    }
                                  />

                                  {validation.touched.location &&
                                  validation.errors.location ? (
                                    <FormFeedback
                                      type="invalid"
                                      className="d-block"
                                    >
                                      {validation.errors.location}
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                              <Col lg={6}>
                                <div className="mb-3">
                                  <Label htmlFor="projectname-input">
                                    Longitud
                                  </Label>
                                  <Input
                                    id="lat"
                                    name="location.lng"
                                    type="number"
                                    placeholder="Ingresa la longitud"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={
                                      validation.values.location?.lng || ""
                                    }
                                  />

                                  {validation.touched.location &&
                                  validation.errors.location ? (
                                    <FormFeedback
                                      type="invalid"
                                      className="d-block"
                                    >
                                      {validation.errors.location}
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>
                          )}

                          {validation.values.location?.lat &&
                            validation.values.location?.lng && (
                              <MapContainer
                                center={[
                                  validation.values.location?.lat,
                                  validation.values.location?.lng,
                                ]}
                                zoom={13}
                                style={{ height: "400px", width: "100%" }}
                              >
                                <TileLayer
                                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tiles
                                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker
                                  position={[
                                    validation.values.location?.lat,
                                    validation.values.location?.lng,
                                  ]}
                                  icon={markerIconInstance}
                                >
                                  <Popup>La ubicacion que elegiste</Popup>
                                </Marker>

                                <SetMapCenter
                                  position={[
                                    validation.values.location?.lat,
                                    validation.values.location?.lng,
                                  ]}
                                />
                              </MapContainer>
                            )}

                          <div className="mb-3 mt-2">
                            <Label htmlFor="projectdesc-input">
                              Descripción corta de la ubicacion
                            </Label>
                            <div>
                              <textarea
                                className="form-control w-100"
                                style={{
                                  minHeight: "50px",
                                  maxHeight: "150px",
                                  height: "100px",
                                }}
                                id="location.description"
                                name="location.description"
                                placeholder="Ingrese la descripción del emprendimiento"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={
                                  validation.values.location?.description || ""
                                }
                              />
                            </div>

                            {validation.touched.description &&
                            validation.errors.description ? (
                              <FormFeedback type="invalid" className="d-block">
                                {validation.errors.description}
                              </FormFeedback>
                            ) : null}
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>

                <Col lg={12}>
                  <div className="text-center mb-4">
                    <Button type="submit" color="primary">
                      <i className="bx bx-rocket me-1"></i>
                      Crear emprendimiento
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Container>
    </div>
  );
};

export default AccountVentureCreatePage;
