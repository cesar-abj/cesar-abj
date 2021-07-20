import React, { createContext, useState } from 'react'
import { themes } from '../components/UI/themes'
import PropTypes from 'prop-types'

export const ThemeContext = createContext()
export const UpdateThemeContext = createContext()

ThemeProvider.propTypes = {
  children: PropTypes.node
}

export function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(themes.dark)

  function toggleTheme () {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)
  }
  return (
    <ThemeContext.Provider value={theme}>
      <UpdateThemeContext.Provider value={toggleTheme}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  )
}
