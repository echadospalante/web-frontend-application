import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import {
  changeLayoutMode,
  changeLayoutWidth,
  changeTopBarTheme,
  selectLayout,
  toggleRightSidebar,
} from "../../../config/redux/reducers/shared/layout.reducer";
import { useAppDispatch } from "../../../config/redux/store/store.config";
import Footer from "../footer/HorizontalFooter";
import HorizontalHeader from "../header/HorizontalHeader";
import RightSidebar from "../rightbar/RightSidebar";
import Sidebar from "../sidebar/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const HorizontalLayout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();

  const {
    topBarTheme,
    layoutModeType,
    layoutWidth,
    isPreloader,
    // showRightSidebar,
  } = useSelector(selectLayout);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /*
  layout settings
  */
  useEffect(() => {
    // dispatch(changeLayout());

    //hides right sidebar on body click
    const hideRightBar = (event: MouseEvent) => {
      const rightBar = document.getElementById("right-bar");
      //if clicked in inside right bar, then do nothing
      if (rightBar && rightBar.contains(event.target as Node)) {
        return;
      } else {
        //if clicked in outside of rightbar then fire action for hide rightbar
        dispatch(toggleRightSidebar());
      }
    };

    //init body click event fot toggle rightbar
    document.body.addEventListener("click", hideRightBar, true);

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
    if (topBarTheme) {
      dispatch(changeTopBarTheme(topBarTheme));
    }
  }, [dispatch, topBarTheme]);

  useEffect(() => {
    if (layoutModeType) {
      dispatch(changeLayoutMode(layoutModeType));
    }
  }, [layoutModeType, dispatch]);

  useEffect(() => {
    if (layoutWidth) {
      dispatch(changeLayoutWidth(layoutWidth));
    }
  }, [dispatch, layoutWidth]);

  // const [isMenuOpened, setIsMenuOpened] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const openMenu = () => {
  //   setIsMenuOpened(!isMenuOpened);
  // };

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
        <HorizontalHeader
        // toggleLeftmenu={function (arg0: boolean): void {}}
        // showRightSidebarAction={function (arg0: boolean): void {}}
        // leftMenu={false}
        // showRightSidebar={false}
        />
        {/* <Navbar menuOpen={isMenuOpened} /> */}
        <Sidebar />

        <div className="main-content">{children}</div>
        <Footer />
      </div>
      {/* {showRightSidebar ? <RightSidebar /> : null} */}

      <RightSidebar />
    </React.Fragment>
  );
};

export default HorizontalLayout;
