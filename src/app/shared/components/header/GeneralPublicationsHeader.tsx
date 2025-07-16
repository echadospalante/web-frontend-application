import React from "react";

import { Button, Card } from "reactstrap";

export interface GeneralPublicationsHeaderProps {
  onReload: () => void;
}

const GeneralPublicationsHeader: React.FC<GeneralPublicationsHeaderProps> = ({onReload}) => {

  return (
    <Card className="p-2">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="py-0 m-0 px-2">Feed de Publicaciones</h3>

        <Button onClick={onReload} color="success" className="fs-5">
          <i className="mdi mdi-refresh"></i>
        </Button>
      </div>
    </Card>
  );
}

export default GeneralPublicationsHeader;