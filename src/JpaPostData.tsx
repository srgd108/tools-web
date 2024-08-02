import React, { FormEvent, useRef } from "react";
import { TextField, Button, Box, Snackbar } from "@mui/material";
import { getGetDataQueryKey, useSetData } from "./impl/impl";
import { Tools } from "./model";
import { useQueryClient } from "react-query";

const ToolForm = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const { mutate: saveData, isLoading, isError, isSuccess } = useSetData();
  const queryClient = useQueryClient();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const tool: Tools = {
      id: idRef.current ? parseInt(idRef.current.value, 10) : 0,
      name: nameRef.current?.value ?? "",
    };

    saveData(
      { data: tool },
      {
        onSuccess: () => {
          <Snackbar message="Data with ID ${id} saved successfully" />;
          queryClient.invalidateQueries(getGetDataQueryKey());
        },
        onError: () => {
          <Snackbar message="Error saving data..." />;
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
