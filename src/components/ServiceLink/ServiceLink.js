import React from "react"
import { Flex, Box } from "@rebass/grid"
import { Link } from "gatsby"
import { FONT_BOLD, BLACK, ACCENT } from "../../variables"
import styled from "styled-components"

const ServiceLink = ({ url, title, icon }) => (
  <Box width={[1, 1, 1 / 2]} px={2} pb={3}>
    <CustomLink to={url}>
      <Service bg="white" alignItems="center" py={3} px={3}>
        <Icon src={icon} alt={`${title} Icon`} />
        <Title as="span" ml={3}>
          {title}
        </Title>
      </Service>
    </CustomLink>
  </Box>
)

export default ServiceLink

ServiceLink.defaultProps = {
  url: "/",
}

const Service = styled(Flex)`
  border-radius: 7px;
`

const CustomLink = styled(Link)`
  text-decoration: none;
`

const Icon = styled.img`
  height: 75px;
  width: 75px;
`
const Title = styled(Box)`
  font-family: ${FONT_BOLD};
  color: ${BLACK};

  &:hover {
    color: ${ACCENT};
  }
`
