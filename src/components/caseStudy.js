import React from "react";
import {Box} from "@rebass/grid";
import styled from "styled-components";
import {Heading02, Heading03, Text} from "../components/global/typography";
import {ACCENT} from "../variables";
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

const Title = styled(Heading02)`
    position: relative;
    margin-top: -75px;
    background-color: #ffffff;
    left: -32px;
    padding-top: 15px;
    padding-left: 32px;
    border-top-right-radius: 8px;
`;

const _CaseStudy = (props) => {
    return (
        <Box as="article" width={[1, 1/3 ]} px={[3, 4]} mt={[0, props.marginTop]} mb={[5, 0]}>
            <CaseStudy>
                <img src="https://placehold.it/500x300/FFEE93/FFEE93" alt={`${props.title}`} />
                <Box px={4} pb={4}>
                    <Title mb={`0px`}>{props.title}</Title>
                    <Heading03 mt={`5px`} color={ACCENT}>Case Study</Heading03>
                    <Text tight>{props.intro}</Text>
                    <Button>Read Case Study</Button>
                </Box>
            </CaseStudy>
        </Box>
    )
}

export default _CaseStudy