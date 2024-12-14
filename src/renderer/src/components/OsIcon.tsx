import { SvgIcon } from "@mui/material";
import linuxIcon from "../assets/linux.svg?react";
import win32Icon from "../assets/windows.svg?react";
import appleIcon from "../assets/apple.svg?react";

const platformIconMapper = {
	linux: linuxIcon,
	win32: win32Icon,
	darwin: appleIcon,
};

// TODO
function getPlatform(): string {
	return "darwin";
}

export default function OsIcon(): JSX.Element {
	const platformIcon = platformIconMapper[getPlatform()];

	return (
		<SvgIcon
			sx={{ mr: 2 }}
			fontSize="large"
			component={platformIcon}
			inheritViewBox
		/>
	);
}
