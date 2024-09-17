import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Link } from "react-router-dom";

const jobVacancyData = [
  {
    id: 1,
    img: "/epl.png",
    title: "Test 1",
    country: "Antioquia",
    vacancy: 8,
  },
  {
    id: 2,
    img: "/epl.png",
    title: "Test 2",
    country: "Cundinamarca",
    vacancy: 12,
  },
  {
    id: 3,
    img: "/epl.png",
    title: "Test 3",
    country: "Casanare",
    vacancy: 25,
  },
  {
    id: 4,
    img: "/epl.png",
    title: "Test 4",
    country: "Vichada",
    vacancy: 8,
  },
  {
    id: 5,
    img: "/epl.png",
    title: "Test 5",
    country: "Guainia",
    vacancy: 1,
  },
  {
    id: 6,
    img: "/epl.png",
    title: "Test 6",
    country: "Vaupés",
    vacancy: 15,
  },
];

const CompanySummary = () => {
  return (
    <React.Fragment>
      <Col lg={12}>
        <div className="d-flex">
          <h4 className="card-title mb-4 flex-grow-1">Test title</h4>
          <div>
            <Link to="/job-list" className="btn btn-primary btn-sm">
              Ver todos <i className="bx bx-right-arrow-alt"></i>
            </Link>
          </div>
        </div>
      </Col>
      {(jobVacancyData || []).map((item, key) => (
        <Col lg={2} key={key}>
          <Card>
            <CardBody className="p-4">
              <div className="text-center mb-3">
                <img src={item.img} alt="" className="avatar-sm" />
                <Link to="/job-details" className="text-body">
                  <h5 className="mt-4 mb-2 font-size-15">{item.title}</h5>
                </Link>
                <p className="mb-0 text-muted">Themesbrand</p>
              </div>

              <div className="d-flex">
                <p className="mb-0 flex-grow-1 text-muted">
                  <i className="bx bx-map text-body"></i> {item.country}
                </p>
                <p className="mb-0 text-muted">
                  <b>{item.vacancy}</b>{" "}
                  {item.vacancy > 1 ? "Donaciones" : "Donacion"}
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default CompanySummary;
