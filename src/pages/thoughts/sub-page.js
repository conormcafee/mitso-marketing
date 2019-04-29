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
import Thoughts from "../../components/Thoughts"
import Image from "../../images/backgrounds/hero-dummy.jpg";
import BackgroundImage from "../../components/BackgroundImage";
import DottedBackground from "../../components/DottedBackground"

const SubPage = () => {
  return (
    <Layout>
      <SEO title="Sub Page" />
      <DottedBackground />
      <Container>
        <Flex mb={5} px={[3,4]}>
          <Hero>
            <Title>Blog Sub Page</Title>
            <Tags tags={['Blog', 'Post', 'Test', 'Testing']} />
          </Hero>
        </Flex>

        <Flex 
          alignItems="center" 
          justifyContent="space-between" 
          mt={5} 
          mb={3}
          px={[3,4]}
        >
          <BackLink url="/thoughts" title="All Thoughts" />
          <Share url="https://google.com" />
        </Flex>

        <BackgroundImage img={Image} aspectRatio />

        <Caption 
            as="div" 
            alignItems="center" 
            justifyContent="space-between"
            px={[3,4  ]}
          >
            <h4>by Maeve Finnegan</h4>
            <h4>1st May 2019</h4>
          </Caption>

        <Box px={[3,4]} mb={5}>
          <Article as="article" mb={5}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis urna non nisl ultrices condimentum. Nulla massa elit, sagittis et purus vitae, eleifend laoreet metus. In ut ex in massa lacinia dignissim ut ut nibh. Quisque et enim tempor, consectetur massa et, pellentesque turpis. Duis non accumsan sapien, vitae fringilla velit. Integer molestie ex in mauris malesuada vulputate eget quis velit. Ut rhoncus sodales mi, in laoreet ante rhoncus vel.</p>
            <p>Donec fringilla tincidunt nibh. Maecenas quis eros ut ipsum accumsan efficitur. Maecenas eleifend magna mollis, laoreet magna sit amet, aliquam dolor. Etiam tincidunt metus enim, nec fermentum ligula hendrerit sed. Aenean pharetra pulvinar quam et mattis. Praesent mauris ex, consectetur sed feugiat eget, cursus porta nulla. In consectetur mauris in iaculis pulvinar.</p>
            <h2>Sub Title</h2>
            <p>Ut facilisis nunc tortor, sit amet laoreet odio aliquet et. Proin volutpat nec ante nec pellentesque. Fusce ullamcorper metus ligula, sed pellentesque nisi vulputate hendrerit. Integer sagittis lacus sit amet sem pretium dapibus. Fusce id tortor mauris. Fusce ornare feugiat lorem porttitor imperdiet. Nullam elementum risus nec sapien bibendum, in ornare dolor convallis. Mauris et facilisis enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id lectus ornare, eleifend leo at, sollicitudin orci. Integer ac eleifend nisi. Duis scelerisque dictum felis, vitae blandit leo consequat eu. Mauris ac mollis orci.</p>
            <p>Donec fringilla tincidunt nibh. Maecenas quis eros ut ipsum accumsan efficitur. Maecenas eleifend magna mollis, laoreet magna sit amet, aliquam dolor. Etiam tincidunt metus enim, nec fermentum ligula hendrerit sed. Aenean pharetra pulvinar quam et mattis. Praesent mauris ex, consectetur sed feugiat eget, cursus porta nulla. In consectetur mauris in iaculis pulvinar.</p>
            <p>Ut facilisis nunc tortor, sit amet laoreet odio aliquet et. Proin volutpat nec ante nec pellentesque. Fusce ullamcorper metus ligula, sed pellentesque nisi vulputate hendrerit. Integer sagittis lacus sit amet sem pretium dapibus. Fusce id tortor mauris. Fusce ornare feugiat lorem porttitor imperdiet. Nullam elementum risus nec sapien bibendum, in ornare dolor convallis. Mauris et facilisis enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id lectus ornare, eleifend leo at, sollicitudin orci. Integer ac eleifend nisi. Duis scelerisque dictum felis, vitae blandit leo consequat eu. Mauris ac mollis orci.</p>
            <p>Donec fringilla tincidunt nibh. Maecenas quis eros ut ipsum accumsan efficitur. Maecenas eleifend magna mollis, laoreet magna sit amet, aliquam dolor. Etiam tincidunt metus enim, nec fermentum ligula hendrerit sed. Aenean pharetra pulvinar quam et mattis. Praesent mauris ex, consectetur sed feugiat eget, cursus porta nulla. In consectetur mauris in iaculis pulvinar.</p>
          </Article>
          <Box mx="auto" mb={5} css={{ maxWidth: '700px' }}>
            <Share url="https://google.com" />
          </Box>
          <Thoughts subPage/>
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
    font-weight: bold;
    font-size: 20px;
  }

  img {
    display: block;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`

const Caption = styled(Flex)`
  border-bottom: 2px solid #e6e6e6;
`