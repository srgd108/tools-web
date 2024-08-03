// SnackbarProvider.tsx
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { Snackbar, Alert, AlertColor, SnackbarOrigin } from "@mui/material";
import {
  AUTO_HIDE_DURATION_SUCCESS,
  AUTO_HIDE_DURATION_INFO,
  AUTO_HIDE_DURATION_ERROR,
  SEVERITY_SUCCESS,
  SEVERITY_INFO,
  SEVERITY_ERROR,
} from "./ToolsConstants"; // Adjust the import path as necessary

interface SnackbarContextType {
  showSnackbar: (message: string, severity?: AlertColor) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

interface SnackbarProviderProps {
  children: ReactNode;
}

const defaultAnchorOrigin: SnackbarOrigin = {
  vertical: "bottom",
  horizontal: "center",
};

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: "",
    severity: SEVERITY_SUCCESS as AlertColor,
    autoHideDuration: AUTO_HIDE_DURATION_SUCCESS,
  });

  const showSnackbar = useCallback(
    (message: string, severity: AlertColor = SEVERITY_SUCCESS) => {
      let autoHideDuration;
      switch (severity) {
        case SEVERITY_INFO:
          autoHideDuration = AUTO_HIDE_DURATION_INFO;
          break;
        case SEVERITY_ERROR:
          autoHideDuration = AUTO_HIDE_DURATION_ERROR;
          break;
        case SEVERITY_SUCCESS:
        default:
          autoHideDuration = AUTO_HIDE_DURATION_SUCCESS;
          break;
      }

      setSnackbarState({
        open: true,
        message,
        severity,
        autoHideDuration,
      });
    },
    []
  );

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarState((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={snackbarState.autoHideDuration}
        onClose={handleClose}
        anchorOrigin={defaultAnchorOrigin}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarState.severity}
          sx={{ width: "100%" }}
        >
          {snackbarState.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
