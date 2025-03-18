import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { BrowserRouter } from 'react-router-dom'
import {  ThemeContextProvider} from './Context/index.tsx'

createRoot(document.getElementById('root')!).render(
    <ThemeContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeContextProvider>
)
