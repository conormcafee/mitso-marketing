import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import {Flex,Box} from "@rebass/grid"
import Container from "../../components/container"
import WorkWithMitso from "../../components/workWithMitso"
import Button from "../../components/button"
import { BLACK } from "../../variables";

const SubPage = () => {
  const goTo = (path) => navigate(path)
  return (
    <Layout>
      <SEO title="Sub Page" />
      <Container>
        <Flex mb={5} px={[3,4]}>
          <Hero>
            <Title>Sub Page</Title>
            <Button onClick={() => goTo('/thoughts')} reversed back>Back to all Thoughts</Button>
            <Box as="figure" mt={5}>
              <img src="https://placehold.it/1400x600/FFEE93/FFEE93" alt="Sub Page" />
              <Caption as="figcaption" alignItems="center" justifyContent="space-between">
                <p>by Maeve Finnegan</p>
                <date>01st May 2019</date>
              </Caption>
            </Box>
          </Hero>
        </Flex>
      
        <Article as="article" px={[3,4]}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis urna non nisl ultrices condimentum. Nulla massa elit, sagittis et purus vitae, eleifend laoreet metus. In ut ex in massa lacinia dignissim ut ut nibh. Quisque et enim tempor, consectetur massa et, pellentesque turpis. Duis non accumsan sapien, vitae fringilla velit. Integer molestie ex in mauris malesuada vulputate eget quis velit. Ut rhoncus sodales mi, in laoreet ante rhoncus vel.</p>
          <p>Donec fringilla tincidunt nibh. Maecenas quis eros ut ipsum accumsan efficitur. Maecenas eleifend magna mollis, laoreet magna sit amet, aliquam dolor. Etiam tincidunt metus enim, nec fermentum ligula hendrerit sed. Aenean pharetra pulvinar quam et mattis. Praesent mauris ex, consectetur sed feugiat eget, cursus porta nulla. In consectetur mauris in iaculis pulvinar.</p>
          <p>Ut facilisis nunc tortor, sit amet laoreet odio aliquet et. Proin volutpat nec ante nec pellentesque. Fusce ullamcorper metus ligula, sed pellentesque nisi vulputate hendrerit. Integer sagittis lacus sit amet sem pretium dapibus. Fusce id tortor mauris. Fusce ornare feugiat lorem porttitor imperdiet. Nullam elementum risus nec sapien bibendum, in ornare dolor convallis. Mauris et facilisis enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id lectus ornare, eleifend leo at, sollicitudin orci. Integer ac eleifend nisi. Duis scelerisque dictum felis, vitae blandit leo consequat eu. Mauris ac mollis orci.</p>
        </Article>
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
  p {
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
  }

  p:first-of-type {
    color: ${BLACK};
    font-weight: bold;
    font-size: 20px;
  }
`

const Caption = styled(Flex)`
  border-bottom: 1px solid #e6e6e6;
`