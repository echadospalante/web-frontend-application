import React from "react";

interface AppLoadingProps {
  message?: string;
  iconPath: string;
}

const AppLoading: React.FC<AppLoadingProps> = ({
  message = "Loading...",
  iconPath,
}: AppLoadingProps) => {
  return (
    <React.Fragment>
      {message}
      {/* <img width={100} src={iconPath} alt="loading-icon" /> */}
      <i className={`bx bx-loader bx-spin`}></i>
    </React.Fragment>
  );
};

export default AppLoading;
