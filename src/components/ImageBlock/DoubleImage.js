import React from "react"
import { Flex, Box } from "@rebass/grid"
import BackgroundImage from "../BackgroundImage"

const DoubleImage = images => (
  <Flex css={{ maxWidth: "1200px" }} mx="auto">
    <Box width={[1, 1 / 2]}>
      <BackgroundImage img={images.images[0]} aspectRatio border />
    </Box>
    <Box width={[1, 1 / 2]}>
      <BackgroundImage img={images.images[1]} aspectRatio border />
    </Box>
  </Flex>
)

export default DoubleImage
