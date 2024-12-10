import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export default function NavBar(): JSX.Element {
	return (
		<Box sx={{ flexGrow: 1 }}>
		  <AppBar position="static">
			<Toolbar>
			  <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
				XDG Shortcut Maker
			  </Typography>
			  <Button color="inherit">About</Button>
			</Toolbar>
		  </AppBar>
		</Box>
	)
}
