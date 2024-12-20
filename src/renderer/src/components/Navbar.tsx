import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import OsIcon from "./OsIcon";

export default function Navbar(): JSX.Element {
	return (
		<AppBar position="static">
			<Toolbar variant="regular">
				<OsIcon />
				<Typography variant="h4" fontWeight="bold" sx={{ flexGrow: 1 }}>
					XDG Shortcut maker
				</Typography>
				<Button color="inherit">About</Button>
			</Toolbar>
		</AppBar>
	);
}
