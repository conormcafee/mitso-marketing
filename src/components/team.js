import React from "react";
import styled from "styled-components";
import {Flex, Box} from "@rebass/grid";
import LinkedIn from "../images/icons/linkedin.svg";

const Wrapper = styled(Flex)`
    position: relative;
    z-index: 1;
`;

const LinkedInIcon = styled.img`
    height: 20px;
    width: 20px;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

class Team extends React.Component {
    render() {
        return (
            <Wrapper flexWrap={['wrap', 'wrap', 'nowrap']} mb={6}>
                {this.props.team.map((member, index) => (
                    <Box key={index} width={[1, 1, 1/3]} px={[3, 4]}>
                        <figure>
                            <img src={member.img} alt={`${member.name}`} />
                            <figcaption>
                                <Header>
                                    <h3>{member.name}</h3>
                                    <a href="https://linkedin.com" alt={`Connect with ${member.name} on LinkedIn`}>
                                        <LinkedInIcon src={LinkedIn} alt="LinkedIn" />
                                    </a>
                                </Header>
                                <p>{member.what}</p>
                            </figcaption>
                        </figure>
                    </Box>
                ))}
            </Wrapper>
        )
    }
}

export default Team