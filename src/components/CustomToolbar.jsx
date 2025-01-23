/* eslint-disable react/prop-types */
import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";

const CustomToolbar = ({ onAddClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 1,
      }}
    >
      {/* Toolbar default actions */}
      <GridToolbar />

      {/* Add New Employee Button */}
      <Button
        variant="text"
        color="primary"
        startIcon={<Add />}
        onClick={onAddClick}
        sx={{
          px: "5px",
          py: "4px",
        }}
      >
        Add New
      </Button>
    </Box>
  );
};

export default CustomToolbar;
