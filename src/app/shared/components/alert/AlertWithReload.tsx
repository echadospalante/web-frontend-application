import { Button, Col, Row } from 'reactstrap';

type AlertWithReloadProps = {
  message: string;
  onReload: () => void;
};

const AlertWithReload = ({ message, onReload }: AlertWithReloadProps) => {
  
  const handleClickOnReload = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault();
    event.stopPropagation();
    onReload();
  };

  return (
    <Row className="alert alert-danger text-center">
      <Col
        lg={9}
        md={8}
        sm={12}
        role="alert"
        className="d-flex align-items-center"
      >
        {message}
      </Col>
      <Col lg={3} md={4} sm={12}>
        <Button
          type="button"
          onClick={handleClickOnReload}
          className="btn btn-light mx-2 float-end"
        >
          <i className="mdi mdi-refresh"></i>
        </Button>
      </Col>
    </Row>
  );
};

export default AlertWithReload;
