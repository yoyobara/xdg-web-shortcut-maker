import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";

import { App } from "./components";

const theme = createTheme({
	palette: {
		mode: "dark",

		primary: {
			main: "#37CFAB",
		},

		background: {
			default: "#3a3a3a",
		},

		secondary: {
			main: "#E05E2A",
		},

		success: {
			main: "#B6EF3B",
		},

		info: {
			main: "#298BBF",
		},

		warning: {
			main: "#F1C138",
		},

		error: {
			main: "#FB591F",
		},
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);
