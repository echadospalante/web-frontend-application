import React, { useCallback, useEffect, useRef } from 'react';

import MetisMenu from 'metismenujs';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

const UserSidebarContent = () => {
  const { t } = useTranslation();

  const ref = useRef(null);

  const activateParentDropdown = useCallback((item: HTMLAnchorElement) => {
    item.classList.add('active');
    const parent = item.parentElement;
    const parent2El = parent!.childNodes[1] as HTMLElement;
    if (parent2El && parent2El.classList.contains('metismenu')) {
      parent2El.classList.add('mm-show');
    }

    if (parent) {
      parent.classList.add('mm-active');
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add('mm-show');

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add('mm-active');
          (parent3.childNodes[0] as HTMLElement).classList.add('mm-active'); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add('mm-show');
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add('mm-show');
              (parent5.childNodes[0] as HTMLElement).classList.add('mm-active');
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  const removeActivation = (items: HTMLCollectionOf<HTMLAnchorElement>) => {
    for (let i = 0; i < items.length; ++i) {
      const item = items[i];
      const parent = items[i].parentElement;

      if (item && item.classList.contains('active')) {
        item.classList.remove('active');
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.length && parent.childNodes[1]
            ? (parent.childNodes[1] as HTMLElement)
            : null;
        if (parent2El && parent2El.classList.contains('metismenu')) {
          parent2El.classList.remove('mm-show');
        }

        parent.classList.remove('mm-active');
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.remove('mm-show');

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove('mm-active');
            (parent3.childNodes[0] as HTMLElement).classList.remove(
              'mm-active',
            );
            const parent4 = parent3.parentElement;
            if (parent4) {
              parent4.classList.remove('mm-show');
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove('mm-show');
                (parent5.childNodes[0] as HTMLElement).classList.remove(
                  'mm-active',
                );
              }
            }
          }
        }
      }
    }
  };

  const activeMenu = useCallback(() => {
    let matchingMenuItem = null;
    
    const menuContainers = document.querySelectorAll('.metismenu');
    const allItems: HTMLAnchorElement[] = [];

    
    menuContainers.forEach((container) => {
      const items = container.getElementsByTagName('a');
      for (let i = 0; i < items.length; i++) {
        allItems.push(items[i] as HTMLAnchorElement);
      }
    });

    removeActivation(allItems as any);
    const pathname = window.location.pathname;

    for (let i = 0; i < allItems.length; ++i) {
      if (pathname === allItems[i].pathname) {
        matchingMenuItem = allItems[i];
        break;
      }
    }

    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [activateParentDropdown]);

  function scrollElement(item: HTMLAnchorElement) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
      }
    }
  }

  useEffect(() => {
    const menuContainers = document.querySelectorAll('.metismenu');
    menuContainers.forEach((container, index) => {
      if (container.id) {
        new MetisMenu(`#${container.id}`);
      }
    });
    activeMenu();
  }, [activeMenu]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    activeMenu();
  }, [activeMenu]);

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="principal-menu">
            <Link to="/principal">
              <li className="menu-title">Principal</li>
            </Link>

            <li>
              <Link to="/principal/emprendimientos">
                <i className="bx bx-rocket"></i>
                <span>{t('Ventures')}</span>
              </Link>
            </li>

            <li>
              <Link to="/principal/emprendimientos/publicaciones">
                <i className="bx bx-news"></i>
                <span>{t('Publications')}</span>
              </Link>
            </li>

            <li>
              <Link to="/principal/emprendimientos/eventos">
                <i className="bx bx-calendar"></i>
                <span>{t('Events')}</span>
              </Link>
            </li>
          </ul>

          <ul className="metismenu list-unstyled" id="preferences-menu">
            <li className="menu-title">Preferencias</li>

            <li>
              <Link to="/principal/preferencias/alertas-notificaciones">
                <i className="bx bx-bell"></i>
                <span>{t('Alerts And Notifications')}</span>
              </Link>
            </li>
          </ul>

          <ul className="metismenu list-unstyled" id="account-menu">
            <li className="menu-title">{t('Your Account')}</li>

            <li>
              <Link to="/principal/cuenta/perfil">
                <i className="bx bx-id-card"></i>
                <span>{t('Profile')}</span>
              </Link>
            </li>

            <li>
              <Link to="/principal/cuenta/suscripciones">
                <i className="mdi mdi-account-group-outline"></i>
                <span>{t('My Subscriptions')}</span>
              </Link>
            </li>

            <li>
              <Link to="/principal/cuenta/emprendimientos">
                <i className="bx bx-rocket"></i>
                <span>{t('My Ventures')}</span>
              </Link>
            </li>

            <li>
              <Link to="/principal/cuenta/donaciones">
                <i className="mdi mdi-gift-outline"></i>
                <span>{t('My Donations')}</span>
              </Link>
            </li>

            <li>
              <Link to="/principal/cuenta/patrocinios">
                <i className="bx bx-heart"></i>
                <span>{t('My Sponsorships')}</span>
              </Link>
            </li>
          </ul>

          <ul className="metismenu list-unstyled" id="help-menu">
            <li className="menu-title">Ayuda</li>

            <li>
              <Link to="/principal/soporte" target="_blank">
                <i className="bx bx-support"></i>
                <span>{t('Support')}</span>
              </Link>
            </li>

            <li>
              <Link to="/principal/privacidad-y-tratamiento-datos">
                <i className="bx bx-check-shield"></i>
                <span>{t('Terms And Conditions')}</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

export default UserSidebarContent;
