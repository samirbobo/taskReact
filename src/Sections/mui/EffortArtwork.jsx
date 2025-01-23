import effort from "../../assets/effort-artwork.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import customGrid from "../../assets/grid.png";
import whiteArrow from "../../assets/white-arrow.png";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { Box, Typography, Stack, Container } from "@mui/material";
import MainButton from "../../components/MainButton";

const images = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const EffortArtwork = () => {
  const { t } = useTranslation();

  return (
    <Box
      component={"section"}
      sx={{
        bgcolor: "#e6f1ef",
        backgroundImage: { lg: `url('${customGrid}')` },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "22% 50%",
        backgroundSize: "35% 68%",
        direction: i18n.language === "ar" ? "rtl" : "ltr",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          px: { xs: "1rem", sm: "3rem", md: "4rem" },
          py: { xs: "60px", md: "80px" },
          gap: "45px",
          maxWidth: "1280px !important",
        }}
      >
        <Typography
          component="h2"
          sx={{
            lineHeight: 1.5,
            fontFamily: "Readex Pro, serif",
            fontSize: { xs: "31px", md: "42px" },
            fontWeight: 400,
            color: "#215f6a",
          }}
        >
          {t("effortTitle")}
        </Typography>

        <Stack
          sx={{ width: "100%", flexDirection: { lg: "row" }, gap: "40px" }}
        >
          <Box
            sx={{
              height: "auto",
              width: { xs: "100%", lg: "40%" },
              overflow: "hidden",
              borderRadius: "0.5rem",
            }}
          >
            <img
              src={effort}
              alt="Effort Artwork"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Box>

          <Stack sx={{ width: { xs: "100%", lg: "60%" }, gap: "25px" }}>
            <Box
              component={"article"}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                width: "100%",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <img
                src={person1}
                alt="Person 1"
                loading="lazy"
                className="h-[154px] w-[154px] object-cover"
              />
              <Typography
                sx={{
                  fontFamily: "Readex Pro, serif",
                  fontSize: { xs: "14px", md: "18px" },
                  lineHeight: "1.75rem",
                  fontWeight: 300,
                  color: "#778598",
                }}
              >
                {t("effortPerson1")}
              </Typography>
            </Box>
            <Box
              component={"article"}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                width: "100%",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <img
                src={person2}
                alt="Person 2"
                loading="lazy"
                className="h-[154px] w-[154px] object-cover"
              />
              <Typography
                sx={{
                  fontFamily: "Readex Pro, serif",
                  fontSize: { xs: "14px", md: "18px" },
                  lineHeight: "1.75rem",
                  fontWeight: 300,
                  color: "#778598",
                }}
              >
                {t("effortPerson2")}
              </Typography>
            </Box>
          </Stack>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              sm: "repeat(3, minmax(0, 1fr))",
              md: "repeat(5, minmax(0, 1fr))",
              lg: "repeat(7, minmax(0, 1fr))",
            },
            alignItems: "center",
            justifyItems: "center",
            gap: "1.5rem",
            px: "3rem",
          }}
        >
          {images.map((image) => (
            <img
              key={image}
              src={image}
              alt={image}
              className="max-h-[45px] w-fit object-contain"
              loading="lazy"
            />
          ))}
        </Box>

        <Stack
          sx={{
            flexDirection: { sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
          }}
        >
          <MainButton
            href="#participation"
            title={t("howWorks")}
            className="bg-white font-inter text-[12px] text-black font-[600] hover:text-text-btnHover shadow-lg"
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
                {t("startedButton")}
              </>
            }
            className="bg-primary font-readex text-[14px] text-white font-normal hover:bg-text-btnHover"
            target="_blank"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default EffortArtwork;
