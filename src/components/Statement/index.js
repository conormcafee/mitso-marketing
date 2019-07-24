import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import { BLACK, SECONDARY } from "../../variables"

const Statement = ({ isStatement, statement, image }) => {
  const buildCircle = size => {
    if (size === "large") {
      return "200px"
    } else if (size === "medium") {
      return "100px"
    } else {
      return "50px"
    }
  }

  return (
    <Box px={isStatement ? [3, 4] : 0}>
      <Wrapper
        fullWidth={isStatement ? `1200px` : `800px`}
        p={[3, 4]}
        my={[4, 5]}
        mx="auto"
      >
        {isStatement && (
          <Cirlces alignItems="center" justifyContent="center">
            <Circle bg={image} size={buildCircle("large")} opacity="large" />
            <Circle size={buildCircle("medium")} opacity="medium" />
            <Circle size={buildCircle("small")} opacity="small" />
          </Cirlces>
        )}
        <StatementBox>
          <Text isStatement={isStatement}>
            {statement}
            <Dot>.</Dot>
          </Text>
        </StatementBox>
      </Wrapper>
    </Box>
  )
}

export default Statement

const Wrapper = styled(Box)`
  position: relative;
  width: 100%;
  max-width: ${props => props.fullWidth};
  background-color: ${BLACK};
  box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`

const Text = styled.h3`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 16px;
  line-height: 1.6;

  @media only screen and (min-width: 768px) {
    font-size: ${props => (props.isStatement ? `26px` : `20px`)};
  }
`

const Dot = styled.span`
  color: ${SECONDARY};
`
const Cirlces = styled(Flex)`
  position: absolute;
  top: 50px;
  left: -100px;
  transform: rotate(45deg);
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`

const Circle = styled(Box)`
  height: ${props => props.size};
  width: ${props => props.size};
  border-radius: ${props => props.size};
  background-color: #ffffff;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transform: rotate(-50deg);
  margin-right: 32px;
  opacity: ${props =>
    props.opacity === "large" ? 1 : props.opacity === "medium" ? `0.8` : `0.4`};
`

const StatementBox = styled(Flex)`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`

Statement.defaultProps = {
  isStatement: false,
}
