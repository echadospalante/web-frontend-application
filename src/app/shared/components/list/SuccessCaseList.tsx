import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';

interface SuccessCase {
  id: number;
  name: string;
  src: string;
  venture: string;
  description: string;
}

const successCases: SuccessCase[] = [
  {
    id: 1,
    name: 'Nombre emprendimiento',
    venture: 'Nombre emprendedor',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    src: 'https://storage.googleapis.com/echadospalante-ventures-bucket/don-churro.png',
  },
  {
    id: 2,
    name: 'Nombre emprendimiento',
    venture: 'Nombre emprendedor',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    src: 'https://storage.googleapis.com/echadospalante-ventures-bucket/don-churro.png',
  },
  {
    id: 3,
    name: 'Otro emprendimiento',
    venture: 'Otro emprendedor',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    src: 'https://storage.googleapis.com/echadospalante-ventures-bucket/don-churro.png',
  },
  {
    id: 4,
    name: 'Cuarto emprendimiento',
    venture: 'Cuarto emprendedor',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    src: 'https://storage.googleapis.com/echadospalante-ventures-bucket/don-churro.png',
  },
];

const SuccessCaseList: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= successCases.length ? 0 : prevIndex + 2,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, successCases.length - 2) : prevIndex - 2,
    );
  };

  const visibleCase = successCases.slice(currentIndex, currentIndex + 2);

  return (
    <section
      style={{
        backgroundColor: '#fff',
        padding: '60px 0',
        minHeight: '80vh',
      }}
    >
      <Container>
        <h2
          style={{
            color: '#333',
            textAlign: 'center',
            fontSize: '2.2rem',
            marginBottom: '3rem',
            fontWeight: 600,
          }}
        >
          Casos de Éxito
        </h2>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <button
            style={{
              backgroundColor: '#fff',
              border: '2px solid #dee2e6',
              color: '#6c757d',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0,
              opacity: currentIndex === 0 ? 0.5 : 1,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
            onClick={prevSlide}
            disabled={currentIndex === 0}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.borderColor = '#adb5bd';
                e.currentTarget.style.color = '#495057';
              }
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.borderColor = '#dee2e6';
                e.currentTarget.style.color = '#6c757d';
              }
            }}
          >
            <i className="bx bx-chevron-left"></i>
          </button>

          <Row style={{ flex: 1, margin: 0 }}>
            {visibleCase.map((caso) => (
              <Col md="6" key={caso.id}>
                <Card
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    height: '100%',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow =
                      '0 4px 16px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow =
                      '0 2px 8px rgba(0,0,0,0.1)';
                  }}
                >
                  <img
                    src={caso.src}
                    style={{
                      backgroundColor: '#f1f3f4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6c757d',
                      fontSize: '1rem',
                      borderRadius: '8px 8px 0 0',
                      borderBottom: '1px solid #e9ecef',
                    }}
                  />

                  <CardBody
                    style={{
                      backgroundColor: '#fff',
                      color: '#333',
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <CardTitle
                        tag="h4"
                        style={{
                          color: '#495057',
                          fontSize: '1.3rem',
                          marginBottom: '1rem',
                          fontWeight: 500,
                        }}
                      >
                        {caso.name}
                      </CardTitle>
                      <CardText
                        style={{
                          color: '#6c757d',
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                          marginBottom: '1.5rem',
                        }}
                      >
                        {caso.description}
                      </CardText>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1px solid #e9ecef',
                        paddingTop: '1rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: '#e9ecef',
                            color: '#495057',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <i className="bx bx-user"></i>
                        </div>
                        <span
                          style={{
                            color: '#495057',
                            fontWeight: 500,
                            fontSize: '0.9rem',
                          }}
                        >
                          {caso.venture}
                        </span>
                      </div>
                      <Button
                        className="btn btn-success"
                        color="success"
                        style={{
                          fontWeight: 400,
                          padding: '0.5rem 1.2rem',
                          fontSize: '0.875rem',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        Ver más
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>

          <button
            style={{
              backgroundColor: '#fff',
              border: '2px solid #dee2e6',
              color: '#6c757d',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor:
                currentIndex + 2 >= successCases.length
                  ? 'not-allowed'
                  : 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0,
              opacity: currentIndex + 2 >= successCases.length ? 0.5 : 1,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
            onClick={nextSlide}
            disabled={currentIndex + 2 >= successCases.length}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.borderColor = '#adb5bd';
                e.currentTarget.style.color = '#495057';
              }
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.disabled) {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.borderColor = '#dee2e6';
                e.currentTarget.style.color = '#6c757d';
              }
            }}
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default SuccessCaseList;
