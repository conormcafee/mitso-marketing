import React from "react"
import { Box } from "@rebass/grid"
import styled from "styled-components"
import Button from "../../button"
import { ACCENT } from "../../../variables"
import Image from "../../Image/Image"

const ThoughtCard = ({ title, author, text, img, link, width, mt, goTo }) => (
  <Box width={width} mt={mt} px={[3, 4]}>
    <Thought as="article">
      <figure>
        <Image image={img} />
        <figcaption>
          <Title>{title}</Title>
          <Author>by {author}</Author>
          <p>{text}</p>
          <Button onClick={() => goTo(link)}>Read Full Post</Button>
        </figcaption>
      </figure>
    </Thought>
  </Box>
)

export default ThoughtCard

const Thought = styled(Box)`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;

  figcaption {
    padding-top: 16px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
  }
`

const Title = styled.h3`
  margin-bottom: 0;
`

const Author = styled.h4`
  margin-top: 0;
  color: ${ACCENT};
`
