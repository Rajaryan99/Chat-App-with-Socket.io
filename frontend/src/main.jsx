import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react"
import App from './App.jsx'
import system from "./theme";
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider value={system}>
      <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
