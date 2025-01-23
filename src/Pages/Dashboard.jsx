import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import UsersTable from "../components/UsersTable";
import { useEffect, useState } from "react";
import { useAddUser, useDeleteUser, useEditUser, useUsers } from "../Apis";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DeleteUserDialog from "../components/DeleteUserDialog";
import UserDialog from "../components/UserDialog";
import CustomSnackbar from "../components/CustomSnackbar";

const Dashboard = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [titleDialog, setTitleDialog] = useState("");
  const [formData, setFormData] = useState(null);
  const [isEditUser, setIsEditUser] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [stateAlert, setStateAlert] = useState("success");

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDeleteDialog = (id) => {
    setOpenDeleteDialog(true);
    setFormData(id);
  };
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const handleEditButton = (row) => {
    handleOpenDialog();
    setTitleDialog("Update Employee");
    setIsEditUser(true);
    setFormData(row);
  };

  const handleAddButton = () => {
    handleOpenDialog();
    setTitleDialog("Add New User");
    setIsEditUser(false);
    setFormData(null);
  };

  const { data: users, isLoading, error } = useUsers();

  const {
    mutate: addUser,
    isPending: isAdding,
    isError: isAddError,
    isSuccess: isAddSuccess,
  } = useAddUser();

  const {
    mutate: editUser,
    isPending: isEditing,
    isError: isEditError,
    isSuccess: isEditSuccess,
  } = useEditUser();

  const {
    mutate: deleteUser,
    isPending: isDeleting,
    isError: isDeleteError,
    isSuccess: isDeleteSuccess,
  } = useDeleteUser();

  useEffect(() => {
    if (error || isAddError || isEditError || isDeleteError) {
      setOpenAlert(true);
      setStateAlert("error");
    }

    if (isAddSuccess || isEditSuccess || isDeleteSuccess) {
      setOpenAlert(true);
      setStateAlert("success");
    }
  }, [
    error,
    isAddSuccess,
    isAddError,
    isEditSuccess,
    isEditError,
    isDeleteSuccess,
    isDeleteError,
  ]);

  const columns = [
    {
      field: "id",
      headerName: "User_ID",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "left",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "website",
      headerName: "Website",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      display: "flex",
      width: 200,
      align: "center",
      headerAlign: "center",
      filterable: false,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              p: "5px",
              textAlign: "center",
              display: "flex",
            }}
          >
            <IconButton
              aria-label="edit"
              onClick={() => {
                handleEditButton(params.row);
              }}
            >
              <Edit />
            </IconButton>

            <IconButton
              aria-label="delete"
              onClick={() => {
                handleOpenDeleteDialog(params.row.id);
              }}
            >
              <Delete />
            </IconButton>

            <Button sx={{ textTransform: "capitalize" }}>
              <Link to={`/user/${params.row.id}`}>View</Link>
            </Button>
          </Box>
        );
      },
    },
  ];

  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center", my: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Container>
        <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
          Users
        </Typography>

        {error && (
          <Typography variant="body1" color="error">
            {error.message}
          </Typography>
        )}

        {users && (
          <UsersTable
            usersData={users}
            columns={columns}
            loadingData={isLoading || isAdding || isEditing || isDeleting}
            handleAddButton={handleAddButton}
          />
        )}

        {/* Dialog to add and edit user */}
        {openDialog && (
          <UserDialog
            openDialog={openDialog}
            title={titleDialog}
            handleClose={handleCloseDialog}
            handleUser={isEditUser ? editUser : addUser}
            formData={formData}
          />
        )}

        {/* Dialog to confirm deleted User */}
        <DeleteUserDialog
          open={openDeleteDialog}
          handleClose={handleCloseDeleteDialog}
          handleDeleteUser={deleteUser}
          formData={formData}
        />

        {/* Custom Alter */}
        <CustomSnackbar
          openAlert={openAlert}
          handleCloseAlter={handleCloseAlert}
          stateAlert={stateAlert}
        />
      </Container>
    </Box>
  );
};

export default Dashboard;

/* 

useEffect(() => {
  if (error) {
    setOpenAlert(true);
    setStateAlert("error");
    setErrorMessage(error.message || "Failed to load users.");
  }
  if (isAddError) {
    setOpenAlert(true);
    setStateAlert("error");
    setErrorMessage("Failed to add user.");
  }
  if (isEditError) {
    setOpenAlert(true);
    setStateAlert("error");
    setErrorMessage("Failed to edit user.");
  }
  if (isDeleteError) {
    setOpenAlert(true);
    setStateAlert("error");
    setErrorMessage("Failed to delete user.");
  }
  if (isAddSuccess || isEditSuccess || isDeleteSuccess) {
    setOpenAlert(true);
    setStateAlert("success");
    setErrorMessage("");
  }
}, [
  error,
  isAddSuccess,
  isAddError,
  isEditSuccess,
  isEditError,
  isDeleteSuccess,
  isDeleteError,
]);

*/
