import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // showSideNav: window.localStorage.getItem("abdalfttah-academy-theme") ? window.localStorage.getItem("abdalfttah-academy-theme") : "dark",
  showSideNav: false,
};

const showSideNavSlice = createSlice({
  name: "showSideNav",
  initialState,
  reducers: {
    toggleShowSideNav: (state) => {
      state.showSideNav = state.showSideNav === true ? false : true;
    },
    setShowSideNav: (state, action) => {
      state.showSideNav = action.payload;
    },
  },
});

export const { toggleShowSideNav, setShowSideNav } = showSideNavSlice.actions;
export default showSideNavSlice.reducer;
