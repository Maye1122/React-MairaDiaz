import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './estilos/index.scss'
import './estilos/ItemList.scss'
import './estilos/App.scss'
import './estilos/ItemDetails.scss'
import './estilos/Footer.scss'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
