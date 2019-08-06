import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { FONT_BOLD, BLACK, FONT_LIGHT, ACCENT } from "../../variables"
import { Flex } from "@rebass/grid"

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
    <Buttons
      as="ul"
      alignItems="center"
      justifyContent="center"
      px={[3, 4]}
      py={[3, 4]}
      mt={0}
    >
      {prev && (
        <Button type="previous" to={pages[activePage - 1].node.fields.slug}>
          <SubHeading>Prev</SubHeading>
          <Title>{pages[activePage - 1].node.frontmatter.title}</Title>
        </Button>
      )}
      {next && (
        <Button type="next" to={pages[activePage + 1].node.fields.slug}>
          <SubHeading>Next</SubHeading>
          <Title>{pages[activePage + 1].node.frontmatter.title}</Title>
        </Button>
      )}
    </Buttons>
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
  border-top: 2px solid #f6f6f6;
  border-bottom: 2px solid #f6f6f6;
`

const Button = styled(Link)`
  appearance: none;
  background: transparent;
  border: none;
  text-align: ${props => (props.type === "previous" ? "right" : "left")};
  padding-left: ${props => props.type === "next" && "20px"};
  padding-right: ${props => props.type === "previous" && "20px"};
  text-decoration: none;

  &:hover span {
    color: ${ACCENT};
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
