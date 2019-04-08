import React from "react"
import {Flex, Box} from "@rebass/grid"
import styled from "styled-components"
import {Heading03} from "../../../../components/global/typography"
import Icon01 from "../../../../images/icons/pr.svg"
import Arrow from "../../../../images/icons/right-arrow-accent.svg"
import {FONT_BOLD, ACCENT} from "../../../../variables"

const QuickLinks = (props) => (
    <Box width={[1, 1/2, 1/3, 1/3, 1/4]} p={[3,4]}>
        <QuickLink 
            as="button" 
            onClick={props.onClick} p={3}>

            <Flex 
                flexWrap={['nowrap', 'nowrap', 'nowrap', 'wrap']}
                flexDirection={['row', 'row', 'row', 'column']}
                alignItems="center" 
                className="main">
                <img src={Icon01} className="icon" alt="Icon 01" />
                <Title>{props.title}</Title>
            </Flex>
            
            <CTA
                className="cta"
                flexWrap="wrap"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <span>Find out More</span>
                <img src={Arrow} alt={`Go to ${props.title}`} />
            </CTA>
        </QuickLink>
    </Box> 
)

export default QuickLinks

const t = `350ms cubic-bezier(1,-0.31, 0.28, 0.63)`

const CTA = styled(Flex)`
    opacity: 0;
    
    transition:
        transform ${t},
        opacity ${t};

    span {
        font-family: ${FONT_BOLD};
        color: ${ACCENT};
        margin-bottom: 10px;
    }

    > img {
        opacity: 1;
    }
`

const QuickLink = styled(Box)`
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    padding-top: 24px;
    box-shadow: -2px 4px 2px 0 rgba(0, 0, 0, 0.05);
    width: 100%;
    background: #ffffff;
    position: relative;
    z-index: 2;
    text-align: left;
    overflow: hidden;
    

    .icon {
        margin-right: 16px;
        max-height: 60px;
    }

    h3 {
        margin-top: 0;
        margin-bottom: 0;
    }

    .main {
        width: 100%;
    }

    .cta {
        display: none;
    }

    @media only screen and (min-width: 1000px) {
        transition: 
            background-color ${t},
            border ${t};

        .icon {
            margin-right: 0;
            max-height: 100px;

            transition: 
                transform ${t},
                opacity ${t};
        }

        h3 {
            margin-top: 1em;
            margin-bottom: 1em;
            transition: transform ${t};
        }

        .cta {
            display: flex;
        }

        &:hover {
            background: rgba(156, 233, 207, 0.15);
            border: 2px solid ${ACCENT};
            box-shadow: 2px 4px -2px 0 rgba(0, 0, 0, 0.05);

            .icon {
                opacity: 0;
                transform: translateY(-100%);
            }

            h3 {
                transform: translateY(-100px);
            }

            .cta {
                transform: translateY(-100px);
                opacity: 1;

                > img {
                    opacity: 1;
                }
            }
        }
    }
`

const Title = styled(Heading03)`
    font-size: 16px;
` 