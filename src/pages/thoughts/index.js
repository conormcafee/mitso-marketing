import React from "react";
import styled from "styled-components"
import {Box} from "@rebass/grid"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Container from "../../components/container"
import Thoughts from "../../components/Thoughts"
import WorkWithMitso from "../../components/workWithMitso"

const ThoughtsIndex = () => (
    <Layout>
        <SEO title="Thoughts" />
        <Container>
            <Box px={[3,4]} mb={5}>
                <Hero>
                    <Title>Thoughts</Title>
                    <SubTitle>Take a look through our recents thoughts and ramblings. Along with getting our thoughts out on this website, we are also active on social media. Why don’t you give us a follow on your preferred platform</SubTitle>
                </Hero>
                <Box>
                    <Thoughts />
                </Box>
            </Box>
            <WorkWithMitso />
        </Container>
    </Layout>
)

export default ThoughtsIndex

const Hero = styled(Box)`
    text-align: center;
`

const Title = styled.h1`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
`

const SubTitle = styled.p`
    margin-left: auto;
    margin-right: auto;
`