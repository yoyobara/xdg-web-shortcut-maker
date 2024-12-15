import { Paper } from "@mui/material";
import { ReactNode } from "react";

interface ShortcutSelectionProps {
	children: ReactNode;
}

export default function ShortcutSelection({
	children,
}: ShortcutSelectionProps): JSX.Element {
	return (
		<Paper square={false} sx={{ p: 2 }}>
			{children}
		</Paper>
	);
}
