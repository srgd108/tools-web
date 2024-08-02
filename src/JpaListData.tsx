import * as React from "react";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { getGetDataQueryKey, useDeleteData, useGetData } from "./impl/impl";
import { useQueryClient } from "react-query";
import { Tools } from "./model";
import { Remove } from "@mui/icons-material";
import ToolsSnackbar from "./NotificationSnackbar";

export default function DataTableGrid() {
  const queryClient = useQueryClient();
  const { mutate: deleteData, isLoading, isError, isSuccess } = useDeleteData();
  const { data: tools } = useGetData();
  const rows: Tools[] | undefined = tools?.data;

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event) => {
    setSnackbarOpen(false);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params: any) => (
        <GridActionsCellItem
          icon={<Remove />}
          label="Delete"
          onClick={() => handleDelete(params.id)}
        />
      ),
    },
  ];

  const handleDelete = (id: number) => {
    deleteData(
      { id },
      {
        onSuccess: () => {
          setSnackbarMessage(`Data with ID ${id} deleted successfully`);
          setSnackbarOpen(true);
          queryClient.invalidateQueries(getGetDataQueryKey());
        },
        onError: () => {
          setSnackbarMessage(`Error deleting data with ID ${id}`);
          setSnackbarOpen(true);
        },
      }
    );
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
      <ToolsSnackbar
        message={snackbarMessage}
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
      />
    </div>
  );
}
