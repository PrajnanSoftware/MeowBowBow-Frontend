import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, AppBar, Toolbar, Button, Typography, Container, IconButton, Box, TextField, Menu, MenuItem, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import AuthModal from "./pages/AuthModal"; // Import Auth Modal
import "./index.css";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./pages/ScrollToTop ";
import { CartProvider } from "./context/CartContext";
import Logo from "./assets/meowbowbow.png"

// Updated theme with earthy tones
const theme = createTheme({
  palette: { 
    primary: { main: "#4CAF50" },  // Earthy green
    secondary: { main: "#8B4513" },  // Brown color for secondary elements
    background: { default: "#F0F4F1" }, // Light tan background
  },
});

const categories = [
  { name: "Tractors", link: "/shop?category=tractors" },
  { name: "Plows", link: "/shop?category=plows" },
  { name: "Irrigation Systems", link: "/shop?category=irrigation" },
  { name: "Fertilizers", link: "/shop?category=fertilizers" },
];

const App = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [authOpen, setAuthOpen] = useState(false); // State for Auth Modal

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleAuthOpen = () => setAuthOpen(true); // Open Auth Modal
  const handleAuthClose = () => setAuthOpen(false); // Close Auth Modal

  return (
    <CartProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <AppBar position="fixed" color="inherit" elevation={1}>
        {/* Top Bar - Desktop Only */}
        <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-between", bgcolor: "#61CE70", px: 1, py: 0, alignItems: "center" }}>
        <Typography variant="body2" sx={{ fontWeight: "bold", color: "red", fontSize: "1.25rem" }}>
   +91 9986636773
</Typography>

          <Box>
            <IconButton sx={{ color: "#ffffff" }}><FacebookIcon /></IconButton>
            <IconButton sx={{ color: "#ffffff" }}><TwitterIcon /></IconButton>
            <IconButton sx={{ color: "#ffffff" }}><InstagramIcon /></IconButton>
          </Box>
        </Box>

        {/* Middle Bar */}
        
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {/* Logo & Name */}
            <Typography variant="h6" component={Link} to="/" sx={{ color: "#149253", textDecoration: "none", fontWeight: "bold", display: "flex", alignItems: "center" }}>
  <img src={Logo} alt="UnG Agros Logo" style={{ width: "80px", height: "auto", marginRight: "8px" }} />
  UnG Agros
</Typography>


            {/* Search Bar (Only on Desktop) */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", border: "1px solid #4CAF50", borderRadius: "5px", px: 1, flex: 1, maxWidth: 400 }}>
              <TextField size="small" variant="standard" placeholder="Search Farming Equipment..." sx={{ border: "none", width: "100%" }} />
              <IconButton sx={{ color: "#4CAF50" }}><SearchIcon /></IconButton>
            </Box>

            {/* Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton color="inherit" component={Link} to="/cart"><ShoppingCartIcon sx={{ color: "#4CAF50" }} /></IconButton>
              <IconButton color="inherit" onClick={handleAuthOpen}><AccountCircleIcon sx={{ color: "#4CAF50" }} /></IconButton> {/* Opens Auth Modal */}
            </Box>
          </Toolbar>
        

        {/* Mobile Header */}
        <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "space-between", alignItems: "center", p: 1, bgcolor: "white" }}>
          {/* Left: Logo & Search */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ border: "1px solid #4CAF50", borderRadius: "5px", px: 1, flex: 1, maxWidth: 200 }}>
              <TextField size="small" variant="standard" placeholder="Search..." sx={{ border: "none", width: "100%" }} />
            </Box>
          </Box>
          {/* Right: Menu, Cart & Login */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button component={Link} to="/shop" sx={{ mx: 1, fontWeight: "bold" }}>Shop</Button>
            <IconButton onClick={handleMenuOpen}><MenuIcon sx={{ color: "#4CAF50" }} /></IconButton>
          </Box>
        </Box>

        {/* Category Section - Desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", bgcolor: "#fff", py: 1, boxShadow: 1 }}>
        <Button component={Link} to="/shop" sx={{ mx: 1, fontWeight: "bold" }}>Shop</Button>
          {categories.map((category) => (
            <Button key={category.name} component={Link} to={`/shop/${category.name}`} sx={{ mx: 1, color: "#4CAF50" }}>{category.name}</Button>
          ))}
        </Box>

        {/* Mobile Menu Dropdown */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {categories.map((category) => (
            <MenuItem key={category.name} component={Link} to={`/shop/${category.name}`} onClick={handleMenuClose}>{category.name}</MenuItem>
          ))}
        </Menu>
        </AppBar>

        {/* Routes */}
        <Container sx={{ mt: 4, maxWidth: "lg",px: { xs: 0, sm: 2 }, pt: { xs: 15, sm: 20 }}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/shop/:category" element={<Shop />} />
          </Routes>
        </Container>

        {/* Footer */}
        <Box sx={{ bgcolor: "#d8f3d6", mt: 4, py: 3 , color: "green"}}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">About Us</Typography>
                <Typography variant="body2">Your trusted source for quality agricultural equipment.</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Customer Service</Typography>
                <Button component={Link} to="/about" sx={{ display: "block", color: "inherit" }}>About</Button>
                <Button component={Link} to="/shop" sx={{ display: "block", color: "inherit" }}>Shop</Button>
                <Button component={Link} to="/cart" sx={{ display: "block", color: "inherit" }}>Cart</Button>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6">Follow Us</Typography>
                <IconButton sx={{ color: "#4CAF50" }}><FacebookIcon /></IconButton>
                <IconButton sx={{ color: "#4CAF50" }}><TwitterIcon /></IconButton>
                <IconButton sx={{ color: "#4CAF50" }}><InstagramIcon /></IconButton>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Copyright Section */}
        <Box sx={{ bgcolor: "#149253", py: 2, textAlign: "center", color: "white" }}>
          <Typography variant="body2">&copy; {new Date().getFullYear()} All Rights Reserved.</Typography>
          <Typography variant="body2">
            Designed & Developed by <a href="https://www.prajnansoftwares.com/aboutus" target="_blank" style={{ textDecoration: "none", fontWeight: "bold", color: "orange" }}>Prajnan Software Pvt Ltd</a>
          </Typography>
        </Box>
        
        {/* Auth Modal Popup */}
        <AuthModal open={authOpen} onClose={handleAuthClose} />
      </Router>
    </ThemeProvider>
    </CartProvider>
  );
};

export default App;
