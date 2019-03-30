import React from "react"
import {Box} from "@rebass/grid"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Container from "../../components/container"
import Tagline from "../../components/tagline"

const WhatWeOffer = () => (
    <Layout>
        <SEO title="What We Offer" />

        <Container>
            <Box px={[3,4]} mb={[4,5]}>
                <h1>What We Offer</h1>

                <p>We believe that effective marketing begins with a clear strategy and a deep understanding of the customer.</p>
                <p>From there we build an impressive brand identity, delivering creative and targeted messaging to the right customers at the right time.</p>
            </Box>
        </Container>

        <Tagline />

    </Layout>
)

export default WhatWeOffer