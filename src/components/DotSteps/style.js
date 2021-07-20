import styled from 'styled-components'
import { convertPixelToRem } from '../UI/mixins'

export const DotStepsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;

  div{
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    div{
      margin-top: .3rem;
    }
  }

  .dot__steps__text{
    margin-left: 1rem;
  }
`

export const LineSteps = styled.div`
  border: ${convertPixelToRem(1)} solid ${props => props.theme.details};
  height: ${convertPixelToRem(100)};
  width: ${convertPixelToRem(1)};
`
