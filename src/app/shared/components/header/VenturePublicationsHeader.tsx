import React from 'react';

import { Button, Card } from 'reactstrap';
import useFetchVentureDetail from '../../../modules/principal/ventures/hooks/useFetchVentureDetail';
import AppLoading from '../loader/AppLoading';
import VentureCard from '../card/VentureCard';
import AlertWithReload from '../alert/AlertWithReload';
import useFetchVentureBySlug from '../../../modules/principal/ventures/hooks/useFetchVentureBySlug';

export interface VenturePublicationsHeaderProps {
  ventureSlug: string;
  onReload: () => void;
}

const VenturePublicationsHeader: React.FC<VenturePublicationsHeaderProps> = ({
  ventureSlug,
  onReload,
}) => {
  const { data, isLoading, isError, retryFetch } = useFetchVentureBySlug();

  const handleReload = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.preventDefault();
    onReload();
    if (isError) {
      retryFetch();
    }
  };

  if (isLoading) {
    return (
      <Card className="p-4 w-100">
        <div className="d-flex justify-content-center align-items-center">
          <AppLoading iconPath={''} message="Cargando publicaciones..." />
        </div>
      </Card>
    );
  }

  if (isError || !data) {
    return (
      <AlertWithReload
        message="Error al cargar las publicaciones, intente nuevamente"
        onReload={retryFetch}
      />
    );
  }

  return (
    <Card className="p-1">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-3">
          Feed de Publicaciones del emprendimiento {data.name}
        </h3>
        <Button onClick={handleReload} color="success" className="fs-5">
          <i className="mdi mdi-refresh"></i>
        </Button>
      </div>
      {/* <div>
        <VentureCard showFooter={false} venture={data} ownerButtons={false} />
      </div> */}
    </Card>
  );
};

export default VenturePublicationsHeader;
