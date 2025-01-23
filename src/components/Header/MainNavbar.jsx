import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ListItemIcon } from "@mui/material";
import { SiMui, SiTailwindcss } from "react-icons/si";
import { MdSpaceDashboard } from "react-icons/md";

const drawerWidth = 240;
const navItems = [
  { link: "/", name: "Dashboard", icon: <MdSpaceDashboard /> },
  { link: "/tailwind", name: "Tailwind", icon: <SiTailwindcss /> },
  { link: "/mui", name: "MUI", icon: <SiMui /> },
];

const MainNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TaskReact
      </Typography>

      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item.link} disablePadding>
            <NavLink
              to={item.link}
              style={({ isActive }) => ({
                width: "100%",
                backgroundColor: isActive ? "#f0f0f0" : "transparent",
              })}
            >
              <ListItemButton sx={{ textAlign: "left" }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 2,
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            TaskReact
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ link, name }) => (
              <Button
                key={link}
                sx={{
                  color: "#ddd",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                }}
              >
                <NavLink to={link} className="link">
                  {name}
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default MainNavbar;
