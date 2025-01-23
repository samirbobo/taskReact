import { Outlet } from "react-router-dom";
import MainNavbar from "./Header/MainNavbar";
import { Box, Toolbar } from "@mui/material";

const RootLayout = () => {
  return (
    <>
      <MainNavbar />
      <Box component="main">
        <Toolbar />
        <Outlet />
      </Box>
    </>
  );
};
export default RootLayout;
