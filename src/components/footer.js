import React from "react";
import styled from "styled-components";
import {Flex, Box} from "@rebass/grid";
import Logo from "../images/mitso-logo.svg"
import Container from "../components/container";
import {ACCENT, BLACK} from "../variables";

const FooterWrapper = styled(Flex)`
    border-bottom: 5px solid ${ACCENT};
`;

const FooterCTA = styled.a`
    display: inline-block;
    background-color: ${ACCENT};
    color: #ffffff;
    border-radius: 7px;
    padding: 5px 10px;
    margin-top: 10px;
    text-decoration: none;
    transition: background-color 150ms ease-in-out;

    &:hover {
        background-color: ${BLACK};
    }

    &:first-of-type {
        margin-right: 10px;
    }
`;

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

class Footer extends React.Component {
    render() {
        return (
            <FooterWrapper>
                <Container>
                    <Flex as="footer" flexWrap={['wrap', 'wrap', 'noWrap']} px={[3, 4]} mt={[0, 0, 6]} mb={4}>
                        <Box width={[1, 1, 1/3]} mt={[5, 5, 3]}>
                            <img src={Logo} alt="MiTSO Marketing" />

                            <address>
                                <p>Address Line 01</p>
                                <p>Address Line 02</p>
                                <p>Address Line 03</p>
                                <p>Newry</p>
                                <p>Co. Armagh</p>

                                <FooterCTA href="/">+447709128374</FooterCTA>
                                <FooterCTA href="/">hello@mitsomarketing.com</FooterCTA>
                            </address>
                        </Box> 

                        <FooterBox 
                            title="Quick Links"
                            data={QUICK_LINKS}
                        /> 
                        
                        <FooterBox 
                            title="Case Studies"
                            data={CASE_STUDIES}
                        />

                        <FooterBox 
                            title="Services"
                            data={SERVICES}
                        />
                    </Flex>
                </Container>
            </FooterWrapper>
        )
    }
}

export default Footer

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