import React from 'react'
import { Container } from './styles'

const SidebarItem = ({ Text, ...rest }) => {
  return (
    <Container {...rest}>
      {Text}
    </Container>
  )
}

export default SidebarItem