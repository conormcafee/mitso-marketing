import { css, createGlobalStyle } from 'styled-components';
import {BLACK, BASE, FONT_BOLD, FONT_LIGHT} from "../variables";

const GlobalHeading = css`
    font-family: ${FONT_BOLD};
    color: ${BLACK};
    font-weight: 900;
    margin-top: 1em;
    margin-bottom: 1em;
`;

export const GlobalStyle = createGlobalStyle`
    h1 {
        ${GlobalHeading}
        font-size: 50px;
        line-height: 1.2;
        max-width: 600px;
    }

    h2 {
        ${GlobalHeading}
        font-size: 35px;
        line-height: 1.6;
        max-width: 600px;
    }

    h3 {
        ${GlobalHeading}
        font-size: 22px;
        line-height: 1.4;
        max-width: 600px;
    }

    h4 {
        ${GlobalHeading}
        font-size: 18px;
        line-height: 1.4;
        max-width: 600px;
    }

    p {
        font-family: ${FONT_LIGHT};
        font-weight: 400;
        max-width: 400px;
        line-height: 1.75;
        color: ${BASE};
        margin-top: 1em;
        margin-bottom: 1em;
    }
`