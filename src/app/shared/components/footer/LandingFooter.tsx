import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const FooterLink = () => {
  return (
    <Fragment>
      <Row>
        <Col lg="6">
          <div className="mb-4">
            <img src="/images/logos/7s-logo-small.png" alt="" height="50" />
          </div>

          <p className="mb-2">
            {new Date().getFullYear()} © echadospalante. Design by Themesbrand
          </p>
        </Col>
      </Row>
    </Fragment>
  );
};

const LandingFooter = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { title: "About Us", to: "#" },
        { title: "Features", to: "#" },
        { title: "Team", to: "#" },
        { title: "News", to: "#" },
        { title: "FAQs", to: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Whitepaper", to: "#" },
        { title: "Token sales", to: "#" },
        { title: "Privacy Policy", to: "#" },
        { title: "Terms & Conditions", to: "/terminos-condiciones" },
      ],
    },
    {
      title: "Links",
      links: [
        { title: "Tokens", to: "#" },
        { title: "Roadmap", to: "#" },
        { title: "FAQs", to: "#" },
      ],
    },
  ];

  return (
    <React.Fragment>
      <footer className="landing-footer">
        <Container>
          <Row>
            {footerLinks.map((footerLink, key) => (
              <Col lg="3" sm="6" key={key}>
                <div className="mb-4 mb-lg-0">
                  <h5 className="mb-3 footer-list-title">{footerLink.title}</h5>
                  <ul className="list-unstyled footer-list-menu">
                    {footerLink.links.map((Flink, key) => (
                      <li key={key}>
                        <Link to={Flink.to}>{Flink.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}

            <Col lg="3" sm="6">
              <div className="mb-4 mb-lg-0">
                <h5 className="mb-3 footer-list-title">Latest News</h5>
                <div className="blog-post">
                  <Link to="#" className="post">
                    <div className="badge badge-soft-success font-size-11 mb-3">
                      Cryptocurrency
                    </div>
                    <h5 className="post-title">Donec pede justo aliquet nec</h5>
                    <p className="mb-0">
                      <i className="bx bx-calendar me-1" /> 04 Mar, 2020
                    </p>
                  </Link>
                  <Link to="#" className="post">
                    <div className="badge badge-soft-success font-size-11 mb-3">
                      Cryptocurrency
                    </div>
                    <h5 className="post-title">In turpis, Pellentesque</h5>
                    <p className="mb-0">
                      <i className="bx bx-calendar me-1" /> 12 Mar, 2020
                    </p>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>

          <hr className="footer-border my-5" />

          <FooterLink />
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default LandingFooter;
