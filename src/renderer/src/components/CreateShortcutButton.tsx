import { NavigateNext } from "@mui/icons-material";
import { Button } from "@mui/material";

interface CreateShortcutButtonProps {
	createShortcut(): Promise<void>;
}

export default function CreateShortcutButton({
	createShortcut,
}: CreateShortcutButtonProps): JSX.Element {
	return (
		<Button
			onClick={createShortcut}
			size="large"
			variant="contained"
			endIcon={<NavigateNext />}
		>
			Create shortcut
		</Button>
	);
}
