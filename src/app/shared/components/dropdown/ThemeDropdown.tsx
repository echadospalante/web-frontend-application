import { useEffect, useState } from 'react';
import * as DarkReader from 'darkreader';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

const ThemeDropdown = () => {
  // Declare a new state variable, which we'll call "menu"
  const [selectedTheme, setSelectedTheme] = useState('');
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    // Obtener el tema guardado o usar 'light' por defecto
    const currentTheme = localStorage.getItem('APP_THEME') || 'light';
    setSelectedTheme(currentTheme);

    // Aplicar el tema al cargar la página
    applyTheme(currentTheme);
  }, []);

  const applyTheme = (theme: string) => {
    if (theme === 'dark') {
      // Habilitar dark mode con configuración personalizada
      DarkReader.enable({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    } else {
      // Deshabilitar dark mode
      DarkReader.disable();
    }
  };

  const handleToggleTheme = (theme: string) => {
    localStorage.setItem('APP_THEME', theme);
    setSelectedTheme(theme);
    applyTheme(theme);
  };

  const toggle = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block">
        <DropdownToggle className="btn header-item " tag="button">
          <i className="mdi mdi-theme-light-dark"></i>
        </DropdownToggle>
        <DropdownMenu className="language-switch dropdown-menu-end">
          {[
            {
              label: 'Claro',
              icon: 'mdi mdi-white-balance-sunny',
              value: 'light',
              color: 'text-warning',
            },
            {
              label: 'Oscuro',
              icon: 'mdi mdi-weather-night',
              value: 'dark',
              color: 'text-secondary',
            },
          ].map((theme) => (
            <DropdownItem
              key={theme.value}
              onClick={() => handleToggleTheme(theme.value)}
              className={`notify-item d-flex align-items-center justify-content-start ${
                selectedTheme === theme.value ? 'active' : 'none'
              }`}
            >
              <i className={theme.icon + ` me-1 fs-4 ${theme.color}`}></i>
              <span className="align-middle text-muted">
                Tema {theme.label}
              </span>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default ThemeDropdown;
