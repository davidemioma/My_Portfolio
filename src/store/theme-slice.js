import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "dark_mode",
    modalOpen: false,
  },
  reducers: {
    toggleTheme(state) {
      if (state.theme === "dark_mode") {
        state.theme = "light_mode";
      } else {
        state.theme = "dark_mode";
      }
    },
    openModal(state) {
      state.modalOpen = true;
    },
    closeModal(state) {
      state.modalOpen = false;
    },
  },
});

export default ThemeSlice;
