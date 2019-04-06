import React from "react"
import {Box} from "@rebass/grid"
import styled from "styled-components"
import {Heading03} from "../../../../components/global/typography"
import Icon01 from "../../../../images/icons/pr.svg"

const QuickLinks = (props) => (
    <Box width={1/4} p={[3,4]}>
        <QuickLink onClick={props.onClick} p={3}>
            <img src={Icon01} alt="Icon 01" />
            <Heading03>{props.title}</Heading03>
        </QuickLink>
    </Box> 
)

export default QuickLinks

const QuickLink = styled.button`
    border: 1px solid #e6e6e6;
    text-align: center;
    border-radius: 4px;
    padding-top: 24px;
    box-shadow: -2px 4px 2px 0 rgba(0, 0, 0, 0.05);
    width: 100%;
    background-color: #ffffff;
    position: relative;
    z-index: 1;
    transition: background-color 150ms ease-in-out;
    overflow: hidden;

    img {
        transition: 
            transform 150ms ease-in-out,
            opacity 150ms ease-in-out;
    }

    &:hover {
        background-color: #f6f6f6;
        box-shadow: 2px 4px -2px 0 rgba(0, 0, 0, 0.05);

        img {
            opacity: 0;
            transform: translateY(-100%);
        }
    }
`