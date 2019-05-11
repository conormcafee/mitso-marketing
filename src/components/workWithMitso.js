import React from "react"
import {Link} from "gatsby"
import {StaticQuery, graphql} from "gatsby"
import {Flex, Box} from "@rebass/grid"
import styled from "styled-components"
import {ACCENT, BASE, FONT_LIGHT} from "../variables"
import Button from "../components/button"
import Container from "../components/container"

import Icon01 from "../images/icons/web-design.svg"
// import Icon02 from "../images/icons/digital-marketing.svg"
// import Icon03 from "../images/icons/social-media.svg"
// import Icon04 from "../images/icons/visual.svg"
// import Icon05 from "../images/icons/event-management.svg"
// import Icon06 from "../images/icons/pr.svg"

const Service = (props) => (
    <Flex width={[1, 1/2]} mt={[props.index >= 1 ? 4 : 0, props.index > 1 ? 4 : 0]} alignItems="center">
        <Box width={1/4} mr={1}>
            <Icon src={props.icon} alt={`${props.title} Icon`} />
        </Box>
        <Box width={3/4}>
            <Title>{props.title}</Title>
            <SubText to={props.url}>Find Out More</SubText>
        </Box>
    </Flex>
)


const WorkWithMitso = (props) => {
    const services = props.data.allMarkdownRemark.edges;
    return (
        <Wrapper>
            <Container>
                <Flex py={5} flexWrap={['wrap', 'wrap', 'nowrap']} alignItems="center">
                    <Box width={[1, 1, 1/3]} px={[3, 4]} mb={[5, 5, 0]}>
                        <WorkBox p={4} flexDirection="column" alignItems="center" justifyContent="center">
                            <h3>Like our work? Contact us today for a chat</h3>
                            <Button>Start Project</Button>
                        </WorkBox>
                    </Box>

                    <Box width={[1, 1, 2/3]} px={[3, 4]}>
                        <WorkBox p={4} flexWrap="wrap">
                            {services.map((service, index) => (
                                <Service 
                                    key={index} 
                                    index={index} 
                                    title={service.node.frontmatter.title}
                                    url={service.node.fields.slug}
                                    icon={Icon01}
                                />
                            ))}    
                        </WorkBox>
                    </Box>
                </Flex>
            </Container>
        </Wrapper>
    )
}

export default () => (<StaticQuery query={servicesQuery} render={data => (<WorkWithMitso data={data} />)} />)

const servicesQuery = graphql`
    query {
        allMarkdownRemark( filter: { frontmatter: { category: { eq: "Services" }} }) {
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
    }
`        

const Wrapper = styled.section`
    background-color: ${ACCENT};
`

const WorkBox = styled(Flex)`
    background-color: white;
    border-radius: 8px;
    box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);

    h3 {
        text-align: center;
    }
`

const Title = styled.h4`
    margin-top: 0;
    margin-bottom: 0;
`

const SubText = styled(Link)`
    display: block;
    margin-top: 5px; 
    text-decoration: none;
    color: ${BASE};
    font-family: ${FONT_LIGHT};

    &:hover {
        color: ${ACCENT}
    }
`

const Icon = styled.img`
    height: 75px;
    width: 75px;
`