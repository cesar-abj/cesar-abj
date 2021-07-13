import React, { createContext } from 'react'
import { themes } from '../components/UI/themes'
import PropTypes from 'prop-types'

export const ThemeContext = createContext({})

ThemeProvider.propTypes = {
  children: PropTypes.node
}

export function ThemeProvider (props) {
  return (
    <ThemeContext.Provider value={themes}>
      {props.children}
    </ThemeContext.Provider>
  )
}
