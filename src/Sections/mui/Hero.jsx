import { Box, Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import vision from "../../assets/vision-2030.png";
import whiteArrow from "../../assets/white-arrow.png";
import backOverlay from "../../assets/back-overlay.png";
import heroArtwork from "../../assets/hero-artwork.png";
import frontOverlay from "../../assets/front-overlay.png";
import map from "../../assets/map.png";
import MainButton from "../../components/MainButton";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <Box
      component={"section"}
      sx={{
        bgcolor: "#012d35",
        backgroundImage: `url('${map}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        pb: { xs: "40px", md: "0px" },
        pt: "110px",
        direction: i18n.language === "ar" ? "rtl" : "ltr",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          px: { xs: "1rem", sm: "3rem", md: "4rem" },
          maxWidth: "1280px !important",
          gap: "36px",
        }}
      >
        <Box>
          <Typography
            component={"h1"}
            sx={{
              lineHeight: 1.5,
              textAlign: "center",
              fontFamily: "Readex Pro, serif",
              color: "#ffffff",
              fontSize: { xs: "36px", md: "52px", lg: "68px" },
              fontWeight: 300,
            }}
          >
            {t("heroH1")}
          </Typography>
          <Typography
            component="h2"
            sx={{
              lineHeight: 1.5,
              textAlign: "center",
              fontFamily: "Readex Pro, serif",
              color: "#ffffff",
              fontSize: { xs: "34px", md: "52px", lg: "68px" },
              fontWeight: 500,
              mt: { xs: "-8px", sm: "-14px", md: "-20px" },
            }}
          >
            {t("heroH2")}
          </Typography>
        </Box>

        <Box sx={{ mt: "-20px", textAlign: { sm: "center" }, color: "#fff" }}>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.75rem",
              mb: 1,
              fontFamily: "Inter, serif",
              fontSize: {
                xs: "1rem",
                sm: "22px",
                md: "24px",
              },
              fontWeight: 300,
            }}
          >
            {t("heroTitle1")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.75rem",
              mt: "-6px",
              fontFamily: "Inter, serif",
              fontSize: {
                xs: "1rem",
                sm: "22px",
                md: "24px",
              },
              fontWeight: 300,
            }}
          >
            {t("heroTitle2")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.75rem",
              mt: "-4px",
              fontFamily: "Inter, serif",
              fontSize: {
                xs: "14px",
                sm: "18px",
                md: "22px",
              },
              fontWeight: 300,
              color: "#e6f1ef",
            }}
          >
            {t("heroTitle3")}
          </Typography>

          <a
            href="https://www.vision2030.gov.sa/en"
            target="_blank"
            className="mt-4 flex items-center justify-center"
          >
            <img
              src={vision}
              alt="Saudi Vision 2030 Logo"
              loading="lazy"
              className="h-[50px] md:h-[80px] w-fit self-center object-contain"
            />
          </a>
        </Box>

        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexDirection: { sm: "row" },
          }}
        >
          <MainButton
            href="#participation"
            title={t("LearnMore")}
            className="text-[12px] font-inter text-black bg-white font-semibold hover:text-text-btnHover shadow-lg"
            target="_self"
          />
          <MainButton
            href="https://geosa-frontend-staging.rgp-dev.com/app/login"
            title={
              <>
                <img
                  src={whiteArrow}
                  alt="button icon"
                  loading="lazy"
                  className="mr-1 inline h-[20px] w-[20px] object-contain mb-[3px]"
                />
                {t("LoginButton")}
              </>
            }
            className="text-[14px] font-readex text-white bg-primary font-normal hover:bg-text-btnHover"
            target="_blank"
          />
        </Stack>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: "1.75rem",
            width: "100%",
            height: { md: "650px" },
          }}
        >
          <img
            src={backOverlay}
            alt="back Overlay"
            loading="lazy"
            className="absolute top-0 hidden md:block h-full w-[90%] object-contain"
          />
          <img
            src={heroArtwork}
            alt="Hero Artwork"
            loading="lazy"
            className="z-10 h-[70%] w-[90%] md:w-[75%] rounded-xl border border-primary-light object-cover"
          />
          <img
            src={frontOverlay}
            alt="front Overlay"
            loading="lazy"
            className="absolute bottom-0 z-20 hidden md:block h-full w-full object-contain"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
