import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import { BLACK, SECONDARY } from "../../../variables"
import QUOTE from "../../../images/icons/quote.svg"

const HowWeWork = props => {
  const {
    slide01title,
    slide01text,
    slide02title,
    slide02text,
    slide03title,
    slide03text,
    slide04title,
    slide04text,
  } = props.data.file.childMarkdownRemark.frontmatter

  const DATA = [
    {
      title: slide01title,
      text: slide01text,
    },
    {
      title: slide02title,
      text: slide02text,
    },
    {
      title: slide03title,
      text: slide03text,
    },
    {
      title: slide04title,
      text: slide04text,
    },
  ]

  const [slide, setSlide] = useState(0)
  const toggleStatus = data => setSlide(data)

  return (
    <Box width={[1, 1 / 2, 2 / 3]} px={[3, 4]}>
      <Wrapper>
        <QuoteWrapper>
          <Img src={QUOTE} alt="Quote" />
        </QuoteWrapper>

        <ContentWrapper>
          {DATA.map((item, index) => (
            <Content key={index} index={index} active={slide === index}>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
            </Content>
          ))}
        </ContentWrapper>

        <Nav>
          {DATA.map((item, index) => (
            <li key={index}>
              <Button
                active={slide === index}
                onClick={() => toggleStatus(index)}
                type="button"
              >
                {item.title}
              </Button>
            </li>
          ))}
        </Nav>
      </Wrapper>
    </Box>
  )
}

export default () => (
  <StaticQuery query={query} render={data => <HowWeWork data={data} />} />
)

export const query = graphql`
  query {
    file(name: { eq: "howWeWork" }) {
      childMarkdownRemark {
        frontmatter {
          slide01title
          slide01text
          slide02title
          slide02text
          slide03title
          slide03text
          slide04title
          slide04text
        }
      }
    }
  }
`

const Wrapper = styled.div`
  background: ${SECONDARY};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 32px;
`

const Title = styled.h2`
  color: ${BLACK};
  margin-top: 0;
  margin-bottom: 0;

  span {
    color: ${BLACK};
    margin-left: 5px;
  }
`

const Text = styled.p`
  color: ${BLACK};
`

const QuoteWrapper = styled.div`
  position: relative;
`

const Img = styled.img`
  position: absolute;
  top: -75px;
  right: -50px;
  opacity: 0.4;
  height: 450px;
`

const ContentWrapper = styled(Flex)`
  overflow: hidden;
`

const Content = styled(Box)`
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 250px;
  opacity: ${props => (props.active ? `1` : `0`)};
  transform: translateX(
    ${props =>
      props.active && props.index === 0
        ? `0%`
        : props.active && props.index === 1
        ? `-100%`
        : props.active && props.index === 2
        ? `-200%`
        : `-300%`}
  );
  transition: transform 500ms ease-in-out, opacity 150ms ease-in-out;

  @media only screen and (min-width: 768px) {
    min-width: 350px;
  }
`

const Nav = styled.ol`
  position: relative;
  z-index: 1;
  list-style: none;
  padding-left: 0;
  display: flex;
  align-items: center;
`

const Button = styled.button`
  font-size: 0;
  color: ${SECONDARY};
  background-color: ${props => (props.active ? `${SECONDARY}` : `${BLACK}`)};
  border: 4px solid ${BLACK};
  border-radius: 24px;
  height: 24px;
  width: 24px;
  margin-left: 10px;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: ${SECONDARY};
  }
`
