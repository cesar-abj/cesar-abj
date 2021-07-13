import React from 'react'
import { PhotoUserContainer } from './style'
import bgPhotoUser from '../../assets/background_foto.svg'

export function PhotoUser () {
  return (
    <PhotoUserContainer>
      <img
        src={bgPhotoUser}
        alt='Fundo colorido com foto do usuario'
        className='photo__user__background'
      />
    </PhotoUserContainer>
  )
}
