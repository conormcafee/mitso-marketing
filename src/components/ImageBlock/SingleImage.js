import React from "react"
import { Flex, Box } from "@rebass/grid"
import BackgroundImage from "../BackgroundImage"

const SingleImage = image => (
  <Flex alignItems="center" justifyContent="center">
    <Box width={[1, 1 / 2]}>
      <BackgroundImage img={image.image} aspectRatio border />
    </Box>
  </Flex>
)

export default SingleImage
