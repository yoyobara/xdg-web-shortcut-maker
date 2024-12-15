import { ImageList, ImageListItem } from "@mui/material";

function SelectableIcon({ src }: { src: string }): JSX.Element {
	return (
		<ImageListItem>
			<img src={src} />
		</ImageListItem>
	);
}

export default function IconSelection(): JSX.Element {
	return (
		<ImageList
			cols={3}
			gap={20}
			sx={{ height: "500px", overflowY: "scroll" }}
		>
			<SelectableIcon src="https://placehold.co/180" />
			<SelectableIcon src="https://placehold.co/180" />
			<SelectableIcon src="https://placehold.co/180" />
			<SelectableIcon src="https://placehold.co/64" />
			<SelectableIcon src="https://placehold.co/32" />
		</ImageList>
	);
}
