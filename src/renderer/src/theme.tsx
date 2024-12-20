import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#2b2c2e", // Primary color
		},
		secondary: {
			main: "#dc004e", // Secondary color
		},
		background: {
			default: "#f5f5f5", // Background color
		},
		text: {
			primary: "#333", // Text color
		},
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		h4: {
			fontWeight: 700,
		},
		h6: {
			fontWeight: 500,
		},
	},
	/*
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "#1976d2", // Change AppBar background color
					boxShadow: "none", // Optional: remove shadow
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none", // Remove all caps for button text
					borderRadius: 8, // Custom border radius
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: "#fff", // Paper background
					borderRadius: 8, // Rounded corners for Paper component
				},
			},
		},
	},
	*/
});
