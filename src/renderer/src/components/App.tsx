import { Container } from "@mui/material";
import Navbar from "./Navbar";
import UrlEntry from "./UrlEntry";
import ShortcutSelection from "./ShortcutSelection";
import NameSelection from "./NameSelection";
import IconSelection from "./IconSelection";
import CreateShortcutButton from "./CreateShortcutButton";

export function App(): JSX.Element {
	return (
		<>
			<Navbar />
			<Container maxWidth="lg" sx={{ my: 3 }}>
				<UrlEntry />
				<ShortcutSelection>
					<NameSelection />
					<IconSelection />
					<CreateShortcutButton />
				</ShortcutSelection>
			</Container>
		</>
	);
}
