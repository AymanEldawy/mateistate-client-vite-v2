import {
  changeLayoutAction,
  // changeLayoutModeAction,
  changeSidebarThemeAction,
  changeLayoutWidthAction,
  changeLayoutPositionAction,
  changeTopbarThemeAction,
  changeLeftsidebarSizeTypeAction,
  changeLeftsidebarViewTypeAction,
  changeSidebarImageTypeAction,
  changePreLoaderAction,
  changeSidebarVisibilityAction,
} from "../slices/generalLayoutSlice";

const changeHTMLAttribute = (attribute, value) => {
  if (document.documentElement)
    document.documentElement.setAttribute(attribute, value);
  return true;
};

export const changeLayout = (layout) => async (dispatch) => {
  if (layout === "twocolumn") {
    document.documentElement.removeAttribute("data-layout-width");
  } else if (layout === "horizontal") {
    document.documentElement.removeAttribute("data-sidebar-size");
  } else if (layout === "semibox") {
    changeHTMLAttribute("data-layout-width", "fluid");
    changeHTMLAttribute("data-layout-style", "default");
  }
  changeHTMLAttribute("data-layout", layout);
  dispatch(changeLayoutAction(layout));
};

// export const changeLayoutMode = (layoutMode) => async (dispatch) => {
//   changeHTMLAttribute("data-bs-theme", layoutMode);
//   dispatch(changeLayoutModeAction(layoutMode));
// };

export const changeSidebarTheme = (theme) => async (dispatch) => {
  changeHTMLAttribute("data-sidebar", theme);
  dispatch(changeSidebarThemeAction(theme));
};

export const changeLayoutWidth = (layoutWidth) => async (dispatch) => {
  if (layoutWidth === "lg") {
    changeHTMLAttribute("data-layout-width", "fluid");
  } else {
    changeHTMLAttribute("data-layout-width", "boxed");
  }
  dispatch(changeLayoutWidthAction(layoutWidth));
};

export const changeLayoutPosition = (layoutposition) => async (dispatch) => {
  changeHTMLAttribute("data-layout-position", layoutposition);
  dispatch(changeLayoutPositionAction(layoutposition));
};

export const changeTopbarTheme = (topbarTheme) => async (dispatch) => {
  changeHTMLAttribute("data-topbar", topbarTheme);
  dispatch(changeTopbarThemeAction(topbarTheme));
};

export const changeSidebarImageType =
  (leftsidebarImagetype) => async (dispatch) => {
    changeHTMLAttribute("data-sidebar-image", leftsidebarImagetype);
    dispatch(changeSidebarImageTypeAction(leftsidebarImagetype));
  };

export const changePreLoader = (preloaderTypes) => async (dispatch) => {
  changeHTMLAttribute("data-preloader", preloaderTypes);
  dispatch(changePreLoaderAction(preloaderTypes));
};

export const changeLeftsidebarSizeType =
  (leftsidebarSizetype) => async (dispatch) => {
    switch (leftsidebarSizetype) {
      case "lg":
        changeHTMLAttribute("data-sidebar-size", "lg");
        break;
      case "md":
        changeHTMLAttribute("data-sidebar-size", "md");
        break;
      case "sm":
        changeHTMLAttribute("data-sidebar-size", "sm");
        break;
      case "sm-hover":
        changeHTMLAttribute("data-sidebar-size", "sm-hover");
        break;
      default:
        changeHTMLAttribute("data-sidebar-size", "lg");
    }
    dispatch(changeLeftsidebarSizeTypeAction(leftsidebarSizetype));
  };

export const changeLeftsidebarViewType =
  (leftsidebarViewtype) => async (dispatch) => {
    changeHTMLAttribute("data-layout-style", leftsidebarViewtype);
    dispatch(changeLeftsidebarViewTypeAction(leftsidebarViewtype));
  };

export const changeSidebarVisibility =
  (sidebarVisibilitytype) => async (dispatch) => {
    changeHTMLAttribute("data-sidebar-visibility", sidebarVisibilitytype);
    dispatch(changeSidebarVisibilityAction(sidebarVisibilitytype));
  };
