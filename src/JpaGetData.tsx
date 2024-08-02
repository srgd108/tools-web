import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Snackbar,
} from "@mui/material";
import { getGetDataQueryKey, useDeleteData, useGetData } from "./impl/impl";
import { Remove } from "@mui/icons-material";
import { useQueryClient } from "react-query";

const DataTable = () => {
  const { data: tools } = useGetData();
  const { mutate: deleteData, isLoading, isError, isSuccess } = useDeleteData();
  const queryClient = useQueryClient();

  const onDelete = (id: number) => {
    deleteData(
      { id },
      {
        onSuccess: () => {
          <Snackbar message="Data with ID ${id} deleted successfully"/>;
          queryClient.invalidateQueries(getGetDataQueryKey());
        },
        onError: () => {
          <Snackbar message="Error deleting data with ID ${id}" />;
        },
      }
    );
  };

  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tools?.data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <IconButton onClick={() => onDelete(row.id!!)}>
                  <Remove />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
