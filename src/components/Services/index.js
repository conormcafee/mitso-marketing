import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"

import BulletPoint from "../../images/icons/bullet-point.svg"

const Services = ({ services }) => (
  <List
    as="ul"
    flexDirection="column"
    css={{ maxWidth: "450px" }}
    mx="auto"
    mb={5}
  >
    {services.map((item, index) => (
      <ListItem as="li" key={Date.now() + index} px={[3, 4]}>
        <Flex alignItems="center" py={3}>
          <Icon src={BulletPoint} alt="Bullet Point" />
          <Text>{item.Service}</Text>
        </Flex>
      </ListItem>
    ))}
  </List>
)

export default Services

const List = styled(Flex)`
  background-color: white;
  border: 2px solid #e6e6e6;
  box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`

const ListItem = styled(Box)`
  :not(:first-child) {
    border-top: 2px solid #e6e6e6;
  }
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
