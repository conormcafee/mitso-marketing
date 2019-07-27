import React from "react"
import { Link } from "gatsby"
import { Flex, Box } from "@rebass/grid"
import styled from "styled-components"
import Image from "../components/Image/Image"
import WhiteArrow from "../images/icons/right-arrow-white.svg"

const CaseStudy = props => {
  const { title, mainImage } = props.node.frontmatter
  const { slug } = props.node.fields
  return (
    <Box
      as="article"
      width={[1, 1, 1 / 2, 1 / 3]}
      px={[0, 3, 4]}
      mb={[0, 5, 5]}
    >
      <Link to={slug}>
        <Wrapper>
          <Image image={mainImage} />
          <Content px={4} py={2}>
            <Title as="h2" alignItems="center" justifyContent="space-between">
              <span>{title}</span>
              <img src={WhiteArrow} alt={`Read more about ${title}`} />
            </Title>
          </Content>
        </Wrapper>
      </Link>
    </Box>
  )
}

export default CaseStudy

const Content = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(58, 64, 90, 0.5);
  background: linear-gradient(
    180deg,
    rgba(58, 64, 90, 0) 0%,
    rgba(58, 64, 90, 0.5) 100%
  );
  transition: background 150ms ease-in-out;
`

const Wrapper = styled(Box)`
  position: relative;
  z-index: 1;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  overflow: hidden;
  box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);

  &:hover ${Content} {
    background: rgba(58, 64, 90, 1);
    background: linear-gradient(
      180deg,
      rgba(58, 64, 90, 0) 0%,
      rgba(58, 64, 90, 1) 100%
    );
  }

  @media only screen and (min-width: 640px) {
    border-radius: 8px;
  }
`

const Title = styled(Flex)`
  position: relative;
  color: white;
  font-size: 20px;
  margin: 0;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`
