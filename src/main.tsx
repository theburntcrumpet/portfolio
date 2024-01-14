import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.ts'
import App from './App'
import CursorParticles from './components/CursorParticles.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CursorParticles/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
