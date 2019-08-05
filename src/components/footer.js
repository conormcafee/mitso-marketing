import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Flex, Box } from "@rebass/grid"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Logo from "../images/mitso-logo.svg"
import Facebook from "../images/icons/facebook.svg"
import Instagram from "../images/icons/instagram.svg"
import LinkedIn from "../images/icons/linkedin.svg"
import styled from "styled-components"
import { ACCENT, PRIMARY, BLACK, FONT_BOLD } from "../variables"
import Button from "../components/button"

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
    <div>
      <Flex mx={-3}>
        <Box px={3}>
          <Label>First Name</Label>
          <Input ref={node => (fname = node)} type="text" name="FNAME" />
        </Box>

        <Box px={3}>
          <Label>Last Name</Label>
          <Input ref={node => (lname = node)} type="text" name="LNAME" />
        </Box>
      </Flex>

      <Label>Email</Label>
      <Input ref={node => (email = node)} type="email" />

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

      {status === "sending" && <SubTitle>sending...</SubTitle>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <SubTitle dangerouslySetInnerHTML={{ __html: message }} />
      )}
    </div>
  )
}

const Footer = ({ data, services }) => {
  const [hidden] = useState(true)
  const facebook = data.file.childMarkdownRemark.frontmatter.facebook
  const instagram = data.file.childMarkdownRemark.frontmatter.instagram
  const linkedin = data.file.childMarkdownRemark.frontmatter.linkedin
  const url =
    "https://mitsomarketing.us17.list-manage.com/subscribe/post?u=d2f46d55d2c60803a5f5ccc8b&amp;id=86370bb97b"
  return (
    <Wrapper as="footer" flexWrap="wrap" px={[3, 4]} pb={[2, 3]} mt={[4, 5]}>
      <Flex
        width={[1, 1 / 3]}
        order={[2, 1]}
        justifyContent={["space-between"]}
        flexDirection={["row", "column"]}
        alignItems={["flex-end", "flex-start"]}
        mt={[4, 0]}
      >
        <Box>
          <img src={Logo} alt="MiTSO Marketing" />

          <ul>
            <li>MiTSO Marketing</li>
            <li>41 Faughiletra Road</li>
            <li>Newry</li>
            <li>Co.Down</li>
            <li>BT35 8JE</li>
          </ul>
        </Box>

        <Flex alignItems="center" mt={5}>
          {facebook && (
            <SocialMediaLink href={facebook} target="_blank">
              <img src={Facebook} alt="Facebook" />
            </SocialMediaLink>
          )}
          {instagram && (
            <SocialMediaLink href={instagram} target="_blank" hasMarginLeft>
              <img src={Instagram} alt="Instagram" />
            </SocialMediaLink>
          )}
          {linkedin && (
            <SocialMediaLink href={linkedin} target="_blank" hasMarginLeft>
              <img src={LinkedIn} alt="LinkedIn" />
            </SocialMediaLink>
          )}
        </Flex>
      </Flex>

      <Flex
        width={[1, 2 / 3]}
        order={[1, 2]}
        flexWrap="wrap"
        justifyContent={["flex-start", "flex-start", "flex-end"]}
      >
        <Flex width={!hidden ? 1 : [1, 1, 1 / 2]} mx={[0, -4]}>
          <FooterLinks width={[1 / 2]} px={[0, 4]}>
            <SubTitle>Quick Links</SubTitle>
            {QUICK_LINKS.map((item, index) => (
              <Link key={index} to={item.url}>
                {item.title}
              </Link>
            ))}
          </FooterLinks>
          <FooterLinks width={[1 / 2]} px={[0, 4]}>
            <SubTitle>What We Offer</SubTitle>
            {services.services.map((item, index) => (
              <Link key={index} to={item.node.fields.slug}>
                {item.node.frontmatter.title}
              </Link>
            ))}
          </FooterLinks>
        </Flex>
        {hidden && (
          <Box width={[1, 1, 1 / 2]} px={[0, 0, 4]}>
            <SubTitle>Sign Up To MiTSO</SubTitle>
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
        )}
      </Flex>
    </Wrapper>
  )
}

export default services => (
  <StaticQuery
    query={servicesQuery}
    render={data => <Footer data={data} services={services} />}
  />
)

const servicesQuery = graphql`
  query {
    file(name: { eq: "socialMedia" }) {
      childMarkdownRemark {
        frontmatter {
          facebook
          instagram
          linkedin
        }
      }
    }
  }
`

const Wrapper = styled(Flex)`
  font-size: 14px;
  border-bottom: 5px solid ${ACCENT};
`

const SubTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`

const SocialMediaLink = styled.a`
  margin-left: ${props => props.hasMarginLeft && "15px"};

  img {
    max-height: 25px;
  }
`

const FooterLinks = styled(Box)`
  a {
    display: block;
    color: ${PRIMARY};
    text-decoration: none;

    &:hover {
      color: ${ACCENT};
    }
  }
`

const Input = styled.input`
  min-height: 44px;
  display: block;
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  margin-bottom: 10px;
  font-size: 16px;
  color: ${BLACK};

  &:focus {
    outline: 0;
    border: 2px solid ${ACCENT};
    box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
  }
`

const Label = styled.label`
  display: block;
  font-family: ${FONT_BOLD};
  color: ${BLACK};
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 10px;
`

const Tick = styled(Box)`
  background: ${props => (props.valid ? `${ACCENT}` : `white`)};
  height: 20px;
  width: 20px;
  min-width: 20px;
  border-radius: 20px;
  border: 2px solid #e6e6e6;

  &:hover {
    cursor: pointer;
  }
`

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`

const TextLink = styled(Link)`
  color: ${ACCENT};

  &:hover {
    color: ${BLACK};
  }
`

const QUICK_LINKS = [
  {
    title: "Who We Are",
    url: "/who-we-are",
  },
  {
    title: "What We Offer",
    url: "/what-we-offer",
  },
  {
    title: "Thoughts",
    url: "/thoughts",
  },
  {
    title: "Our Work",
    url: "/our-work",
  },
  {
    title: "Work with MiTSO",
    url: "/work-with-mitso",
  },
]
