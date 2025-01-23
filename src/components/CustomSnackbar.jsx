/* eslint-disable react/prop-types */
import { Alert, Snackbar } from "@mui/material";

const CustomSnackbar = ({ openAlert, handleCloseAlter, stateAlert }) => {
  return (
    <Snackbar
      open={openAlert}
      autoHideDuration={6000}
      onClose={handleCloseAlter}
    >
      <Alert severity={stateAlert} onClose={handleCloseAlter} variant="filled">
        {stateAlert === "success"
          ? "The operation was completed successfully"
          : "Something went wrong. Please try again later."}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
