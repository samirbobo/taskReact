import navLogo from "../../assets/nav-logo.png";
import bookmark from "../../assets/bookmark.png";
import lang from "../../assets/lang.png";
import login from "../../assets/login.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Box, Button, Stack, Typography } from "@mui/material";

const LandingMuiNavbar = () => {
  const { t } = useTranslation();
  return (
    <Box
      component={"nav"}
      sx={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        top: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: { xs: "90%", md: "75%" },
        borderRadius: "20px",
        bgcolor: "#fff",
        p: { xs: "10px", md: "16px" },
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        zIndex: 50,
        direction: i18n.language === "ar" ? "rtl" : "ltr",
      }}
    >
      <a href="https://www.geosa.gov.sa/ar/Pages/default.aspx" target="_blank">
        <img
          src={navLogo}
          alt="GEOSA Logo"
          loading="lazy"
          className="h-[40px] w-[115px] object-contain"
        />
      </a>

      <Stack flexDirection={"row"} alignItems={"center"} gap={2.5}>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2.5,
          }}
        >
          <Typography
            component="a"
            href="#participation"
            sx={{
              ":hover": {
                bgcolor: "#f9fafc",
              },
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              borderRadius: "4px",
              px: "8px",
              py: "12px",
              transition: "0.3s linear",
            }}
          >
            <img
              src={bookmark}
              alt="Bookmark Icon"
              loading="lazy"
              className="h-[20px] w-[20px] object-contain"
            />
            <h2 className="leading-normal text-center font-inter text-[13px] font-normal text-text-gray">
              {t("navRFI")}
            </h2>
          </Typography>

          <Typography
            component={"a"}
            href="#footer"
            sx={{
              ":hover": {
                bgcolor: "#f9fafc",
              },
              cursor: "pointer",
              borderRadius: "4px",
              px: "8px",
              py: "12px",
              transition: "0.3s linear",
            }}
          >
            <Typography
              sx={{
                lineHeight: 1.5,
                textAlign: "center",
                fontFamily: "Inter, serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "#778598",
              }}
            >
              {t("navAbout")}
            </Typography>
          </Typography>
        </Box>

        <Button
          onClick={() => {
            const newLanguage = i18n.language === "en" ? "ar" : "en";
            i18n.changeLanguage(newLanguage);
          }}
          sx={{
            alignItems: "flex-end",
            gap: 0.5,
            p: 0,
            minWidth: "fit-content",
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
          variant="text"
        >
          <img
            src={lang}
            alt="GEOSA Logo"
            loading="lazy"
            className="h-[20px] w-[20px] object-contain"
          />

          <Typography
            sx={{
              lineHeight: 1.5,
              textAlign: "center",
              fontFamily: "Inter, serif",
              fontSize: "13px",
              fontWeight: 400,
              color: "#778598",
            }}
          >
            {t("lang")}
          </Typography>
        </Button>

        <Typography
          component={"a"}
          href="https://geosa-frontend-staging.rgp-dev.com/app/login"
          target="_blank"
          sx={{
            bgcolor: "#56c18f",
            px: { xs: "12px", sm: "1rem" },
            py: "10px",
            fontFamily: "Inter, serif",
            fontSize: "14px",
            fontWeight: 500,
            borderRadius: "0.5rem",
            cursor: "pointer",
            color: "#fff",
            transition: "0.35s linear",
            "&:hover": {
              bgcolor: "#1db6ca",
            },
          }}
        >
          <img
            src={login}
            alt="button icon"
            loading="lazy"
            className="mr-1 inline h-[20px] w-[20px] object-contain mb-[3px]"
          />
          {t("login")}
        </Typography>
      </Stack>
    </Box>
  );
};

export default LandingMuiNavbar;
