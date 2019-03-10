import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"
import Container from "../components/container"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HowWeWork from "../components/howWeWork"
import MitsoCircle from "../images/backgrounds/mitso-circle.svg"
import WorkWithMitso from "../components/workWithMitso"

import Team from "../components/team";

import Maeve from "../images/maeve.jpg"
import Roisin from "../images/roisin.jpg"

const Wrapper = styled(Flex)`
    position: relative;

    img {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(-50%, 50%);
        max-height: 600px;
    }
`;


const WhoWeAre = () => (
  <Layout>
    <SEO title="Who We Are" />
    <Container>
        <Box px={[3, 4]}>
            <h1>We are a creative marketing consultancy.</h1>
        </Box>

        <Flex flexWrap={['wrap', 'wrap', 'nowrap']}>
            <Box width={[1, 1, 1/3 ]} px={[3, 4]}>
                <p>We bring brands to life, working across all areas of marketing to deliver creative and targeted campaigns to help your business thrive.</p>
                <p>Maybe you’re creating a new business, selling a new product or arranging a unique event. Or you’ve already established your business and you’re growing or you just want to add a little more sparkle - it’s all music to our ears!</p>
            </Box>

            <HowWeWork />
        </Flex>

        <Wrapper mt={6}>
            <img src={MitsoCircle} alt="MiTSO Marketing" />
            <Box px={[3, 4]}>
                <h2>Meet Us<span>.</span></h2>
            </Box>
        </Wrapper>

        <Team team={team} />
        
    </Container>

    <WorkWithMitso />
  </Layout>
)

export default WhoWeAre

const team = [
    {
        img: Maeve,
        name: "Maeve Finnegan",
        what: "I develop strong relationships with each and every client and work with my team to help smash your business goals.",
        where: "Prior to starting my own business, I worked both client side and within agencies in Ireland and the UK, developing campaigns for clients such as Coca-Cola and Volkswagen.",
        when: "I created MiTSO because I believed there was a gap in the market for marketing consultancies who could deliver one-to-one marketing support for any type of business.",
        why: "I‘m driven by the smile I see on my clients face each and every time we deliver for them.",
        psst: "What you might not know is the Maeve toured the world as a professional dancer with “Riverdance - The Show” for 4 years."
    },
    {
        img: Roisin,
        name: "Roisin Watters",
        what: "I work with clients to plan, develop and implement effective marketing communication campaigns.",
        where: "I spent my placement year working for Warner Bros. in London within the EMEA Publicity Department on 20 high profile film releases. Following my placement I gained further experience in London with global advertising agency, Feref, in both PR and social media.",
        when: "I joined MiTSO in October 2018 shortly after graduating from Ulster University with a first class honors in Communication, Advertising and Marketing.",
        why: "TBC",
        psst: "TBC"
    },
    {
        img: Roisin,
        name: "Ciara Boylan",
        what: "I work with clients to plan, develop and implement effective marketing communication campaigns.",
        where: "I spent my placement year working for Warner Bros. in London within the EMEA Publicity Department on 20 high profile film releases. Following my placement I gained further experience in London with global advertising agency, Feref, in both PR and social media.",
        when: "I joined MiTSO in October 2018 shortly after graduating from Ulster University with a first class honors in Communication, Advertising and Marketing.",
        why: "TBC",
        psst: "TBC"
    }
]