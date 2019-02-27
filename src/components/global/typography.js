import styled, {css} from "styled-components";
import {BLACK, BASE, FONT_BOLD, FONT_LIGHT} from "../../variables";

const GlobalHeading = css`
    font-family: ${FONT_BOLD};
    color: ${props => props.color ? props.color : `${BLACK}`};
    font-weight: 700;
    margin-top: ${props => props.mt ? props.mt : `1em`};
    margin-bottom: ${props => props.mb ? props.mb : `1em`};
`;

export const Heading01 = styled.h1`
    ${GlobalHeading}
    font-size: 50px;
    line-height: 1.2;
    max-width: 600px;
`;

export const Heading02 = styled.h2`
    ${GlobalHeading}
    font-size: 35px;
    line-height: 1.6;
    max-width: 600px;
`;

export const Heading03 = styled.h3`
    ${GlobalHeading}
    font-size: 18px;
    line-height: 1.4;
    max-width: 600px;
`;

export const Heading04 = styled.h4`
    ${GlobalHeading}
    font-size: 16px;
    line-height: 1.4;
    max-width: 600px;
`;

export const Text = styled.p`
    font-family: ${FONT_LIGHT};
    font-weight: 400;
    line-height: 1.6;
    color: ${BASE};
    max-width: ${props => props.tight ? `350px` : null};
    margin-top: ${props => props.mt ? props.mt : `1em`};
    margin-bottom: ${props => props.mb ? props.mb : `1em`};
`;