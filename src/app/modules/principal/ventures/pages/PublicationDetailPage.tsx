import React, { useState } from 'react';

import { PublicationContent } from 'echadospalante-domain';
import moment from 'moment';
import { Link, Navigate } from 'react-router-dom';
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'reactstrap';

import AlertWithReload from '../../../../shared/components/alert/AlertWithReload';
import PublicationCommentCard from '../../../../shared/components/card/PublicationCommentCard';
import AppSpinner from '../../../../shared/components/loader/Spinner';
import useFetchPublicationDetail from '../hooks/useFetchPublicationDetail';
import usePublicationInteractions from '../hooks/usePublicationInteractions';
import PublicationClapsModal from '../../../../shared/components/modal/PublicationClapsModal';
import useAuthentication from '../../../auth/hooks/useAuthentication';

const PublicationDetailPage = () => {
  const [showClapsModal, setShowClapsModal] = useState(false);
  const { id: userId } = useAuthentication();
  const { detail, isError, isLoading, retryRequest } =
    useFetchPublicationDetail();

  const {
    handlePublishComment,
    handlePublishClap,
    isCommentLoading,
    isClapLoading,
    isCommentError,
    isClapError,
    isCommentSuccess,
    isClapSuccess,
    retryComment,
    retryClap,
    newComment,
    handleDeleteComment,
    handleDeleteClap,
    setNewComment,
  } = usePublicationInteractions();

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
    const from = moment(date);
    const to = moment(now);
    return from.from(to);
  };

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

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      handlePublishComment(newComment.trim());
    }
  };

  if (isLoading) {
    return <AppSpinner />;
  }

  if (isError || !detail) {
    return (
      <AlertWithReload
        message={
          'Error al cargar el detalle de la publicación, intente nuevamente'
        }
        onReload={retryRequest}
      />
    );
  }

  return (
    <Container fluid className="py-4 mt-5">
      <Row>
        <Col lg={10} md={12} sm={12} className="mx-auto">
          <Card className="mb-4 mt-3 shadow-sm">
            <CardBody>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h2 className="mb-2">{detail.description}</h2>
                  <p className="text-muted mb-0">
                    <i className="bx bx-calendar me-1"></i>
                    Publicado el{' '}
                    {formatDate(new Date(detail.createdAt).toISOString())}
                  </p>
                </div>
              </div>

              {detail.categories.length > 0 && (
                <div className="mb-3">
                  {detail.categories.map((category) => (
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

              <div className="d-flex align-items-center">
                <div>
                  {detail.claps.some(({ user }) => user.id === userId) ? (
                    <Button
                      onClick={() =>
                        handleDeleteClap(
                          detail.claps.find(({ user }) => user.id === userId)!
                            .id,
                        )
                      }
                      color="danger"
                      outline
                      className="me-2"
                    >
                      <i className="mdi mdi-thumb-up-outline me-1"></i>
                      Eliminar aplauso
                    </Button>
                  ) : (
                    <Button
                      onClick={handlePublishClap}
                      color="success"
                      outline
                      className="me-2"
                    >
                      <i className="mdi mdi-thumb-up me-1"></i>
                      Aplaudir
                    </Button>
                  )}
                  <Link
                    color="primary"
                    className="me-2 btn btn-outline-primary"
                    to={`#nuevo-comentario`}
                  >
                    <i className="mdi mdi-comment-plus-outline me-1"></i>
                    Comentar
                  </Link>
                </div>
                <Button
                  color="link"
                  className="text-muted p-0 me-3"
                  onClick={() => setShowClapsModal(true)}
                >
                  <i className="bx bx-like me-1"></i>
                  {detail.clapsCount}{' '}
                  {detail.clapsCount === 1 ? 'Aplauso' : 'Aplausos'}
                </Button>
                <span className="text-muted">
                  <i className="bx bx-comment-dots me-1"></i>
                  {detail.commentsCount} Comentarios
                </span>
              </div>
            </CardBody>
          </Card>

          <Card className="mb-4 shadow-sm">
            <CardBody>
              {detail.contents.map((content) => renderContent(content))}
            </CardBody>
          </Card>

          <Card className="shadow-sm">
            <CardBody>
              <h4 className="mb-4">
                <i className="bx bx-comment-dots me-2"></i>
                Comentarios ({detail.comments.length})
              </h4>

              <Form onSubmit={handleSubmitComment} className="mb-4">
                <FormGroup>
                  <InputGroup>
                    <Input
                      type="textarea"
                      placeholder="Escribe un comentario..."
                      value={newComment}
                      id="nuevo-comentario"
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

              {detail.comments.length > 0 ? (
                <div>
                  {[...detail.comments].reverse().map((comment) => (
                    <PublicationCommentCard
                      comment={comment}
                      onDelete={(commentId) => handleDeleteComment(commentId)}
                    />
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

      {showClapsModal && (
        <PublicationClapsModal
          showModal={showClapsModal}
          setShowModal={setShowClapsModal}
          detail={detail}
        />
      )}
    </Container>
  );
};

export default PublicationDetailPage;
