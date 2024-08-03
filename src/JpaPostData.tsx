import React, { FormEvent, useRef } from "react";
import { TextField, Button, Box, Snackbar } from "@mui/material";
import { getGetDataQueryKey, useSetData } from "./impl/impl";
import { Tools, ToolsResponse } from "./model";
import { useQueryClient } from "react-query";
import { useSnackbar } from "./SnackbarProvider";
import { SEVERITY_ERROR, SEVERITY_SUCCESS } from "./ToolsConstants";

const ToolForm = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const { mutate: saveData, isLoading, isError, isSuccess } = useSetData();
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const tool: Tools = {
      id: idRef.current ? parseInt(idRef.current.value, 10) : 0,
      name: nameRef.current?.value ?? "",
    };

    saveData(
      { data: tool },
      {
        onSuccess: (response) => {
          const responseId = response.data.tools?.id;
          showSnackbar(
            `Data ${responseId} saved successfully!`,
            SEVERITY_SUCCESS
          );
          queryClient.invalidateQueries(getGetDataQueryKey());
        },
        onError: () => {
          showSnackbar("Error saving data!", SEVERITY_ERROR);
        },
      }
    );
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "300px",
        margin: "0 auto",
        mt: 5,
      }}
    >
      <TextField label="ID" inputRef={idRef} variant="outlined" fullWidth />
      <TextField
        label="Name"
        inputRef={nameRef}
        variant="outlined"
        fullWidth
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading}
      >
        {isLoading ? "Saving..." : "Save"}
      </Button>
    </Box>
  );
};

export default ToolForm;
