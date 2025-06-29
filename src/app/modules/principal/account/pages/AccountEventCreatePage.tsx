import { useState } from 'react';

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
import useFetchAllPublicationCategories from '../hooks/useAllPublicationCategories';
import useEventCreate from '../hooks/useEventCreate';
import SetMapCenter from '../../../../shared/components/map/SetMapCenter.tsx';
import municipalities from '../../../../shared/data/geo/municipalities.ts';
import departments from '../../../../shared/data/geo/departments.ts';

enum LocationMode {
  CURRENT = 'CURRENT',
  OTHER = 'OTHER',
  NONE = 'NONE',
}

const AccountEventCreatePage = () => {
  document.title = 'Nuevo evento | Echadospalante';
  const [locationMode, setLocationMode] = useState<LocationMode>(
    LocationMode.CURRENT,
  );
  const {
    loading: loadingCategories,
    error: errorCategories,
    data: categories,
    retryFetch: fetchAllPublicationCategories,
  } = useFetchAllPublicationCategories();

  const {
    form,
    addWorkingRange,
    removeWorkingRange,
    updateWorkingRange,
    updateDatesAndHours,
    isError,
    isLoading,
    getWorkingRangeError,
    handleImageRemove,
    handleImageUpload,
    uploadImageRequest,
  } = useEventCreate();

  const handleDateRangeChange = (
    field: 'startDate' | 'endDate',
    value: string,
  ) => {
    form.setFieldValue(field, value);

    // Si ambas fechas están definidas (considerando el valor actual y el nuevo)
    const startDate = field === 'startDate' ? value : form.values.startDate;
    const endDate = field === 'endDate' ? value : form.values.endDate;

    if (startDate && endDate) {
      updateDatesAndHours(startDate, endDate);
    }
  };

  const renderWorkingRanges = (dateIndex: number) => {
    const dateAndHour = form.values.datesAndHours[dateIndex];
    if (!dateAndHour) return null;

    return (
      <div className="mt-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Label className="mb-0">
            Horarios para{' '}
            {new Date(dateAndHour.date).toLocaleDateString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Label>
          <Button
            size="sm"
            color="success"
            outline
            onClick={() => addWorkingRange(dateIndex)}
          >
            <i className="bx bx-plus me-1"></i>
            Agregar horario
          </Button>
        </div>

        {dateAndHour.workingRanges.map((range, rangeIndex) => (
          <div
            key={rangeIndex}
            className="d-flex align-items-center gap-2 mb-2"
          >
            <Input
              type="time"
              value={range.start}
              onChange={(e) =>
                updateWorkingRange(
                  dateIndex,
                  rangeIndex,
                  'start',
                  e.target.value,
                )
              }
              className={
                getWorkingRangeError(dateIndex, rangeIndex, 'start')
                  ? 'is-invalid'
                  : ''
              }
            />
            <span>hasta</span>
            <Input
              type="time"
              value={range.end}
              onChange={(e) =>
                updateWorkingRange(dateIndex, rangeIndex, 'end', e.target.value)
              }
              className={
                getWorkingRangeError(dateIndex, rangeIndex, 'end')
                  ? 'is-invalid'
                  : ''
              }
            />
            <Button
              size="sm"
              color="danger"
              outline
              onClick={() => removeWorkingRange(dateIndex, rangeIndex)}
            >
              <i className="bx bx-trash"></i>
            </Button>
          </div>
        ))}

        {dateAndHour.workingRanges.length === 0 && (
          <div className="text-center py-3 text-muted border rounded">
            <p className="mb-0">No hay horarios definidos para este día</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumb title="Cuenta" breadcrumbItem="Nuevo evento" />

        <Row className="justify-content-center">
          <Col lg="12">
            <Card>
              <CardBody className="border-bottom">
                <div className="d-flex align-items-center">
                  <h5 className="mb-0 card-title flex-grow-1">
                    Crea un nuevo evento para tu emprendimiento
                  </h5>
                </div>
              </CardBody>

              <Form onSubmit={form.handleSubmit}>
                <CardBody>
                  <Row>
                    <Col lg={7} md={12} sm={12}>
                      <div className="mb-4">
                        <Label htmlFor="title">Título del evento *</Label>
                        <Input
                          id="title"
                          name="title"
                          type="text"
                          className={form.errors.title ? 'is-invalid' : ''}
                          placeholder="Nombre de tu evento..."
                          value={form.values.title}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        {form.errors.title && (
                          <FormFeedback type="invalid" className="d-block">
                            El titulo es inválido
                          </FormFeedback>
                        )}
                      </div>

                      <div className="mb-4">
                        <Label htmlFor="description">
                          Descripción del evento *
                        </Label>
                        <textarea
                          id="description"
                          name="description"
                          className={`form-control ${form.errors.description ? 'is-invalid' : ''}`}
                          rows={4}
                          placeholder="Describe tu evento..."
                          value={form.values.description}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        {form.errors.description && (
                          <FormFeedback type="invalid" className="d-block">
                            La descripción es inválida
                          </FormFeedback>
                        )}
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

                            <div>
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
                    </Col>

                    <Col lg={5} md={12} sm={12}>
                      <div className="mb-4">
                        <Label>Categorías *</Label>
                        {errorCategories && (
                          <AlertWithReload
                            message="Ha habido un error al consultar las categorías, por favor intente nuevamente."
                            onReload={fetchAllPublicationCategories}
                          />
                        )}
                        <Select
                          styles={{
                            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                          }}
                          menuPortalTarget={document.body}
                          value={form.values.categoriesIds.map((id) => ({
                            label:
                              categories?.find((c) => c.id === id)?.name || '',
                            value: id,
                          }))}
                          closeMenuOnSelect={false}
                          placeholder="Selecciona las categorías"
                          isMulti={true}
                          isLoading={loadingCategories}
                          onChange={(value) => {
                            form.setFieldValue(
                              'categoriesIds',
                              value.map((category) => category.value),
                            );
                          }}
                          onBlur={() =>
                            form.setFieldTouched('categoriesIds', true)
                          }
                          options={
                            categories?.map(({ name, id }) => ({
                              label: name,
                              value: id,
                            })) || []
                          }
                          className="select2-selection"
                        />
                        {form.errors.categoriesIds && (
                          <FormFeedback type="invalid" className="d-block">
                            {JSON.stringify(form.errors.categoriesIds)}
                          </FormFeedback>
                        )}
                      </div>

                      <div className="mb-4">
                        <div className="mb-3">
                          <Label htmlFor="projectname-input">Email</Label>
                          <Input
                            id="contactEmail"
                            name="contactEmail"
                            type="email"
                            placeholder="Ingresa el email de contacto"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.contactEmail || ''}
                          />

                          {form.touched.contactEmail &&
                          form.errors.contactEmail ? (
                            <FormFeedback type="invalid" className="d-block">
                              {form.errors.contactEmail}
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div>
                          <Label htmlFor="project-visibility-input">
                            Numero de telefono
                          </Label>
                          <Input
                            id="contactPhoneNumber"
                            name="contactPhoneNumber"
                            type="text"
                            placeholder="Ingresa el telefono de contacto"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.contactPhoneNumber || ''}
                          />

                          {form.touched.contactPhoneNumber &&
                          form.errors.contactPhoneNumber ? (
                            <FormFeedback type="invalid" className="d-block">
                              {form.errors.contactPhoneNumber}
                            </FormFeedback>
                          ) : null}
                        </div>
                      </div>

                      <Col lg={12}>
                        <Card>
                          <CardBody>
                            <h5 className="card-title mb-3">Ubicación</h5>
                            <div className="btn-group w-100" role="group">
                              <input
                                type="radio"
                                className="btn-check w-100"
                                name="btnradio"
                                id="btnradio4"
                                onChange={() => {
                                  setLocationMode(LocationMode.CURRENT);
                                }}
                                autoComplete="off"
                                defaultChecked
                              />
                              <label
                                className="btn btn-outline-primary"
                                htmlFor="btnradio4"
                              >
                                Mi ubicación
                              </label>

                              <input
                                type="radio"
                                className="btn-check w-100"
                                name="btnradio"
                                onChange={() => {
                                  setLocationMode(LocationMode.OTHER);
                                }}
                                id="btnradio5"
                                autoComplete="off"
                              />
                              <label
                                className="btn btn-outline-primary"
                                htmlFor="btnradio5"
                              >
                                Otra ubicación
                              </label>

                              <input
                                type="radio"
                                className="btn-check w-100"
                                name="btnradio"
                                onChange={() => {
                                  setLocationMode(LocationMode.NONE);
                                  form.setFieldValue('locationLat', '');
                                  form.setFieldValue('locationLng', '');
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
                                        'locationLat',
                                        `${position.coords.latitude}`,
                                      );
                                      form.setFieldValue(
                                        'locationLng',
                                        `${position.coords.longitude}`,
                                      );
                                    },
                                    (error) => {
                                      console.error(error);
                                    },
                                  );
                                }}
                              >
                                <i className="bx bx-map me-1"></i>
                                Obtener mi ubicación actual
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
                                  form.values.municipalityId
                                    ? {
                                      label: municipalities.find(
                                        (m) =>
                                          m.id ===
                                          form.values.municipalityId,
                                      )?.name,
                                      value:
                                      form.values.municipalityId,
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
                                  if(!value) return;
                                  form.setFieldValue(
                                    'municipalityId',
                                    value.value || null,
                                  );
                                  // Change the center of the map to the selected municipality
                                  const selectedMunicipality = municipalities.find(
                                    (m) => m.id === value.value,
                                  )!;
                                  form.setFieldValue(
                                    'locationLat',
                                    `${selectedMunicipality.lat}`,
                                  );
                                  form.setFieldValue(
                                    'locationLng',
                                    `${selectedMunicipality.lng}`,
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
                                    <Label htmlFor="lat">Latitud</Label>
                                    <Input
                                      id="lat"
                                      name="locationLat"
                                      type="number"
                                      placeholder="Ingresa la latitud"
                                      onChange={({ target }) =>
                                        form.setFieldValue(
                                          'locationLat',
                                          target.value,
                                        )
                                      }
                                      onBlur={form.handleBlur}
                                      value={form.values.locationLat || ''}
                                    />
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="mb-3">
                                    <Label htmlFor="lng">Longitud</Label>
                                    <Input
                                      id="lng"
                                      name="locationLng"
                                      type="number"
                                      placeholder="Ingresa la longitud"
                                      onChange={({ target }) =>
                                        form.setFieldValue(
                                          'locationLng',
                                          target.value,
                                        )
                                      }
                                      onBlur={form.handleBlur}
                                      value={form.values.locationLng || ''}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            )}
                            {form.values.locationLat &&
                            form.values.locationLng ? (
                              <MapContainer
                                center={[
                                  +form.values.locationLat,
                                  +form.values.locationLng,
                                ]}
                                zoom={13}
                                style={{ height: '400px', width: '100%' }}
                              >
                                <TileLayer
                                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker
                                  position={[
                                    +form.values.locationLat,
                                    +form.values.locationLng,
                                  ]}
                                >
                                  <Popup>La ubicación que elegiste</Popup>
                                </Marker>

                                <SetMapCenter
                                  position={[
                                    form.values.locationLat,
                                    form.values.locationLng,
                                  ]}
                                />
                              </MapContainer>
                            ) : (
                              <></>
                            )}

                            <div className="mb-3 mt-2">
                              <Label htmlFor="location-description">
                                Descripción corta de la ubicación
                              </Label>
                              <div>
                                <textarea
                                  className="form-control w-100"
                                  style={{
                                    minHeight: '50px',
                                    maxHeight: '150px',
                                    height: '100px',
                                  }}
                                  id="location-description"
                                  name="locationDescription"
                                  placeholder="Ingrese la descripción de la ubicación"
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  value={form.values.locationDescription || ''}
                                />
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Col>
                  </Row>

                  <Row>
                    <div className="mb-4">
                      <Label>Fechas del evento *</Label>
                      <Row>
                        <Col md="6">
                          <Label htmlFor="startDate">Fecha de inicio</Label>
                          <Input
                            id="startDate"
                            name="startDate"
                            type="date"
                            className={
                              form.errors.startDate ? 'is-invalid' : ''
                            }
                            value={form.values.startDate || ''}
                            onChange={(e) =>
                              handleDateRangeChange('startDate', e.target.value)
                            }
                            onBlur={form.handleBlur}
                          />
                          {form.errors.startDate && (
                            <FormFeedback type="invalid" className="d-block">
                              {JSON.stringify(form.errors.startDate)}
                            </FormFeedback>
                          )}
                        </Col>
                        <Col md="6">
                          <Label htmlFor="endDate">Fecha de fin</Label>
                          <Input
                            id="endDate"
                            name="endDate"
                            type="date"
                            className={form.errors.endDate ? 'is-invalid' : ''}
                            value={form.values.endDate || ''}
                            onChange={(e) =>
                              handleDateRangeChange('endDate', e.target.value)
                            }
                            onBlur={form.handleBlur}
                          />
                          {form.errors.endDate && (
                            <FormFeedback type="invalid" className="d-block">
                              {JSON.stringify(form.errors.endDate)}
                            </FormFeedback>
                          )}
                        </Col>
                      </Row>
                    </div>

                    {form.values.datesAndHours.length > 0 && (
                      <div className="mb-4">
                        <Label className="form-label">
                          Horarios del evento *
                        </Label>
                        <div className="border rounded p-3">
                          {form.values.datesAndHours.map((_, index) => (
                            <div key={index}>
                              {renderWorkingRanges(index)}
                              {index < form.values.datesAndHours.length - 1 && (
                                <hr />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Row>
                  <div className="text-center">
                    <Button type="submit" color="primary">
                      <i className="bx bx-send me-1 fs-6"></i>
                      Publicar
                    </Button>
                  </div>
                </CardBody>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AccountEventCreatePage;
