import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import { BLACK, SECONDARY, ACCENT } from "../../../variables"
import QUOTE from "../../../images/icons/quote.svg"
import ToggleIcon from "../../../images/icons/toggle.svg"

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

  const [option0, setOption0] = useState(false)
  const [option1, setOption1] = useState(false)
  const [option2, setOption2] = useState(false)
  const [option3, setOption3] = useState(false)

  const toggleText = index => {
    switch (index) {
      case 0:
        setOption0(!option0)
        break
      case 1:
        setOption1(!option1)
        break
      case 2:
        setOption2(!option2)
        break
      case 3:
        setOption3(!option3)
        break
      default:
        setOption0(!option0)
        break
    }
  }

  const checkOption = index => {
    switch (index) {
      case 0:
        return option0
        // eslint-disable-next-line
        break
      case 1:
        return option1
        // eslint-disable-next-line
        break
      case 2:
        return option2
        // eslint-disable-next-line
        break
      case 3:
        return option3
        // eslint-disable-next-line
        break
      default:
        return option0
        // eslint-disable-next-line
        break
    }
  }

  return (
    <Box width={1} px={[3, 4]}>
      <Wrapper>
        <QuoteWrapper>
          <Img src={QUOTE} alt="Quote" />
        </QuoteWrapper>

        <ContentWrapper flexWrap="wrap">
          {DATA.map((item, index) => (
            <Box width={[1, 1 / 2, 1 / 4]} key={index} index={index} p={[3, 4]}>
              <Flex alignItems="center" justifyContent="space-between">
                <Title>{item.title}</Title>
                <Toggle
                  onClick={() => toggleText(index)}
                  isVisible={checkOption(index)}
                >
                  <img src={ToggleIcon} alt="Toggle Content" />
                </Toggle>
              </Flex>
              <Text isVisible={checkOption(index)}>{item.text}</Text>
            </Box>
          ))}
        </ContentWrapper>
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
`

const Title = styled.h3`
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
  margin-top: 5px;
  margin-bottom: 0;

  @media only screen and (max-width: 639px) {
    display: ${props => (props.isVisible ? `block` : `none`)};
  }
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
  position: relative;
  z-index: 1;
`

const Toggle = styled.button`
  border: none;
  height: 30px;
  width: 30px;
  background: ${props => (!props.isVisible ? ACCENT : "white")};
  padding: 0;
  border-radius: 30px;

  img {
    height: 30px;
    width: 30px;
  }

  @media only screen and (min-width: 640px) {
    display: none;
  }
`
