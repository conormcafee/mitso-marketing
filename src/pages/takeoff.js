import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Dot from "../components/Dot"
import BackgroundImage from "../components/BackgroundImage"
import DefaultImage from "../images/mitso-default.png"
import Play from "../images/icons/play-button.svg"
import YouTube from "react-youtube"
import Close from "../images/icons/close.svg"

export default ({ data }) => {
  const {
    youtube,
    seo,
    title,
    mainImage,
  } = data.file.childMarkdownRemark.frontmatter
  const { seoTitle, seoDescription, seoImage } = seo

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  }

  const [modal, setModal] = useState(false)

  return (
    <Layout dottedBackground>
      {modal && (
        <Modal alignItems="center" justifyContent="center">
          <CloseButton onClick={() => setModal(!modal)}>
            <img src={Close} alt="CLose" />
          </CloseButton>
          <YouTube videoId={youtube} opts={opts} />
        </Modal>
      )}
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      <Container>
        <Box px={[3, 4]}>
          <Title>
            {title}
            <Dot />
          </Title>
        </Box>
      </Container>
      <Relative alignItems="center" justifyContent="center">
        <Button onClick={() => setModal(!modal)}>
          <img src={Play} alt="Play Video" />
        </Button>
        <BackgroundImage
          img={mainImage !== null ? mainImage : DefaultImage}
          aspectRatio
        />
      </Relative>
    </Layout>
  )
}

const Title = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 40em) {
    font-size: 30px;
  }
`

const Relative = styled(Flex)`
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(58, 64, 90, 0.7);
  }
`

const Button = styled.button`
  position: absolute;
  appearance: none;
  background: transparent;
  border: none;
  height: 150px;
  width: 150px;
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

const CloseButton = styled(Button)`
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
    file(name: { eq: "takeOff" }) {
      childMarkdownRemark {
        frontmatter {
          title
          mainImage
          youtube
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
