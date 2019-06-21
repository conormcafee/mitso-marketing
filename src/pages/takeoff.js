import React, { useState } from "react"
import { Link, graphql } from "gatsby"
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
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { BLACK, SECONDARY, FONT_BOLD, ACCENT } from "../variables"
import Button from "../components/button"

// https://github.com/react-ga/react-ga

const CustomForm = ({ status, message, onValidated }) => {
  let email, fname, lname, company
  const submit = () =>
    email &&
    fname &&
    lname &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value,
      MMERGE3: company.value,
    })

  const [valid, setValid] = useState(false)

  return (
    <Form>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <Label>First Name</Label>
      <Input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (fname = node)}
        type="text"
        name="FNAME"
      />
      <Label>Last Name</Label>
      <Input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (lname = node)}
        type="text"
        name="LNAME"
      />
      <Label>Company</Label>
      <Input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (company = node)}
        type="text"
        name="MMERGE3"
      />
      <Label>Email</Label>
      <Input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (email = node)}
        type="email"
      />

      <Flex alignItems="center" mt={4}>
        <Tick valid={valid} onClick={() => setValid(!valid)} mr={3} />
        <Text>
          Please confirm you have read our{" "}
          <TextLink to="/privacy-policy">Privacy Policy</TextLink> before
          submitting your details
        </Text>
      </Flex>

      {valid && (
        <Box mt={4}>
          <Button onClick={submit}>Sign Up to Mailing List</Button>
        </Box>
      )}
    </Form>
  )
}

export default ({ data }) => {
  const url =
    "https://mitsomarketing.us17.list-manage.com/subscribe/post?u=d2f46d55d2c60803a5f5ccc8b&amp;id=86370bb97b"

  const {
    youtube,
    seo,
    title,
    mainImage,
    text01,
    text02,
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
        <VideoButton onClick={() => setModal(!modal)}>
          <img src={Play} alt="Play Video" />
        </VideoButton>
        <BackgroundImage
          img={mainImage !== null ? mainImage : DefaultImage}
          aspectRatio
        />
      </Relative>

      <Container>
        <Flex flexWrap={["wrap", "nowrap"]} justifyContent="center" py={[3, 4]}>
          {text01 && (
            <Box px={[3, 4]}>
              <p>{text01}</p>
            </Box>
          )}
          {text02 && (
            <Box px={[3, 4]}>
              <p>{text02}</p>
            </Box>
          )}
        </Flex>
        <Box px={[3, 4]}>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </Box>
      </Container>
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

const VideoButton = styled.button`
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

const Form = styled.div`
  background: ${BLACK};
  border-radius: 8px;
  box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
  color: white;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px;
`

const Input = styled.input`
  min-height: 44px;
  display: block;
  width: 100%;
  border: 2px solid ${BLACK};
  box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;

  &:focus {
    outline: 0;
    border: 2px solid ${SECONDARY};
  }
`

const Label = styled.label`
  display: block;
  font-family: ${FONT_BOLD};
  font-weight: 900;
  font-size: 22px;
  line-height: 1.4;
  margin-top: 16px;
  margin-bottom: 16px;
`

const Tick = styled(Box)`
  background: ${props => (props.valid ? `${ACCENT}` : `white`)};
  height: 20px;
  width: 20px;
  border-radius: 7px;
  border: 5px solid white;

  &:hover {
    cursor: pointer;
  }
`

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`

const TextLink = styled(Link)`
  color: ${SECONDARY};

  &:hover {
    color: ${ACCENT};
  }
`

export const query = graphql`
  query {
    file(name: { eq: "takeOff" }) {
      childMarkdownRemark {
        frontmatter {
          title
          text01
          text02
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
