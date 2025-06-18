import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'reactstrap';

const LandingHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Echados pa'lante",
      subtitle: 'Conecta con emprendedores exitosos',
      description:
        'El lugar en donde emprendedores y empresas se encuentran para hacer grandes negocios.',
      bgGradient: 'linear-gradient(to right, #dad7cd, #45a247)',

      textColor: 'text-white',
      image:
        'https://storage.googleapis.com/echadospalante-publications-bucket/your-company.png',
      buttonPrimary: { text: 'Empezar', class: 'btn-success' },
      buttonSecondary: {
        text: 'Ver la demo',
        class: 'btn-info',
        icon: 'mdi-play',
      },
    },
    {
      id: 2,
      title: '🚀 Impulsa tus ideas',
      subtitle: 'Herramientas para el éxito',
      description:
        'Accede a recursos, una red de contactos que transformarán tu idea en realidad.',
      bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      textColor: 'text-white',
      image:
        'https://storage.googleapis.com/echadospalante-publications-bucket/ideas.png',
      buttonPrimary: { text: 'Descubre más', class: 'btn-light text-dark' },
      buttonSecondary: { text: 'Casos de éxito', class: 'btn-outline-light' },
    },
    {
      id: 3,
      title: '💡 Ideas que transforman',
      subtitle: 'De la inspiración a la acción',
      description:
        'Convierte tus ideas innovadoras en negocios prósperos con nuestra plataforma integral.',
      bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      textColor: 'text-white',
      image:
        'https://storage.googleapis.com/echadospalante-publications-bucket/transformation.png',
      buttonPrimary: { text: 'Únete ahora', class: 'btn-warning' },
      buttonSecondary: { text: 'Explorar', class: 'btn-outline-light' },
    },
    {
      id: 4,
      title: '🌟 Comunidad próspera',
      subtitle: 'Networking que funciona',
      description:
        'Más de 10,000 emprendedores ya confían en nuestra plataforma para hacer crecer sus negocios.',
      bgGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      textColor: 'text-white',
      image:
        'https://storage.googleapis.com/echadospalante-publications-bucket/success-community.png',
      buttonPrimary: { text: 'Conectar', class: 'btn-dark' },
      buttonSecondary: { text: 'Testimonios', class: 'btn-outline-dark' },
    },
    {
      id: 5,
      title: '📈 Resultados reales',
      subtitle: 'Crecimiento garantizado',
      description:
        'El 85% de nuestros usuarios logran sus objetivos de negocio en los primeros 6 meses.',
      bgGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      textColor: 'text-dark',
      image:
        'https://storage.googleapis.com/echadospalante-publications-bucket/metrics.png',
      buttonPrimary: { text: 'Ver estadísticas', class: 'btn-success' },
      buttonSecondary: { text: 'Calcular ROI', class: 'btn-primary' },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 15000); // 15 seconds per slide

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <Fragment>
      <section
        className="section hero-section position-relative overflow-hidden"
        id="home"
        style={{
          background: currentHero.bgGradient,
          minHeight: '100vh',
          position: 'relative',
          bottom: '150px',
          transition: 'all 0.8s ease-in-out',
        }}
      >
        {/* Animated background overlay */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            background: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
            animation: 'float 6s ease-in-out infinite',
          }}
        />

        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row className="align-items-center min-vh-100">
            <Col lg="6" xl="5">
              <div
                className={`${currentHero.textColor} hero-content`}
                style={{
                  animation: 'slideInLeft 0.8s ease-out',
                  animationFillMode: 'both',
                }}
              >
                <div className="mb-2">
                  <span
                    className="badge bg-light text-dark px-3 py-2 rounded-pill mb-3"
                    style={{ fontSize: '0.9rem', fontWeight: '500' }}
                  >
                    {currentHero.subtitle}
                  </span>
                </div>

                <h1
                  className={`${currentHero.textColor} fw-bold mb-4 hero-title`}
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    lineHeight: '1.2',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  {currentHero.title}
                </h1>

                <p
                  className="fs-5 mb-4 opacity-90"
                  style={{ lineHeight: '1.6' }}
                >
                  {currentHero.description}
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link
                    to="#"
                    className={`btn ${currentHero.buttonPrimary.class} btn-lg px-4 py-3 rounded-pill`}
                    style={{
                      fontWeight: '600',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {currentHero.buttonPrimary.text}
                  </Link>
                  <Link
                    to="#"
                    className={`btn ${currentHero.buttonSecondary.class} btn-lg px-4 py-3 rounded-pill`}
                    style={{
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {currentHero.buttonSecondary.icon && (
                      <i
                        className={`mdi ${currentHero.buttonSecondary.icon} me-2`}
                      />
                    )}
                    {currentHero.buttonSecondary.text}
                  </Link>
                </div>

                {/* Progress indicators */}
                <div className="d-flex gap-2 mt-5">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      className={`btn p-0 rounded-pill ${
                        index === currentSlide ? 'bg-white' : 'bg-white-50'
                      }`}
                      style={{
                        width: '12px',
                        height: '12px',
                        opacity: index === currentSlide ? 1 : 0.5,
                        transition: 'all 0.3s ease',
                        border: 'none',
                      }}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </Col>

            <Col lg="6" xl="6" className="ms-xl-auto">
              <div className="hero-image-container position-relative">
                <Card
                  className="overflow-hidden border-0 shadow-lg"
                  style={{
                    animation: 'slideInRight 0.8s ease-out',
                    animationFillMode: 'both',
                    borderRadius: '2rem',
                    background: 'transparent',
                    transform:
                      'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div className="position-relative overflow-hidden">
                    <img
                      src={currentHero.image}
                      alt={currentHero.title}
                      className="w-100 h-100 object-cover"
                      style={{
                        height: '400px',
                        transition: 'transform 0.8s ease',
                        background: 'transparent',
                        filter: 'brightness(1.1) contrast(1.1)',
                      }}
                    />
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background:
                          'linear-gradient(45deg, rgba(0,0,0,0.1) 0%, transparent 100%)',
                      }}
                    />
                  </div>
                </Card>

                {/* Floating elements */}
                <div
                  className="position-absolute"
                  style={{
                    top: '10%',
                    right: '-5%',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    animation: 'float 4s ease-in-out infinite',
                    backdropFilter: 'blur(10px)',
                  }}
                />
                <div
                  className="position-absolute"
                  style={{
                    bottom: '15%',
                    left: '-5%',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '50%',
                    animation: 'float 6s ease-in-out infinite reverse',
                    backdropFilter: 'blur(10px)',
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>

        {/* Navigation arrows */}
        <button
          className="btn btn-light position-absolute start-0 top-50 translate-middle-y ms-3 rounded-circle"
          style={{
            width: '50px',
            height: '50px',
            opacity: '0.8',
            zIndex: 3,
            transition: 'all 0.3s ease',
          }}
          onClick={prevSlide}
        >
          <i className="mdi mdi-chevron-left fs-4" />
        </button>
        <button
          className="btn btn-light position-absolute end-0 top-50 translate-middle-y me-3 rounded-circle"
          style={{
            width: '50px',
            height: '50px',
            opacity: '0.8',
            zIndex: 3,
            transition: 'all 0.3s ease',
          }}
          onClick={nextSlide}
        >
          <i className="mdi mdi-chevron-right fs-4" />
        </button>

        {/* Custom CSS animations */}
        <style>{`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          .hero-image-container:hover .card {
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg)
              scale(1.02);
          }

          .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3) !important;
          }

          .hero-content {
            animation-delay: 0.2s;
          }

          .hero-image-container {
            animation-delay: 0.4s;
          }
        `}</style>
      </section>
    </Fragment>
  );
};

export default LandingHero;
