import React from "react"
import styled from "styled-components";
import {Flex, Box} from "@rebass/grid"
import Container from "../components/container"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HowWeWork from "../components/howWeWork"
import WorkWithMitso from "../components/workWithMitso"

import Team from "../components/team"


const WhoWeAre = () => (
  <Layout>
    <SEO title="Who We Are" />
    <Container>
        <Box px={[3, 4]} mb={6}>
            <Title>We are a creative marketing consultancy.</Title>
        </Box>

        <Flex px={[3, 4]} flexWrap={['wrap', 'wrap', 'nowrap']}>
            <Box px={[3, 4]} width={[1, 1, 1/3 ]}>
                <p>We bring brands to life, working across all areas of marketing to deliver creative and targeted campaigns to help your business thrive.</p>
                <p>Maybe you’re creating a new business, selling a new product or arranging a unique event. Or you’ve already established your business and you’re growing or you just want to add a little more sparkle - it’s all music to our ears!</p>
            </Box>

            <HowWeWork />
        </Flex>
    </Container>

    <Team />

    <WorkWithMitso />
  </Layout>
)

export default WhoWeAre

const Title = styled.h1`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;