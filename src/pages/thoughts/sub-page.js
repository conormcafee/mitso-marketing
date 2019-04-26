import React from "react";
import styled from "styled-components"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import {Flex,Box} from "@rebass/grid"
import Container from "../../components/container"
import WorkWithMitso from "../../components/workWithMitso"

const SubPage = () => (
    <Layout>
        <SEO title="Sub Page" />
        <Container>
            <Flex mb={5}>
                <Box>
                    <Title>Sub Page</Title>
                </Box>
            </Flex>
            <WorkWithMitso />
        </Container>
    </Layout>
)

export default SubPage

const Title = styled.h1`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
`