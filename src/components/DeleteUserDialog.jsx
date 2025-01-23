/* eslint-disable react/prop-types */
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

// Custom Dialog
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const DeleteUserDialog = ({
  open,
  handleClose,
  handleDeleteUser,
  formData,
}) => {
  const theme = useTheme();

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{
        "& .MuiPaper-root": {
          width: "90vw",
          maxWidth: 500,
        },
      }}
    >
      <DialogTitle
        sx={{
          bgcolor: theme.palette.info.main,
          color: "#fff",
          m: 0,
          p: 2,
        }}
        id="customized-dialog-title"
      >
        Delete User
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          top: 8,
          right: "8px",
          color: "#fff",
        }}
      >
        <Close />
      </IconButton>

      <Box sx={{ px: 2, py: 1 }}>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.error.main,
            textAlign: "center",
            my: 3,
          }}
        >
          Are You Sure To Delete This Item ?
        </Typography>

        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={() => {
            handleDeleteUser(formData);
            handleClose();
          }}
        >
          Delete
        </Button>
      </Box>
    </BootstrapDialog>
  );
};

export default DeleteUserDialog;
