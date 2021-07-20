import React from 'react'
import { GlobalStyle } from './components/GlobalStyle'
import { Home } from './components/Home'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { useTheme } from './hooks/useTheme'

export default function App () {
  const theme = useTheme()
  return (
    <div style={{ width: '100%' }}>
      <ThemeSwitcher />
      <GlobalStyle theme={theme} />
      <Home />
    </div >
  )
}
