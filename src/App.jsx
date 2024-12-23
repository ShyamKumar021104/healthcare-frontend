import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme/theme'
import Nav from './components/NavBar/Nav'

function App() {
  const route = createBrowserRouter([
    {path:"/",element:<Nav></Nav>}
  ])

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={route}></RouterProvider>
    </ThemeProvider>
    
  )
}

export default App
