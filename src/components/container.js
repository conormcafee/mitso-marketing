import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;

    @media only screen and (min-width: 1400px) {
        max-width: 1400px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
    }
}
`;

const _Container = (props) => {
    return (
        <Container className={props.className}>
            {props.children}
        </Container>
    )
}

export default _Container