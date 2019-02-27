import React from "react";
import {Flex, Box} from "@rebass/grid";
import styled from "styled-components";
import {BLACK, SECONDARY, FONT_BOLD} from "../variables";

const TagLine = styled(Box)`
    background-color: ${BLACK};
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`;

const Item = styled.span`
    display: inline-block;
    margin-right: 32px;
`;

const Text = styled.span`
    font-family: ${FONT_BOLD};
    font-size: 30px;
    color: ${props => props.yellow ? `${SECONDARY}` : `#ffffff`};
`;

const Tagline = (props) => {
    return (    
        <TagLine as="section" mb={4} width={2/3}>
            <Flex p={[3, 4]} justifyContent="space-between">
                {props.data.map((item, index) => (
                    <Item key={index}>
                        <Text>{item}</Text>
                        <Text yellow>.</Text>
                    </Item>
                ))}
            </Flex>
        </TagLine>
    )
}

export default Tagline