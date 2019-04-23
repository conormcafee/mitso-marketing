import React from "react"
import styled from "styled-components"
import RightArrow from "../../images/icons/right-arrow.svg"
import LeftArrow from "../../images/icons/left-arrow.svg"
import {FONT_BOLD, BLACK} from "../../variables"

const Button = (props) => (
    <Btn onClick={props.onClick} className={props.className} back={props.back}>
        {props.reversed && <Icon src={LeftArrow} alt="Arrow to indicate button is clickable" reversed />}
        <span>{props.children}</span>
        {!props.reversed && <Icon src={RightArrow} alt="Arrow to indicate button is clickable" />}
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
    background-color: ${props => !props.back ? `rgb(111,216,186)` : `transparen`};
    background: ${props => !props.back ? `linear-gradient(90deg, rgba(111,216,186,1) 0%, rgba(100,208,177,1) 100%)` : `transparent`};
    border: 2px solid ${props => !props.back ? `transparent` : `${BLACK}`};
    font-family: ${FONT_BOLD};
    font-weight: 900;
    color: ${props => !props.back ? `#ffffff` : `${BLACK}`};
    appearance: none;
    transition: background 150ms ease-in-out; 

    &:hover {
        cursor: pointer;
        background: ${props => !props.back ? `linear-gradient(90deg, rgba(100,208,177,1) 0%, rgba(100,208,177,1) 100%)` : `transparent`};

        img {
            transform: scale(1);
            width: 10px;
        }
    }
`

const Icon = styled.img`
    width: 0px;
    transform: scale(0);
    margin-left: ${props => props.reversed ? `0px` : `10px`};
    margin-right: ${props => props.reversed ? `10px` : `0px`};
    transition: 
        transform 150ms ease-in-out,
        width 150ms ease-in-out;
`