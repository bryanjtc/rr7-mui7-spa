import { GridPagination } from "@mui/x-data-grid/components";
import { withProfiler } from "@sentry/react";

function Component() {
  return (
    <GridPagination
      sx={{
        "	.MuiTablePagination-toolbar": {
          minHeight: "auto",
          p: 1,
          pt: 0.5,
        },
        "	.MuiTablePagination-selectLabel": {
          m: 0,
        },
        "	.MuiTablePagination-displayedRows": {
          m: 0,
        },
        ".MuiButtonBase-root": {
          p: 0,
        },
        ".MuiTablePagination-select": {
          p: 0,
        },
        styleOverrides: {
          root: {
            toolbar: {
              displayedRows: { margin: 0 },
              selectLabel: { margin: 0 },
            },
          },
        },
      }}
    />
  );
}

Component.displayName = "CustomGridPagination";
export const CustomGridPagination = withProfiler(Component);
