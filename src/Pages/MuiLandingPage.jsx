import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import EffortArtwork from "../Sections/mui/EffortArtwork";
import Participate from "../Sections/mui/Participate";
import Footer from "../Sections/mui/Footer";
import Hero from "../Sections/mui/Hero";
import LandingMuiNavbar from "../components/Header/LandingMuiNavbar";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

const MuiLandingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <LandingMuiNavbar />
      <Hero />
      <EffortArtwork />
      <Participate />
      <Footer />
    </ThemeProvider>
  );
};

export default MuiLandingPage;
