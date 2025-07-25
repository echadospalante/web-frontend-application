import { useEffect, useState } from 'react';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

import i18n from '../../../config/locales/i18n';
import languages from '../../../config/locales/languages';

const LanguageDropdown = () => {
  // Declare a new state variable, which we'll call "menu"
  const [selectedLang, setSelectedLang] = useState('');
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const currentLanguage = localStorage.getItem('I18N_LANGUAGE') || 'es';
    setSelectedLang(currentLanguage);
  }, []);

  const changeLanguageAction = (lang: string) => {
    //set language as i18n
    i18n.changeLanguage(lang);
    localStorage.setItem('I18N_LANGUAGE', lang);
    setSelectedLang(lang);
  };

  const toggle = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Dropdown isOpen={menu} toggle={toggle} className="d-inline-block">
        <DropdownToggle className="btn header-item " tag="button">
          <img
            // src={get(languages, `${selectedLang}.flag`)}
            src={languages[selectedLang as keyof typeof languages]?.flag}
            alt="echadospalante Admin"
            height="16"
            className="me-1"
          />
        </DropdownToggle>
        <DropdownMenu className="language-switch dropdown-menu-end">
          {Object.keys(languages).map((key) => (
            <DropdownItem
              key={key}
              onClick={() => changeLanguageAction(key)}
              className={`notify-item ${
                selectedLang === key ? 'active' : 'none'
              }`}
            >
              <img
                src={languages[key as keyof typeof languages]?.flag}
                alt="echadospalante Admin"
                className="me-1"
                height="12"
              />
              <span className="align-middle">
                {languages[key as keyof typeof languages]?.label}
              </span>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default LanguageDropdown;
