import React, { useState } from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import { BLACK, SECONDARY } from "../../../variables"
import QUOTE from "../../../images/icons/quote.svg"

export default () => {
  const [slide, setSlide] = useState(0)

  const toggleStatus = data => setSlide(data)

  return (
    <Box width={[1, 1 / 2, 2 / 3]} px={[3, 4]}>
      <Wrapper>
        <QuoteWrapper>
          <Img src={QUOTE} alt="Quote" />
        </QuoteWrapper>

        <ContentWrapper>
          {data.map((item, index) => (
            <Content key={index} index={index} active={slide === index}>
              <Title>{item.title}</Title>
              <Text>{item.text}</Text>
            </Content>
          ))}
        </ContentWrapper>

        <Nav>
          {data.map((item, index) => (
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

const data = [
  {
    title: "We Bring Brands to Life",
    text:
      "Often what you think you need to invest in isn’t the most important thing for your business right now. We’ll keep you right, don’t worry!",
  },

  {
    title: "We like simple",
    text:
      "We never over complicate, we get to the heart of the problem and solve it quickly. No acronyms or fancy business lingo, just solutions.",
  },

  {
    title: "We’re results orientated",
    text:
      "We’re obsessed with results (our bad!) and its what drives us to be better each and every day.",
  },

  {
    title: "We don’t do titles",
    text:
      "No matter where you sit in the boardroom, we treat everyone with the same respect because the best ideas come from the best minds and we love creativity, no matter where it comes from.",
  },
]
