import React from "react";
import {Flex, Box} from "@rebass/grid";
import styled from "styled-components";
import Container from "../components/container"
import {BLACK, SECONDARY, FONT_BOLD} from "../variables";

const TagLine = styled(Box)`
    position: relative;
    background-color: ${BLACK};

    @media only screen and (min-width: 40em) {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;

        &:before {
            content: "";
            background: ${BLACK};
            height: 100%;
            width: 250px;
            position: absolute;
            top: 0;
            bottom: 0;
            left: -250px;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }
    }
`;

const Item = styled.span`
    display: block;
    width: 100%;
    margin-top: 32px;

    @media only screen and (min-width: 40em) {
        display: inline-block;
        width: auto;
        margin-right: 32px;
        margin-top: 0;
    }
`;

const Text = styled.span`
    font-family: ${FONT_BOLD};
    font-size: 30px;
    color: ${props => props.yellow ? `${SECONDARY}` : `#ffffff`};
`;

const Tagline = (props) => {
    return (    
        <Container>
            <TagLine as="section" mb={4} width={[1, 1, 2/3]} pb={[4, 0]}>
                <Flex flexWrap={['wrap', 'noWrap']} p={[3, 4]} justifyContent="space-between">
                    {props.data.map((item, index) => (
                        <Item key={index}>
                            <Text>{item}</Text>
                            <Text yellow>.</Text>
                        </Item>
                    ))}
                </Flex>
            </TagLine>
        </Container>
    )
}

export default Tagline