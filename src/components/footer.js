import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Flex } from "@rebass/grid"
import Logo from "../images/mitso-logo.svg"
import { FONT_BOLD, BLACK, ACCENT } from "../variables"

const Footer = ({ services }) => (
  <Wrapper
    flexDirection="column"
    flexWrap="wrap"
    alignItems={["flex-start", "flex-start", "center"]}
    justifyContent={["flex-start", "flex-start", "center"]}
    pt={5}
    pb={3}
    mt={3}
  >
    <Image src={Logo} alt="MiTSO Marketing" />
    <Flex as="nav" flexWrap="wrap" mt={2}>
      {QUICK_LINKS.map((item, index) => (
        <FooterLink key={index} to={item.url}>
          {item.title}
        </FooterLink>
      ))}
    </Flex>
    <Flex as="nav" flexWrap="wrap">
      {services.map((item, index) => (
        <FooterLink small="true" key={index} to={item.node.fields.slug}>
          {item.node.frontmatter.title}
        </FooterLink>
      ))}
    </Flex>
  </Wrapper>
)

export default Footer

const Wrapper = styled(Flex)`
  width: 100%;
  font-size: 14px;
  border-bottom: 5px solid ${ACCENT};
`

const FooterLink = styled(Link)`
  display: inline-block;
  font-family: ${FONT_BOLD};
  color: ${BLACK};
  font-size: ${props => (props.small ? `10px` : `16px`)};
  padding: 16px;
  text-decoration: none;

  &:hover {
    color: ${ACCENT};
  }

  @media only screen and (min-width: 768px) {
    font-size: ${props => (props.small ? `14px` : `20px`)};
  }
`

const Image = styled.img`
  display: block;
  padding-left: 16px;
  padding-right: 16px;

  @media only screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`

const QUICK_LINKS = [
  {
    title: "Who We Are",
    url: "/who-we-are",
  },
  {
    title: "Thoughts",
    url: "/thoughts",
  },
  {
    title: "Case Studies",
    url: "/case-studies",
  },
  {
    title: "Work with MiTSO",
    url: "/work-with-mitso",
  },
]
