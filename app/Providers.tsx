import type { ReactNode } from "react";
import { createTheme } from "@mui/material/styles";
import { theme } from "~/config/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

export const Providers = ({
	children,
}: {
	children: ReactNode;
}) => {
	const themei18n = createTheme(theme);
	return (
		<ThemeProvider theme={themei18n}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
