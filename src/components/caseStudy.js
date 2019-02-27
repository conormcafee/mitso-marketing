import React from "react";
import {Box} from "@rebass/grid";
import styled from "styled-components";
import {Heading02, Heading03, Text} from "../components/global/typography";
import Button from "../components/button";

const CaseStudy = styled(Box)`
    position: relative;
    z-index: 1;
    background: #ffffff;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);

    img {
        max-width: 100%;
    }
`;

const _CaseStudy = (props) => {
    return (
        <Box width={[1, 1/3 ]} px={[3, 4]} mt={[0, props.marginTop]} mb={[5, 0]}>
            <CaseStudy>
                <img src="https://placehold.it/500x300" alt={`${props.title}`} />
                <Box px={4} pb={4}>
                    <Heading02>{props.title}</Heading02>
                    <Heading03>Case Study</Heading03>
                    <Text tight>{props.intro}</Text>
                    <Button>Read Case Study</Button>
                </Box>
            </CaseStudy>
        </Box>
    )
}

export default _CaseStudy