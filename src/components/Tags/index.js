import React from "react"
import {Flex, Box} from "@rebass/grid"
import styled from "styled-components"
import { ACCENT } from "../../variables"

const Tags = ({tags}) => (
	<Flex 
		as="ul" 
		flexWrap="wrap"
		alignItems="center" 
		justifyContent="center"
	>
		{tags.map((tag, index) => (
			<Tag 
				as="li"
				key={index} 
				mx={[1,2]}
				mb={[1,2]}
				px={[3, 4]} 
				py={1}
			>{tag}</Tag>
		))}
	</Flex>
)

export default Tags

const Tag = styled(Box)`
  background: ${ACCENT};
  border-radius: 25px;
  color: #ffffff;
  font-size: 12px;

  @media only screen and (min-width: 600px) {
    font-size: 14px;
  }

`