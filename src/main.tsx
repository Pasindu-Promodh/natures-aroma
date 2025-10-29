import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { HashRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Green for nature theme
      dark: "#388E3C",
      light: "#8BC34A",
      contrastText: "#000000ff",
    },
    secondary: {
      main: "#ff863f",
      dark: "",
      light: "",
      contrastText: "",
    },
    background: {
      default: "#F1F8E9",
    },

  },
  typography: {
    // fontFamily: 'Roboto, sans-serif',
    fontFamily: "'Lato', sans-serif",
    h1: { fontFamily: "'Playfair Display', serif" },
    h2: { fontFamily: "'Playfair Display', serif" },
    h3: { fontFamily: "'Playfair Display', serif" },
    h4: { fontFamily: "'Playfair Display', serif" },
    h5: { fontFamily: "'Playfair Display', serif" },
    h6: { fontFamily: "'Playfair Display', serif" },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);