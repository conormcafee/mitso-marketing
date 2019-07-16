import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Container from "../components/container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkWithMitso from "../components/workWithMitso"
import Dot from "../components/Dot"
import { BLACK, ACCENT, FONT_BOLD, WHITE } from "../variables"
import ReactMapboxGl, { Marker } from "react-mapbox-gl"
import MarkerIcon from "../images/icons/marker.svg"

export default ({ data }) => {
  const { title, intro, seo } = data.file.childMarkdownRemark.frontmatter
  const { seoTitle, seoDescription, seoImage } = seo
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiY29ub3JtY2FmZWUiLCJhIjoiY2p5NjV2dHl6MGR1MDNjbXZuODdqcmIyYSJ9.Fo-JM0lzBdG2SNRpzqpOkw",
  })
  return (
    <Layout dottedBackground>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      <Container>
        <Box px={[3, 4]} mb={[3, 3, 3, 5]}>
          <Title>
            {title}
            <Dot />
          </Title>
          <SubTitle>{intro}</SubTitle>
        </Box>
      </Container>
      <Container>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          px={[3, 4]}
          pb={[5, 6]}
        >
          <ContactDetails p={[3, 4]} width={[1, 1, 1 / 2]}>
            <h2>
              Contact us
              <Dot />
            </h2>

            <ContactList as="ul" flexWrap="wrap">
              <ListItem as="li" mb={4} width={[1, 1, 1 / 2]}>
                <span>Email</span>
                <Link href="mailto:hello@mitsomarketing.com">
                  hello@mitsomarketing.com
                </Link>
              </ListItem>
              <ListItem as="li" width={[1, 1, 1 / 2]}>
                <span>Call us</span>
                <Link href="tel:+447784291111">+44 (0)77 8429 1111</Link>
              </ListItem>
            </ContactList>

            <Box>
              <h2>
                Find us
                <Dot />
              </h2>
              <Box as="ul">
                <Box as="li">MiTSO Marketing</Box>
                <Box as="li">41 Faughiletra Road</Box>
                <Box as="li">Newry</Box>
                <Box as="li">Co.Down</Box>
                <Box as="li">BT35 8JE</Box>
              </Box>
            </Box>
          </ContactDetails>
        </Flex>
      </Container>

      <MapBox>
        <Map
          // eslint-disable-next-line
          style={"mapbox://styles/conormcafee/cjy65ysie08zs1cpfokb579e7"}
          center={[-6.3887219, 54.0989112]}
          zoom={[12]}
          boxZoom={false}
          scrollZoom={[false]}
          interactive={false}
          dragPan={false}
          containerStyle={{
            height: "100%",
            width: "100%",
          }}
        >
          <Marker coordinates={[-6.3887219, 54.0989112]} anchor="bottom">
            <img src={MarkerIcon} alt="Sweeney Todd Location" />
          </Marker>
        </Map>
      </MapBox>
      <WorkWithMitso />
    </Layout>
  )
}

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0;

  @media only screen and (max-width: 40em) {
    font-size: 30px;
  }
  @media only screen and (min-width: 768px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`

const SubTitle = styled.p`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const MapBox = styled(Box)`
  position: relative;
  height: 65vh;
  width: 100vw;
  overflow: hidden;
`

const ContactDetails = styled(Box)`
  background: ${BLACK};
  color: ${WHITE};
  border-radius: 7px;

  h2 {
    margin: 0;
    color: ${WHITE};
  }

  li {
    color: ${WHITE};
  }
`

const ContactList = styled(Flex)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`

const ListItem = styled(Box)`
  font-family: ${FONT_BOLD};
  font-weight: 900;
  font-size: 20px;

  span {
    display: block;
  }
`

const Link = styled.a`
  background: ${BLACK};
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  border-radius: 4px;
  transition: background 150ms ease-in-out;

  &:hover {
    background: ${ACCENT};
  }
`

export const query = graphql`
  query {
    file(name: { eq: "workWithMitso" }) {
      childMarkdownRemark {
        frontmatter {
          title
          intro
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
