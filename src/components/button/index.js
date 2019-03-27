import React from "react";
import styled from "styled-components";
import Star from "../../images/icons/star.svg";
import {FONT_BOLD} from "../../variables";

const Btn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-top: 12px;
    padding-right: 24px;
    padding-bottom: 12px;
    padding-left: 24px;
    border-radius: 25px;
    background: rgb(156,233,207);
    background: linear-gradient(90deg, rgba(156,233,207,1) 0%, rgba(111,216,186,1) 100%);
    border: none;
    font-family: ${FONT_BOLD};
    font-weight: 900;
    color: #ffffff;
    box-shadow: 0px 2px 1px 0px #66C9A8;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, .4);
    appearance: none;
    transition: 
        box-shadow 150ms ease-in-out,
        text-shadow 150ms ease-in-out;

    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 1px #56ad90;
        box-shadow: -1px 3px 0px 0px #56ad90;
    }
`;

const Icon = styled.img`
    margin-right: 10px;
`;

class Button extends React.Component {
    render() {
        return (
            <Btn>
                <Icon src={Star} />
                <span>{this.props.children}</span>
            </Btn>
        )
    }
} 

export default Button;