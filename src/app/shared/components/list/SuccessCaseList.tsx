import { Venture } from 'echadospalante-domain';
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
  Badge,
} from 'reactstrap';

const successCases = [
  {
    id: 'da6231e7-9f8b-411b-b651-d5fe2ca891cd',
    name: 'Café Don Gabriel',
    slug: 'cafe-don-gabriel',
    coverPhoto:
      'https://storage.googleapis.com/echadospalante-ventures-bucket/cafe-don-gabriel.png',
    sponsorshipsCount: 20,
    totalSponsorships: 0,
    description:
      'Café Don Gabriel es un emprendimiento familiar ubicado en el corazón de La Ceja, Antioquia, con más de 30 años de tradición cafetera. Ofrecemos variedades de café natural 100% cultivado por nuestra familia, con pasión, dedicación y respeto por la tierra.',
    active: true,
    verified: false,
    subscriptionsCount: 1233,
    createdAt: new Date('2025-07-23T12:39:14.127Z'),
    updatedAt: new Date('2025-07-23T12:39:14.127Z'),
    location: {
      id: '21d56b36-a379-4d2f-8818-bb506ed74a3b',
      location: { type: 'Point', coordinates: [-75.428926515, 6.020865243] },
      description: 'Barrio El divino niño',
      createdAt: new Date('2025-07-23T12:39:14.127Z'),
      updatedAt: new Date('2025-07-23T12:39:14.127Z'),
      municipality: {
        id: 840,
        name: 'La Ceja',
        department: {
          id: 2,
          name: 'Antioquia',
          municipalities: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        lat: 0,
        lng: 0,
        ventureLocations: [],
        eventLocations: [],
        users: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    owner: {
      id: '148c410b-ae17-45de-916b-dd8c2783a7af',
      picture:
        'https://lh3.googleusercontent.com/a/ACg8ocL3lcgG9P6clJEbpTj52ueniVzCIgMMk-Y3Sro6YFmNukzGrb-Y=s96-c',
      email: 'juan.cardona69@udea.edu.co',
      firstName: 'JUAN CAMILO',
      lastName: 'CARDONA CALDERON',
      active: true,
      createdAt: new Date('2025-07-17T01:27:53.762Z'),
      updatedAt: new Date('2025-07-17T01:29:12.506Z'),
      onboardingCompleted: true,
      verified: false,
      gender: 'M',
      birthDate: new Date('1999-02-04T05:00:00.000Z'),
      roles: [],
      preferences: [],
      comments: [],
      donations: [],
      notifications: [],
      publicationClaps: [],
      sponsorships: [],
      subscriptions: [],
      ventures: [],
    },
    categories: [
      {
        id: 'b7da29f0-8b30-4913-b2d8-99ba6e5b2c3f',
        name: 'Alimentación y Consumo',
        slug: 'alimentación_y_consumo',
        description: 'Descripción de prueba',
        createdAt: new Date('2024-09-17T16:58:28.525Z'),
        updatedAt: new Date('2024-09-17T16:58:28.525Z'),
      },
    ],
  },
  {
    id: 'b2c50d32-523b-4208-8c99-ccb3ecb62ef7',
    name: 'Doña Marta Producciones',
    slug: 'dona-marta-producciones',
    coverPhoto:
      'https://storage.googleapis.com/echadospalante-ventures-bucket/logistica.png',
    sponsorshipsCount: 56,
    totalSponsorships: 12030000,
    description:
      'Me apasiona hacer realidad momentos únicos e inolvidables. Me dedico con mucho amor a la organización y logística de bodas, quince años, bautizos y todo tipo de celebraciones especiales.',
    active: true,
    verified: false,
    subscriptionsCount: 998,
    createdAt: new Date('2025-07-23T12:50:55.639Z'),
    updatedAt: new Date('2025-07-23T12:50:55.639Z'),
    municipality: {
      id: 841,
      name: 'Rionegro',
      department: {
        id: 2,
        name: 'Antioquia',
        municipalities: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      lat: 0,
      lng: 0,
      ventureLocations: [],
      eventLocations: [],
      users: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    owner: {
      id: '148c410b-ae17-45de-916b-dd8c2783a7af',
      picture:
        'https://lh3.googleusercontent.com/a/ACg8ocL3lcgG9P6clJEbpTj52ueniVzCIgMMk-Y3Sro6YFmNukzGrb-Y=s96-c',
      email: 'juan.cardona69@udea.edu.co',
      firstName: 'JUAN CAMILO',
      lastName: 'CARDONA CALDERON',
      active: true,
      createdAt: new Date('2025-07-17T01:27:53.762Z'),
      updatedAt: new Date('2025-07-17T01:29:12.506Z'),
      onboardingCompleted: true,
      verified: false,
      gender: 'M',
      birthDate: new Date('1999-02-04T05:00:00.000Z'),
      roles: [],
      preferences: [],
      comments: [],
      donations: [],
      notifications: [],
      publicationClaps: [],
      sponsorships: [],
      subscriptions: [],
      ventures: [],
    },
    categories: [
      {
        id: 'b7da29f0-8b30-4913-b2d8-99ba6e5b2c3f',
        name: 'Alimentación y Consumo',
        slug: 'alimentación_y_consumo',
        description: 'Descripción de prueba',
        createdAt: new Date('2024-09-17T16:58:28.525Z'),
        updatedAt: new Date('2024-09-17T16:58:28.525Z'),
      },
      {
        id: 'cf8962d1-bcc6-438c-91c4-c696f79d70cf',
        name: 'Logística y Distribución',
        slug: 'logística_y_distribución',
        description: 'Descripción de prueba',
        createdAt: new Date('2024-09-17T16:58:28.525Z'),
        updatedAt: new Date('2024-09-17T16:58:28.525Z'),
      },
      {
        id: '717b9894-32c7-49ba-ac8b-cdd8f04deb14',
        name: 'Servicios Profesionales',
        slug: 'servicios_profesionales',
        description: 'Descripción de prueba',
        createdAt: new Date('2024-09-17T16:58:28.523Z'),
        updatedAt: new Date('2024-09-17T16:58:28.523Z'),
      },
    ],
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

  // Función para truncar descripción
  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  // Función para calcular antigüedad del emprendimiento
  const getVentureAge = (createdAt: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - createdAt.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 30) return `${diffDays} días`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} meses`;
    return `${Math.floor(diffDays / 365)} años`;
  };

  return (
    <section
      id="success-cases"
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
                    borderRadius: '12px',
                    height: '100%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow =
                      '0 8px 25px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow =
                      '0 4px 12px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <img
                      src={caso.coverPhoto}
                      alt={caso.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        backgroundColor: '#f1f3f4',
                      }}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        display: 'flex',
                        gap: '6px',
                      }}
                    >
                      {caso.verified && (
                        <Badge
                          color="success"
                          style={{
                            fontSize: '0.7rem',
                            padding: '4px 8px',
                            borderRadius: '12px',
                          }}
                        >
                          <i
                            className="bx bx-check-circle"
                            style={{ marginRight: '2px' }}
                          ></i>
                          Verificado
                        </Badge>
                      )}
                      {caso.active && (
                        <Badge
                          color="primary"
                          style={{
                            fontSize: '0.7rem',
                            padding: '4px 8px',
                            borderRadius: '12px',
                          }}
                        >
                          Activo
                        </Badge>
                      )}
                    </div>

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '12px',
                      }}
                    >
                      <Badge
                        color="light"
                        style={{
                          fontSize: '0.75rem',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          color: '#495057',
                        }}
                      >
                        <i
                          className="bx bx-map"
                          style={{ marginRight: '4px' }}
                        ></i>
                        {(caso.location?.municipality?.name ||
                          caso.municipality?.name) +
                          ', ' +
                          (caso.location?.municipality?.department?.name ||
                            caso.municipality?.department?.name)}
                      </Badge>
                    </div>
                  </div>

                  <CardBody
                    style={{
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      height: 'calc(100% - 200px)',
                    }}
                  >
                    <div style={{ marginBottom: '1rem' }}>
                      <CardTitle
                        tag="h4"
                        style={{
                          color: '#2c3e50',
                          fontSize: '1.25rem',
                          marginBottom: '0.5rem',
                          fontWeight: 600,
                          lineHeight: 1.3,
                        }}
                      >
                        {caso.name}
                      </CardTitle>

                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '4px',
                          marginBottom: '0.75rem',
                        }}
                      >
                        {caso.categories.slice(0, 2).map((category) => (
                          <Badge
                            key={category.id}
                            color="secondary"
                            style={{
                              fontSize: '0.7rem',
                              padding: '2px 6px',
                              borderRadius: '8px',
                              backgroundColor: '#e9ecef',
                              color: '#6c757d',
                            }}
                          >
                            {category.name}
                          </Badge>
                        ))}
                        {caso.categories.length > 2 && (
                          <Badge
                            color="light"
                            style={{
                              fontSize: '0.7rem',
                              padding: '2px 6px',
                              borderRadius: '8px',
                            }}
                          >
                            +{caso.categories.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <CardText
                      style={{
                        color: '#6c757d',
                        fontSize: '0.9rem',
                        lineHeight: 1.5,
                        marginBottom: '1.5rem',
                        flex: 1,
                      }}
                    >
                      {truncateDescription(caso.description)}
                    </CardText>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        padding: '0.75rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <div style={{ textAlign: 'center' }}>
                        <div
                          style={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: '#495057',
                          }}
                        >
                          {caso.subscriptionsCount}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#6c757d' }}>
                          Suscriptores
                        </div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div
                          style={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: '#495057',
                          }}
                        >
                          {caso.sponsorshipsCount}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#6c757d' }}>
                          Patrocinios
                        </div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div
                          style={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: '#495057',
                          }}
                        >
                          {getVentureAge(caso.createdAt)}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#6c757d' }}>
                          En plataforma
                        </div>
                      </div>
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
                        <img
                          src={caso.owner.picture}
                          alt={`${caso.owner.firstName} ${caso.owner.lastName}`}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid #e9ecef',
                          }}
                        />
                        <div>
                          <div
                            style={{
                              color: '#495057',
                              fontWeight: 500,
                              fontSize: '0.85rem',
                              lineHeight: 1.2,
                            }}
                          >
                            {caso.owner.firstName} {caso.owner.lastName}
                          </div>
                          <div
                            style={{
                              color: '#6c757d',
                              fontSize: '0.75rem',
                            }}
                          >
                            Fundador
                          </div>
                        </div>
                      </div>

                      <Button
                        color="primary"
                        size="sm"
                        style={{
                          fontWeight: 500,
                          padding: '0.4rem 1rem',
                          fontSize: '0.8rem',
                          borderRadius: '6px',
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
