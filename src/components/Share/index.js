import React from "react"
import {Flex, Box} from "@rebass/grid"
import styled from "styled-components"

import LinkedIn from "../../images/icons/linkedin.svg"
import Facebook from "../../images/icons/facebook.svg"
import Twitter from "../../images/icons/twitter.svg"

const Share = ({url}) => (
	<Flex>
		{social.map((sm, index) => (
			<Button 
				as="button" 
				key={index}
				mr={index !== social.length - 1 ? 2 : 0}
				onClick={() => alert(`Share on ${url}`)}
			>
				<img src={sm} alt={`Share Post on ${sm}`} />
			</Button>
		))}
	</Flex>
)

export default Share

const social = [LinkedIn, Twitter, Facebook]

const Button = styled(Box)`
  border: none;
  background: transparent;
`