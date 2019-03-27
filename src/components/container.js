import React from "react"
import styled from "styled-components"

const _Container = (props) => {
    return (
        <Container className={props.className}>
            {props.children}
        </Container>
    )
}

export default _Container

const Container = styled.div`
    position: relative;
    z-index: 1;

    @media only screen and (min-width: 1200px) {
        max-width: 1250px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
    }
}
`