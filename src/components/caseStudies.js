import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import CaseStudy from "./caseStudy"
import MitsoCircle from "../images/backgrounds/mitso-circle.svg"
import Button from "../components/button"
import Container from "../components/container"
import { StaticQuery, graphql, navigate } from "gatsby"

const ListCaseStudies = props => {
  const { data, moreCaseStudies, homepage, featured } = props
  const caseStudies = data.allMarkdownRemark.edges

  const [featuredCaseStudies, setFeaturedCaseStudies] = useState([])

  const intro = data.file.childMarkdownRemark.frontmatter.intro
  const others = data.file.childMarkdownRemark.frontmatter.others
  const clientLogos = data.file.childMarkdownRemark.frontmatter.clientLogos

  const [windowWidth, setWindowWidth] = useState(0)

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  })

  useEffect(() => {
    if (featured) {
      const fcs = []
      const getCaseStudy = (caseStudy, featuredCaseStudy) =>
        caseStudy.node.frontmatter.title === featured[featuredCaseStudy]
      caseStudies.map(
        caseStudy =>
          getCaseStudy(caseStudy, "caseStudy01") && fcs.push(caseStudy)
      )
      caseStudies.map(
        caseStudy =>
          getCaseStudy(caseStudy, "caseStudy02") && fcs.push(caseStudy)
      )
      caseStudies.map(
        caseStudy =>
          getCaseStudy(caseStudy, "caseStudy03") && fcs.push(caseStudy)
      )
      setFeaturedCaseStudies(fcs)
    }
  }, [])

  const _renderCaseStudies = data => (
    <React.Fragment>
      {data.map((study, index) => (
        <CaseStudy {...study} key={index} />
      ))}
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <Container>
        <Circle src={MitsoCircle} alt="Circle Page Styling" />
        <Flex justifyContent={["flex-start", "flex-start", "flex-end"]}>
          {homepage && (
            <CaseText width={[1, 1, 1 / 3]} px={[3, 4]}>
              <Heading>Our Work</Heading>
              <p>{intro}</p>
            </CaseText>
          )}
        </Flex>
        <CaseStudies as="section" flexWrap="wrap" my={props.my ? props.my : 3}>
          {_renderCaseStudies(
            featuredCaseStudies.length > 0 ? featuredCaseStudies : caseStudies
          )}
        </CaseStudies>
      </Container>

      <Container>
        {moreCaseStudies && (
          <MoreCaseStudies
            as="section"
            flexWrap={["wrap", "wrap", "nowrap"]}
            mb={[3, 3, 5]}
            pt={[5, 5, 0]}
            pb={[3, 3, 0]}
          >
            <CaseText width={[1, 1, 1 / 3]} px={[3, 4]}>
              <Heading>Others We've Worked With</Heading>

              <p>{others}</p>

              {windowWidth > 768 && (
                <Button onClick={() => navigate("/our-work")}>
                  View All Our Work
                </Button>
              )}
            </CaseText>
            <Box
              width={[1, 1, 2 / 3]}
              px={[3, 4]}
              mt={[0, 0, 4, 0]}
              mb={[4, 0]}
            >
              <Flex flexWrap="wrap">
                {clientLogos.map((item, index) => (
                  <Box key={index} width={[1 / 4, 1 / 6]} mb={4} px={[2, 3]}>
                    <SmallLogo key={index} src={item.Logo} alt="Client Logo" />
                  </Box>
                ))}
              </Flex>

              {windowWidth < 768 && (
                <Button onClick={() => navigate("/our-work")}>
                  View All Our Work
                </Button>
              )}
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
            mainImage
          }
        }
      }
    }
    file(name: { eq: "caseStudies" }) {
      childMarkdownRemark {
        frontmatter {
          intro
          others
          clientLogos {
            Logo
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
`

const MoreCaseStudies = styled(Flex)`
  position: relative;
  z-index: 1;
`

const Heading = styled.h2`
  font-size: 25px;
  margin: 0;
`

const CaseText = styled(Box)`
  p {
    margin-top: 0;
  }
`
