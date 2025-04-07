import {
  type ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

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

  MuiFormControl: {
    styleOverrides: {
      root: {
        minWidth: 250,
      },
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

export const theme = responsiveFontSizes(themeOptions);
