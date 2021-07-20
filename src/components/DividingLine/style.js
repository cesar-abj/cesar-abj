import styled from 'styled-components'
import { convertPixelToRem, dimensionsPixelToRem } from '../UI/mixins'

export const DivisionLineContainer = styled.div`
  align-items: center;
  display: flex;
  height: ${convertPixelToRem(10)};
  justify-content: space-around;
  margin: 1rem 0px;
  width: calc(100% - ${convertPixelToRem(42)});

  .division__line__right,
  .division__line__left{
  border-top: 1px solid ${props => props.theme.details};
  width: 47%;
}
`

export const DivisionDot = styled.div`
  background-color: ${props => props.theme.details};
  border-radius: 50%;
  display: grid;
  place-items: center;
  ${dimensionsPixelToRem(5, 5)}

  @media screen and (min-width: ${convertPixelToRem(400)}){
    ${dimensionsPixelToRem(10, 10)}
  }

  @media screen and (min-width: ${convertPixelToRem(800)}){
    ${dimensionsPixelToRem(15, 15)}
  }

  @media screen and (min-width: ${convertPixelToRem(1024)}){
    ${dimensionsPixelToRem(20, 20)}
  }
`
