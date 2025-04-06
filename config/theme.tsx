import { CustomGridPagination } from "~/components/DataGrid/CustomGridPagination";
import { CustomGridToolbar } from "~/components/DataGrid/CustomGridToolbar";
import { CustomNoRowsOverlay } from "~/components/DataGrid/CustomNoRoysOverlay";
import LinearProgress from "@mui/material/LinearProgress";
import {
  type Localization,
  enUS as coreEn,
  esES as coreEs,
} from "@mui/material/locale";
import {
  type ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { type GridSlots, gridClasses } from "@mui/x-data-grid";
import { enUS as gridEn, esES as gridEs } from "@mui/x-data-grid/locales";
import type {} from "@mui/x-data-grid/themeAugmentation";
import {
  enUS as datePickerEn,
  esES as datePickerEs,
} from "@mui/x-date-pickers/locales";
import type {} from "@mui/x-date-pickers/themeAugmentation";

export const drawerWidth = 200;

export const coreLangObj: { [coreKey: string]: Localization } = {
  es: coreEs,
  en: coreEn,
};

export const gridLangObj: { [gridKey: string]: typeof gridEs } = {
  es: gridEs,
  en: gridEn,
};

export const datePickerLangObj: {
  [datePickerKey: string]: typeof datePickerEs;
} = {
  es: datePickerEs,
  en: datePickerEn,
};

export const adapterLocaleObj: { [adapterLocaleKey: string]: string } = {
  es: "es",
  en: "en",
};

export const languageTagObj: { [languageKey: string]: string } = {
  es: "es-ES",
  en: "en-US",
};

declare module "@mui/material/styles" {
  interface Palette {
    lightGray?: Palette["primary"];
    gray?: Palette["primary"];
    subtleGray?: Palette["primary"];
    darkBlue3?: Palette["primary"];
    darkBlue2?: Palette["primary"];
    whiteBlue?: Palette["primary"];
    subtleGray2?: Palette["primary"];
    black?: Palette["primary"];
    white?: Palette["primary"];
  }
  interface PaletteOptions {
    lightGray?: PaletteOptions["primary"];
    gray?: PaletteOptions["primary"];
    subtleGray?: PaletteOptions["primary"];
    darkBlue3?: PaletteOptions["primary"];
    darkBlue2?: PaletteOptions["primary"];
    whiteBlue?: PaletteOptions["primary"];
    subtleGray2?: PaletteOptions["primary"];
    black?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
  }
}

const components: ThemeOptions["components"] = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        padding: 0,
        "&:hover": {
          transform: "scale(1.1)",
          transition: "transform 0.2s ease-in-out",
        },
        "&:active": {
          transform: "scale(0.9)",
        },
      },
    },
  },
  MuiButton: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: {
        "&:hover": {
          transform: "scale(1.02)",
          transition: "transform 0.2s ease-in-out",
        },
        "&:active": {
          transform: "scale(0.9)",
        },
        ".MuiIconButton-root": {
          "&:hover": {
            transform: "scale(1.02)",
            transition: "transform 0.2s ease-in-out",
          },
          "&:active": {
            transform: "scale(0.9)",
          },
        },
        ".MuiButtonBase-root .MuiIconButton-root": {
          "&:hover": {
            transform: "scale(1.02)",
            transition: "transform 0.2s ease-in-out",
          },
          "&:active": {
            transform: "scale(0.9)",
          },
        },
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 8,
        paddingRight: 8,
      },
    },
  },

  MuiSelect: {
    defaultProps: {
      variant: "outlined",
      size: "small",

      MenuProps: {
        disableScrollLock: true,

        PaperProps: { sx: { maxHeight: 155 } },
      },
    },
    styleOverrides: {
      select: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 14,
      },
    },
  },

  MuiNativeSelect: {
    defaultProps: {
      variant: "outlined",
      size: "small",
    },
    styleOverrides: {
      select: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 14,
      },
    },
  },

  MuiModal: {
    defaultProps: {
      disableScrollLock: true,
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontSize: "0.875rem",
        padding: "4px 16px",
      },
    },
  },

  MuiInputLabel: {
    defaultProps: {
      variant: "outlined",
      size: "small",
      shrink: true,
    },
  },

  MuiListItemText: {
    defaultProps: {
      primaryTypographyProps: {
        variant: "body2",
        fontWeight: "medium",
        fontSize: "0.875rem",
      },
    },
  },

  MuiRadio: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: {
        padding: "0.25rem",
      },
    },
  },

  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontSize: "0.875rem",
      },
    },
  },

  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: "0.925rem",
      },
    },
  },

  MuiSkeleton: {
    defaultProps: {
      animation: "wave",
      variant: "rectangular",
    },
    styleOverrides: {
      root: {
        borderRadius: "0.5rem",
      },
    },
  },

  MuiFormControl: {
    styleOverrides: {
      root: {
        minWidth: 250,
      },
    },
  },

  MuiAvatar: {
    defaultProps: {
      variant: "rounded",
    },
  },

  MuiInputAdornment: {
    styleOverrides: {
      root: {
        ".MuiSvgIcon-root": {
          width: "18px",
          height: "18px",
        },
      },
    },
  },

  MuiCheckbox: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: {
        height: "35px",
        width: "35px",
        padding: 0,
      },
    },
  },

  MuiChip: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: {
        borderRadius: "4px",
      },
    },
  },

  MuiDataGrid: {
    defaultProps: {
      sx: {
        "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": { py: "4px" },
        "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
          py: "8px",
        },
        "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": {
          py: "15px",
        },
        ".MuiDataGrid-virtualScroller": {
          minHeight: 130,
        },
      },
      getRowHeight: () => "auto",
      showToolbar: true,
      slots: {
        pagination: CustomGridPagination,
        toolbar: CustomGridToolbar,
        noRowsOverlay: CustomNoRowsOverlay,
        //TODO: Change
        noResultsOverlay: CustomNoRowsOverlay,
        loadingOverlay: LinearProgress as GridSlots["loadingOverlay"],
      },
      initialState: {
        pagination: { paginationModel: { pageSize: 5 } },
        density: "compact",
        columns: {
          columnVisibilityModel: {
            secuencial: false,
            sequential: false,
            existeGarantia: false,
            detalleGestionSecuencial: false,
            infoSecuencial: false,
            "tipo Cliente": false,
            producto: false,
            "nombre Cliente": false,
            type: false,
            status: false,
            estado: false,
            state1: false,
            state2: false,
            state: false,
            strategyDate: false,
            deliquencyBalance: false,
            daysOverdue: false,
            nombreFlujo: false,
            nombreCliente: false,
            text1: false,
            text2: false,
            text3: false,
            text4: false,
            text5: false,
            nombreEstrategia: false,
            userName: false,
            groupName: false,
            subgroupName: false,
          },
        },
      },
      slotProps: {
        toolbar: {
          sx: { p: 0, px: 1 },
          quickFilterProps: { debounceMs: 500 },
        },
        panel: {
          //@ts-expect-error muix-6
          sx: {
            ".MuiPaper-root": {
              minWidth: "auto",
            },
            ".MuiDataGrid-panelWrapper": {
              minWidth: "auto",
            },
            ".MuiDataGrid-panelContent": {
              minWidth: "auto",
            },
          },
        },
        filterPanel: {
          sx: {
            ".MuiDataGrid-filterForm": {
              gap: 0.5,
              flexDirection: "column",
              alignItems: "flex-start",
              rowGap: 1.5,
            },
          },
          filterFormProps: {
            deleteIconProps: {
              fontSize: "small",
              sx: {
                ".MuiFormControl-root": {
                  minWidth: "0px!important",
                },
                "&.MuiDataGrid-filterFormDeleteIcon": {
                  minWidth: "0px!important",
                },
                "&.MuiButtonBase-root": {
                  minWidth: "0px!important",
                },
              },
            },
            columnInputProps: {
              variant: "outlined",
              size: "small",
              sx: {
                mt: "auto",
                ".MuiNativeSelect-select": {
                  paddingTop: 0.5,
                  paddingBottom: 1,
                  fontSize: 14,
                },
              },
            },
            operatorInputProps: {
              variant: "outlined",
              size: "small",
              sx: {
                mt: "auto",
                ".MuiNativeSelect-select": {
                  paddingTop: 0.5,
                  paddingBottom: 1,
                  fontSize: 14,
                },
              },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: "outlined",
                size: "small",
              },
            },
          },
        },
      },
      pageSizeOptions: [5, 10, 20],
    },
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.white?.main,
        border: "none",
        [`.${gridClasses.actionsCell}`]: {
          ".MuiIconButton-root": {
            "&:hover": {
              transform: "scale(1.02)",
              transition: "transform 0.2s ease-in-out",
            },
            "&:active": {
              transform: "scale(0.9)",
            },
          },
        },
        ".MuiDataGrid-container--top [role=row]": {
          background: theme.palette.white?.main,
        },
        ".MuiDataGrid-container--top": {
          "&::after": {
            height: 0,
          },
        },
        ".MuiDataGrid-filler": {
          "& > div": {
            border: "none!important",
          },
        },
      }),
      footerContainer: {
        minHeight: "auto",
        border: "none",
      },
      toolbarContainer: ({theme})=>({
        borderBottom: "none!important",
        backgroundColor: theme.palette.white?.main,
      }),
      columnHeaders: ({theme})=>({
        borderBottom: "none!important",
        backgroundColor: theme.palette.white?.main,
      }),
      columnHeader: ({theme})=>({
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.white?.main,
      }),
      cell: {
        border: "none!important",
        display: "flex",
        alignItems: "center",
      },
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
      },
    },
  },
};

const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1d2358",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#004C89",
      contrastText: "#ffffff",
    },
    background: {
      default: "#E2E6ED",
      paper: "#ffffff",
    },
    text: {
      primary: "#090A1F",
      secondary: "#090A1F",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    info: {
      main: "#A8DCFF",
    },
    lightGray: {
      main: "#f5f5f5",
    },
    gray: {
      main: "#e0e0e0",
    },
    subtleGray: {
      main: "#868e96",
    },
    darkBlue2: {
      main: "#0E102F",
    },
    darkBlue3: {
      main: "#151844",
    },
    whiteBlue: {
      main: "#f7faff",
    },
    subtleGray2: {
      main: "#c4c4c4",
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#ffffff",
    },
  },
  components: {
    ...components,

    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h6" },
      },
      styleOverrides: {
        root: {
          padding: "8px",
        },
        avatar: {
          marginRight: 0,
          ".MuiAvatar-root": {
            width: 24,
            height: 24,
            marginRight: 8,
            backgroundColor: "rgb(222, 226, 232)",
          },
          ".MuiSvgIcon-root": {
            color: "#1d2358",
            fontSize: "inherit",
          },
        },
        action: {
          margin: 0,
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        divider: {
          borderColor: "#A8DCFF",
        },
        root: {
          "&:active": {
            transform: "scale(0.9)",
          },
        },
      },
    },

    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          border: "none",
          "&:hover": {
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            transition: "all .25s linear",
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 16,
          ".MuiTabs-indicator": { backgroundColor: "#14183d" },
          ".Mui-selected": {
            color: "#151844!important",
            border: "1px solid #151844",
            backgroundColor: "#fff",
          },
        },
        flexContainer: {
          paddingTop: "8px",
          borderTopRightRadius: "2px",
          borderTopLeftRadius: "2px",
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          borderTopRightRadius: "4px",
          borderTopLeftRadius: "4px",
          minHeight: 16,
          minWidth: "auto",
          backgroundColor: "#e2e6ed",
          color: "#697891",
          border: "1px solid #e2e6ed",
          padding: "4px",
          "&:hover": {
            color: "#151844!important",
            border: "1px solid #151844",
            backgroundColor: "#fff",
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",

        InputLabelProps: {
          shrink: true,
        },
      },
      styleOverrides: {
        root: {
          minWidth: 250,
          input: {
            paddingTop: 5,
            paddingBottom: 5,
            fontSize: 14,
            height: "auto",
          },
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: "thin",
          scrollbarColor: "#1D388F61 #E4EFEF",
          "*::-webkit-scrollbar": {
            width: "7.5px",
            height: "7.5px",
            backgroundColor: "#E4EFEF",
          },
          "*::-webkit-scrollbar-track": {
            background: "#E4EFEF",
          },
          "*::-webkit-scrollbar-thumb": {
            background: "#1D388F61",
            borderRadius: "4px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            background: "#1D388F",
          },
          "*::-webkit-scrollbar-thumb:active": {
            background: "#1D388F",
          },
          "*::-webkit-scrollbar-corner": {
            backgroundColor: "#E4EFEF",
          },
        },
      },
    },
  },
});

const darkThemeOptions = createTheme({
  palette: {
    mode: "dark", // Set the mode to "dark" for the dark mode theme
    primary: {
      main: "#2b9be6",
      contrastText: "#cae3fc",
    },
    secondary: {
      main: "#004C89",
      contrastText: "#cae3fc",
    },
    background: {
      default: "#0E102F", // Darker background color
      paper: "#151844", // Darker paper color
    },
    text: {
      primary: "#2890d6", // Light text color for better contrast
      secondary: "#A8DCFF", // Secondary text color
      disabled: "rgba(255, 255, 255, 0.38)", // Lighter disabled text color
    },
    info: {
      main: "#A8DCFF",
    },
    lightGray: {
      main: "#f5f5f5",
    },
    gray: {
      main: "#181b44",
    },
    subtleGray: {
      main: "#81aedb",
    },
    darkBlue2: {
      main: "#171a4b",
    },
    darkBlue3: {
      main: "#151844",
    },
    whiteBlue: {
      main: "#192e60",
    },
    subtleGray2: {
      main: "#c4c4c4",
    },
    black: {
      main: "#cae3fc",
    },
    white: {
      main: "#0e102f",
    },
  },
  components: {
    ...components,

    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h6" },
      },
      styleOverrides: {
        root: {
          padding: "8px",
        },
        avatar: {
          marginRight: 0,
          ".MuiAvatar-root": {
            width: 24,
            height: 24,
            marginRight: 8,
            backgroundColor: "rgb(46, 163, 242)",
          },
          ".MuiSvgIcon-root": {
            color: "#1d2358",
            fontSize: "inherit",
          },
        },
        action: {
          margin: 0,
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        divider: {
          borderColor: "#A8DCFF",
        },
      },
    },

    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          border: "none",
          "&:hover": {
            boxShadow: "0 2px 8px rgba(255, 255, 255, 0.3)", // Lighter shadow
            transition: "all .25s linear",
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 16,
          ".MuiTabs-indicator": { backgroundColor: "#fff" },
          ".Mui-selected": {
            color: "#ffffff!important", // Light text color for selected tab
            backgroundColor: "#090A1F", // Darker background for selected tab
          },
        },
        flexContainer: {
          paddingTop: "8px",
          borderTopRightRadius: "2px",
          borderTopLeftRadius: "2px",
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          borderTopRightRadius: "4px",
          borderTopLeftRadius: "4px",
          minHeight: 16,
          minWidth: "auto",
          backgroundColor: "#0E102F", // Darker background for tabs
          color: "#A8DCFF", // Lighter text color for tabs
          border: "1px solid #0E102F",
          padding: "4px",
          "&:hover": {
            color: "#ffffff!important",
            border: "1px solid #ffffff",
            backgroundColor: "#090A1F",
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",

        InputLabelProps: {
          shrink: true,
        },
      },
      styleOverrides: {
        root: {
          minWidth: 250,
          input: {
            paddingTop: 5,
            paddingBottom: 5,
            fontSize: 14,
            height: "auto",
            "&::-webkit-search-cancel-button": {
              filter: "invert(1)",
            },
          },
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: "thin",
          scrollbarColor: "#1D388F61 #E4EFEF",
          "*::-webkit-scrollbar": {
            width: "5px",
            height: "5px",
            backgroundColor: "#E4EFEF",
          },
          "*::-webkit-scrollbar-track": {
            background: "#E4EFEF",
          },
          "*::-webkit-scrollbar-thumb": {
            background: "#1D388F61",
            borderRadius: "2px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            background: "#1D388F",
          },
          "*::-webkit-scrollbar-thumb:active": {
            background: "#1D388F",
          },
          "*::-webkit-scrollbar-thumb:focus": {
            background: "#1D388F",
          },
          "*::-webkit-scrollbar-corner": {
            backgroundColor: "#E4EFEF",
          },
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(themeOptions);
export const darkTheme = responsiveFontSizes(darkThemeOptions);
