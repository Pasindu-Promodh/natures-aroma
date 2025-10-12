// import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Products from "./pages/Products.tsx";
import Contact from "./pages/Contact.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import { Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop.tsx";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <AnimatePresence mode="wait">
          <ScrollToTop />
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


// import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header.tsx";
// import Home from "./pages/Home.tsx";
// import About from "./pages/About.tsx";
// import Products from "./pages/Products.tsx";
// import Contact from "./pages/Contact.tsx";
// import ProductDetail from "./pages/ProductDetail.tsx";
// import { Container } from "@mui/material";
// import { AnimatePresence, motion } from "framer-motion";
// import ScrollToTop from "./components/ScrollToTop.tsx";
// import { I18nextProvider } from "react-i18next";
// import i18n from "./i18n.ts";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

// function App() {
//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: "#4CAF50", // Green for nature theme
//       },
//       secondary: {
//         main: "#8BC34A",
//       },
//       background: {
//         default: "#F1F8E9",
//       },
//     },
//     typography: {
//       // fontFamily: 'Roboto, sans-serif',
//       fontFamily: "'Lato', sans-serif",
//       h1: { fontFamily: "'Playfair Display', serif" },
//       h2: { fontFamily: "'Playfair Display', serif" },
//       h3: { fontFamily: "'Playfair Display', serif" },
//       h4: { fontFamily: "'Playfair Display', serif" },
//       h5: { fontFamily: "'Playfair Display', serif" },
//       h6: { fontFamily: "'Playfair Display', serif" },
//     },
//   });

//   return (
//       <Router>
//         <I18nextProvider i18n={i18n}>
//           <ThemeProvider theme={theme}>
//             <Header />
//             <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//               <ScrollToTop />
//               <Routes>
//                 <Route
//                   path="/"
//                   element={
//                     <motion.div
//                       key="home"
//                       initial={{ opacity: 0, y: 50 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -50 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <Home />
//                     </motion.div>
//                   }
//                 />
//                 <Route
//                   path="/about"
//                   element={
//                     <motion.div
//                       key="about"
//                       initial={{ opacity: 0, y: 50 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -50 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <About />
//                     </motion.div>
//                   }
//                 />
//                 <Route
//                   path="/products"
//                   element={
//                     <motion.div
//                       key="products"
//                       initial={{ opacity: 0, y: 50 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -50 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <Products />
//                     </motion.div>
//                   }
//                 />
//                 <Route
//                   path="/products/:id"
//                   element={
//                     <motion.div
//                       key="product-detail"
//                       initial={{ opacity: 0, y: 50 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -50 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <ProductDetail />
//                     </motion.div>
//                   }
//                 />
//                 <Route
//                   path="/contact"
//                   element={
//                     <motion.div
//                       key="contact"
//                       initial={{ opacity: 0, y: 50 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -50 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <Contact />
//                     </motion.div>
//                   }
//                 />
//               </Routes>
//             </Container>
//           </ThemeProvider>
//         </I18nextProvider>
//       </Router>
//   );
// }

// export default App;
