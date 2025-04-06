import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { captureException } from "@sentry/browser";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { isRouteErrorResponse, useRouteError } from "react-router";
import { useNavigate } from "react-router";

export function AppError() {
  const { t } = useTranslation("error");
  const navigate = useNavigate();
  const error = useRouteError();
  const errorContent = {
    heading: "",
    message: "",
  };
  if (import.meta.env.DEV) {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(error);
  }

  useEffect(() => {
    if (error instanceof Error) {
      captureException(error);
      navigate("/", { replace: true });
    }
  }, [error, navigate]);

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      errorContent.heading = t("unauthorizedErrorHeading");
      errorContent.message = t("unauthorizedErrorMessage");
    } else if (error.status === 404) {
      errorContent.heading = t("notFoundErrorHeading");
      errorContent.message = t("notFoundErrorMessage");
    } else {
      errorContent.heading = t("genericErrorHeading", {
        what: `${error.status},`,
      });
      errorContent.message = `${error.statusText}`;
    }
  } else if (error instanceof Error) {
    errorContent.heading = t("genericErrorHeading", { what: `${error.name},` });
    errorContent.message = t("genericErrorMessage");
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
