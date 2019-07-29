import React from "react"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"
import Container from "../components/container"
import { BLACK, SECONDARY, FONT_BOLD } from "../variables"
import { TAG_LINE } from "../data"

const Tagline = props => {
  const { centered } = props
  return (
    <Container>
      <TagLine
        as="section"
        centered={centered}
        mt={centered ? 5 : [4, 0]}
        mb={4}
        mx={centered ? `auto` : 0}
        width={[1, 1, 5 / 6, 2 / 3]}
      >
        <Flex
          width={1}
          flexWrap={["wrap", "nowrap"]}
          p={[3, 4]}
          justifyContent="space-between"
        >
          {TAG_LINE.map((item, index) => (
            <Box as="span" width={[1 / 2, "auto"]} key={index}>
              <Text>{item}</Text>
              <Text yellow>.</Text>
            </Box>
          ))}
        </Flex>
      </TagLine>
    </Container>
  )
}

export default Tagline

const Text = styled.span`
  font-family: ${FONT_BOLD};
  color: ${props => (props.yellow ? `${SECONDARY}` : `#ffffff`)};
  font-size: 20px;
  font-weight: 900;

  @media only screen and (min-width: 768px) {
    font-size: 25px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 30px;
  }
`

const TagLine = styled(Flex)`
  position: relative;
  background-color: ${BLACK};
  width: 100%;

  @media only screen and (min-width: 40em) {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: ${props => (props.centered ? `8px` : `0px`)};
    border-bottom-left-radius: ${props => (props.centered ? `8px` : `0px`)};

    &:before {
      content: "";
      display: ${props => (props.centered ? `none` : `block`)};
      background: ${BLACK};
      height: 100%;
      width: 250px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: -250px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }
`
