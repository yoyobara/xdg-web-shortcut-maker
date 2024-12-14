import { Container } from "@mui/material";
import Navbar from "./Navbar";

export function App(): JSX.Element {
	return (
		<>
			<Navbar />
			<Container maxWidth="lg"></Container>
		</>
	);
}
