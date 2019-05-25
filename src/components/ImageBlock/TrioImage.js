import React from "react"
import { Flex, Box } from "@rebass/grid"
import BackgroundImage from "../BackgroundImage"

const TrioImage = images => (
  <Flex css={{ maxWidth: "1200px" }} mx="auto">
    <Box width={[1, 1 / 2]}>
      <BackgroundImage img={images.images[0]} aspectRatio={false} border />
    </Box>
    <Flex flexDirection={"column"} width={[1, 1 / 2]}>
      <BackgroundImage img={images.images[1]} aspectRatio border />
      <BackgroundImage img={images.images[2]} aspectRatio border />
    </Flex>
  </Flex>
)

export default TrioImage
