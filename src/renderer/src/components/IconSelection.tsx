import { Box, ImageList, ImageListItem, Typography, useTheme } from "@mui/material";

function SelectableIcon({src}: {src: string}): JSX.Element {
	return (
		<ImageListItem sx={{
			borderWidth: "5px",
			borderStyle: "solid",
			borderColor: useTheme().palette.secondary.main,
			margin: "10px"
		}}>
		  <img
			src={src}
			loading="lazy"
		  />
		</ImageListItem>
	)
}

export default function IconSelection(): JSX.Element {
	return (
		<Box my={4}>
			<Typography variant="h4" fontWeight="bold" color="secondary">
				Pick the icon that fits the most
			</Typography>
			<ImageList cols={3} variant="standard" sx={{height: 500, overflowY: "scroll"}}>
				<SelectableIcon src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185630/Asset-2-6-300x300.png"/>
				<SelectableIcon src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185630/Asset-2-6-300x300.png"/>
				<SelectableIcon src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185630/Asset-2-6-300x300.png"/>
				<SelectableIcon src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185630/Asset-2-6-300x300.png"/>
				<SelectableIcon src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185630/Asset-2-6-300x300.png"/>
				<SelectableIcon src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185630/Asset-2-6-300x300.png"/>
				<SelectableIcon src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185630/Asset-2-6-300x300.png"/>
				<SelectableIcon src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185630/Asset-2-6-300x300.png"/>
				<SelectableIcon src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185630/Asset-2-6-300x300.png"/>
				<SelectableIcon src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185630/Asset-2-6-300x300.png"/>
				<SelectableIcon src="https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185630/Asset-2-6-300x300.png"/>
			</ImageList>
		</Box>
	)
}
