import React from 'react';

import { Spinner } from 'reactstrap';

interface AppLoadingProps {
  message?: string;
  iconPath: string;
}

const AppLoading: React.FC<AppLoadingProps> = ({
  message = 'Loading...',
}: AppLoadingProps) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <span className="mb-1">{message}</span>
      {/* <img width={100} src={iconPath} alt="loading-icon" /> */}
      {/* <i className="bx bx-loader bx-spin fs-4"></i> */}
      <Spinner color="primary" />
    </div>
  );
};

export default AppLoading;
