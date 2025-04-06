import "~/config/i18n";
import "~/config/scan";
import "dayjs/locale/en";
import "dayjs/locale/es";
import { type ReactNode, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import {
  adapterLocaleObj,
  coreLangObj,
  darkTheme,
  datePickerLangObj,
  gridLangObj,
  theme,
} from "~/config/theme";
import { ToastContainer } from "react-toastify";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { Toaster } from "react-hot-toast";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useAtomValue } from "jotai";
import { isDarkModeAtom } from "~/state/configuration";

export const OtherProviders = ({children}: {
    children: ReactNode;
}) => {
  const { i18n } = useTranslation();
  const isDarkMode = useAtomValue(isDarkModeAtom);
  const themei18n = useMemo(
    () =>
      createTheme(
        isDarkMode ? darkTheme : theme,
        {},
        coreLangObj[i18n.language],
        gridLangObj[i18n.language],
        datePickerLangObj[i18n.language],
      ),
    [i18n.language, isDarkMode],
  );
  return (
    <ThemeProvider theme={themei18n}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale={adapterLocaleObj[i18n.language.split("-")[0]]}
      >
        <CssBaseline />
        <ToastContainer position="bottom-right" newestOnTop={true} />
        <Toaster position="bottom-right" reverseOrder={false} />
        <NuqsAdapter>{children} </NuqsAdapter>
      </LocalizationProvider>
    </ThemeProvider>
  );
};
