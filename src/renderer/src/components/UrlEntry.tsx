import { Button, TextField } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

interface UrlEntryProps {
	onUrlChange(
		ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	): void;
}

export default function UrlEntry({ onUrlChange }: UrlEntryProps): JSX.Element {
	return (
		<>
			<TextField
				fullWidth
				placeholder="Enter URL to create shortcut to..."
				onChange={onUrlChange}
			/>
			<Button
				size="large"
				variant="contained"
				endIcon={<NavigateNext />}
				sx={{ my: 2 }}
			>
				GO
			</Button>
		</>
	);
}
