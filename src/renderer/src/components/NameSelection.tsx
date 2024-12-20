import { TextField } from "@mui/material";

interface NameSelectionProps {
	setName: React.Dispatch<React.SetStateAction<string>>;
}

export default function NameSelection({
	setName,
}: NameSelectionProps): JSX.Element {
	return (
		<>
			<TextField
				onChange={(ev) => setName(ev.target.value)}
				fullWidth
				placeholder="The name for your shortcut..."
			/>
		</>
	);
}
