import { FormControlLabel, Switch } from "@mui/material";
import { SyntheticEvent, useState } from "react";

export function App(): JSX.Element {
	const [isChecked, setChecked] = useState(true);

	const handleSwitchChange = (_: SyntheticEvent, checked: boolean) => {
		setChecked(checked);
	}

	return (
		<div>
			<FormControlLabel checked={isChecked} onChange={handleSwitchChange} control={<Switch/>} label="hello!"/>
			<h1>the switch is {isChecked ? "checked" : "not checked"}</h1>
		</div>
	)
}
