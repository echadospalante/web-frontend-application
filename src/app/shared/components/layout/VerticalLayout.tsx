import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import {
  changeLayout,
  changeLayoutMode,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  changeTopBarTheme,
  selectLayout,
  toggleRightSidebar,
} from "../../../config/redux/reducers/shared/layout.reducer";
import { useAppDispatch } from "../../../config/redux/store/store.config";
import RightSidebar from "../rightbar/RightSidebar";
import Footer from "../footer/VerticalFooter";
import Header from "../header/VerticalHeader";
import Sidebar from "../sidebar/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const VerticalLayout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();

  const {
    isPreloader,
    leftSideBarThemeImage,
    layoutWidth,
    leftSideBarType,
    topBarTheme,
    // showRightSidebar,
    leftSideBarTheme,
    layoutModeType,
  } = useSelector(selectLayout);

  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // const toggleMenuCallback = () => {
  //   if (leftSideBarType === "default") {
  //     dispatch(changeSidebarType("condensed"));
  //   } else if (leftSideBarType === "condensed") {
  //     dispatch(changeSidebarType("default"));
  //   }
  // };

  /*
  layout  settings
  */

  useEffect(() => {
    const hideRightbar = (event: MouseEvent) => {
      const rightbar = document.getElementById("right-bar");
      //if clicked in inside right bar, then do nothing
      if (rightbar && rightbar.contains(event.target as Node)) {
        return;
      } else {
        dispatch(toggleRightSidebar());
      }
    };

    //init body click event fot toggle rightbar
    document.body.addEventListener("click", hideRightbar, true);

    if (isPreloader === true) {
      document.getElementById("preloader")!.style.display = "block";
      document.getElementById("status")!.style.display = "block";

      setTimeout(function () {
        document.getElementById("preloader")!.style.display = "none";
        document.getElementById("status")!.style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader")!.style.display = "none";
      document.getElementById("status")!.style.display = "none";
    }
  }, [dispatch, isPreloader]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(changeLayout());
  }, [dispatch]);

  useEffect(() => {
    if (leftSideBarTheme) {
      dispatch(changeSidebarTheme(leftSideBarTheme));
    }
  }, [leftSideBarTheme, dispatch]);

  useEffect(() => {
    if (layoutModeType) {
      dispatch(changeLayoutMode(layoutModeType));
    }
  }, [layoutModeType, dispatch]);

  useEffect(() => {
    if (leftSideBarThemeImage) {
      dispatch(changeSidebarThemeImage(leftSideBarThemeImage));
    }
  }, [leftSideBarThemeImage, dispatch]);

  useEffect(() => {
    if (layoutWidth) {
      dispatch(changeLayoutWidth(layoutWidth));
    }
  }, [layoutWidth, dispatch]);

  useEffect(() => {
    if (leftSideBarType) {
      dispatch(changeSidebarType(leftSideBarType));
    }
  }, [leftSideBarType, dispatch]);

  useEffect(() => {
    if (topBarTheme) {
      dispatch(changeTopBarTheme(topBarTheme));
    }
  }, [topBarTheme, dispatch]);

  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
          </div>
        </div>
      </div>

      <div id="layout-wrapper">
        <Header /* toggleMenuCallback={toggleMenuCallback}*/ />
        <Sidebar />
        <div className="main-content">{children}</div>
        <Footer />
      </div>
      {/* {showRightSidebar ? <RightSidebar /> : null} */}
    </React.Fragment>
  );
};

export default VerticalLayout;
