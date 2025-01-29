import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // theme: window.localStorage.getItem("abdalfttah-academy-theme") ? window.localStorage.getItem("abdalfttah-academy-theme") : "dark",
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      window.localStorage.setItem("abdalfttah-academy-theme", state.theme)
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
