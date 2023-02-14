import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './App.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
