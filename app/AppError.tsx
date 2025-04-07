import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router";
import { useNavigate } from "react-router";

export function AppError() {
  const navigate = useNavigate();
  const error = useRouteError();
  const errorContent = {
    heading: "",
    message: "",
  };
  if (import.meta.env.DEV) {
    console.log(error);
  }

  useEffect(() => {
    if (error instanceof Error) {
      navigate("/", { replace: true });
    }
  }, [error, navigate]);

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      errorContent.heading = "401, Oops! An error has occurred";
      errorContent.message = "Unauthorized";
    } else if (error.status === 404) {
      errorContent.heading = "404, Oops! An error has occurred";
      errorContent.message = "Page not found";
    } else {
      errorContent.heading = "Oops! An error has occurred";
      errorContent.message = `${error.statusText}`;
    }
  } else if (error instanceof Error) {
    errorContent.heading = "Oops! An error has occurred";
    errorContent.message = "Something went wrong";
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid
          container={true}
          spacing={2}
          sx={{
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
          }}
        >
          <Grid
            size={{ md: 6 }}
            sx={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h1" fontWeight="bold">
              {errorContent.heading}
            </Typography>
            <Typography variant="h6">{errorContent.message}</Typography>
          </Grid>
          <Grid
            size={{ md: 6 }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png"
              alt="error"
              width={500}
              height={500}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
