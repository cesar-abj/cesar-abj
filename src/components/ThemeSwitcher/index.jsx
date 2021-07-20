import React from 'react'
import { useUpdateTheme } from '../../hooks/useUpdateTheme'

export function ThemeSwitcher () {
  const toggleTheme = useUpdateTheme()

  return (
    <button onClick={toggleTheme} >change theme</button>
  )
}
