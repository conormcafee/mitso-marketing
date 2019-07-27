import React from "react"
import { Flex, Box } from "@rebass/grid"
import { Link } from "gatsby"
import { FONT_BOLD, BLACK, ACCENT } from "../../variables"
import styled from "styled-components"

const ServiceLink = ({ url, title, icon }) => (
  <Wrapper px={2} width={[1 / 3, 1 / 3, "auto"]}>
    <CustomLink to={url}>
      <Service
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={3}
        px={3}
      >
        <Icon src={icon} alt={`${title} Icon`} />
        <Title as="span" mt={[1, 1, 3]}>
          {title}
        </Title>
      </Service>
    </CustomLink>
  </Wrapper>
)

export default ServiceLink

ServiceLink.defaultProps = {
  url: "/",
}

const Wrapper = styled(Box)`
  position: relative;
  z-index: 1;
`

const Service = styled(Flex)`
  border-radius: 7px;
`

const CustomLink = styled(Link)`
  text-decoration: none;
`

const Icon = styled.img`
  height: 44px;
  width: 44px;
  @media only screen and (min-width: 768px) {
    height: 75px;
    width: 75px;
  }
`
const Title = styled(Box)`
  font-family: ${FONT_BOLD};
  color: ${BLACK};
  font-size: 8px;
  text-align: center;

  &:hover {
    color: ${ACCENT};
  }

  @media only screen and (min-width: 360px) {
    font-size: 10px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`
