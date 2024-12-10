import { Box, Button, TextField } from "@mui/material";

export default function UrlEntry(): JSX.Element {
	return (
		<Box my={4} display="flex" flexDirection="column" gap={2}>
			<TextField autoFocus sx={{width: "90%"}} placeholder="Enter the url for the website!"/>
			<Button sx={{width: "15%"}} variant="contained">GO!</Button>
		</Box>
	)
}
