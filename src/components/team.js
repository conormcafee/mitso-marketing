import React, { useState } from "react"
// import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import Container from "../components/container"
import { ACCENT, BLACK, FONT_BOLD } from "../variables"

import LinkedIn from "../images/icons/linkedin.svg"

import Maeve from "../images/team/maeve-standard.jpg"
import MaeveHover from "../images/team/maeve-hover.jpg"
import Roisin from "../images/team/roisin-standard.jpg"
import RoisinHover from "../images/team/roisin-hover.jpg"
import Ciara from "../images/team/ciara-standard.jpg"
import CiaraHover from "../images/team/ciara-hover.jpg"

import MitsoCircle from "../images/backgrounds/mitso-circle.svg"

import TeamMemberModal from "../components/teamMemberModal"

const Team = () => {
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
            <h2>Meet our Team.</h2>
          </Box>
        </Container>

        <Flex>
          <Container>
            <Wrapper flexWrap={"wrap"}>
              {team.map((member, index) => (
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
          member={team[activeTeamMember]}
          closeModal={closeModal}
        />
      )}
    </React.Fragment>
  )
}

export default Team

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

const team = [
  {
    img: Maeve,
    imgSwap: MaeveHover,
    linkedin: "https://www.linkedin.com/in/maeve-finnegan",
    name: "Maeve Finnegan",
    what:
      "I develop strong relationships with each and every client and work with my team to help smash your business goals.",
    where:
      "Prior to starting my own business, I worked both client side and within agencies in Ireland and the UK, developing campaigns for clients such as Coca-Cola and Volkswagen.",
    when:
      "I created MiTSO because I believed there was a gap in the market for marketing consultancies who could deliver one-to-one marketing support for any type of business.",
    why:
      "I‘m driven by the smile I see on my clients face each and every time we deliver for them.",
    psst:
      "What you might not know is the Maeve toured the world as a professional dancer with “Riverdance - The Show” for 4 years.",
  },
  {
    img: Roisin,
    imgSwap: RoisinHover,
    linkedin: "https://www.linkedin.com/in/roisin-watters",
    name: "Roisin Watters",
    what:
      "I work with clients to plan, develop and implement effective marketing communication campaigns.",
    where:
      "I spent my placement year working for Warner Bros. in London within the EMEA Publicity Department on 20 high profile film releases. Following my placement I gained further experience in London with global advertising agency, Feref, in both PR and social media.",
    when:
      "I joined MiTSO in October 2018 shortly after graduating from Ulster University with a first class honors in Communication, Advertising and Marketing.",
    why: null,
    psst: null,
  },
  {
    img: Ciara,
    imgSwap: CiaraHover,
    linkedin: "https://www.linkedin.com/in/ciara-boylan/",
    name: "Ciara Boylan",
    what:
      "I assist the team with enhancing clients’ marketing campaigns. Alongside this, I am creating a digital strategy for MiTSO including the development of our new website. ",
    where:
      "I spent my undergraduate placement with Enterprise Rent-A-Car in Dublin Airport becoming the first intern in Ireland to achieve the Management Qualification Interview. Following my graduation from Business Management with a first class honours, I completed an internship with Allen & Overy in their Digital Marketing Team.",
    when:
      "I joined MiTSO in March 2019 as a placement student. I am currently studying MSc Marketing in Queen’s University Belfast.",
    why:
      "As Peter Drucker quotes, “The best way to predict the future is to create it”. Thus, no two days are the same in MiTSO as we design marketing campaigns for a diverse range of clients.",
    psst: null,
  },
]
