import { useState } from 'react'
import { Navbar, Sidebar, Feed, Rightbar } from '/src/index'
import Add from '/src/components/Add/index'
import {
	Container,
	Box,
	CssBaseline,
	Stack,
	createTheme,
	ThemeProvider,
} from '@mui/material'

export default function App() {
	const [mode, setMode] = useState('light')

	const darkTheme = createTheme({
		palette: {
			mode,
			primary: {
				main: '#1976D2',
				contrastText: '#fff',
			},
			secondary: {
				main: '#000000',
			},
		},
	})

	return (
		<ThemeProvider theme={darkTheme}>
			<Box>
				<CssBaseline />
				<Navbar />

				<Container maxWidth='xl'>
					<Stack
						direction={'row'}
						spacing={2}
						justifyContent={'space-between'}
					>
						<Sidebar
							mode={mode}
							setMode={setMode}
						/>
						<Feed />
						<Rightbar />
					</Stack>
					<Add />
				</Container>
			</Box>
		</ThemeProvider>
	)
}
