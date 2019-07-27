import React from "react"
import { Box } from "@rebass/grid"
import styled from "styled-components"

const Image = ({ image, pt }) => <Img pt={pt} image={image} />

export default Image

const Img = styled(Box)`
  background-image: url(${props => props.image && props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: ${props => props.pt};
`

Image.defaultProps = {
  pt: "120%",
}
