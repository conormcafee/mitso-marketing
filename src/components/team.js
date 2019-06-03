import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Container from "../components/container"
import Dot from "../components/Dot"
import { ACCENT, BLACK, FONT_BOLD } from "../variables"
import LinkedIn from "../images/icons/linkedin.svg"
import MitsoCircle from "../images/backgrounds/mitso-circle.svg"
import TeamMemberModal from "../components/teamMemberModal"

const Team = props => {
  const title = props.data.file.childMarkdownRemark.frontmatter.title
  const teamMembers = props.data.file.childMarkdownRemark.frontmatter.teamMember

  const [activeTeamMember, setActiveTeamMemeber] = useState(null)
  const [imageSwap, setImageSwap] = useState(null)

  const readMore = index =>
    setActiveTeamMemeber(index === activeTeamMember ? null : index)

  const closeModal = () => setActiveTeamMemeber(null)
  const swapImageIn = index => setImageSwap(index)
  const swapImageOut = () => setImageSwap(null)

  return (
    <React.Fragment>
      <TeamWrapper mt={6}>
        <Container>
          <Box pt={[3, 4]} px={[3, 4]} mt={[3, 3, 3]}>
            <h2>
              {title}
              <Dot color={ACCENT} />
            </h2>
          </Box>
        </Container>

        <Flex>
          <Container>
            <Wrapper flexWrap={"wrap"}>
              {teamMembers.map((member, index) => (
                <Box
                  key={index}
                  width={[1, 1 / 2, 1 / 2, 1 / 3]}
                  px={[3, 4]}
                  mb={[5, 5, 5, 6]}
                  mt={[index === 1 ? 5 : 0]}
                >
                  <Member>
                    <Photo
                      onClick={() => readMore(index)}
                      onMouseOver={() => swapImageIn(index)}
                      onMouseOut={() => swapImageOut()}
                      src={
                        imageSwap === null
                          ? member.img
                          : imageSwap === index
                          ? member.imgSwap
                          : member.img
                      }
                      alt={`${member.name}`}
                    />
                    <Box
                      onClick={() => readMore(index)}
                      py={[2, 3]}
                      px={[3, 4]}
                    >
                      <Name>{member.name}</Name>
                      <p>{member.what}</p>
                    </Box>

                    <Footer as="footer" py={[2, 3]} px={[3, 4]}>
                      <a
                        href={member.linkedin}
                        title={`Connect with ${member.name} on LinkedIn`}
                        alt={`Connect with ${member.name} on LinkedIn`}
                      >
                        <LinkedInIcon src={LinkedIn} alt="LinkedIn" />
                      </a>
                      <Button onClick={() => readMore(index)}>Read More</Button>
                    </Footer>
                  </Member>
                </Box>
              ))}
            </Wrapper>
          </Container>
        </Flex>

        <Circle src={MitsoCircle} alt="MiTSO" />
      </TeamWrapper>

      {activeTeamMember !== null && (
        <TeamMemberModal
          member={teamMembers[activeTeamMember]}
          closeModal={closeModal}
        />
      )}
    </React.Fragment>
  )
}

export default () => (
  <StaticQuery query={query} render={data => <Team data={data} />} />
)

export const query = graphql`
  query {
    file(name: { eq: "team" }) {
      childMarkdownRemark {
        frontmatter {
          title
          teamMember {
            img
            imgSwap
            name
            what
            where
            when
            why
            psst
            linkedin
          }
        }
      }
    }
  }
`

const TeamWrapper = styled(Box)`
  background: #f6f6f6;
  position: relative;
  overflow: hidden;
`

const Wrapper = styled(Flex)`
  position: relative;
`

const Member = styled.figure`
  background: white;
  box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`

const LinkedInIcon = styled.img`
  height: 20px;
  width: 20px;
`

const Photo = styled.img`
  width: 100%;
  object-fit: cover;
  margin-right: 32px;
`

const Name = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
`

const Footer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e6e6e6;
`

const Button = styled.button`
  background: transparent;
  border: none;
  color: ${BLACK};
  padding: 0;
  font-family: ${FONT_BOLD};

  &:hover {
    color: ${ACCENT};
  }
`

const Circle = styled.img`
  position: absolute;
  bottom: -150px;
  left: -150px;
`
