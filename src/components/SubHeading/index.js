import React from "react"
import styled from "styled-components"
import { ACCENT } from "../../variables"

const SubHeading = ({ text, size, mt }) => (
  <Span size={size} mt={mt}>
    {text}
  </Span>
)

export default SubHeading

const Span = styled.span`
  display: block;
  color: ${ACCENT};
  text-transform: uppercase;
  font-size: ${props => (props.size ? `${props.size}` : `18px`)};
  margin-top: ${props => (props.mt ? `${props.mt}` : `0px`)};
  letter-spacing: 2px;
`
