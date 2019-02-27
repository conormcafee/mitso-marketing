import styled, {css} from "styled-components";
import {BLACK, BASE, FONT_BOLD, FONT_LIGHT} from "../../variables";

const GlobalHeading = css`
    font-family: ${FONT_BOLD};
    color: ${BLACK};
    font-weight: 700;
`;

export const Heading01 = styled.h1`
    ${GlobalHeading}
    font-size: 50px;
    line-height: 1.2;
    max-width: 600px;
`;

export const Heading02 = styled.h1`
    ${GlobalHeading}
    font-size: 35px;
    line-height: 1.6;
    max-width: 600px;
`;

export const Heading03 = styled.h1`
    ${GlobalHeading}
    font-size: 18px;
    line-height: 1.4;
    max-width: 600px;
`;

export const Text = styled.p`
    font-family: ${FONT_LIGHT};
    font-weigth: 400;
    line-height: 1.6;
    color: ${BASE};
    max-width: ${props => props.tight ? `350px` : `auto`};
`;