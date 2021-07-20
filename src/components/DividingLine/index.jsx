import React from 'react'
import { DivisionLineContainer, DivisionDot } from './style'
import { useTheme } from '../../hooks/useTheme'

export function DividingLine () {
  const theme = useTheme()
  return (
    <DivisionLineContainer theme={theme} >
      <div className='division__line__left'></div>
      <DivisionDot theme={theme} />
      <div className='division__line__right'></div>
    </DivisionLineContainer >
  )
}
