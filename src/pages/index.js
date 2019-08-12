import React, { useState } from "react"
import { navigate, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import { Flex, Box } from "@rebass/grid"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Button from "../components/button/index"
import CaseStudies from "../components/caseStudies"
import WorkWithMitso from "../components/workWithMitso"
import Thoughts from "../components/Thoughts"
import Dot from "../components/Dot"
import Tagline from "../components/tagline"
import HomepageHero from "../images/hero-image-transparent.png"
import Play from "../images/icons/play-button.svg"
import { VideoModal } from "../components/VideoModal"

export default ({ data }) => {
  const [modal, setModal] = useState(false)
  const {
    title,
    youtube,
    vimeo,
    thoughts,
    featured,
    seo,
  } = data.file.childMarkdownRemark.frontmatter
  const { seoTitle, seoDescription, seoImage } = seo

  return (
    <Layout dottedBackground>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      <Container>
        <Intro
          as="section"
          flexWrap={["wrap"]}
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={[3, 4]}
        >
          <HeroContent px={[3, 4]} mb={[4, 6]} width={[1, 1 / 2]}>
            <HeroTitle>
              {title}
              <Dot />
            </HeroTitle>
            <Button onClick={() => navigate("/who-we-are")}>Who We Are</Button>
          </HeroContent>
          <Hero as="figure" px={[3, 4]} width={[1, 1 / 2]}>
            <img src={HomepageHero} alt="Welcome to MiTSO" />

            <VideoButton onClick={() => setModal(!modal)}>
              <img src={Play} alt="Play Video" />
            </VideoButton>
          </Hero>
        </Intro>
      </Container>

      {/* Who WE Are */}
      <Tagline />

      {/* Case Studies */}

      <CaseStudies homepage moreCaseStudies featured={featured} />

      {/* Work with Mitso */}

      <WorkWithMitso />

      {/* Thoughts */}

      <Box mt={[4, 4, 5]}>
        <Thoughts homepage text={thoughts} />
      </Box>

      {modal && (
        <VideoModal
          closeModal={() => setModal(!modal)}
          youtube={youtube}
          vimeo={vimeo}
        />
      )}

      {/* {modal && (
        <Modal alignItems="center" justifyContent="center">
          <CloseButton onClick={() => setModal(!modal)}>
            <img src={Close} alt="CLose" />
          </CloseButton>
          <YouTube videoId={youtube} opts={opts} />
        </Modal>
      )} */}
    </Layout>
  )
}

const pulse = keyframes`
  0% {
    transform: translateX(50%) translateY(50%) scale(1);
  }

  50% {
     transform: translateX(50%) translateY(50%) scale(1.2);
  }

  100% {
    transform: translateX(50%) translateY(50%) scale(1)
  }
`

const Intro = styled(Flex)`
  position: relative;
  background-size: contain;
  background-position: bottom right;
  background-repeat: no-repeat;
`

const Hero = styled(Box)`
  position: relative;
`
const HeroContent = styled(Box)`
  position: relative;
  z-index: 1;
`

const HeroTitle = styled.h1`
  font-size: 30px;

  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
`

const VideoButton = styled.button`
  position: absolute;
  appearance: none;
  background: transparent;
  border: none;
  height: 150px;
  width: 150px;
  left: calc(50% - 150px);
  top: calc(50% - 150px);
  transform: translateX(50%) translateY(50%);
  animation: ${pulse} 2000ms infinite ease-in-out;
`

export const query = graphql`
  query {
    file(name: { eq: "homepage" }) {
      childMarkdownRemark {
        frontmatter {
          title
          youtube
          vimeo
          plan
          brand
          promote
          review
          thoughts
          featured {
            caseStudy01
            caseStudy02
            caseStudy03
          }
          seo {
            seoTitle
            seoDescription
            seoImage
          }
        }
      }
    }
  }
`
