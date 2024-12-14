import { SvgIcon } from "@mui/material";
import linuxIcon from "../assets/linux.svg?react";
import win32Icon from "../assets/windows.svg?react";
import appleIcon from "../assets/apple.svg?react";

export default function OsIcon(): JSX.Element {
	let icon: typeof linuxIcon;

	switch (window.api.platform) {
		case "linux":
			icon = linuxIcon;
			break;

		case "win32":
			icon = win32Icon;
			break;

		default:
			icon = appleIcon;
	}

	return (
		<SvgIcon
			sx={{ mr: 2 }}
			fontSize="large"
			component={icon}
			inheritViewBox
		/>
	);
}
