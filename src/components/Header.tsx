import { useTranslation } from "react-i18next";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import logo from "../../public/media/logo2.jpg";

const Header = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const location = useLocation();

  const navItems = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.products"), to: "/products" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) =>
    setLanguageAnchorEl(event.currentTarget);
  const handleLanguageClose = () => setLanguageAnchorEl(null);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleLanguageClose();
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton component={RouterLink} to={item.to}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    color:
                      location.pathname === item.to
                        ? "primary.main"
                        : "inherit",
                    fontWeight:
                      location.pathname === item.to ? "bold" : "normal",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar position="static">
        <Toolbar sx={{ position: "relative", justifyContent: "space-between" }}>
          {isMobile ? (
            <>
              {/* Mobile: Hamburger left */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              {/* Mobile: Logo centered */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <RouterLink to="/">
                  <img
                    src={logo}
                    alt="Logo"
                    style={{ height: "40px" }}
                  />
                </RouterLink>
              </Box>

              {/* Mobile: Language icon right */}
              <IconButton color="inherit" onClick={handleLanguageClick}>
                <LanguageIcon />
              </IconButton>
            </>
          ) : (
            <>

              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <img
                  src={logo}
                  alt="Nature Products Logo"
                  style={{ height: "40px", marginRight: "8px" }}
                />
                <Typography variant="h6" component="div">
                  Nature's Aroma
                </Typography>
              </Box>

              {/* Desktop: Nav buttons centered */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: 2,
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.to}
                    color="inherit"
                    component={RouterLink}
                    to={item.to}
                    sx={{
                      fontWeight:
                        location.pathname === item.to ? "bold" : "normal",
                      color: location.pathname === item.to ? "gold" : "inherit",
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Desktop: Language button with text right */}
              <Box>
                <Button
                  color="inherit"
                  onClick={handleLanguageClick}
                  startIcon={<LanguageIcon />}
                >
                  {i18n.language.toUpperCase()}
                </Button>
              </Box>
            </>
          )}

          {/* Language menu (common) */}
          <Menu
            anchorEl={languageAnchorEl}
            open={Boolean(languageAnchorEl)}
            onClose={handleLanguageClose}
          >
            <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage("de")}>Deutsch</MenuItem>
            <MenuItem onClick={() => changeLanguage("ja")}>日本語</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobile && drawerOpen && (
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
            >
              {drawerContent}
            </motion.div>
          </Drawer>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
