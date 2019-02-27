import React from "react";
import styled from "styled-components";

import {ACCENT, FONT_BOLD} from "../../variables";

const Btn = styled.button`
    display: inline-block;
    padding-top: 15px;
    padding-right: 30px;
    padding-bottom: 15px;
    padding-left: 30px;
    border-radius: 25px;
    background-color: ${ACCENT};
    border: 2px solid transparent;
    font-family: ${FONT_BOLD};
    color: #ffffff;
    box-shadow: 0px 2px 1px 0px #66C9A8;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, .2);
    appearance: none;
    transition: 
        background-color 150ms ease-in-out, 
        box-shadow 150ms ease-in-out,
        text-shadow 150ms ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #66C9A8;
        text-shadow: 1px 1px 1px #56ad90;
        box-shadow: -1px 3px 0px 0px #56ad90;
    }
`;

class Button extends React.Component {
    render() {
        return (
            <Btn>
                {this.props.children}
            </Btn>
        )
    }
} 

export default Button;