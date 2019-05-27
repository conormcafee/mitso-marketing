import React from "react"
import { Flex } from "@rebass/grid"

import { Twitter, Facebook, Linkedin } from "react-social-sharing"

const Share = ({ url }) => (
  <Flex>
    <Twitter link={url} />
    <Facebook link={url} />
    <Linkedin link={url} />
  </Flex>
)

export default Share
