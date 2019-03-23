import React from "react"
import {Flex,Box} from "@rebass/grid"
import styled from "styled-components"
import {ACCENT, WHITE} from "../../../variables"

const TopImages = () => (
    <Flex as="section" mb={[3,3,3,6]} flexWrap={['wrap', 'wrap', 'nowrap']}>
        <Flex width={[1/2, 1/2, 1/3]} flexWrap="wrap">
            <Box py={2} px={2} width={1/2}>
                <TopImage ar={2}>
                    <Image bg={ACCENT} />
                </TopImage>
            </Box>

            <Box py={2} px={2} width={1/2}>
                <TopImage ar={2}>
                    <Image bg={WHITE} />
                </TopImage>
            </Box>

            <Box py={2} px={2} width={1}>
                <TopImage ar={3}>
                    <Image bg={ACCENT} />
                </TopImage>
            </Box>
        </Flex>

        <Flex width={[1/2, 1/2, 1/3]} flexWrap="wrap" alignItems="center">
            <Box py={2} px={2} width={1/2} alignSelf="stretch">
                <TopImage ar={1}>
                    <Image bg={ACCENT} />
                </TopImage>
            </Box>

            <Box py={2} px={2} width={1/2} alignSelf="stretch">
                <TopImage ar={1}>
                    <Image bg={ACCENT} push />
                </TopImage>
            </Box>
        </Flex>

        <LastGroup width={[1, 1, 1/3]} flexWrap="wrap">
            <Box py={2} px={2} width={1}>
                <TopImage ar={3}>
                    <Image bg={ACCENT} />
                </TopImage>
            </Box>

            <Box py={2} px={2} width={1/2}>
                <TopImage ar={2}>
                    <Image bg={WHITE} />
                </TopImage>
            </Box>

            <Box py={2} px={2} width={1/2}>
                <TopImage ar={2}>
                    <Image bg={ACCENT} />
                </TopImage>
            </Box>
        </LastGroup>
    </Flex>
)

export default TopImages

const TopImage = styled(Box)`
    position: relative;
    height: 100%;
    padding-top: ${props => props.ar === 1 ? `100%` : props.ar === 2 ? `75%` : `56.25%`};
`

const Image = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.bg};

    @media only screen and (min-width: 40em) {
        border: 10px solid ${WHITE};
        transform: ${props => props.push ? `translateY(50px)` : `translateY(0px)`};
    }
`

const LastGroup = styled(Flex)`
    @media only screen and (max-width: 40em) {
        display: none;
    }
`