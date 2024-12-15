import { Button, TextField } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

export default function UrlEntry(): JSX.Element {
	return (
		<>
			<TextField
				fullWidth
				placeholder="Enter URL to create shortcut to..."
			/>
			<Button
				size="large"
				variant="contained"
				endIcon={<NavigateNext />}
				sx={{ my: 2 }}
			>
				GO!
			</Button>
		</>
	);
}
