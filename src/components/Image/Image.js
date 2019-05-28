import React from "react"
import { Box } from "@rebass/grid"
import styled from "styled-components"

const Image = ({ image }) => <Img image={image} />

export default Image

const Img = styled(Box)`
  background-image: url(${props => props.image && props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 66.66%;
`
