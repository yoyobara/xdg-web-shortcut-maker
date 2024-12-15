import { NavigateNext } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function CreateShortcutButton(): JSX.Element {
	return (
		<Button size="large" variant="contained" endIcon={<NavigateNext />}>
			Create shortcut
		</Button>
	);
}
