import React from 'react'
import PropTypes from 'prop-types'
import { TitleContainer } from './style'

Title.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string
}

export function Title ({ title, icon, className }) {
  return (
    <TitleContainer>
      <h1 className={className} >
        {title}
        {icon ? <img src={icon} alt="Icone chaves fechadas" /> : null}
      </h1>
    </TitleContainer>
  )
}
