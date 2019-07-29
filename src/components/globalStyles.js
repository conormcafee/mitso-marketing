import { css, createGlobalStyle } from "styled-components"
import { BLACK, BASE, FONT_BOLD, FONT_LIGHT } from "../variables"

const GlobalHeading = css`
  font-family: ${FONT_BOLD};
  color: ${BLACK};
  font-weight: 900;
  margin-top: 1em;
  margin-bottom: 1em;
`

export const GlobalStyle = createGlobalStyle`
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

    body {
        overflow-x: hidden;
        color: ${BASE};
        background: #fdfdfd;
    }

    html {
        font-family: ${FONT_LIGHT};
        font-weight: 300;
        line-height: 1.75;
    }

    h1 {
        ${GlobalHeading}
        font-size: 32px;
        line-height: 1.3;
        max-width: 700px;

        @media only screen and (min-width: 62.5em) {
            font-size: 40px;
        }
    }

    h2 {
        ${GlobalHeading}
        font-size: 28px;
        line-height: 1.3;
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
        font-weight: 300;
        max-width: 400px;
        line-height: 1.75;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    figure {
        margin: 0;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    ul {
        list-style: none;
        padding-left: 0;
        font-family: ${FONT_LIGHT};
        line-height: 1.75;
        color: ${BASE};
    }

    address {
        font-style: normal;
    }

    address p {
        margin-top: 0;
        margin-bottom: 0;
    }

    button {
        appearance: none;
        
        &:hover {
            cursor: pointer;
        }

        &:focus {
            outline: none;
        }
    }
`
