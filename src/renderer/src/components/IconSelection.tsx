import { ImageList, ImageListItem } from "@mui/material";

interface SelectableIconProps {
	src: string;
	selectedIcon: string;
	setSelectedIcon: React.Dispatch<React.SetStateAction<string>>;
}

interface IconSelectionProps {
	availableIcons: string[];
	selectedIcon: string;
	setSelectedIcon: React.Dispatch<React.SetStateAction<string>>;
}

function SelectableIcon({
	src,
	selectedIcon,
	setSelectedIcon,
}: SelectableIconProps): JSX.Element {
	const isSelected = selectedIcon === src;
	return (
		<ImageListItem sx={{ borderStyle: isSelected ? "dotted" : "none" }}>
			<img onClick={() => setSelectedIcon(src)} src={src} />
		</ImageListItem>
	);
}

export default function IconSelection({
	availableIcons,
	selectedIcon,
	setSelectedIcon,
}: IconSelectionProps): JSX.Element {
	return (
		<ImageList
			cols={3}
			gap={20}
			sx={{ height: "500px", overflowY: "scroll" }}
		>
			{availableIcons.map((iconSrc: string) => {
				return (
					<SelectableIcon
						selectedIcon={selectedIcon}
						setSelectedIcon={setSelectedIcon}
						src={iconSrc}
						key={iconSrc}
					/>
				);
			})}
		</ImageList>
	);
}
