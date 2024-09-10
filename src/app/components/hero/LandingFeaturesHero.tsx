import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

type FeatureBoxProps = {
  desc: string;
  features: { id: number; desc: string }[];
  num: string;
  title: string;
};

const FeatureBox = ({ desc, features, num, title }: FeatureBoxProps) => {
  return (
    <Fragment>
      <div className="mt-4 mt-md-auto">
        <div className="d-flex align-items-center mb-2">
          <div className="features-number font-weight-semibold display-4 me-3">
            {num}
          </div>
          <h4 className="mb-0">{title}</h4>
        </div>
        <p className="text-muted">{desc}</p>
        <div className="text-muted mt-4">
          {features.map((feature, key) => (
            <p key={key} className={feature.id === 1 ? "mb-2" : ""}>
              <i className="mdi mdi-circle-medium text-success me-1" />
              {feature.desc}
            </p>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const LandingFeaturesHero = () => {
  const features1 = [
    { id: 1, desc: "Donec pede justo vel aliquet" },
    { id: 2, desc: "Aenean et nisl sagittis" },
  ];
  const features2 = [
    { id: 1, desc: "Donec pede justo vel aliquet" },
    { id: 2, desc: "Aenean et nisl sagittis" },
  ];

  return (
    <React.Fragment>
      <section className="section" id="features">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <div className="small-title">Features</div>
                <h4>Key features of the product</h4>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center pt-4">
            <Col md="6" sm="8">
              <div>
                <img
                  src="/some-img.png"
                  alt="Falta la imágen"
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </Col>
            <Col md="5" className="ms-auto">
              {/* featurebox */}
              <FeatureBox
                num="01"
                title="Lending"
                features={features1}
                desc="If several languages coalesce, the grammar of the resulting language is more simple and regular than of the individual will be more simple and regular than the existing."
              />
            </Col>
          </Row>

          <Row className="align-items-center mt-5 pt-md-5">
            <Col md="5">
              {/* featurebox */}
              <FeatureBox
                num="02"
                title="Wallet"
                features={features2}
                desc="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend."
              />
            </Col>
            <Col md="6" sm="8" className="ms-md-auto">
              <div className="mt-4 me-md-0">
                <img
                  src="/some-img.png"
                  alt="Falta la imágen"
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default LandingFeaturesHero;
