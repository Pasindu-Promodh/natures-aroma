import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.ts';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green for nature theme
    },
    secondary: {
      main: '#8BC34A',
    },
    background: {
      default: '#F1F8E9',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename="/nature-products">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>,
);