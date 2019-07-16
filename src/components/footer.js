import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { Flex } from "@rebass/grid"
import Logo from "../images/mitso-logo.svg"
import Facebook from "../images/icons/facebook.svg"
import Twitter from "../images/icons/twitter.svg"
import LinkedIn from "../images/icons/linkedin.svg"
import { FONT_BOLD, BLACK, ACCENT } from "../variables"

const Footer = ({ data, services }) => {
  const facebook = data.file.childMarkdownRemark.frontmatter.facebook
  const twitter = data.file.childMarkdownRemark.frontmatter.twitter
  const linkedin = data.file.childMarkdownRemark.frontmatter.linkedin
  return (
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
        {services.services.map((item, index) => (
          <FooterLink small="true" key={index} to={item.node.fields.slug}>
            {item.node.frontmatter.title}
          </FooterLink>
        ))}
      </Flex>
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
        {facebook && (
          <SocialLink href={facebook} target="_blank">
            <img src={Facebook} alt="Facebook" />
          </SocialLink>
        )}
        {twitter && (
          <SocialLink href={twitter} target="_blank">
            <img src={Twitter} alt="Twitter" />
          </SocialLink>
        )}
        {linkedin && (
          <SocialLink href={linkedin} target="_blank">
            <img src={LinkedIn} alt="LinkedIn" />
          </SocialLink>
        )}
      </Flex>
    </Wrapper>
  )
}

export default services => (
  <StaticQuery
    query={servicesQuery}
    render={data => <Footer data={data} services={services} />}
  />
)

const servicesQuery = graphql`
  query {
    file(name: { eq: "socialMedia" }) {
      childMarkdownRemark {
        frontmatter {
          facebook
          twitter
          linkedin
        }
      }
    }
  }
`

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
const SocialLink = styled.a`
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
    title: "Our Work",
    url: "/our-work",
  },
  {
    title: "Work with MiTSO",
    url: "/work-with-mitso",
  },
]
