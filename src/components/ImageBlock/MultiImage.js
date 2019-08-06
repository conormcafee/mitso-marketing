import React from "react"
import { Flex, Box } from "@rebass/grid"
import BackgroundImage from "../BackgroundImage"

const MultiImage = images => {
  return (
    <Flex flexWrap="wrap" css={{ maxWidth: "1200px" }} mx="auto">
      {images.images.map((image, index) => (
        <Box key={index} width={[1, 1 / 2]}>
          <BackgroundImage img={image} aspectRatio border />
        </Box>
      ))}
    </Flex>
  )
}

export default MultiImage
