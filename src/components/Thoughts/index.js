import React from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Button from "../../components/button"
import { SECONDARY } from "../../variables"
import Container from "../../components/container"
import Thought from "../Thoughts/components/Thought"
import { StaticQuery, graphql, navigate } from "gatsby"
import DefaultImage from "../../images/mitso-default.png"

const navigatePage = page => navigate(page)

const Article = props => {
  const { index, node } = props
  const { title, mainImage, author, intro } = node.frontmatter
  const { slug } = node.fields
  const blogWidth = props.homepage ? [1, 1, 1 / 2] : [1, 1, 1 / 2, 1 / 3]

  return (
    <Thought
      key={index}
      title={title}
      author={author !== null ? author : "MiTSO Marketing"}
      text={intro}
      img={mainImage !== null ? mainImage : DefaultImage}
      link={slug}
      width={blogWidth}
      goTo={navigatePage}
    />
  )
}

const Thoughts = props => {
  const { data, additional } = props
  const homepage = additional.homepage
  const subPage = additional.subPage
  const thoughts = data.allMarkdownRemark.edges
  const navyWidth = homepage ? [1, 1, 2 / 3] : [1]
  const wrapping = homepage ? ["wrap", "wrap", "noWrap"] : "wrap"
  const blogCount = data.length
  const thoughtsIntro = additional.text

  return (
    <Container>
      <Flex flexWrap={["wrap", "wrap", "noWrap"]} as="section">
        {homepage && (
          <Box width={[1, 1, 1 / 3]} mb={4} px={[3, 4]} pt={4}>
            <SubTitle>Thoughts</SubTitle>
            <p>{thoughtsIntro}</p>
            <Button onClick={() => navigatePage("/thoughts")}>
              All Thoughts
            </Button>
          </Box>
        )}

        <NavyBackground isHomepage={homepage} width={navyWidth} p={3}>
          <Flex flexWrap={wrapping}>
            {thoughts
              .slice(0, homepage ? 2 : subPage ? 3 : blogCount)
              .map((thought, index) => (
                <Article
                  key={index}
                  index={index}
                  homepage={homepage}
                  subPage={subPage}
                  {...thought}
                />
              ))}
          </Flex>
        </NavyBackground>
      </Flex>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={thoughts}
    render={data => <Thoughts data={data} additional={props} />}
  />
)

const thoughts = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author
            intro
            date
            mainImage
          }
        }
      }
    }
  }
`

const NavyBackground = styled(Box)`
  background-color: ${SECONDARY};
  position: relative;

  border-radius: ${props => !props.isHomepage && "8px"};

  @media only screen and (min-width: 768px) {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: ${props => (props.isHomepage ? "0px" : "8px")};
    border-bottom-right-radius: ${props => (props.isHomepage ? "0px" : "8px")};
  }
`

const SubTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
`
