import React from 'react'
import { PresentationContainer } from './style'
import { Title } from '../Title'
import { TextContent } from '../TextContent'

import iconBrackets from '../../assets/brackets.svg'
import { PhotoUser } from '../PhotoUser'

export function Presentation () {
  return (
    <PresentationContainer>
      <Title Size='h2' title='Bem vindo !' />

      <Title
        Size='h1'
        title='Desenvolvedor front end'
        className='home__title'
        icon={iconBrackets}
      />

      <TextContent className='home__subtitle'>
        Mega interessado em UI UX e animações, usuario de React.Js e Sass .
      </TextContent>

      <PhotoUser />
    </PresentationContainer>
  )
}
