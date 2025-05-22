import React, { useCallback, useEffect, useRef } from "react";

import MetisMenu from "metismenujs";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

const AdminSidebarContent = () => {
  const { t } = useTranslation();
  const ref = useRef(null);

  const activateParentDropdown = useCallback((item: HTMLAnchorElement) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent!.childNodes[1] as HTMLElement;
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          (parent3.childNodes[0] as HTMLElement).classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              (parent5.childNodes[0] as HTMLElement).classList.add("mm-active"); // a tag
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

      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.length && parent.childNodes[1]
            ? (parent.childNodes[1] as HTMLElement)
            : null;
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show");
        }

        parent.classList.remove("mm-active");
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.remove("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("mm-active"); // li
            (parent3.childNodes[0] as HTMLElement).classList.remove(
              "mm-active"
            );
            const parent4 = parent3.parentElement; // ul
            if (parent4) {
              parent4.classList.remove("mm-show"); // ul
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove("mm-show"); // li
                (parent5.childNodes[0] as HTMLElement).classList.remove(
                  "mm-active"
                ); // a tag
              }
            }
          }
        }
      }
    }
  };

  const activeMenu = useCallback(() => {
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul!.getElementsByTagName("a");
    removeActivation(items);
    const pathname = window.location.pathname;
    for (let i = 0; i < items.length; ++i) {
      if (pathname === items[i].pathname) {
        matchingMenuItem = items[i];
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
        // ref.current!.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  useEffect(() => {
    new MetisMenu("#side-menu");
    activeMenu();
  }, [activeMenu]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    activeMenu();
  }, [activeMenu]);

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <Link to="/administracion/general">
              <li className="menu-title">General</li>
            </Link>

            <li>
              <Link to="/administracion/general/usuarios">
                <i className="mdi mdi-account-group-outline"></i>
                <span>{t("Users")}</span>
              </Link>
            </li>

            <li>
              <Link to="/administracion/general/emprendimientos">
                <i className="bx bx-bar-chart-square"></i>
                <span>Emprendimientos</span>
              </Link>
            </li>

            <li>
              <Link to="/administracion/general/eventos">
                <i className="bx bx-bar-chart-square"></i>
                <span>Eventos</span>
              </Link>
            </li>

            <li>
              <Link to="/administracion/general/publicaciones">
                <i className="bx bx-bar-chart-square"></i>
                <span>Publicaciones</span>
              </Link>
            </li>

            <hr className="w-75 mx-auto" />

            <Link to="/administracion/general">
              <li className="menu-title">Métricas</li>
            </Link>

            <li>
              <Link to="/administracion/metricas">
                <i className="bx bx-bar-chart-square"></i>
                <span>{t("Application Metrics")}</span>
              </Link>
            </li>

            <li>
              <Link to="/administracion/metricas">
                <i className="bx bx-bar-chart-square"></i>
                <span>{t("Throughput Metrics")}</span>
              </Link>
            </li>

            <li>
              <Link to="/administracion/metricas">
                <i className="bx bx-bar-chart-square"></i>
                <span>{t("Availability Metrics")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

export default AdminSidebarContent;
