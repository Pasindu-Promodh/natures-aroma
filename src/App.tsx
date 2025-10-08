import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Products from './pages/Products.tsx';
import Contact from './pages/Contact.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import { Container } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  key="home"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/products"
              element={
                <motion.div
                  key="products"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Products />
                </motion.div>
              }
            />
            <Route
              path="/products/:id"
              element={
                <motion.div
                  key="product-detail"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProductDetail />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </Container>
    </>
  );
}

export default App;