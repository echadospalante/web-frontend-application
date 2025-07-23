import React from 'react';
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row
} from 'reactstrap';

interface AppFeature {
  id: number;
  name: string;
  src: string;
  description: string;
}

const features: AppFeature[] = [
  {
    id: 1,
    name: 'Publicaciones de Emprendimientos',
    description:
      'Comparte y descubre proyectos innovadores. Los emprendedores pueden publicar sus ideas, productos o servicios y recibir retroalimentación de la comunidad.',
    src: 'https://storage.googleapis.com/echadospalante-publications-bucket/post.png',
  },
  {
    id: 2,
    name: 'Eventos y Talleres',
    description:
      'Accede a eventos, charlas y talleres enfocados en el crecimiento emprendedor. Conéctate con expertos y otros emprendedores en tiempo real.',
    src: 'https://storage.googleapis.com/echadospalante-publications-bucket/schedule.png',
  },
  {
    id: 3,
    name: 'Patrocinios y Apoyos',
    description:
      'Busca y ofrece oportunidades de patrocinio. Las marcas o inversores pueden encontrar emprendimientos alineados con sus valores para apoyar.',
    src: 'https://storage.googleapis.com/echadospalante-publications-bucket/sponsor.png',
  },
  {
    id: 4,
    name: 'Suscripciones Inteligentes',
    description:
      'Activa notificaciones y suscríbete a tus temas, emprendedores o categorías favoritas. Personaliza tu experiencia y mantente al día con lo que realmente te interesa.',
    src: 'https://storage.googleapis.com/echadospalante-publications-bucket/subscriber.png',
  },
]

const FeatureList: React.FC = () => {
  return (
    <Container className="px-5 mb-4" id="features">
      <h2
        style={{
          color: '#333',
          textAlign: 'center',
          fontSize: '2.2rem',
          marginBottom: '3rem',
          fontWeight: 600,
        }}
      >
        Características
      </h2>
      <Row className="g-4 justify-content-center">
        {features.map((feature) => (
          <Col
            lg={3}
            md={6}
            sm={12}
            xs={12}
            key={feature.id}
            style={{ marginBottom: '1.5rem' }}
          >
            <Card
              style={{
                backgroundColor: '#fff',
                border: '1px solid #e9ecef',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                height: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
            >
              <img
                src={feature.src}
                style={{
                  backgroundColor: '#f1f3f4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6c757d',
                  fontSize: '0.9rem',
                  borderBottom: '1px solid #e9ecef',
                  borderRadius: '8px 8px 0 0',
                }}
              ></img>
              <CardBody
                style={{
                  backgroundColor: '#fff',
                  color: '#333',
                  padding: '1.5rem',
                }}
              >
                <CardTitle
                  tag="h5"
                  style={{
                    color: '#495057',
                    fontSize: '1.1rem',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    fontWeight: 500,
                  }}
                >
                  {feature.name}
                </CardTitle>
                <CardText
                  style={{
                    color: '#6c757d',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    textAlign: 'center',
                  }}
                >
                  {feature.description}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureList;
