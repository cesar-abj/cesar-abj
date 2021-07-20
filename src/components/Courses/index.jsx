import React from 'react'
import PropTypes from 'prop-types'
import { DividingLine } from '../DividingLine'
import { CoursesContainer } from './style'
import { Title } from '../Title'
import { TextContent } from '../TextContent'
import { DotSteps } from '../DotSteps'

Courses.propTypes = {
  children: PropTypes.node
}

export function Courses () {
  return (
    <CoursesContainer>
      <Title
        title='Cursos'
        Size='h3'
      />
      <TextContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aspernatur delectus temporibus obcaecati odio dolore cum sed ea perferendis quas,
        voluptatum, impedit minus maxime illo unde est fugit odit? Doloribus,
        tempora incidunt odit sunt a est amet doloremque eveniet laboriosam enim,
        itaque facere temporibus. Dolores doloremque dicta ipsum fuga porro ab voluptate nihil
        architecto. Quod quo impedit illum possimus facere unde, veritatis provident ipsum,
        dolores quam atque cum, exercitationem repellat est eos fuga qui voluptates laborum ea nisi
        iusto earum neque porro veniam. Repudiandae veritatis nulla facere quia possimus nesciunt
        nobis eum, eligendi unde doloribus quod provident sapiente. Sed, labore accusantium!
      </TextContent>
      <DotSteps />
      <DividingLine />
    </CoursesContainer>
  )
}
