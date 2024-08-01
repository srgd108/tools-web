import React, { FormEvent, useRef, useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useSetData } from "./impl/impl";
import { Tools } from "./model";

const ToolForm = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const { mutate: saveData, isLoading, isError, isSuccess } = useSetData();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const tool: Tools = {
      id: idRef.current ? parseInt(idRef.current.value, 10) : 0,
      name: nameRef.current?.value ?? "",
    };

    saveData({ data: tool });
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
      {isError && <p style={{ color: "red" }}>Error saving data.</p>}
      {isSuccess && <p style={{ color: "green" }}>Data saved successfully!</p>}
    </Box>
  );
};

export default ToolForm;
