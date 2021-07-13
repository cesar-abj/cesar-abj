import React from 'react'
import { PresentationContainer } from './style'
import { Title } from '../Title'

import iconBrackets from '../../assets/brackets.svg'
import { PhotoUser } from '../PhotoUser'

export function Presentation () {
  return (
    <PresentationContainer>
      <Title title='Bem vindo !' />
      <Title
        title='Desenvolvedor front end'
        className='home__title'
        img={iconBrackets}
      />
      <Title
        className='home__subtitle'
        title='Mega interessado em UI UX e animações, usuario de React.Js e Sass .'
      />
      <PhotoUser />

    </PresentationContainer>
  )
}
