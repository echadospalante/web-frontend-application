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

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { useAppDispatch } from '../../../../config/redux/store/store.config';
import AlertWithReload from '../../../../shared/components/alert/AlertWithReload';
import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import UploadImageButton from '../../../../shared/components/buttons/UploadImageButton';
import useFetchAllPublicationCategories from '../hooks/useAllPublicationCategories';
import useEventCreate from '../hooks/useEventCreate';
import { useState } from 'react';

enum LocationMode {
  'CURRENT',
  'OTHER',
  'NONE',
}

const AccountEventCreatePage = () => {
  document.title = 'Nuevo evento | Echadospalante';
  const dispatch = useAppDispatch();
  const [locationMode, setLocationMode] = useState<LocationMode>(
    LocationMode.NONE,
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
    getFieldError,
    getWorkingRangeError,
    isLoading,
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
                          className={getFieldError('title') ? 'is-invalid' : ''}
                          placeholder="Nombre de tu evento..."
                          value={form.values.title}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        {getFieldError('title') && (
                          <FormFeedback type="invalid" className="d-block">
                            {JSON.stringify(getFieldError('title'))}
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
                          className={`form-control ${getFieldError('description') ? 'is-invalid' : ''}`}
                          rows={4}
                          placeholder="Describe tu evento..."
                          value={form.values.description}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        {getFieldError('description') && (
                          <FormFeedback type="invalid" className="d-block">
                            {JSON.stringify(getFieldError('description'))}
                          </FormFeedback>
                        )}
                      </div>

                      <div className="mb-4">
                        <Label>Imagen de portada *</Label>
                        <div className="d-flex flex-column gap-2">
                          <UploadImageButton
                            onUpload={(url) =>
                              form.setFieldValue('coverPhoto', url)
                            }
                            btnText="Subir una imagen"
                            type={'PUBLICATION'}
                          />
                          {form.values.coverPhoto && (
                            <div className="mt-2">
                              <img
                                src={form.values.coverPhoto}
                                alt="Preview"
                                className="img-thumbnail"
                                style={{ width: '100%' }}
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            </div>
                          )}
                          {getFieldError('coverPhoto') && (
                            <FormFeedback type="invalid" className="d-block">
                              {JSON.stringify(getFieldError('coverPhoto'))}
                            </FormFeedback>
                          )}
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
                        {getFieldError('categoriesIds') && (
                          <FormFeedback type="invalid" className="d-block">
                            {JSON.stringify(getFieldError('categoriesIds'))}
                          </FormFeedback>
                        )}
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
                                Obtener mi ubicación actual
                              </Button>
                            )}

                            {locationMode === LocationMode.OTHER && (
                              <Row>
                                <Col lg={6}>
                                  <div className="mb-3">
                                    <Label htmlFor="lat">Latitud</Label>
                                    <Input
                                      id="lat"
                                      name="location.lat"
                                      type="number"
                                      placeholder="Ingresa la latitud"
                                      onChange={form.handleChange}
                                      onBlur={form.handleBlur}
                                      value={form.values.location?.lat || ''}
                                    />
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="mb-3">
                                    <Label htmlFor="lng">Longitud</Label>
                                    <Input
                                      id="lng"
                                      name="location.lng"
                                      type="number"
                                      placeholder="Ingresa la longitud"
                                      onChange={form.handleChange}
                                      onBlur={form.handleBlur}
                                      value={form.values.location?.lng || ''}
                                    />
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
                                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker
                                  position={[
                                    form.values.location?.lat,
                                    form.values.location?.lng,
                                  ]}
                                >
                                  <Popup>La ubicación que elegiste</Popup>
                                </Marker>
                              </MapContainer>
                            ) : null}

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
                                  name="location.description"
                                  placeholder="Ingrese la descripción de la ubicación"
                                  onChange={form.handleChange}
                                  onBlur={form.handleBlur}
                                  value={
                                    form.values.location?.description || ''
                                  }
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
                              getFieldError('startDate') ? 'is-invalid' : ''
                            }
                            value={form.values.startDate || ''}
                            onChange={(e) =>
                              handleDateRangeChange('startDate', e.target.value)
                            }
                            onBlur={form.handleBlur}
                          />
                          {getFieldError('startDate') && (
                            <FormFeedback type="invalid" className="d-block">
                              {JSON.stringify(getFieldError('startDate'))}
                            </FormFeedback>
                          )}
                        </Col>
                        <Col md="6">
                          <Label htmlFor="endDate">Fecha de fin</Label>
                          <Input
                            id="endDate"
                            name="endDate"
                            type="date"
                            className={
                              getFieldError('endDate') ? 'is-invalid' : ''
                            }
                            value={form.values.endDate || ''}
                            onChange={(e) =>
                              handleDateRangeChange('endDate', e.target.value)
                            }
                            onBlur={form.handleBlur}
                          />
                          {getFieldError('endDate') && (
                            <FormFeedback type="invalid" className="d-block">
                              {JSON.stringify(getFieldError('endDate'))}
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
