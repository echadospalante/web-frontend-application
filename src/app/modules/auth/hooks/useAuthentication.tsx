import React, { useEffect } from "react";

import { Role, UserRole } from "../domain/Role";

const useAuthentication = () => {
  const [activeRole, setActiveRole] = React.useState<UserRole>();
  const [roles] = React.useState<UserRole[]>([
    { label: "Administrador", value: Role.ROLE_ADMIN },
    { label: "Usuario", value: Role.ROLE_USER },
    { label: "Moderador", value: Role.ROLE_MODERATOR },
  ]);

  useEffect(() => {
    if (window.location.pathname.includes("/administracion")) {
      setActiveRole({
        label: "Administrador",
        value: Role.ROLE_ADMIN,
      });
    } else if (window.location.pathname.includes("/principal")) {
      setActiveRole({
        label: "Usuario",
        value: Role.ROLE_USER,
      });
    } else if (window.location.pathname.includes("/moderacion")) {
      setActiveRole({
        label: "Moderador",
        value: Role.ROLE_MODERATOR,
      });
    }
  }, []);

  return { activeRole, roles, setActiveRole };
};

export default useAuthentication;
