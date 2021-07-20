import React from 'react'
import { Presentation } from '../Presentation'
import { About } from '../About'
import { HomeContainer } from './style'
import { Courses } from '../Courses'

export function Home () {
  return (
    <HomeContainer>
      <Presentation />
      <About />
      <Courses />
    </HomeContainer>
  )
}
