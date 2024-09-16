import { Fragment } from "react";

import { Spinner } from "reactstrap";

const AppSpinner = () => {
  return (
    <Fragment>
      <Spinner color="primary" className="position-absolute top-50 start-50" />
    </Fragment>
  );
};

export default AppSpinner;
