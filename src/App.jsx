import React, { useContext } from 'react'
import { GlobalStyle } from './components/GlobalStyle'
import { ThemeContext } from './providers/ThemeProvider'
import { Home } from './components/Home'

export default function App () {
  const theme = useContext(ThemeContext)
  return (
    <>
      <GlobalStyle theme={theme.dark} />
      <Home />
    </>
  )
}
