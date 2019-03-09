import React from "react"
import {Flex, Box} from "@rebass/grid";
import Container from "../components/container";

import Layout from "../components/layout"
import SEO from "../components/seo"

import HowWeWork from "../components/howWeWork";

const WhoWeAre = () => (
  <Layout>
    <SEO title="Who We Are" />
    <Container>
        <Box px={[3, 4]}>
            <h1>We are a creative marketing consultancy.</h1>
        </Box>

        <Flex flexWrap={['wrap', 'wrap', 'nowrap']} px={[3, 4]}>
            <Box width={[1, 1, 1/3 ]} pr={[0, 0, 4]}>
                <p>We bring brands to life, working across all areas of marketing to deliver creative and targeted campaigns to help your business thrive.</p>
                <p>Maybe you’re creating a new business, selling a new product or arranging a unique event. Or you’ve already established your business and you’re growing or you just want to add a little more sparkle - it’s all music to our ears!</p>
            </Box>

            <HowWeWork />
        </Flex>
    </Container>
  </Layout>
)

export default WhoWeAre