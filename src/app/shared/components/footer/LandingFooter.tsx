import React, { Fragment } from 'react';

import { Col, Container, Row } from 'reactstrap';

const FooterLink = () => {
  return (
    <Fragment>
      <Row>
        <Col lg="6">
          <div className="mb-4">
            <img src="/epl.png" alt="" height="100" />
          </div>

          <p className="mb-2">
            {new Date().getFullYear()} © echadospalante. Design by
            EchadosPa'Lante
          </p>
        </Col>
      </Row>
    </Fragment>
  );
};

const LandingFooter = () => {
  const footerLinks = [
    // {
    //   title: 'Seccion',
    //   links: [
    //     { title: 'Link prueba', to: '#' },
    //     { title: 'Link prueba', to: '#' },
    //     { title: 'Link prueba', to: '#' },
    //     { title: 'Link prueba', to: '#' },
    //     { title: 'Link prueba', to: '#' },
    //   ],
    // },
    // {
    //   title: 'Seccion',
    //   links: [
    //     { title: 'Link prueba', to: '#' },
    //     { title: 'Link prueba', to: '#' },
    //     { title: 'Link prueba', to: '#' },
    //     { title: 'Link prueba', to: '#' },
    //   ],
    // },
    // {
    //   title: 'Seccion',
    //   links: [
    //     { title: 'Link prueba', to: '#' },
    //     { title: 'Link prueba', to: '#' },
    //     { title: 'Link prueba', to: '#' },
    //   ],
    // },
  ];

  return (
    <React.Fragment>
      <footer className="landing-footer py-0 my-0">
        <Container>
          <Row>
            {/* {footerLinks.map((footerLink, key) => (
              <Col lg="3" sm="6" key={key}>
                <div className="mb-4 mb-lg-0">
                  <h5 className="mb-3 footer-list-title">{footerLink.title}</h5>
                  <ul className="list-unstyled footer-list-menu">
                    {footerLink.links.map((item, key) => (
                      <li key={key}>
                        <Link to={item.to}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))} */}

            {/* <Col lg="3" sm="6">
              <div className="mb-4 mb-lg-0">
                <h5 className="mb-3 footer-list-title">{t('Latest News')}</h5>
                <div className="blog-post">
                  <Link to="#" className="post">
                    <div className="badge badge-soft-success font-size-11 mb-3">
                      Noticia 1
                    </div>
                    <h5 className="post-title">Descripción noticia 1</h5>
                    <p className="mb-0">
                      <i className="bx bx-calendar me-1" /> 15 Sept, 2024
                    </p>
                  </Link>
                  <Link to="#" className="post">
                    <div className="badge badge-soft-success font-size-11 mb-3">
                      Noticia 2
                    </div>
                    <h5 className="post-title">Descripción noticia 2</h5>
                    <p className="mb-0">
                      <i className="bx bx-calendar me-1" /> 16 Sept, 2024
                    </p>
                  </Link>
                </div>
              </div>
            </Col> */}
          </Row>

          <hr className="footer-border my-5" />

          <FooterLink />
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default LandingFooter;
