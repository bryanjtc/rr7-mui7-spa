import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { captureException } from "@sentry/browser";
import { useTranslation } from "react-i18next";
import { isRouteErrorResponse, useRouteError } from "react-router";

export function ErrorPage() {
  const { t } = useTranslation("error");
  const error = useRouteError();
  const errorContent = {
    heading: "",
    message: "",
  };
  if (import.meta.env.DEV) {
    console.log(error);
  }
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
    captureException(error);
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
