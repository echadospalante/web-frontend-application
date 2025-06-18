import React from "react";

import { Button, Card } from "reactstrap";

export interface GeneralPublicationsHeaderProps {
  onReload: () => void;
}

const GeneralPublicationsHeader: React.FC<GeneralPublicationsHeaderProps> = ({onReload}) => {

  return (
    <Card className="p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3 style={{ padding: 0, margin: 0 }}>
          Feed de Publicaciones
        </h3>

        <Button
        onClick={onReload}
        color="primary" className="fs-5">
          <i className="mdi mdi-refresh"></i>
        </Button>
      </div>
    </Card>
  );
}

export default GeneralPublicationsHeader;