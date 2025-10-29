import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Products from "./pages/Products.tsx";
import Contact from "./pages/Contact.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import { Container } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import ScrollResetAndAnimate from "./components/ScrollResetAndAnimate.tsx";
import Sectors from "./pages/Sectors.tsx";
import Blog from "./pages/Blog.tsx";
import Career from "./pages/Career.tsx";

// Disable browser scroll restoration
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <ScrollResetAndAnimate motionKey="home">
                  <Home />
                </ScrollResetAndAnimate>
              }
            />
            <Route
              path="/products"
              element={
                <ScrollResetAndAnimate motionKey="products">
                  <Products />
                </ScrollResetAndAnimate>
              }
            />
            <Route
              path="/products/:id"
              element={
                <ScrollResetAndAnimate motionKey="product-detail">
                  <ProductDetail />
                </ScrollResetAndAnimate>
              }
            />
            <Route
              path="/sectors"
              element={
                <ScrollResetAndAnimate motionKey="sectors">
                  <Sectors />
                </ScrollResetAndAnimate>
              }
            />
            <Route
              path="/blog"
              element={
                <ScrollResetAndAnimate motionKey="blog">
                  <Blog />
                </ScrollResetAndAnimate>
              }
            />
            <Route
              path="/career"
              element={
                <ScrollResetAndAnimate motionKey="career">
                  <Career />
                </ScrollResetAndAnimate>
              }
            />
            <Route
              path="/about"
              element={
                <ScrollResetAndAnimate motionKey="about">
                  <About />
                </ScrollResetAndAnimate>
              }
            />
            <Route
              path="/contact"
              element={
                <ScrollResetAndAnimate motionKey="contact">
                  <Contact />
                </ScrollResetAndAnimate>
              }
            />
          </Routes>
        </AnimatePresence>
      </Container>
    </>
  );
}

export default App;
