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
    background: ${ACCENT};
    border: 2px solid ${ACCENT};
    font-family: ${FONT_BOLD};
    color: #ffffff;
    appearance: none;
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