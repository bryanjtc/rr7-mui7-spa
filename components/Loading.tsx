import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import type { FC } from "react";

const Loading: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" component="h2">
        Checking for a new version
      </Typography>
      <CircularProgress
        sx={{
          marginTop: "1rem",
        }}
      />
    </Box>
  );
};

export { Loading };
