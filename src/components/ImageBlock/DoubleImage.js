import React from "react"
import { Flex } from "@rebass/grid"
import BackgroundImage from "../BackgroundImage"

const DoubleImage = images => (
  <Flex css={{ maxWidth: "1200px" }} mx="auto">
    <Flex flexDirection={"column"} width={[1, 1 / 2]}>
      <BackgroundImage img={images.images[0]} aspectRatio border />
      <BackgroundImage img={images.images[1]} aspectRatio border />
    </Flex>
  </Flex>
)

export default DoubleImage
