import { Box, Button, TextField, Typography } from "@mui/material";
import IconSelection from "./IconSelection";

function NameSelection(): JSX.Element {
	return (
		<Box>
			<Typography color="secondary" variant="h4" fontWeight="bold">
				Name:
			</Typography>
			<TextField
				sx={{ width: '60%', my: 2 }}
				color="secondary"
				placeholder="Enter the name for your shortcut!"
			/>
		</Box>
	)
}

export default function ShortcutSelection({availableIcons}): JSX.Element {
	return (
		<>
			<NameSelection/>
			<IconSelection availableIcons={availableIcons}/>
			<Button color="secondary" variant="contained" size="large">
				Create Shortcut!
			</Button>
		</>
	)
}

