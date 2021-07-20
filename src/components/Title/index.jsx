import React from 'react'
import PropTypes from 'prop-types'
import { TitleContainer } from './style'

Title.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
  Size: PropTypes.string.isRequired
}

export function Title ({ title, icon, className, Size }) {
  return (
    <TitleContainer>
      <Size className={className} >
        {title}
        {icon ? <img src={icon} alt="Sinal de chavetas fechadas" /> : null}
      </Size>
    </TitleContainer>
  )
}
