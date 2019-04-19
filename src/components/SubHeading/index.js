import React from "react"
import styled from "styled-components"
import {ACCENT} from "../../variables"

const SubHeading = ({text, size}) => (
    <Span size={size}>{text}</Span>
)

export default SubHeading

const Span = styled.span`
    display: block;
    color: ${ACCENT};
    text-transform: uppercase;
    font-size: ${props => props.size ? `${props.size}` : `18px`};
    letter-spacing: 2px;
`