import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"
import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopImages from "../components/WhoWeAre/TopImages"
import HowWeWork from "../components/WhoWeAre/HowWeWork"
import WorkWithMitso from "../components/workWithMitso"
import Team from "../components/team"
import {Heading02} from "../components/global/typography"

const WhoWeAre = () => {
    return (
        <Layout>
            <SEO title="Who We Are" />
            <Container>
                <Box px={[3, 4]} mb={[3, 3, 3, 6]}>
                    <Title>We are a creative marketing consultancy.</Title>
                </Box>
            </Container>

            <TopImages />

            <Container>
                <Flex flexWrap={['wrap', 'wrap', 'nowrap']}>
                    <Box px={[3, 4]} width={[1, 1/2, 1/2, 1/3]}>
                        <AboutHeading>We Bring Brands To Life.</AboutHeading>
                        <p>Working across all areas of marketing to deliver creative and targeted campaigns to help your business thrive.</p>
                        <p>Maybe you’re creating a new business, selling a new product or arranging a unique event. Or you’ve already established your business and you’re growing or you just want to add a little more sparkle - it’s all music to our ears!</p>
                    </Box>

                    <HowWeWork />
                </Flex>
            </Container>

            <Team />

            <WorkWithMitso />
        </Layout>
    )
}


export default WhoWeAre

const Title = styled.h1`    
    @media only screen and (max-width: 40em) {
        font-size: 30px;
    }
`

const AboutHeading = styled(Heading02)`
    margin: 0;
    max-width: 275px;

    @media only screen and (max-width: 40em) {
        font-size: 25px;
    }
`