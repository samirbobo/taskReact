/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-escape */
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  styled,
  TextField,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";

// Custom Dialog
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const UserDialog = ({
  openDialog,
  title,
  handleClose,
  handleUser,
  formData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const theme = useTheme();

  const onSubmit = (data) => {
    // add User_ID in case edit employee
    if (formData) {
      data = { id: formData.id, ...data };
    }
    handleUser(data);
    handleClose();
  };

  // regular expressions
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={openDialog}
      sx={{
        ".MuiPaper-root.MuiPaper-elevation": {
          width: "90vw",
          maxWidth: "500px",
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
        {title}
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: "8px",
          top: 8,
          color: "#fff",
        }}
      >
        <Close />
      </IconButton>

      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
      >
        <TextField
          defaultValue={formData?.name}
          error={Boolean(errors.name)}
          helperText={
            Boolean(errors.name)
              ? "This field is required & min 3 character"
              : null
          }
          {...register("name", {
            required: true,
            minLength: 3,
          })}
          sx={{ flex: "1" }}
          label="Name"
          variant="outlined"
        />

        <TextField
          defaultValue={formData?.email}
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email)
              ? "Please provide a valid email address"
              : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="outlined"
        />

        <TextField
          defaultValue={formData?.phone}
          error={Boolean(errors.phone)}
          helperText={
            Boolean(errors.phone) ? "Please provide a valid phone" : null
          }
          {...register("phone", { min: 1, required: true })}
          label="Phone"
          variant="outlined"
          type="tel"
        />

        <TextField
          defaultValue={formData?.website}
          {...register("website", { required: true })}
          variant="outlined"
          id="outlined-select-currency"
          type="url"
          label="Website"
        />

        <Box>
          <Button type="submit" variant="outlined" sx={{ width: "100%" }}>
            submit
          </Button>
        </Box>
      </Box>
    </BootstrapDialog>
  );
};

export default UserDialog;
