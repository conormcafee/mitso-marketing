import React from "react";
import styled from "styled-components"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import {Flex,Box} from "@rebass/grid"
import Container from "../../components/container"
import WorkWithMitso from "../../components/workWithMitso"
import { BLACK } from "../../variables"
import Tags from "../../components/Tags"
import Share from "../../components/Share"
import BackLink from "../../components/BackLink"
import { FONT_BOLD } from "../../variables"
import Statement from "../../components/Statement"

const SubPage = () => {
  return (
    <Layout>
      <SEO title="Case Studies Sub Page" />
      <Container>
      <Flex mb={5} px={[3,4]}>
          <Hero>
            <Title>Case Study Title</Title>
            <Tags tags={['Case Study']} />
          </Hero>
        </Flex>

        <Flex 
          alignItems="center" 
          justifyContent="space-between" 
          mt={5} 
          mb={3}
          px={[3,4]}
        >
          <BackLink url="/case-studies" title="Back to All Case Studies" />
          <Share url="https://google.com" />
        </Flex>

        <Box as="figure">
          <img src="https://placehold.it/2000x600/FFEE93/FFEE93" alt="Sub Page" />
        </Box>

        <Box px={[3,4]} mb={5}>
          <Article as="article" mb={5}>
            <p>Obelisk is a multinational construction client, headquartered in Dublin.  MiTSO wa approached to revamp the Obelisk brand and develop new digital channels for the company.</p>
            <p>Having met the senior team at Obelisk, it became clear that the company had huge ambitions and wanted to expand globally.</p>
            <p>We began (as we always do) by establishing a solid client relationship and understanding Obelisk’ customer base. </p>
            <p>We worked hard with the senior team, organising a number of workshops in order to find the correct balance between information the company wanted to promote vs. Information that was important to the client. </p>
						
						<h2>Heading</h2>
						<p>We worked hard with the senior team, organising a number of workshops in order to find the correct balance between information the company wanted to.</p>

						<h2>Sub Title</h2>
						<p>Having met the senior team at Obelisk, it became clear that the company had huge ambitions and wanted to expand globally. We began (as we always do) by establishing a solid client relationship and understanding Obelisk’ customer base.</p> 
						<p>We worked hard with the senior team, organising a number of workshops in order to find the correct balance between information the company.</p>
						<p>Having met the senior team at Obelisk, it became clear that the company had huge ambitions and wanted to expand globally. We began (as we always do) by establishing a solid client relationship and understanding Obelisk’ customer base.</p>
					</Article>

					<Statement statement="We recommend MiTSO Marketing to everyone we get the chance to, absolute pleasure to work with." />

          <Box mx="auto" mb={5} css={{ maxWidth: '700px' }}>
            <Share url="https://google.com" />
          </Box>
        </Box>
        
				<WorkWithMitso />
      </Container>
    </Layout>
  )
}

export default SubPage

const Hero = styled(Box)`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

const Title = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  margin-bottom: 16px;
`

const Article = styled(Box)`
  line-height: 1.6; 

  * {
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
  }

  p:first-of-type {
    color: ${BLACK};
		font-family: ${FONT_BOLD};
		font-weight: 900;
    font-size: 20px;
  }

  img {
    display: block;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`