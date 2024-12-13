import { Box, Button, TextField, Typography } from "@mui/material";
import IconSelection from "./IconSelection";
import { ChangeEvent } from "react";

function NameSelection({setShortcutName}): JSX.Element {
	const onChange = (ev: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setShortcutName(ev.target.value);
	}

	return (
		<Box>
			<Typography color="secondary" variant="h4" fontWeight="bold">
				Name:
			</Typography>
			<TextField
				sx={{ width: '60%', my: 2 }}
				color="secondary"
				placeholder="Enter the name for your shortcut!"
				onChange={onChange}
			/>
		</Box>
	)
}

export default function ShortcutSelection({availableIcons, selectedIcon, setSelectedIcon, setShortcutName, createShortcut}): JSX.Element {
	return (
		<>
			<NameSelection setShortcutName={setShortcutName}/>
			<IconSelection availableIcons={availableIcons} selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon}/>
			<Button color="secondary" variant="contained" size="large" onClick={createShortcut}>
				Create Shortcut!
			</Button>
		</>
	)
}

