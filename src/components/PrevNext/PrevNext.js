import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { FONT_BOLD, BLACK, FONT_LIGHT, SECONDARY } from "../../variables"
import { Flex, Box } from "@rebass/grid"

const PrevNext = props => {
  const { data, slug, category } = props
  const a = data.allMarkdownRemark.edges
  const pages = a
    .filter(page => page.node.frontmatter.category === category)
    .sort((a, b) =>
      a.node.frontmatter.title > b.node.frontmatter.title
        ? 1
        : b.node.frontmatter.title > a.node.frontmatter.title
        ? -1
        : 0
    )
  const activePage = pages.findIndex(page => page.node.fields.slug === slug)
  const prev = activePage !== 0
  const next = activePage < pages.length - 1
  return (
    <Box p={[3, 4]}>
      <Buttons
        as="ul"
        alignItems="center"
        justifyContent="center"
        my={0}
        mx="auto"
      >
        {prev && (
          <Button
            type="previous"
            to={pages[activePage - 1].node.fields.slug}
            hasNextAndPrev={prev && next}
          >
            <SubHeading>Prev</SubHeading>
            <Title>{pages[activePage - 1].node.frontmatter.title}</Title>
          </Button>
        )}
        {next && (
          <Button
            type="next"
            to={pages[activePage + 1].node.fields.slug}
            hasNextAndPrev={prev && next}
          >
            <SubHeading>Next</SubHeading>
            <Title>{pages[activePage + 1].node.frontmatter.title}</Title>
          </Button>
        )}
      </Buttons>
    </Box>
  )
}

export default props => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <PrevNext data={data} slug={props.slug} category={props.category} />
      )}
    />
  )
}

const Buttons = styled(Flex)`
  background: ${SECONDARY};
  max-width: 600px;
  border-radius: 8px;
  box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

const Button = styled(Link)`
  appearance: none;
  background: transparent;
  border: none;
  text-align: center;
  padding: 20px;
  text-decoration: none;
  width: ${props => (props.hasNextAndPrev ? "50%" : "100%")};
  border-left: ${props =>
    props.hasNextAndPrev && props.type === "next" && `1px solid #e8d98b`};
  border-right: ${props =>
    props.hasNextAndPrev && props.type === "previous" && `1px solid #e8d98b`};

  &:hover {
    background: #e8d98b;
  }

  &:focus {
    outline: none;
  }
`

const SubHeading = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
  font-family: ${FONT_BOLD};
  font-weight: 700;
  color: ${BLACK};
`

const Title = styled.span`
  margin-bottom: 0;
  font-family: ${FONT_LIGHT};
  font-weight: 300;
  color: ${BLACK};
  max-width: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            category
          }
        }
      }
    }
  }
`
