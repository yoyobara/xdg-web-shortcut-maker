import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function Navbar(): JSX.Element {
	return (
		<AppBar position="static">
			<Toolbar variant="regular">
				<AddCircleOutlineIcon fontSize="large" sx={{ mr: 2 }} />
				<Typography variant="h4" fontWeight="bold" sx={{ flexGrow: 1 }}>
					XDG Shortcut maker
				</Typography>
				<Button color="inherit">About</Button>
			</Toolbar>
		</AppBar>
	);
}
