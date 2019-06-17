import React from "react"
import styled from "styled-components"
import { Flex } from "@rebass/grid"

import BulletPoint from "../../images/icons/bullet-point.svg"

const Services = ({ services }) => (
  <List as="ul" flexWrap="wrap" mb={5}>
    {services.map((item, index) => (
      <Flex as="li" width={[1, 1, 1 / 2]} key={Date.now() + index}>
        <Flex alignItems="center" py={3}>
          <Icon src={BulletPoint} alt="Bullet Point" />
          <Text>{item.Service}</Text>
        </Flex>
      </Flex>
    ))}
  </List>
)

export default Services

const List = styled(Flex)`
  background-color: white;
  border-radius: 8px;
`

const Icon = styled.img`
  max-width: 50px;
  height: auto;
`

const Text = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 32px;
`
