import { Box, ImageList, ImageListItem, Typography, useTheme } from "@mui/material";

function SelectableIcon({src}: {src: string}): JSX.Element {
	return (
		<ImageListItem sx={{
			borderWidth: "5px",
			borderStyle: "solid",
			borderColor: useTheme().palette.secondary.main,
			margin: "10px",
		}}>
		  <img
			width={64}
			height={64}
			src={src}
			loading="lazy"
		  />
		</ImageListItem>
	)
}

export default function IconSelection({availableIcons}): JSX.Element {
	return (
		<Box my={4}>
			<Typography variant="h4" fontWeight="bold" color="secondary">
				Pick the icon that fits the most
			</Typography>
			<ImageList cols={3} variant="standard" sx={{height: 300, overflowY: "scroll"}}>
				{
					availableIcons.map((iconUrl: string) => <SelectableIcon src={iconUrl}/>)
				}
			</ImageList>
		</Box>
	)
}
