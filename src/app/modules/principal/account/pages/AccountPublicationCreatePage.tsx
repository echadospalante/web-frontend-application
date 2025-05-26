import React, { useState } from 'react';
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
  ButtonGroup,
} from 'reactstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import AlertWithReload from '../../../../shared/components/alert/AlertWithReload';
import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import useFetchAllVentureCategories from '../../../admin/general/hooks/useAllVentureCategories';

interface BodyItem {
  id: string;
  type: 'TEXT' | 'IMAGE' | 'VIDEO' | 'LINK';
  content: string;
}

interface PostData {
  description: string;
  type: 'STANDARD';
  body: BodyItem[];
  categoriesIds: string[];
}

const AccountPostCreatePage = () => {
  document.title = 'Nueva publicación | Echadospalante';

  const {
    loading: loadingCategories,
    error: errorCategories,
    data: categories,
    retryFetch: fetchAllVentureCategories,
  } = useFetchAllVentureCategories();

  const [postData, setPostData] = useState<PostData>({
    description: '',
    type: 'STANDARD',
    body: [],
    categoriesIds: [],
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const addBodyItem = (type: BodyItem['type']) => {
    const newItem: BodyItem = {
      id: Date.now().toString(),
      type,
      content: '',
    };
    setPostData((prev) => ({
      ...prev,
      body: [...prev.body, newItem],
    }));
  };

  const updateBodyItem = (id: string, content: string) => {
    setPostData((prev) => ({
      ...prev,
      body: prev.body.map((item) =>
        item.id === id ? { ...item, content } : item,
      ),
    }));
  };

  const removeBodyItem = (id: string) => {
    setPostData((prev) => ({
      ...prev,
      body: prev.body.filter((item) => item.id !== id),
    }));
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(postData.body);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPostData((prev) => ({
      ...prev,
      body: items,
    }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!postData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    }

    if (postData.categoriesIds.length === 0) {
      newErrors.categoriesIds = 'Selecciona al menos una categoría';
    }

    postData.body.forEach((item, index) => {
      if (!item.content.trim()) {
        newErrors[`body_${item.id}`] = 'El contenido es requerido';
      }

      if (
        item.type === 'VIDEO' &&
        item.content &&
        !isValidYouTubeUrl(item.content)
      ) {
        newErrors[`body_${item.id}`] = 'URL de YouTube no válida';
      }

      if (item.type === 'LINK' && item.content && !isValidUrl(item.content)) {
        newErrors[`body_${item.id}`] = 'URL no válida';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidYouTubeUrl = (url: string) => {
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)/;
    return youtubeRegex.test(url);
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Preparar datos para envío
      const submissionData = {
        ...postData,
        body: postData.body.map(({ id, ...item }) => item), // Remover IDs temporales
      };
      console.log('Datos a enviar:', JSON.stringify(submissionData, null, 2));
      // Aquí harías la llamada a la API
    }
  };

  const renderBodyItem = (item: BodyItem, index: number) => {
    const hasError = errors[`body_${item.id}`];

    return (
      <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            className={`mb-3 p-3 border rounded ${snapshot.isDragging ? 'shadow-lg' : ''}`}
            style={{
              backgroundColor: snapshot.isDragging ? '#f8f9fa' : 'white',
              ...provided.draggableProps.style,
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="d-flex align-items-center">
                <div
                  {...provided.dragHandleProps}
                  className="me-2 text-muted cursor-pointer"
                  style={{ cursor: 'grab' }}
                >
                  <i className="bx bx-menu"></i>
                </div>
                <span className="badge bg-primary me-2">
                  {item.type === 'TEXT' && 'Texto'}
                  {item.type === 'IMAGE' && 'Imagen'}
                  {item.type === 'VIDEO' && 'Video'}
                  {item.type === 'LINK' && 'Enlace'}
                </span>
              </div>
              <Button
                size="sm"
                color="danger"
                outline
                onClick={() => removeBodyItem(item.id)}
              >
                <i className="bx bx-trash"></i>
              </Button>
            </div>

            {item.type === 'TEXT' && (
              <textarea
                className={`form-control ${hasError ? 'is-invalid' : ''}`}
                rows={4}
                placeholder="Escribe tu contenido aquí..."
                value={item.content}
                onChange={(e) => updateBodyItem(item.id, e.target.value)}
              />
            )}

            {item.type === 'IMAGE' && (
              <div>
                <Input
                  type="url"
                  className={hasError ? 'is-invalid' : ''}
                  placeholder="https://ejemplo.com/imagen.jpg"
                  value={item.content}
                  onChange={(e) => updateBodyItem(item.id, e.target.value)}
                />
                {item.content && isValidUrl(item.content) && (
                  <div className="mt-2">
                    <img
                      src={item.content}
                      alt="Preview"
                      className="img-thumbnail"
                      style={{ maxHeight: '200px', maxWidth: '100%' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            )}

            {item.type === 'VIDEO' && (
              <Input
                type="url"
                className={hasError ? 'is-invalid' : ''}
                placeholder="https://youtube.com/watch?v=..."
                value={item.content}
                onChange={(e) => updateBodyItem(item.id, e.target.value)}
              />
            )}

            {item.type === 'LINK' && (
              <Input
                type="url"
                className={hasError ? 'is-invalid' : ''}
                placeholder="https://ejemplo.com"
                value={item.content}
                onChange={(e) => updateBodyItem(item.id, e.target.value)}
              />
            )}

            {hasError && (
              <FormFeedback type="invalid" className="d-block">
                {hasError}
              </FormFeedback>
            )}
          </div>
        )}
      </Draggable>
    );
  };

  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumb title="Cuenta" breadcrumbItem="Nueva publicación" />

        <Row className="justify-content-center">
          <Col lg="12">
            <Card>
              <CardBody className="border-bottom">
                <div className="d-flex align-items-center">
                  <h5 className="mb-0 card-title flex-grow-1">
                    Crea una nueva publicación para tu emprendimiento
                  </h5>
                </div>
              </CardBody>

              <Form onSubmit={handleSubmit}>
                <CardBody>
                  {/* Descripción */}
                  <div className="mb-4">
                    <Label htmlFor="description">
                      Descripción de la publicación
                    </Label>
                    <textarea
                      id="description"
                      className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                      rows={3}
                      placeholder="Describe tu publicación..."
                      value={postData.description}
                      onChange={(e) =>
                        setPostData((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                    />
                    {errors.description && (
                      <FormFeedback type="invalid" className="d-block">
                        {errors.description}
                      </FormFeedback>
                    )}
                  </div>

                  {/* Categorías */}
                  <div className="mb-4">
                    <Label>Categorías</Label>
                    {errorCategories && (
                      <AlertWithReload
                        message="Ha habido un error al consultar las categorías, por favor intente nuevamente."
                        onReload={fetchAllVentureCategories}
                      />
                    )}
                    <Select
                      value={postData.categoriesIds.map((id) => ({
                        label: categories?.find((c) => c.id === id)?.name || '',
                        value: id,
                      }))}
                      closeMenuOnSelect={false}
                      placeholder="Selecciona las categorías"
                      isMulti={true}
                      isLoading={loadingCategories}
                      onChange={(value) => {
                        setPostData((prev) => ({
                          ...prev,
                          categoriesIds: value.map(
                            (category) => category.value,
                          ),
                        }));
                      }}
                      options={
                        categories?.map(({ name, id }) => ({
                          label: name,
                          value: id,
                        })) || []
                      }
                      className="select2-selection"
                    />
                    {errors.categoriesIds && (
                      <FormFeedback type="invalid" className="d-block">
                        {errors.categoriesIds}
                      </FormFeedback>
                    )}
                  </div>

                  {/* Botones para agregar contenido */}
                  <div className="mb-4">
                    <Label className="form-label">
                      Contenido de la publicación
                    </Label>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      <Button
                        type="button"
                        color="success"
                        outline
                        size="sm"
                        onClick={() => addBodyItem('TEXT')}
                      >
                        <i className="bx bx-text me-1"></i>
                        Agregar Texto
                      </Button>
                      <Button
                        type="button"
                        color="info"
                        outline
                        size="sm"
                        onClick={() => addBodyItem('IMAGE')}
                      >
                        <i className="bx bx-image me-1"></i>
                        Agregar Imagen
                      </Button>
                      <Button
                        type="button"
                        color="danger"
                        outline
                        size="sm"
                        onClick={() => addBodyItem('VIDEO')}
                      >
                        <i className="bx bx-video me-1"></i>
                        Agregar Video
                      </Button>
                      <Button
                        type="button"
                        color="warning"
                        outline
                        size="sm"
                        onClick={() => addBodyItem('LINK')}
                      >
                        <i className="bx bx-link me-1"></i>
                        Agregar Enlace
                      </Button>
                    </div>

                    {/* Lista de contenido */}
                    <DragDropContext onDragEnd={handleDragEnd}>
                      <Droppable droppableId="body-items">
                        {(provided) => (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {postData.body.map((item, index) =>
                              renderBodyItem(item, index),
                            )}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>

                    {postData.body.length === 0 && (
                      <div className="text-center py-5 text-muted">
                        <i className="bx bx-plus-circle display-4"></i>
                        <p className="mt-2">
                          Agrega contenido a tu publicación usando los botones
                          de arriba
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Botón de envío */}
                  <div className="text-center">
                    <Button type="submit" color="primary" size="lg">
                      <i className="bx bx-send me-1"></i>
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

export default AccountPostCreatePage;
