/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CustomToolbar from "./CustomToolbar";

const UsersTable = ({ usersData, columns, loadingData, handleAddButton }) => {
  return (
    <Box sx={{ height: 480 }}>
      <DataGrid
        aria-label="users data table"
        aria-labelledby="user-table-title"
        rows={usersData}
        columns={columns}
        loading={loadingData}
        pageSizeOptions={[5, 10, 15, 20, 25]}
        pagination
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
        }}
        slots={{
          toolbar: () => <CustomToolbar onAddClick={handleAddButton} />,
        }}
      />
    </Box>
  );
};

export default UsersTable