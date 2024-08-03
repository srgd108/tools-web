import * as React from "react";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { getGetDataQueryKey, useDeleteData, useGetData } from "./impl/impl";
import { useQueryClient } from "react-query";
import { Tools } from "./model";
import { Remove } from "@mui/icons-material";
import { useSnackbar } from "./SnackbarProvider";
import { SEVERITY_ERROR, SEVERITY_SUCCESS } from "./ToolsConstants";

export default function DataTableGrid() {
  const queryClient = useQueryClient();
  const { mutate: deleteData, isLoading, isError, isSuccess } = useDeleteData();
  const { data: tools } = useGetData();
  const rows: Tools[] | undefined = tools?.data;
  const { showSnackbar } = useSnackbar();

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
          showSnackbar(`Data ${id} deleted successfully!`, SEVERITY_SUCCESS);
          queryClient.invalidateQueries(getGetDataQueryKey());
        },
        onError: () => {
          showSnackbar("Error deleting data!", SEVERITY_ERROR);
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
    </div>
  );
}
