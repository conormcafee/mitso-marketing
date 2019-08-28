import React from "react"
import { navigate } from "gatsby"
import { Flex } from "@rebass/grid"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Button from "../components/button"

export default () => (
  <Layout dottedBackground>
    <SEO title="Awesome, Thanks for getting in contact" />
    <Container>
      <Wrapper
        as="section"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <h1>Thanks, your message is on it's way</h1>
        <Button onClick={() => navigate("/")}>Back to Homepage</Button>
      </Wrapper>
    </Container>
  </Layout>
)

const Wrapper = styled(Flex)`
  height: calc(100vh - 133px);
  text-align: center;
`
