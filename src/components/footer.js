import React from "react"
import {StaticQuery, graphql} from "gatsby"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"
import Logo from "../images/mitso-logo.svg"
import {ACCENT} from "../variables"

const FooterWrapper = styled(Flex)`
    width: 100%;
    font-size: 14px;
    border-bottom: 5px solid ${ACCENT};
`

const Foot = styled(Flex)`
    width: 100%;
`

const FooterBox = (props) => {
    return (
        <Box width={[1, 1/3]}>
            <h4>{props.title}</h4>
            <ul>
                {props.data.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </Box> 
    )
}

const Footer = () => {
    return (
        <FooterWrapper>
            <Foot as="footer" flexWrap={['wrap', 'wrap', 'nowrap']} px={[3, 4]} mt={[0, 0, 5]} mb={4}>
                <Box width={[1, 1, 1/3]} mt={[5, 5, 3]}>
                    <img src={Logo} alt="MiTSO Marketing" />

                    <address>
                        <p>Address Line 01</p>
                        <p>Address Line 02</p>
                        <p>Address Line 03</p>
                        <p>Newry</p>
                        <p>Co. Armagh</p>
                    </address>
                </Box> 

                <FooterBox title="Quick Links" data={QUICK_LINKS} /> 
                
                <FooterBox title="Case Studies" data={CASE_STUDIES} />

                <FooterBox title="Services" data={SERVICES}/>
            </Foot>
        </FooterWrapper>
    )
}

export default () => (<StaticQuery query={footerQuery} render={data=>(<Footer serivces={data} />)} />)

const footerQuery = graphql`
    query {
        allMarkdownRemark( filter: { frontmatter: { category: { eq: "Services" }} }) {
            edges {
                node {
                    frontmatter {
                        title
                        path
                        icon
                    }
                }
            }
        }
    }
`

const QUICK_LINKS = [
    {
        title: "Who We Are",
        url: "/"
    },
    {
        title: "Thoughts",
        url: "/"
    },
    {
        title: "Work with MiTSO",
        url: "/"
    },
    {
        title: "What We Offer",
        url: "/"
    },
];

const CASE_STUDIES = [
    {
        title: "Obelisk",
        url: "/"
    },
    {
        title: "E Stars",
        url: "/"
    },
    {
        title: "Allin Traynor",
        url: "/"
    },
];

const SERVICES = [
    {
        title: "Strategic Planning",
        url: "/"
    },
    {
        title: "Brand Development",
        url: "/"
    },
    {
        title: "Digital Marketing",
        url: "/"
    },
    {
        title: "Video",
        url: "/"
    },
    {
        title: "PR",
        url: "/"
    },
    {
        title: "Event Management",
        url: "/"
    },
    {
        title: "Web Development",
        url: "/"
    },
];