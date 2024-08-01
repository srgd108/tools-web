import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import { QueryClient, QueryClientProvider } from "react-query";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://vedabase.com/">
        Hare Krishna
      </Link>{" "}
      {new Date().getFullYear()}.
      <Link href="https://mui.com/material-ui/getting-started/templates/">
        templates
      </Link>
    </Typography>
  );
}

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Tools Web UI by Sandeep
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </QueryClientProvider>
  );
}
