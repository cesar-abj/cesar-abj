import React from 'react'
import { DotStepsContainer, LineSteps } from './style'
import { DivisionDot } from '../DividingLine/style'
import { useTheme } from '../../hooks/useTheme'

export function DotSteps () {
  const theme = useTheme()
  return (
    <DotStepsContainer>
      <div>
        <DivisionDot theme={theme} />
        <LineSteps theme={theme} />
      </div>

      <div className='dot__steps__text'>
        <span className='division__text' >Texto</span>
        <span className='line__steps__text' >Texto</span>
      </div>
    </DotStepsContainer>
  )
}
