import React from "react"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"
import Play from "../../images/icons/play-button.svg"
import DefaultImage from "../../images/pexels-photo-914931.jpg"
import { SECONDARY } from "../../variables"

const HeroWithText = ({ title, subtitle, video }) => (
  <Relative
    as="section"
    alignItems="center"
    justifyContent="center"
    bg={DefaultImage}
  >
    {video ? (
      <VideoButton>
        <img src={Play} alt="Play Video" />
      </VideoButton>
    ) : (
      <TextBox width={1} px={[3, 4]} py={[5, 6]}>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </TextBox>
    )}
  </Relative>
)

export default HeroWithText

const Relative = styled(Flex)`
  position: relative;
  z-index: 1;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

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

const TextBox = styled(Box)`
  position: relative;
  z-index: 1;
  text-align: center;

  h1 {
    color: white;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }

  h2 {
    color: ${SECONDARY};
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
  }
`
