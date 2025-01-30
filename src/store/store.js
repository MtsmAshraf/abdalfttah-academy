import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import showSideNavReducer from "./showNavSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    showSideNav: showSideNavReducer,
  },
});
