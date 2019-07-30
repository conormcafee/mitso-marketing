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
import HomepageHero from "../images/homepage-hero.jpg"
import Play from "../images/icons/play-button.svg"
import Close from "../images/icons/close.svg"
import YouTube from "react-youtube"

export default ({ data }) => {
  const [modal, setModal] = useState(false)
  const {
    title,
    youtube,
    thoughts,
    seo,
  } = data.file.childMarkdownRemark.frontmatter
  const { seoTitle, seoDescription, seoImage } = seo
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  }
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

      <CaseStudies homepage moreCaseStudies />

      {/* Work with Mitso */}

      <WorkWithMitso />

      {/* Thoughts */}

      <Thoughts homepage text={thoughts} />

      {modal && (
        <Modal alignItems="center" justifyContent="center">
          <CloseButton onClick={() => setModal(!modal)}>
            <img src={Close} alt="CLose" />
          </CloseButton>
          <YouTube videoId={youtube} opts={opts} />
        </Modal>
      )}
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

const Modal = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(58, 64, 90, 0.9);
  z-index: 100;
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  height: 50px;
  width: 50px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    transform: scale(0.75);
  }
`

export const query = graphql`
  query {
    file(name: { eq: "homepage" }) {
      childMarkdownRemark {
        frontmatter {
          title
          youtube
          plan
          brand
          promote
          review
          thoughts
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
