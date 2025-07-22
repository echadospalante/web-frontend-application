import { Venture } from 'echadospalante-domain';
import {
  Card,
  Row,
  Col,
  CardBody,
  Badge,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

const VentureDetailCard = ({ venture }: { venture: Venture }) => {
  return (
    <div>
      <Card className="shadow-sm">
        <CardBody>
          <h5 className="fw-bold mb-3">Acerca del Emprendimiento</h5>
          <p className="mb-4">{venture.description}</p>

          <Row>
            <Col md={6}>
              <h6 className="fw-semibold mb-3">Información General</h6>
              <ListGroup flush>
                <ListGroupItem className="px-0 d-flex justify-content-between">
                  <span>Estado:</span>
                  <Badge color={venture.active ? 'success' : 'secondary'}>
                    {venture.active ? 'Activo' : 'Inactivo'}
                  </Badge>
                </ListGroupItem>
                <ListGroupItem className="px-0 d-flex justify-content-between">
                  <span>Verificado:</span>
                  <Badge color={venture.verified ? 'success' : 'warning'}>
                    {venture.verified ? 'Sí' : 'No'}
                  </Badge>
                </ListGroupItem>
                <ListGroupItem className="px-0 d-flex justify-content-between">
                  <span>Fecha de creación:</span>
                  <span>
                    {new Date(venture.createdAt).toLocaleDateString('es-CO')}
                  </span>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={6}>
              <h6 className="fw-semibold mb-3">Ubicación</h6>
              <p className="text-muted mb-2">{venture.location!.description}</p>
              <small className="text-muted">
                Coordenadas: {venture.location!.location!.coordinates[1]},{' '}
                {venture.location!.location!.coordinates[0]}
              </small>

              <h6 className="fw-semibold mb-3 mt-4">Categorías</h6>
              <div className="d-flex flex-wrap gap-2">
                {venture.categories.map((category) => (
                  <Badge key={category.id} className="p-2" color="success" pill>
                    {category.name}
                  </Badge>
                ))}
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default VentureDetailCard;