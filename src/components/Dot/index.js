import React from "react"
import styled from "styled-components"
import { SECONDARY } from "../../variables"

const Dot = ({ color }) => <Span color={color}>.</Span>

export default Dot

const Span = styled.span`
  color: ${props => (props.color ? `${props.color}` : `${SECONDARY}`)};
`
