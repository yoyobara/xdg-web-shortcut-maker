import { Container, CssBaseline, Typography } from '@mui/material'
import NavBar from './NavBar'
import UrlEntry from './UrlEntry'
import { useState } from 'react'
import ShortcutSelection from './ShortcutSelection'

export function App(): JSX.Element {
	const [loaded, setLoaded] = useState<boolean>(true);

	return (
		<>
			<CssBaseline />
			<NavBar />
			<Container>
				<UrlEntry />
				{loaded ? (
					<ShortcutSelection />
				) : (
					<Typography variant="h2" color="info" sx={{ opacity: 0.4 }}>
						Create your own revolutionary shortcuts!
					</Typography>
				)}
			</Container>
		</>
	)
}
