import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FONT_BOLD, BLACK, ACCENT } from "../../variables"
import LeftArrow from "../../images/icons/left-arrow.svg"

const BackLink = ({url, title}) => (
    <Back to={url} className="heading">
        <img src={LeftArrow} alt="Back to previous page" />
        <span>{title}</span>
    </Back>
)

export default BackLink

const Back = styled(Link)`
    display: flex;
    align-items: center;
    color: ${BLACK};
    font-family: ${FONT_BOLD};
    font-weight: 900;
    transition: color 150ms ease-in-out;
    text-decoration: none;

    img {
        margin-right: 8px;
    }

    &:hover {
        color: ${ACCENT};
    }
`