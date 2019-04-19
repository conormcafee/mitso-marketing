import React from "react"
import styled from "styled-components"
import {Box} from "@rebass/grid"
import {BLACK, SECONDARY} from "../../variables"

const Statement = ({statement}) => (
    <Wrapper
        p={[3,4]}
        my={[4,5]}
        mx="auto"
        css={{ maxWidth: '800px'}}>

        <Text>{statement}<Dot>.</Dot></Text>
    </Wrapper>
)

export default Statement

const Wrapper = styled(Box)`
    background-color: ${BLACK};
    box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`

const Text = styled.h3`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: white;
`

const Dot = styled.span`
    color: ${SECONDARY};
`