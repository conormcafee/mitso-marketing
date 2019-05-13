import React from "react";
import styled from "styled-components";
import {Flex, Box} from "@rebass/grid";
import Button from "../../components/button";
import {BLACK} from "../../variables";
import Container from "../../components/container";
import Thought from "../Thoughts/components/Thought"
import { StaticQuery, graphql, navigate } from "gatsby";

const navigatePage = (page) => navigate(page)

const Article = (props) => {
    const { index, node } = props
    const { title } = node.frontmatter
    const { slug } = node.fields
    const blogWidth = props.homepage ? [1, 1, 1/2] : [1, 1, 1/2, 1/3]
    const marginTop = props.homepage ? [4, 4, 0] : 5
    return (
        <Thought 
            key={index}
            title={title}
            author="Conor McAfee"
            text="Vestibulum sit amet orci ac massa mattis maximus in ornare lorem. Vivamus tempus porttitor efficitur. Vestibulum lacinia porttitor dapibus."
            img={`https://placehold.it/400x300/FFEE93/FFEE93`}
            link={slug}
            width={blogWidth}
            mt={marginTop}
            goTo={navigatePage}
        />
    )
}

const Thoughts = (props) => {
    const { data, additional } = props
    const homepage = additional.homepage
    const subPage = additional.subPage
    const thoughts = data.allMarkdownRemark.edges
    const navyWidth = homepage ? [1, 1, 2/3] : [1]
    const wrapping = homepage ? ['wrap', 'wrap', 'noWrap'] : 'wrap'
    const blogCount = data.length

    return (
        <Container>
            <Flex flexWrap={['wrap', 'wrap', 'noWrap']} mt={homepage ? 6 : 5} as="section">
                {homepage &&
                    <Box width={[1, 1, 1/3]} mb={[5, 4, 0]} px={[3, 4]} pt={4}>
                        <h2>Thoughts</h2>
                        <p>Take a look through our recents thoughts and ramblings.  Along with getting our thoughts out on this website, we are also active on social media.  Why don’t you give us a follow on your preferred platform</p>
                        <Button onClick={() => this.goTo('/thoughts')}>All Thoughts</Button>
                    </Box>
                }

                <NavyBackground width={navyWidth} py={homepage ? [3, 3, 4] : 4}>
                    <Flex flexWrap={wrapping} px={[3]}>
                        {thoughts.slice(0, homepage ? 2 : subPage? 3 : blogCount).map((thought, index) => (
                            <Article 
                                key={index}
                                index={index}
                                {...thought}
                                homepage={homepage}
                                subPage={subPage}
                            />
                        ))}
                    </Flex>
                </NavyBackground>
            </Flex>
        </Container>
    )   
}

export default (props) => (<StaticQuery query={thoughts} render={data => (<Thoughts data={data} additional={props} />)} />)

const thoughts = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Blog" }} },
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

const NavyBackground = styled(Box)`
    background-color: ${BLACK};
    border-radius: 8px;
    position: relative;
`