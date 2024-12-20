import { Container } from "@mui/material";
import Navbar from "./Navbar";
import UrlEntry from "./UrlEntry";
import ShortcutSelection from "./ShortcutSelection";
import NameSelection from "./NameSelection";
import IconSelection from "./IconSelection";
import CreateShortcutButton from "./CreateShortcutButton";
import { useState } from "react";

export function App(): JSX.Element {
	const [loaded, setLoaded] = useState<boolean>(false);

	const [url, setUrl] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [availableIcons, setAvailableIcons] = useState<string[]>([]);
	const [selectedIcon, setSelectedIcon] = useState<string>("");

	function onUrlChange(
		ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	): void {
		setLoaded(false);
		setUrl(ev.target.value);
	}

	async function loadShortcutMenu(): Promise<void> {
		setAvailableIcons(await window.api.getAvailableIcons(url));
		setLoaded(true);
	}

	async function createShortcut(): Promise<void> {
		await window.api.createShortcut({
			url,
			name,
			icon: selectedIcon,
		});
	}

	const shortcutMenu = (
		<ShortcutSelection>
			<NameSelection setName={setName} />
			<IconSelection
				selectedIcon={selectedIcon}
				setSelectedIcon={setSelectedIcon}
				availableIcons={availableIcons}
			/>
			<CreateShortcutButton createShortcut={createShortcut} />
		</ShortcutSelection>
	);

	return (
		<>
			<Navbar />
			<Container maxWidth="lg" sx={{ my: 3 }}>
				<UrlEntry
					loadShortcutMenu={loadShortcutMenu}
					onUrlChange={onUrlChange}
				/>
				{loaded ? shortcutMenu : null}
			</Container>
		</>
	);
}
