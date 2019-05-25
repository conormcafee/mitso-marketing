import React from "react"
import { Box } from "@rebass/grid"
import BackgroundImage from "../BackgroundImage"

const SingleImage = image => (
  <Box width={[1, 1 / 2]}>
    <BackgroundImage img={image.image} aspectRatio={false} border />
  </Box>
)

export default SingleImage
