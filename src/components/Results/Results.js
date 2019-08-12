import React from "react"
import { Flex, Box } from "@rebass/grid"
import { BLACK } from "../../variables"
import styled from "styled-components"

import Collaboration from "../../images/icons/results/collaboration.svg"
import Global from "../../images/icons/results/global.svg"
import Increase from "../../images/icons/results/increase.svg"
import Money from "../../images/icons/results/money.svg"
import Photography from "../../images/icons/results/photography.svg"
import Social from "../../images/icons/results/social.svg"
import Tickets from "../../images/icons/results/tickets.svg"
import Video from "../../images/icons/results/video.svg"
import Visual from "../../images/icons/results/visual.svg"
import Website from "../../images/icons/results/website.svg"
import ExternalLink from "../../images/icons/results/external-link.svg"

const renderIcon = icon => {
  let ICON

  switch (icon) {
    case "collaboration":
      ICON = Collaboration
      break
    case "global":
      ICON = Global
      break
    case "increase":
      ICON = Increase
      break
    case "money":
      ICON = Money
      break
    case "photography":
      ICON = Photography
      break
    case "social":
      ICON = Social
      break
    case "tickets":
      ICON = Tickets
      break
    case "video":
      ICON = Video
      break
    case "visual":
      ICON = Visual
      break
    case "website":
      ICON = Website
      break
    default:
      ICON = Website
      break
  }

  return <Icon src={ICON} alt={`${icon} icon`} />
}

const Results = ({ data }) => (
  <Wrapper flexDirection="column" justifyContent="center" mb={[4, 5]}>
    <Icons pt={[3, 4]} px={[3, 4]}>
      <h2>Results</h2>
    </Icons>

    <Icons>
      <Flex flexWrap="wrap" justifyContent="center" pb={[3, 4]}>
        {data.map((result, index) => (
          <Flex
            flexDirection={["column", "row"]}
            p={[3, 4]}
            alignItems="center"
            width={1 / 2}
            key={index}
          >
            {renderIcon(result.icon)}
            <Flex flexDirection="column" mt={[3, 0]}>
              <Text>{result.text}</Text>
              {result.link && (
                <ExternalHref
                  href={result.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ExternalLink} alt={`Go to ${result.link}`} />
                </ExternalHref>
              )}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Icons>
  </Wrapper>
)

export default Results

const Wrapper = styled(Flex)`
  background: ${BLACK};
  color: #ffffff;
`

const Icons = styled(Box)`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  h2 {
    color: white;
    margin: 0;
  }
`

const Icon = styled.img`
  max-height: 40px;
  margin-right: 20px;
  transform: translateY(3px);
`

const Text = styled.span`
  max-width: 300px;
  text-align: center;
  font-size: 12px;
  line-height: 1.4;

  @media only screen and (min-width: 640px) {
    text-align: left;
    font-size: 16px;
  }
`

const ExternalHref = styled.a`
  @media only screen and (max-width: 640px) {
    text-align: center;
  }
`
