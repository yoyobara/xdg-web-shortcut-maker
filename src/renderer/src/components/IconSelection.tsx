import { Box, ImageList, ImageListItem, Typography, useTheme } from "@mui/material";

function SelectableIcon({src, isSelected, setSelected}): JSX.Element {
	const click = () => {
		setSelected();
	}

	return (
		<ImageListItem sx={{
			borderWidth: isSelected ? "15px" : "4px",
			borderStyle: "solid",
			borderColor: useTheme().palette.secondary.main,
			margin: "10px",
		}}>
		  <img
			onClick={click}
			width={64}
			height={64}
			src={src}
			loading="lazy"
		  />
		</ImageListItem>
	)
}

export default function IconSelection({availableIcons, selectedIcon, setSelectedIcon}): JSX.Element {
	return (
		<Box my={4}>
			<Typography variant="h4" fontWeight="bold" color="secondary">
				Pick the icon that fits the most
			</Typography>
			<ImageList cols={3} variant="standard" sx={{height: 300, overflowY: "scroll"}}>
				{
					availableIcons.map((iconUrl: string, index: number) => <SelectableIcon key={index} src={iconUrl} isSelected={selectedIcon === iconUrl} setSelected={() => setSelectedIcon(iconUrl)}/>)
				}
			</ImageList>
		</Box>
	)
}
