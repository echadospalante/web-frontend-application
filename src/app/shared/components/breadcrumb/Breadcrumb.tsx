import { Link } from "react-router-dom";

import { BreadcrumbItem, Col, Row } from "reactstrap";

type BreadCrumbProps = {
  breadcrumbItem: string;
  title: string;
};

const Breadcrumb = (props: BreadCrumbProps) => {
  return (
    <Row>
      <Col xs="12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-0 font-size-18">{props.breadcrumbItem}</h4>
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <BreadcrumbItem>
                <Link to="#">{props.title}</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.breadcrumbItem}</BreadcrumbItem>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Breadcrumb;
