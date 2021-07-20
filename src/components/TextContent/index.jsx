import React from 'react'
import { TextContentContainer } from './style'
import PropTypes from 'prop-types'

TextContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export function TextContent ({ children, className }) {
  return (
    <TextContentContainer className={className}>
      <span>
        {children}
      </span>
    </TextContentContainer>
  )
}
