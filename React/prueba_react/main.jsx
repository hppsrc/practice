import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'
import "./src/style.css"

const root = createRoot( document.getElementById('app') )

root.render(
		<App />
)