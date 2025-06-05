import { PublicationContent, VenturePublication } from 'echadospalante-domain';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
} from 'reactstrap';
import { Navigate } from 'react-router-dom';

import useFetchPublicationDetail from '../hooks/useFetchPublicationDetail';
import AppSpinner from '../../../../shared/components/loader/Spinner';
import AlertWithReload from '../../../../shared/components/alert/AlertWithReload';
import PublicationCommentCard from '../../../../shared/components/card/PublicationCommentCard';

const VenturePublicationDetailPage = () => {
  const [showClapsModal, setShowClapsModal] = useState(false);
  const [newComment, setNewComment] = useState('');
  const { data, isError, isLoading, retryRequest } =
    useFetchPublicationDetail();

  // Función para formatear la fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatRelativeDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60),
    );

    if (diffInHours < 1) return 'Hace unos minutos';
    if (diffInHours < 24)
      return `Hace ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7)
      return `Hace ${diffInDays} día${diffInDays > 1 ? 's' : ''}`;

    return formatDate(dateString);
  };

  // Función para renderizar contenido
  const renderContent = (content: PublicationContent) => {
    switch (content.type) {
      case 'TEXT':
        return (
          <div key={content.id} className="mb-3">
            <p className="fs-5 text-dark">{content.content}</p>
          </div>
        );
      case 'IMAGE':
        return (
          <div key={content.id} className="mb-4">
            <img
              src={content.content}
              className="img-fluid rounded shadow-sm w-100"
              alt="Contenido de publicación"
              style={{ objectFit: 'cover' }}
            />
          </div>
        );
      case 'VIDEO':
        return (
          <div key={content.id} className="mb-4">
            <video
              controls
              className="w-100 rounded shadow-sm"
              style={{ maxHeight: '500px' }}
            >
              <source src={content.content} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        );
      case 'LINK':
        return (
          <div key={content.id} className="mb-3">
            <Card className="border-primary">
              <CardBody className="py-2">
                <a
                  href={content.content}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-decoration-none d-flex align-items-center"
                >
                  <i className="bx bx-link-external me-2"></i>
                  <span className="text-truncate">{content.content}</span>
                </a>
              </CardBody>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

  // Función para manejar envío de comentario
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // Aquí harías la llamada a la API para crear el comentario
      console.log('Nuevo comentario:', newComment);
      setNewComment('');
    }
  };

  if (isLoading) {
    return <AppSpinner />;
  }

  if (isError) {
    <AlertWithReload
      message={
        'Error al cargar el detalle de la publicación, intente nuevamente'
      }
      onReload={retryRequest}
    />;
  }

  if (!data) {
    return <Navigate to={'/principal/emprendimientos/publicaciones'} />;
  }

  return (
    <Container fluid className="py-4 mt-5">
      <Row>
        <Col lg={10} md={12} sm={12} className="mx-auto">
          {/* Header de la publicación */}
          <Card className="mb-4 shadow-sm">
            <CardBody>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h2 className="mb-2">{data.description}</h2>
                  <p className="text-muted mb-0">
                    <i className="bx bx-calendar me-1"></i>
                    Publicado el{' '}
                    {formatDate(new Date(data.createdAt).toISOString())}
                  </p>
                </div>
              </div>

              {data.categories.length > 0 && (
                <div className="mb-3">
                  {data.categories.map((category) => (
                    <Badge
                      key={category.id}
                      color="primary"
                      pill
                      className="me-2 mb-1 p-2"
                    >
                      <i className="bx bx-purchase-tag-alt me-1"></i>
                      {category.name}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Interacciones */}
              <div className="d-flex align-items-center">
                <Button
                  color="link"
                  className="text-muted p-0 me-3"
                  onClick={() => setShowClapsModal(true)}
                >
                  <i className="bx bx-like me-1"></i>
                  {data.clapsCount} Aplausos
                </Button>
                <span className="text-muted">
                  <i className="bx bx-comment-dots me-1"></i>
                  {data.commentsCount} Comentarios
                </span>
              </div>
            </CardBody>
          </Card>

          {/* Contenidos */}
          <Card className="mb-4 shadow-sm">
            <CardBody>
              {data.contents.map((content) => renderContent(content))}
            </CardBody>
          </Card>

          {/* Sección de comentarios */}
          <Card className="shadow-sm">
            <CardBody>
              <h4 className="mb-4">
                <i className="bx bx-comment-dots me-2"></i>
                Comentarios ({data.comments.length})
              </h4>

              {/* Formulario para nuevo comentario */}
              <Form onSubmit={handleSubmitComment} className="mb-4">
                <FormGroup>
                  <InputGroup>
                    <Input
                      type="textarea"
                      placeholder="Escribe un comentario..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      rows={3}
                    />
                    <InputGroupText>
                      <Button
                        color="primary"
                        size="sm"
                        type="submit"
                        disabled={!newComment.trim()}
                      >
                        <i className="bx bx-send"></i>
                      </Button>
                    </InputGroupText>
                  </InputGroup>
                </FormGroup>
              </Form>

              {/* Lista de comentarios */}
              {data.comments.length > 0 ? (
                <div>
                  {data.comments.map((comment) => (
                    <PublicationCommentCard comment={comment} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <i
                    className="bx bx-comment-dots text-muted"
                    style={{ fontSize: '3rem' }}
                  ></i>
                  <p className="text-muted mt-2">Aún no hay comentarios</p>
                  <p className="text-muted">¡Sé el primero en comentar!</p>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Modal de aplausos */}
      <Modal
        isOpen={showClapsModal}
        toggle={() => setShowClapsModal(false)}
        centered
      >
        <ModalHeader toggle={() => setShowClapsModal(false)}>
          <i className="bx bx-like me-2"></i>
          Aplausos ({data.claps.length})
        </ModalHeader>
        <ModalBody className="p-0">
          {data.claps.length > 0 ? (
            <ListGroup flush>
              {data.claps.map((clap) => (
                <ListGroupItem
                  key={clap.id}
                  className="d-flex align-items-center py-3 border-0"
                >
                  <img
                    src={clap.user.picture}
                    alt={`${clap.user.firstName} ${clap.user.lastName}`}
                    className="rounded-circle me-3"
                    width="40"
                    height="40"
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-0 d-flex align-items-center">
                      {clap.user.firstName} {clap.user.lastName}
                      {clap.user.verified && (
                        <i className="bx bx-badge-check text-primary ms-1"></i>
                      )}
                    </h6>
                    <small className="text-muted">
                      {formatRelativeDate(
                        new Date(clap.createdAt).toISOString(),
                      )}
                    </small>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          ) : (
            <div className="text-center py-4">
              <i
                className="bx bx-like text-muted"
                style={{ fontSize: '3rem' }}
              ></i>
              <p className="text-muted mt-2 mb-0">Aún no hay aplausos</p>
            </div>
          )}
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default VenturePublicationDetailPage;
