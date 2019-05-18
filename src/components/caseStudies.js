import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import CaseStudy from "./caseStudy"
import MitsoCircle from "../images/backgrounds/mitso-circle.svg"
import Button from "../components/button"
import Container from "../components/container"
import { StaticQuery, graphql } from "gatsby"
import { SECONDARY } from "../variables"

const ListCaseStudies = props => {
  const { data, moreCaseStudies, homepage } = props
  const caseStudies = data.allMarkdownRemark.edges

  const _renderCaseStudies = data => {
    return (
      <React.Fragment>
        {data.map((study, index) => (
          <CaseStudy {...study} key={index} />
        ))}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Container>
        <Circle src={MitsoCircle} alt="Circle Page Styling" />
        <Flex justifyContent={["flex-start", "flex-start", "flex-end"]}>
          {homepage && (
            <Box width={[1, 1, 1 / 3]} px={[3, 4]}>
              <h2>Our Work</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                aliquam malesuada libero, quis sodales lorem faucibus sit a
              </p>
              <Button>All Case Studies</Button>
            </Box>
          )}
        </Flex>
        <CaseStudies
          as="section"
          flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
          my={props.my ? props.my : 5}
        >
          {_renderCaseStudies(caseStudies)}
        </CaseStudies>
      </Container>

      <Container>
        {moreCaseStudies && (
          <MoreCaseStudies
            as="section"
            flexWrap={["wrap", "wrap", "nowrap"]}
            mb={6}
          >
            <Box width={[1, 1, 1 / 3]} px={[3, 4]}>
              <h3>Others We've Worked With</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                aliquam malesuada libero, quis sodales lorem faucibus sit a
              </p>
              <Button>All Case Studies</Button>
            </Box>
            <Box width={[1 / 2, 1 / 2, 1 / 3]} px={[3, 4]} mb={[4, 0]}>
              <Flex flexWrap="wrap">
                {[0, 1, 2].map(index => (
                  <Box key={index} width={1 / 3} mb={4} px={[2, 3]}>
                    <SmallLogo
                      key={index}
                      src="https://placehold.it/200x200/9CE9CF/9CE9CF"
                      alt="Logo"
                    />
                  </Box>
                ))}

                {[3, 4, 5].map(index => (
                  <Box key={index} width={1 / 3} px={[2, 3]}>
                    <SmallLogo
                      key={index}
                      src="https://placehold.it/200x200/9CE9CF/9CE9CF"
                      alt="Logo"
                    />
                  </Box>
                ))}
              </Flex>
            </Box>

            <Box width={[1 / 2, 1 / 2, 1 / 3]} px={[3, 4]} mb={[4, 0]}>
              <Flex flexWrap="wrap">
                {[0, 1, 2].map(index => (
                  <Box key={index} width={1 / 3} mb={4} px={[2, 3]}>
                    <SmallLogo
                      key={index}
                      src="https://placehold.it/200x200/9CE9CF/9CE9CF"
                      alt="Logo"
                    />
                  </Box>
                ))}

                {[3, 4, 5].map(index => (
                  <Box key={index} width={1 / 3} px={[2, 3]}>
                    <SmallLogo
                      key={index}
                      src="https://placehold.it/200x200/9CE9CF/9CE9CF"
                      alt="Logo"
                    />
                  </Box>
                ))}
              </Flex>
            </Box>
          </MoreCaseStudies>
        )}
      </Container>
    </React.Fragment>
  )
}

ListCaseStudies.defaultProps = {
  moreCaseStudies: false,
}

export default props => (
  <StaticQuery
    query={caseStudies}
    render={data => <ListCaseStudies data={data} {...props} />}
  />
)

const caseStudies = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Case Study" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            intro
          }
        }
      }
    }
  }
`

const CaseStudies = styled(Flex)`
  position: relative;
`

const Circle = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  max-width: 100%;
  transform: translate(-25%, 10%);
`

const SmallLogo = styled.img`
  max-width: 100%;
  border-radius: 100%;
  border: 3px solid ${SECONDARY};
`

const MoreCaseStudies = styled(Flex)`
  position: relative;
  z-index: 1;
`
