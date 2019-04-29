import React from "react";
import styled from "styled-components"
import Dots from "../../images/backgrounds/dots.svg"

const DottedBackground = () => (
    <Img src={Dots} alt="Dotted Background" />
)

export default DottedBackground

const Img = styled.img`
    position: absolute;
    top: 0;
    right: 0;
`