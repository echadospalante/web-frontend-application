import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../store/store.config";
import {
  LayoutType,
  LayoutModeType,
  LayoutWidthType,
  LeftSideBarThemeType,
  LeftBarThemeImageType,
  LeftSidebarType,
  TopBarThemeType,
} from "../../../../modules/common/domain/layout.interfaces";

export interface LayoutState {
  layoutType: LayoutType;
  layoutModeType: LayoutModeType;
  layoutWidth: LayoutWidthType;
  leftSideBarTheme: LeftSideBarThemeType;
  leftSideBarThemeImage: LeftBarThemeImageType;
  leftSideBarType: LeftSidebarType;
  topBarTheme: TopBarThemeType;
  isPreloader: boolean;
  showRightSidebar: boolean;
  isMobile: boolean;
  showSidebar: boolean;
  leftMenu: boolean;
}

const initialState: LayoutState = {
  layoutType: LayoutType.VERTICAL,
  layoutModeType: LayoutModeType.DARK,
  layoutWidth: LayoutWidthType.FLUID,
  leftSideBarTheme: LeftSideBarThemeType.DARK,
  leftSideBarThemeImage: LeftBarThemeImageType.NONE,
  leftSideBarType: LeftSidebarType.DEFAULT,
  topBarTheme: TopBarThemeType.LIGHT,
  isPreloader: false,
  showRightSidebar: true,
  isMobile: false,
  showSidebar: true,
  leftMenu: false,
};

// Freeze the initial state to prevent accidental changes
Object.freeze(initialState);

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    changeLayout: (state) => {
      state.layoutType =
        state.layoutType === LayoutType.VERTICAL
          ? LayoutType.HORIZONTAL
          : LayoutType.VERTICAL;
    },
    changePreloader: (state) => {
      state.isPreloader = !state.isPreloader;
    },
    changeLayoutMode: (state, action: PayloadAction<LayoutModeType>) => {
      state.layoutModeType = action.payload;
    },
    changeLayoutWidth: (state, action: PayloadAction<LayoutWidthType>) => {
      state.layoutWidth = action.payload;
    },
    changeSidebarTheme: (
      state,
      action: PayloadAction<LeftSideBarThemeType>
    ) => {
      state.leftSideBarTheme = action.payload;
    },
    changeSidebarThemeImage: (
      state,
      action: PayloadAction<LeftBarThemeImageType>
    ) => {
      state.leftSideBarThemeImage = action.payload;
    },
    changeSidebarType: (state, action: PayloadAction<LeftSidebarType>) => {
      state.leftSideBarType = action.payload;
    },
    changeTopBarTheme: (state, action: PayloadAction<TopBarThemeType>) => {
      state.topBarTheme = action.payload;
    },
    toggleRightSidebar: (state) => {
      state.showRightSidebar = !state.showRightSidebar;
    },
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    toggleLeftMenu: (state) => {
      state.leftMenu = !state.leftMenu;
    },
  },
});

export const {
  changeLayout,
  changePreloader,
  changeLayoutMode,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarThemeImage,
  changeSidebarType,
  changeTopBarTheme,
  toggleRightSidebar,
  toggleSidebar,
  toggleLeftMenu,
} = layoutSlice.actions;

export const selectLayout = (state: RootState) => state.layout;

export default layoutSlice.reducer;
