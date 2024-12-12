import { Container, CssBaseline, Typography } from '@mui/material'
import NavBar from './NavBar'
import UrlEntry from './UrlEntry'
import { useState } from 'react'
import ShortcutSelection from './ShortcutSelection'

export function App(): JSX.Element {
	const [loaded, setLoaded] = useState<boolean>(false);
	const [url, setUrl] = useState<string>('');
	const [availableIcons, setAvailableIcons] = useState<string[]>([]);

	console.log(availableIcons);

	return (
		<>
			<CssBaseline />
			<NavBar />
			<Container>
				<UrlEntry url={url} setUrl={setUrl} setLoaded={setLoaded} setAvailableIcons={setAvailableIcons}/>
				{loaded ? (
					<ShortcutSelection availableIcons={availableIcons} />
				) : (
					<Typography variant="h2" color="info" sx={{ opacity: 0.4 }}>
						Create your own revolutionary shortcuts!
					</Typography>
				)}
			</Container>
		</>
	)
}
