import styled from 'styled-components'

export const PresentationContainer = styled.header`

  h2{
    font-size: 24px;
    font-weight: 600;
    margin: 20px 0px;
  }

  .home__title{
    align-items: center;
    display: flex;
    font-size: 20px;
    font-weight: 700;
    gap: 1rem;
    margin: 10px 0px;

    img{
      height: 30px;
      width: 40px;
    }
  }

  .home__subtitle{
    filter: opacity(.8);
  }
`
