import React from "react";
import styled from "styled-components";
import {Flex, Box} from "@rebass/grid";
import Container from "../components/container";
import {ACCENT, BLACK, FONT_BOLD} from "../variables";

import LinkedIn from "../images/icons/linkedin.svg";
import Maeve from "../images/maeve.jpg"
// import Roisin from "../images/roisin.jpg"
// import Ciara from "../images/ciara.jpg"

import TeamMemberModal from "../components/teamMemberModal";

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTeamMember: 0
        }
    }

    readMore = (index) => this.setState({ activeTeamMember: index === this.state.activeTeamMember ? null : index})

    closeModal = () => this.setState({ activeTeamMember: null })

    render() {

        return (
            <React.Fragment>
                
                <Container>
                    <Box px={[3,4]} mt={[3, 3, 3, 6]}>
                        <h2>Meet our Team.</h2>
                    </Box>
                </Container>

                <Flex as="section" pb={6}>
                    <Container>
                        <Wrapper flexWrap={'wrap'}>
                            {team.map((member, index) => (
                                <Box key={index} width={[1, 1/3]} px={[3, 4]} mt={index !== 0 ? [6, 6, 0] : [0]}>
                                    <Member>
                                        <Photo src={member.img} alt={`${member.name}`} />
                                        <Box py={[2,3]} px={[3,4]}>
                                            <Name>{member.name}</Name>
                                            <p>{member.what}</p>
                                        </Box>   
                                        
                                        <Footer as="footer" py={[2,3]} px={[3,4]}>
                                            <a href={member.linkedin} title={`Connect with ${member.name} on LinkedIn`} alt={`Connect with ${member.name} on LinkedIn`}><LinkedInIcon src={LinkedIn} alt="LinkedIn" /></a>
                                            <Button onClick={() => this.readMore(index)}>Read More</Button>
                                        </Footer>
                                    </Member>
                                </Box>
                            ))}
                        </Wrapper>
                    </Container>
                </Flex>

                {this.state.activeTeamMember !== null &&
                    <TeamMemberModal 
                        member={team[this.state.activeTeamMember]} 
                        closeModal={this.closeModal}
                    />
                }
            </React.Fragment>
        )
    }
}

export default Team

const Wrapper = styled(Flex)`
    position: relative;
`;

const Member = styled.figure`
    background: white;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
`;

const LinkedInIcon = styled.img`
    height: 20px;
    width: 20px;
`;

const Photo = styled.img`
   width: 100%;
   object-fit: cover;
   margin-right: 32px;
`;

const Name = styled.h3`
    margin-top: 0;
    margin-bottom: 0;
`;

const Footer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #e6e6e6;
`;

const Button = styled.button`
    background: transparent;
    border: none;
    color: ${BLACK};
    padding: 0;
    font-family: ${FONT_BOLD};

    &:hover {
        color: ${ACCENT};
    }
`;

const team = [
    {
        img: Maeve,
        linkedin: "https://www.linkedin.com/in/maeve-finnegan",
        name: "Maeve Finnegan",
        what: "I develop strong relationships with each and every client and work with my team to help smash your business goals.",
        where: "Prior to starting my own business, I worked both client side and within agencies in Ireland and the UK, developing campaigns for clients such as Coca-Cola and Volkswagen.",
        when: "I created MiTSO because I believed there was a gap in the market for marketing consultancies who could deliver one-to-one marketing support for any type of business.",
        why: "I‘m driven by the smile I see on my clients face each and every time we deliver for them.",
        psst: "What you might not know is the Maeve toured the world as a professional dancer with “Riverdance - The Show” for 4 years."
    },
    {
        img: Maeve,
        linkedin: "https://www.linkedin.com/in/roisin-watters",
        name: "Roisin Watters",
        what: "I work with clients to plan, develop and implement effective marketing communication campaigns.",
        where: "I spent my placement year working for Warner Bros. in London within the EMEA Publicity Department on 20 high profile film releases. Following my placement I gained further experience in London with global advertising agency, Feref, in both PR and social media.",
        when: "I joined MiTSO in October 2018 shortly after graduating from Ulster University with a first class honors in Communication, Advertising and Marketing.",
        why: null,
        psst: null
    },
    {
        img: Maeve,
        linkedin: "https://www.linkedin.com/in/ciara-boylan/",
        name: "Ciara Boylan",
        what: "I assist the team with enhancing clients’ marketing campaigns. Alongside this, I am creating a digital strategy for MiTSO including the development of our new website. ",
        where: "I spent my undergraduate placement with Enterprise Rent-A-Car in Dublin Airport becoming the first intern in Ireland to achieve the Management Qualification Interview. Following my graduation from Business Management with a first class honours, I completed an internship with Allen & Overy in their Digital Marketing Team.",
        when: "I joined MiTSO in March 2019 as a placement student. I am currently studying MSc Marketing in Queen’s University Belfast.",
        why: "As Peter Drucker quotes, “The best way to predict the future is to create it”. Thus, no two days are the same in MiTSO as we design marketing campaigns for a diverse range of clients.",
        psst: null
    }
]