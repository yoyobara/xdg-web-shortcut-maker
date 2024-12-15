import { Container } from "@mui/material";
import Navbar from "./Navbar";
import UrlEntry from "./UrlEntry";
import ShortcutSelection from "./ShortcutSelection";
import NameSelection from "./NameSelection";
import IconSelection from "./IconSelection";
import CreateShortcutButton from "./CreateShortcutButton";
import { useState } from "react";

export function App(): JSX.Element {
	const [loaded, setLoaded] = useState<boolean>(true);

	const [url, setUrl] = useState<string>("");
	const [name, setName] = useState<string | null>(null);
	const [availableIcons, setAvailableIcons] = useState<string[] | null>(null);
	const [selectedIcon, setSelectedIcon] = useState<string | null>(null)

	function onUrlChange(
		ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	): void {
		setLoaded(false);
		setUrl(ev.target.value);
	}

	const shortcutMenu = (
		<ShortcutSelection>
			<NameSelection />
			<IconSelection />
			<CreateShortcutButton />
		</ShortcutSelection>
	);

	return (
		<>
			<Navbar />
			<Container maxWidth="lg" sx={{ my: 3 }}>
				<UrlEntry onUrlChange={onUrlChange} />
				{loaded ? shortcutMenu : null}
			</Container>
		</>
	);
}
