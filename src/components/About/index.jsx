import React from 'react'
import { AboutContainer } from './style'
import { Title } from '../Title'
import { TextContent } from '../TextContent'
import { DividingLine } from '../DividingLine'

export function About (props) {
  return (
    <AboutContainer>
      <Title
        Size='h3'
        title='Sobre mim'
      />
      <TextContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam vel libero,
        tenetur neque deleniti ex enim nihil repellendus, ipsam mollitia amet maxime,
        expedita laborum nulla. Rerum, quidem excepturi! In esse qui tempore iusto fugiat
        accusantium laboriosam laborum incidunt, similique repudiandae repellendus quibusdam.
        Earum voluptatibus rem corporis libero autem molestias quidem laborum minima dolorum?
        Inventore expedita debitis reiciendis ipsum enim! Ex provident dolor aut odio natus
        quidem cum adipisci consequuntur rerum, beatae, nihil deleniti voluptatem ipsum!
        Beatae ipsa error nesciunt corrupti pariatur, iusto placeat alias exercitationem,
        cum cupiditate veniam quas, modi quo optio soluta id temporibus deleniti deserunt
        laboriosam nostrum?
      </TextContent>
      <DividingLine />
    </AboutContainer>
  )
}
