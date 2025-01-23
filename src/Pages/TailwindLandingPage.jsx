import LandingTailwindNavbar from "../components/Header/LandingTailwindNavbar";
import EffortArtwork from "../Sections/tailwind/EffortArtwork";
import Footer from "../Sections/tailwind/Footer";
import Hero from "../Sections/tailwind/Hero";
import Participate from "../Sections/tailwind/Participate";

const TailwindLandingPage = () => {
  return (
    <>
      <LandingTailwindNavbar />
      <Hero />
      <EffortArtwork />
      <Participate />
      <Footer />
    </>
  );
};

export default TailwindLandingPage;
