import ErrorIcon from "@mui/icons-material/Error";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {
  type ErrorBoundaryProps,
  type FallbackRender,
  captureException,
} from "@sentry/react";
import { useTranslation } from "react-i18next";

type FallbackRenderProps = Parameters<FallbackRender>[0];

function FallbackElement({ error, resetError }: FallbackRenderProps) {
  const { t } = useTranslation("error");
  captureException(error);

  let errorMessage = "";
  let errorName = "";

  if (error instanceof Error) {
    captureException(error);
    errorMessage = error.message;
    errorName = error.name;
  }

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        p: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="h4" fontWeight="bold">
          {t("genericErrorHeading", { what: `${errorName},` })}
        </Typography>
        <ErrorIcon color="error" fontSize="large" />
      </Box>
      <Typography variant="h6">
        {t("genericErrorMessage", { what: errorMessage })}
      </Typography>
      <Button onClick={resetError}>{t("reset")}</Button>
    </Card>
  );
}

export const FallbackComponent: ErrorBoundaryProps["fallback"] = (props) => (
  <FallbackElement {...props} />
);
