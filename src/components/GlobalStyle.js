import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;

    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bg};
  }
`
