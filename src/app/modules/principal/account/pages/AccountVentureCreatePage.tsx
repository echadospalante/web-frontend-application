import { useState } from 'react';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Select from 'react-select';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Row,
} from 'reactstrap';

import AlertWithReload from '../../../../shared/components/alert/AlertWithReload';
import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import SetMapCenter from '../../../../shared/components/map/SetMapCenter.tsx';
import departments from '../../../../shared/data/geo/departments';
import municipalities from '../../../../shared/data/geo/municipalities';
import useFetchAllVentureCategories from '../hooks/useAllVentureCategories';
import useVentureCreate from '../hooks/useVentureCreate';

enum LocationMode {
  CURRENT = 'CURRENT',
  OTHER = 'OTHER',
  NONE = 'NONE',
}

const AccountVentureCreatePage = () => {
  document.title = 'Nuevo emprendimiento | Echadospalante';
  const {
    loading: loadingCategories,
    error: errorCategories,
    data: categories,
    retryFetch: fetchAllVentureCategories,
  } = useFetchAllVentureCategories();

  const [locationMode, setLocationMode] = useState<LocationMode>(
    LocationMode.CURRENT,
  );

  const { form, handleImageUpload, handleImageRemove, uploadImageRequest } =
    useVentureCreate();

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
                form.handleSubmit();
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
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.name || ''}
                        />
                        {form.touched.name && form.errors.name ? (
                          <FormFeedback type="invalid" className="d-block">
                            {form.errors.name}
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
                                disabled={uploadImageRequest.isLoading}
                                id="projectImageInput"
                              >
                                <div className="m-1">
                                  <div className="d-flex bg-light p-1 border text-muted cursor-pointer shadow font-size-16">
                                    <i className="bx bxs-image-alt"></i>
                                    <small>
                                      {form.values.coverPhoto
                                        ? 'Cambiar foto'
                                        : 'Subir foto'}
                                    </small>
                                  </div>
                                </div>
                              </Label>

                              <input
                                className="form-control d-none"
                                id="project-image-input"
                                disabled={uploadImageRequest.isLoading}
                                type="file"
                                multiple={false}
                                accept="image/png, image/gif, image/jpeg"
                                onChange={handleImageUpload}
                              />

                              {form.values.coverPhoto && (
                                <p
                                  onClick={handleImageRemove}
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
                                src={form.values.coverPhoto || ''}
                                id="projectlogo-img"
                                width="100%"
                                className="h-auto"
                              />
                            </div>
                          </div>

                          {form.touched.coverPhoto && form.errors.coverPhoto ? (
                            <FormFeedback
                              type="invalid"
                              className="d-block mt-4"
                            >
                              {form.errors.coverPhoto}
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
                              minHeight: '50px',
                              maxHeight: '150px',
                              height: '100px',
                            }}
                            id="description"
                            name="description"
                            placeholder="Ingrese la descripción del emprendimiento"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.description || ''}
                          />
                        </div>

                        {form.touched.description && form.errors.description ? (
                          <FormFeedback type="invalid" className="d-block">
                            {form.errors.description}
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
                          value={form.values.categoriesIds.map((id) => ({
                            label: categories.find((c) => c.id === id)?.name,
                            value: id,
                          }))}
                          styles={{
                            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          }}
                          menuPortalTarget={document.body}
                          closeMenuOnSelect={false}
                          placeholder="Selecciona las categorias, maximo 10"
                          isMulti={true}
                          isLoading={loadingCategories}
                          onChange={(value) => {
                            form.setFieldValue(
                              'categoriesIds',
                              value.map((category) => category.value),
                            );
                          }}
                          options={categories.map(({ name, id }) => ({
                            label: name,
                            value: id,
                          }))}
                          className="select2-selection"
                        />

                        {form.touched.categoriesIds &&
                        form.errors.categoriesIds ? (
                          <FormFeedback type="invalid" className="d-block">
                            {form.errors.categoriesIds}
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
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              value={form.values.contact?.email || ''}
                            />

                            {form.touched.contact && form.errors.contact ? (
                              <FormFeedback type="invalid" className="d-block">
                                {form.errors.contact}
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
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              value={form.values.contact?.phoneNumber || ''}
                            />

                            {form.touched.contact && form.errors.contact ? (
                              <FormFeedback type="invalid" className="d-block">
                                {form.errors.contact}
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
                                form.setFieldValue('location.lat', 0);
                                form.setFieldValue('location.lng', 0);
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
                          {locationMode === LocationMode.CURRENT && (
                            <Button
                              type="button"
                              className="btn btn-info w-100 my-2"
                              onClick={() => {
                                navigator.geolocation.getCurrentPosition(
                                  (position) => {
                                    form.setFieldValue(
                                      'location.lat',
                                      position.coords.latitude,
                                    );
                                    form.setFieldValue(
                                      'location.lng',
                                      position.coords.longitude,
                                    );
                                  },
                                  (error) => {
                                    console.error(error);
                                  },
                                );
                              }}
                            >
                              <i className="bx bx-map me-1"></i>
                              Obtener mi ubicacion actual
                            </Button>
                          )}

                          <div className="my-3">
                            <Label htmlFor="validationTooltip01">
                              Municipio
                            </Label>
                            <Select
                              id="municipality"
                              isClearable={false}
                              value={
                                form.values.location?.municipalityId
                                  ? {
                                      label: municipalities.find(
                                        (m) =>
                                          m.id ===
                                          form.values.location?.municipalityId,
                                      )?.name,
                                      value:
                                        form.values.location?.municipalityId,
                                    }
                                  : null
                              }
                              styles={{
                                menuPortal: (base) => ({
                                  ...base,
                                  zIndex: 9999,
                                }),
                                control: (base) => ({
                                  ...base,
                                  zIndex: 9999,
                                }),
                              }}
                              menuPortalTarget={document.body}
                              placeholder="Selecciona el municipio"
                              isMulti={false}
                              name="municipalities"
                              onChange={(value) => {
                                if (!value) return;
                                form.setFieldValue(
                                  'location.municipalityId',
                                  value.value || null,
                                );
                                const selectedMunicipality =
                                  municipalities.find(
                                    (m) => m.id === value.value,
                                  )!;
                                form.setFieldValue(
                                  'location.lat',
                                  selectedMunicipality.lat,
                                );
                                form.setFieldValue(
                                  'location.lng',
                                  selectedMunicipality.lng,
                                );
                              }}
                              options={departments.map(({ id, name }) => ({
                                label: name,
                                options: municipalities
                                  .filter(
                                    ({ departmentId }) => departmentId === id,
                                  )
                                  .map(
                                    ({
                                      id: municipalityId,
                                      name: municipalityName,
                                    }) => ({
                                      label: municipalityName,
                                      value: municipalityId,
                                    }),
                                  ),
                              }))}
                              className="select2-selection"
                            />
                          </div>

                          {locationMode === LocationMode.OTHER && (
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
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    value={form.values.location?.lat || ''}
                                  />

                                  {form.touched.location &&
                                  form.errors.location ? (
                                    <FormFeedback
                                      type="invalid"
                                      className="d-block"
                                    >
                                      {form.errors.location}
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
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    value={form.values.location?.lng || ''}
                                  />

                                  {form.touched.location &&
                                  form.errors.location ? (
                                    <FormFeedback
                                      type="invalid"
                                      className="d-block"
                                    >
                                      {form.errors.location}
                                    </FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>
                          )}
                          {form.values.location?.lat &&
                          form.values.location?.lng ? (
                            <MapContainer
                              center={[
                                form.values.location?.lat,
                                form.values.location?.lng,
                              ]}
                              zoom={13}
                              style={{ height: '400px', width: '100%' }}
                            >
                              <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tiles
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              />
                              <Marker
                                position={[
                                  form.values.location?.lat,
                                  form.values.location?.lng,
                                ]}
                                icon={markerIconInstance}
                              >
                                <Popup>La ubicacion que elegiste</Popup>
                              </Marker>

                              <SetMapCenter
                                position={[
                                  form.values.location?.lat,
                                  form.values.location?.lng,
                                ]}
                              />
                            </MapContainer>
                          ) : (
                            <></>
                          )}
                          <div className="mb-3 mt-2">
                            <Label htmlFor="projectdesc-input">
                              Descripción corta de la ubicacion
                            </Label>
                            <div>
                              <textarea
                                className="form-control w-100"
                                style={{
                                  minHeight: '50px',
                                  maxHeight: '150px',
                                  height: '100px',
                                }}
                                id="location.description"
                                name="location.description"
                                placeholder="Ingrese la descripción del emprendimiento"
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.values.location?.description || ''}
                              />
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>

                <Col lg={12}>
                  <div className="text-center mb-4">
                    <Button
                      type="button"
                      onClick={() => {
                        form.handleSubmit();
                      }}
                      color="primary"
                    >
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
