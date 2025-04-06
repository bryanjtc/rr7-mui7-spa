import { useBreakpoints } from "~/hooks/useBreakpoints";
import Add from "@mui/icons-material/Add";
import Cached from "@mui/icons-material/Cached";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import Box from "@mui/material/Box";
import Button, { type ButtonProps } from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {
  type GridCsvGetRowsToExportParams,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  type GridToolbarContainerProps,
  GridToolbarDensitySelector,
  GridToolbarExport,
  type GridToolbarExportProps,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
  type GridToolbarQuickFilterProps,
  gridSortedRowIdsSelector,
} from "@mui/x-data-grid";
import { withProfiler } from "@sentry/react";
import { useTranslation } from "react-i18next";
import type { SxProps, Theme } from "@mui/system";

interface CustomGridToolbarProps extends GridToolbarContainerProps {
  addProps?: ButtonProps;
  refreshProps?: ButtonProps;
  quickFilterProps?: GridToolbarQuickFilterProps;
  exportProps?: GridToolbarExportProps;
  showExport?: boolean;
  showFilter?: boolean;
  showQuickFilter?: boolean;
  customSx?: SxProps<Theme>;
  columnsSxProps?: SxProps<Theme>;
  filterSxProps?: SxProps<Theme>;
  densitySxProps?: SxProps<Theme>;
}

const getUnfilteredRows = ({ apiRef }: GridCsvGetRowsToExportParams) =>
  gridSortedRowIdsSelector(apiRef);

function Component({
  addProps,
  refreshProps,
  quickFilterProps,
  exportProps,
  showExport = false,
  showFilter = true,
  showQuickFilter = true,
  customSx = {},
  columnsSxProps,
  filterSxProps,
  densitySxProps,
  ...props
}: CustomGridToolbarProps) {
  const { t } = useTranslation("common");
  //@ts-expect-error muix-6
  const { sx: xsQuickFilterProps, ...restQuickFilterProps } =
    quickFilterProps ?? {
      sx: {},
    };

  const { matches } = useBreakpoints({
    breakpoint: "md",
    option: "down",
  });

  return (
    <GridToolbarContainer
      {...props}
      sx={
        {
          paddingTop: 0,
          paddingLeft: 1,
          paddingRight: 1,
          rowGap: 0,
          ...customSx,
        } as GridToolbarContainerProps["sx"]
      }
    >
      {!matches && (
        <GridToolbarColumnsButton
          slotProps={{
            button: {
              //@ts-expect-error muix-6
              sx: {
                p: 0,
                pl: 0.45,
                ...columnsSxProps,
              },
            },
          }}
        />
      )}
      {!matches && showFilter && (
        <GridToolbarFilterButton
          slotProps={{
            button: {
              startIcon: (
                <FilterListRoundedIcon color="inherit" fontSize="inherit" />
              ),
              //@ts-expect-error muix-6
              sx: {
                p: 0,
                ...filterSxProps,
              },
            },
          }}
        />
      )}
      {!matches && (
        <GridToolbarDensitySelector
          slotProps={{
            button: {
              //@ts-expect-error muix-6
              sx: {
                p: 0,
                ...densitySxProps,
              },
            },
          }}
        />
      )}
      {addProps && !matches && (
        <Button variant="text" startIcon={<Add />} sx={{ p: 0 }} {...addProps} data-testid="add-button">
          {t("add")}
        </Button>
      )}
      {addProps && matches && (
        <Tooltip title={t("add")}>
          <IconButton {...addProps} color="inherit">
            <Add fontSize="small" color="inherit" />
          </IconButton>
        </Tooltip>
      )}
      {refreshProps && !matches && (
        <Button startIcon={<Cached />} sx={{ p: 0 }} {...refreshProps}>
          {t("refresh")}
        </Button>
      )}
      {refreshProps && matches && (
        <Tooltip title={t("refresh")}>
          <IconButton {...refreshProps} color="inherit">
            <Cached fontSize="small" color="inherit" />
          </IconButton>
        </Tooltip>
      )}
      {showExport && (
        <GridToolbarExport
          csvOptions={{
            getRowsToExport: getUnfilteredRows,
            ...exportProps?.csvOptions,
          }}
          printOptions={{
            getRowsToExport: getUnfilteredRows,
            ...exportProps?.printOptions,
          }}
          {...exportProps}
        />
      )}
      <Box sx={{ flex: 1 }} />
      {showQuickFilter && (
        <GridToolbarQuickFilter
          size="small"
          sx={{
            marginTop: 0.5,
            paddingBottom: 0,
            marginBottom: 0.5,
            ".MuiInputBase-root": {
              paddingLeft: 1,
              paddingRight: 1,
            },
            ".MuiSvgIcon-root": {
              width: "1rem!important",
              height: "1rem!important",
            },
            borderRadius: 1,
            ...xsQuickFilterProps,
          }}
          variant="outlined"
          inputProps={{
            sx: {
              p: 0,
              paddingTop: "0px!important",
              paddingBottom: "0px!important",
            },
          }}
          {...restQuickFilterProps}
        />
      )}
    </GridToolbarContainer>
  );
}

Component.displayName = "CustomGridToolbar";
export const CustomGridToolbar = withProfiler(Component);
