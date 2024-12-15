import { Container } from "@mui/material";
import Navbar from "./Navbar";
import UrlEntry from "./UrlEntry";

export function App(): JSX.Element {
	return (
		<>
			<Navbar />
			<Container maxWidth="lg" sx={{ my: 3 }}>
				<UrlEntry />
			</Container>
		</>
	);
}
