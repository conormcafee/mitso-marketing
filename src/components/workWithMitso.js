import React from "react"
import { navigate } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"
import { BLACK } from "../variables"
import Button from "../components/button"
import Container from "../components/container"
import { ServiceLink } from "./ServiceLink"

import Icon01 from "../images/icons/web-design.svg"
import Icon02 from "../images/icons/digital-marketing.svg"
import Icon03 from "../images/icons/social-media.svg"
import Icon04 from "../images/icons/visual.svg"
import Icon05 from "../images/icons/event-management.svg"
import Icon06 from "../images/icons/pr.svg"

const IconPicker = number => {
  let icon

  switch (number) {
    case 1:
      icon = Icon01
      break
    case 2:
      icon = Icon02
      break
    case 3:
      icon = Icon03
      break
    case 4:
      icon = Icon04
      break
    case 5:
      icon = Icon05
      break
    case 6:
      icon = Icon06
      break
    default:
      icon = Icon01
      break
  }
  return icon
}

const WorkWithMitso = ({ data }) => {
  const services = data.allMarkdownRemark.edges
  const intro = data.file.childMarkdownRemark.frontmatter.intro
  return (
    <Box as="section" bg={BLACK} p={[3, 4]} mx={-2}>
      <Container>
        <Flex flexWrap="wrap" alignItems="center" py={[3, 4]}>
          <Box width={[1, 1, 1 / 3]} order={[1, 1, 2]} px={[3, 4]} mb={[3, 4]}>
            <Box as="h2" color="white" mb={3}>
              Work with MiTSO
            </Box>
            <Box as="p" color="white" mt={0} mb={4}>
              {intro}
            </Box>
            <Button onClick={() => navigate("/work-with-mitso")}>
              Start Project
            </Button>
          </Box>
          <Box width={[1, 1, 2 / 3]} order={[2, 2, 1]} px={2}>
            <WorkBox flexWrap="wrap">
              {services.map((service, index) => (
                <ServiceLink
                  key={index}
                  title={service.node.frontmatter.title}
                  icon={IconPicker(service.node.frontmatter.icon)}
                  url={service.node.fields.slug}
                />
              ))}
            </WorkBox>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default () => (
  <StaticQuery
    query={servicesQuery}
    render={data => <WorkWithMitso data={data} />}
  />
)

const servicesQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Services" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            icon
          }
        }
      }
    }
    file(name: { eq: "workWithMitso" }) {
      childMarkdownRemark {
        frontmatter {
          intro
        }
      }
    }
  }
`

const WorkBox = styled(Flex)`
  background-color: ${props => (props.bg ? `${props.bg}` : `transparent`)};
  border-radius: 8px;
  box-shadow: ${props =>
    props.bg ? `-4px 6px 4px 0 rgba(0, 0, 0, 0.1)` : `none`};

  h3 {
    text-align: center;
  }
`

// const ServiceLink = styled(Link)`
//   width: 100%;
//   padding: 24px;
//   background: white;
//   text-decoration: none;

//   &:hover ${Title} {
//     color: ${ACCENT};
//   }
// `
