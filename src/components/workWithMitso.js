import React from "react";
import {Flex, Box} from "@rebass/grid";
import styled from "styled-components";
import {ACCENT} from "../variables";
import Button from "../components/button";
import Container from "../components/container"

import Icon01 from "../images/icons/web-design.svg";
import Icon02 from "../images/icons/digital-marketing.svg";
import Icon03 from "../images/icons/social-media.svg";
import Icon04 from "../images/icons/visual.svg";
import Icon05 from "../images/icons/event-management.svg";
import Icon06 from "../images/icons/pr.svg";

const WorkWithMitso = styled.section`
    background-color: ${ACCENT};
`;

const WorkBox = styled(Flex)`
    background-color: white;
    border-radius: 8px;
    box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
`;

const Title = styled.h4`
    margin-bottom: 0;
`;

const SubText = styled.p`
    margin-top: 0; 
`;

const Icon = styled.img`
    height: 75px;
    width: 75px;
`;

const Service = (props) => {
    return (
        <Flex width={[1, 1/2]} mt={[props.index >= 1 ? 4 : 0, props.index > 1 ? 4 : 0]} alignItems="center">
            <Box width={1/4} mr={1}>
                <Icon src={props.icon} alt={`${props.title} Icon`} />
            </Box>
            <Box width={3/4}>
                <Title>{props.title}</Title>
                <SubText>Find Out More</SubText>
            </Box>
        </Flex>
    )
}

const _WorkWithMitso = () => {
    return (
        <WorkWithMitso>
            <Container>
                <Flex py={5} flexWrap={['wrap', 'wrap', 'nowrap']} alignItems="center">
                    <Box width={[1, 1, 1/3]} px={[3, 4]} mb={[5, 5, 0]}>
                        <WorkBox p={4} flexDirection="column" alignItems="center" justifyContent="center">
                            <h3>Work with MiTSO</h3>
                            <Button>Start Project</Button>
                        </WorkBox>
                    </Box>

                    <Box width={[1, 1, 2/3]} px={[3, 4]}>
                        <WorkBox p={4} flexWrap="wrap">
                            {SERVICES.map((service, index) => (
                                <Service key={index} index={index} {...service} />
                            ))}    
                        </WorkBox>
                    </Box>
                </Flex>
            </Container>
        </WorkWithMitso>
    )
}

export default _WorkWithMitso

const SERVICES = [
    {
        icon: Icon01,
        title: "Web Design",
        url: "/"
    },
    {
        icon: Icon02,
        title: "Digital Marketing",
        url: "/"
    },
    {
        icon: Icon03,
        title: "Social Media",
        url: "/"
    },
    {
        icon: Icon04,
        title: "Visuals",
        url: "/"
    },
    {
        icon: Icon05,
        title: "Event Management",
        url: "/"
    },
    {
        icon: Icon06,
        title: "PR",
        url: "/"
    },
]