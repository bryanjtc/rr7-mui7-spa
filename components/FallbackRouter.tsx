import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
export const FallbackRouter = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="fill-available"
      gap={5}
      flexDirection="column"
    >
      <CircularProgress color="secondary" />
      <Typography variant="h6">Loading...</Typography>
    </Box>
  );
};
