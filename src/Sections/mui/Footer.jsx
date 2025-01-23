import { Box, Container, Stack, Typography } from "@mui/material";
import grayArrow from "../../assets/gray-arrow.png";
import geosa from "../../assets/geosa-logo-white.png";
import footer from "../../assets/footer-img.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import MainButton from "../../components/MainButton";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      id="footer"
      component={"footer"}
      sx={{ bgcolor: "#01404b", pt: "94px" }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          px: { xs: "1rem", sm: "3rem", md: "4rem" },
          maxWidth: "1280px !important",
          alignItems: "center",
          gap: "16px",
          direction: i18n.language === "ar" ? "rtl" : "ltr",
        }}
      >
        <Typography
          component="h2"
          sx={{
            lineHeight: 1.5,
            textAlign: "center",
            fontFamily: "Readex Pro, serif",
            fontSize: { xs: "28px", md: "36px", lg: "48px" },
            fontWeight: 400,
            color: "#ffffff",
          }}
        >
          {t("footerTitle1")}
          <Typography variant="span" sx={{ display: "block", mt: "-8px" }}>
            {t("footerTitle2")}
          </Typography>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: "1.75rem",
            fontFamily: "Readex Pro, sans-serif",
            textAlign: "center",
            fontSize: { xs: "18px", md: "22px" },
            fontWeight: 300,
            color: "#ffffff",
          }}
        >
          {t("footerP")}
        </Typography>

        <Stack
          sx={{
            alignItems: "center",
            gap: "12px",
            flexDirection: { sm: "row" },
          }}
        >
          <MainButton
            href="https://geosa-frontend-staging.rgp-dev.com/app/login"
            title={
              <>
                <img
                  src={grayArrow}
                  alt="button icon"
                  loading="lazy"
                  className="mr-1 inline h-[20px] w-[20px] object-contain"
                />
                {t("DownloadButton")}
              </>
            }
            className="text-[12px] font-inter text-black bg-white font-[600] hover:text-text-btnHover"
            target="_blank"
          />
          <img
            src={geosa}
            alt="geosa logo"
            loading="lazy"
            className="h-[36px] w-[100px] object-contain"
          />
        </Stack>
      </Container>

      <Box
        sx={{
          minHeight: "770px",
          width: "100%",
          bgcolor: "#01404b",
          backgroundImage: `url('${footer}')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          pt: "94px",
        }}
      />
    </Box>
  );
};

export default Footer;
