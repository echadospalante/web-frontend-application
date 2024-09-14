import { Fragment } from "react";

import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Col, Row, Table } from "reactstrap";

const QuoteForm = () => {
  return (
    <Fragment>
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <div className="d-flex">
                {/* <img src={"some img"} alt="" className="avatar-sm me-4" /> */}

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate font-size-15">
                    Echadospa'lante Dashboard UI
                  </h5>
                  <p className="text-muted">
                    Separate existence is a myth. For science, music, sport,
                    etc.
                  </p>
                </div>
              </div>

              <h5 className="font-size-15 mt-4">Project Details :</h5>

              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                illum, veritatis ut nisi hic facilis saepe architecto
                exercitationem nam quisquam quaerat. Nihil praesentium dolorem
                accusantium rerum voluptatem facere maiores, magnam esse vero
                soluta nobis distinctio ipsam quidem autem ad voluptas laborum,
                enim assumenda! Maiores iusto excepturi voluptate adipisci?
                Architecto quidem, numquam ipsam doloremque explicabo autem
                rerum inventore vel voluptas amet expedita sunt qui esse
                pariatur, nam, dolore ducimus ipsa? Deleniti totam obcaecati,
                fugit perspiciatis dignissimos facilis sit iure aliquid magni
                suscipit culpa esse amet neque in reprehenderit aspernatur qui
                maxime et distinctio? Quas quos libero, culpa suscipit beatae
                ipsum voluptas?
              </p>

              <div className="text-muted mt-4">
                {["p1", "p2", "p3"]?.map((point, index) => (
                  <p key={index}>
                    <i className="mdi mdi-chevron-right text-primary me-1" />{" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloribus labore, quas nihil consectetur vero aperiam
                    temporibus consequatur cumque reprehenderit dicta?
                  </p>
                ))}
              </div>

              <Row className="task-dates">
                <Col sm="4" xs="6">
                  <div className="mt-4">
                    <h5 className="font-size-14">
                      <i className="uil uil-calendar me-1 text-primary" /> Start
                      Date
                    </h5>
                    <p className="text-muted mb-0">08 Sept, 2019</p>
                  </div>
                </Col>

                <Col sm="4" xs="6">
                  <div className="mt-4">
                    <h5 className="font-size-14">
                      <i className="uil uil-calendar-check me-1 text-primary" />{" "}
                      Due Date
                    </h5>
                    <p className="text-muted mb-0">12 Oct, 2019</p>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={4}>
          <Card>
            <CardBody>
              <h5 className="fw-semibold">Overview</h5>

              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="col">Job Title</th>
                      <td scope="col">Magento Developer</td>
                    </tr>
                    <tr>
                      <th scope="row">Experience:</th>
                      <td>0-2 Years</td>
                    </tr>
                    <tr>
                      <th scope="row">Vacancy</th>
                      <td>12</td>
                    </tr>
                    <tr>
                      <th scope="row">Job Type</th>
                      <td>
                        <span className="badge badge-soft-success">
                          Full Time
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Status</th>
                      <td>
                        <span className="badge badge-soft-info">New</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Posted Date</th>
                      <td>25 June, 2022</td>
                    </tr>
                    <tr>
                      <th scope="row">Close Date</th>
                      <td>13 April, 2022</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="hstack gap-2">
                <button className="btn btn-soft-primary w-100">
                  Apply Now
                </button>
                <button className="btn btn-soft-danger w-100">
                  Contact Us
                </button>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xl={4}>
          <Card>
            <CardBody>
              <div className="text-center">
                <img src={""} alt="" height="50" className="mx-auto d-block" />
                <h5 className="mt-3 mb-1">Themesbrand</h5>
                <p className="text-muted mb-0">Since July 2017</p>
              </div>

              <ul className="list-unstyled mt-4">
                <li>
                  <div className="d-flex">
                    <i className="uil uil-phone text-primary fs-4"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Phone</h6>
                      <p className="text-muted fs-14 mb-0">+589 560 56555</p>
                    </div>
                  </div>
                </li>
                <li className="mt-3">
                  <div className="d-flex">
                    <i className="uil uil-mail-send text-primary fs-4"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Email</h6>
                      <p className="text-muted fs-14 mb-0">
                        themesbrand@gmail.com
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-3">
                  <div className="d-flex">
                    <i className="uil uil-globe text-primary fs-4"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Website</h6>
                      <p className="text-muted fs-14 text-break mb-0">
                        www.themesbrand.com
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-3">
                  <div className="d-flex">
                    <i className="uil uil-map text-primary fs-4"></i>
                    <div className="ms-3">
                      <h6 className="fs-14 mb-2">Location</h6>
                      <p className="text-muted fs-14 mb-0">
                        Oakridge Lane Richardson.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  to="#"
                  className="btn btn-soft-primary btn-hover w-100 rounded"
                >
                  <i className="mdi mdi-eye"></i> View Profile
                </Link>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg="4">
          <Card>
            <CardBody>
              <CardTitle className="mb-4">Attached Files</CardTitle>
              <div className="table-responsive">
                <Table className="table-nowrap align-middle table-hover mb-0">
                  <tbody>
                    {[
                      { name: "name1", size: 500000, link: "" },
                      { name: "name2", size: 500000, link: "" },
                      { name: "name3", size: 500000, link: "" },
                      { name: "name4", size: 500000, link: "" },
                    ]?.map((file, i) => (
                      <tr key={"_file_" + i}>
                        <td style={{ width: "45px" }}>
                          <div className="avatar-sm">
                            <span className="avatar-title rounded-circle bg-primary-subtle text-primary font-size-24">
                              <i className="uil uils-file-doc" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <h5 className="font-size-14 mb-1">
                            <Link to="#" className="text-dark">
                              {file.name}
                            </Link>
                          </h5>
                          <small>Size : {file.size}</small>
                        </td>
                        <td>
                          <div className="text-center">
                            <Link to={file.link} className="text-dark">
                              <i className="uil uil-download h3 m-0" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default QuoteForm;
