import { Box, Container, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import check from "../../assets/check.png";
import participation1 from "../../assets/participation1.png";
import participation2 from "../../assets/participation2.png";
import participation3 from "../../assets/participation3.png";
import participation4 from "../../assets/participation4.png";
import i18n from "../../i18n";

const cardData = [
  {
    id: 1,
    title: "cardTitle1",
    subTitle: "cardTitleP1",
    img: participation1,
  },
  {
    id: 2,
    title: "cardTitle2",
    subTitle: "cardTitleP2",
    img: participation2,
  },
  {
    id: 3,
    title: "cardTitle3",
    subTitle: "cardTitleP3",
    img: participation3,
  },
  {
    id: 4,
    title: "cardTitle4",
    subTitle: "cardTitleP4",
    img: participation4,
  },
];

const Participate = () => {
  const { t } = useTranslation();

  return (
    <Container
      id="participation"
      component={"section"}
      sx={{
        display: "flex",
        flexDirection: "column",
        mx: "auto",
        px: { xs: "1rem", sm: "3rem", md: "4rem" },
        py: "80px",
        gap: "6px",
        maxWidth: "1280px !important",
        direction: i18n.language === "ar" ? "rtl" : "ltr",
      }}
    >
      <Typography
        component="h2"
        sx={{
          lineHeight: 1.5,
          fontFamily: "Readex Pro, serif",
          fontSize: { xs: "1.7rem", md: "2.5rem" },
          fontWeight: 400,
          color: " #3c4858",
          textAlign: { sm: "center" },
        }}
      >
        {t("participationTitle")}
      </Typography>

      <Typography
        sx={{
          lineHeight: 1.75,
          fontFamily: "Readex Pro, serif",
          fontSize: "18px",
          fontWeight: 400,
          color: "#778598",
          textAlign: { sm: "center" },
        }}
      >
        {t("participationP1")}
        <br />
        {t("participationP2")}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            lg: "repeat(2, minmax(0, 1fr))",
          },
          mt: "38px",
          width: "100%",
          gap: "20px",
          p: "16px",
        }}
      >
        {cardData.map((item) => (
          <Box
            key={item.id}
            sx={{
              border: "1px solid #c2cedb",
              borderRadius: "0.5rem",
              transition: "0.3s linear",
              ":hover": {
                scale: 1.02,
                boxShadow:
                  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              },
            }}
          >
            <Stack
              sx={{ gap: "8px", p: { xs: "12px", md: "22px", lg: "24px" } }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Box
                  sx={{
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.375rem",
                    bgcolor: "#e4f3f7",
                    fontSize: "24px",
                    color: "#3d8a9e",
                  }}
                >
                  {item.id}
                </Box>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "18px", sm: "24px", lg: "28px" },
                    fontWeight: 400,
                    color: "#3c4858",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {t(item.title)}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                  src={check}
                  alt="check image"
                  loading="lazy"
                  className="h-[22px] w-[22px] object-contain"
                />
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: "16px", lg: "18px" },
                    fontWeight: 400,
                    color: "#778598",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {t(item.subTitle)}
                </Typography>
              </Box>
            </Stack>

            <img
              src={item.img}
              alt={item.img}
              loading="lazy"
              className="h-[162px] w-full object-cover"
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Participate;
