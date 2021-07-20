import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    background-color: ${props => props.theme.bg};
    box-sizing: border-box;
    color: ${props => props.theme.textColor};
    font-family: 'Nunito', sans-serif;
    margin: 0px;
    padding: 0px;
  }

  #root{
    display: flex;
    justify-content: center;
    margin: 0px auto;
    max-width: 1440px;
  }
`
