import styled from 'styled-components'
import { convertPixelToRem } from '../UI/mixins'

export const HomeContainer = styled.div`
  margin: 1.5rem 1rem;

  @media screen and (min-width: ${convertPixelToRem(475)}){
    margin: 1.5rem 2rem;
  }

  @media screen and (min-width: ${convertPixelToRem(768)}){
    margin: 1.5rem 3rem;
  }

  @media screen and (min-width: ${convertPixelToRem(1024)}){
    margin: 1.5rem 4rem;
  }

  .home__subtitle{
    color: ${props => props.theme.textColor};
    font-size: 1rem;
    font-weight: 400;
  }
`
