import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./theme-slice";

const store = configureStore({
  reducer: { theme: ThemeSlice.reducer },
});

export const { toggleTheme, openModal, closeModal } = ThemeSlice.actions;

export default store;
