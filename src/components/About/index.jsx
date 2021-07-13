import React from 'react'
import { AboutContainer } from './styles'
import PropTypes from 'prop-types'

About.propTypes = {
  children: PropTypes.node
}

export function About ({ children }) {
  return (
    <AboutContainer>
      {children}
    </AboutContainer>
  )
}
