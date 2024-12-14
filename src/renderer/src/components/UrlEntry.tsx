import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";

export default function UrlEntry({
	url,
	setUrl,
	setLoaded,
	setAvailableIcons,
}): JSX.Element {
	const onUrlChange = (
		ev: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		setLoaded(false);
		setUrl(ev.target.value);
	};

	const onClick = async () => {
		setLoaded(true);
		setAvailableIcons(await window.api.getAvailableIcons(url));
	};

	return (
		<Box my={4} display="flex" flexDirection="column" gap={2}>
			<TextField
				autoFocus
				sx={{ width: "90%" }}
				placeholder="Enter the url for the website!"
				onChange={onUrlChange}
			/>
			<Button sx={{ width: "15%" }} variant="contained" onClick={onClick}>
				GO!
			</Button>
		</Box>
	);
}
