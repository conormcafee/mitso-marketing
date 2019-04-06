import React from "react"
import styled from "styled-components"
import RightArrow from "../../images/icons/right-arrow.svg"
import {FONT_BOLD} from "../../variables"

const Button = (props) => (
    <Btn onClick={props.onClick}>
        <span>{props.children}</span>
        <Icon src={RightArrow} alt="Arrow to indicate button is clickable" />
    </Btn>
)

export default Button

const Btn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-top: 16px;
    padding-right: 24px;
    padding-bottom: 16px;
    padding-left: 24px;
    border-radius: 25px;
    background-color: rgb(111,216,186);
    background: linear-gradient(90deg, rgba(111,216,186,1) 0%, rgba(100,208,177,1) 100%);
    border: none;
    font-family: ${FONT_BOLD};
    font-weight: 900;
    color: #ffffff;
    appearance: none;
    transition: background 150ms ease-in-out;

    img {
        transform: scale(0);
        width: 0px;
        transition: 
            transform 150ms ease-in-out,
            width 150ms ease-in-out;
    }

    &:hover {
        cursor: pointer;
        background: linear-gradient(90deg, rgba(100,208,177,1) 0%, rgba(100,208,177,1) 100%);

        img {
            transform: scale(1);
            width: 10px;
        }
    }
`

const Icon = styled.img`
    margin-left: 10px;
`