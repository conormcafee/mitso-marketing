import React from "react"
import {Flex,Box} from "@rebass/grid"
import styled from "styled-components"
import {ACCENT, WHITE} from "../../../variables"

import Office01 from "../../../images/office/office-02.jpg"
import Office03 from "../../../images/office/office-03.jpg"
import Office04 from "../../../images/office/office-04.jpg"
import Office05 from "../../../images/office/office-05.jpg"
import Office06 from "../../../images/office/office-06.jpg"
import Office08 from "../../../images/office/office-08.jpg"

const padding = [2,2,3]

const TopImages = () => (
    <Flex 
        as="section" 
        mx={[-2, -2, -3] }
        mb={[3,3,3,6]} 
        flexWrap={['wrap', 'wrap', 'nowrap']}>
        <Flex width={[1/2, 1/2, 1/3]} flexWrap="wrap">
            <Box p={padding} width={1/2}>
                <TopImage ar={2}>
                    <Image bg={ACCENT} style={{ backgroundImage: `url(${Office01})`}} />
                </TopImage>
            </Box>

            <Box p={padding} width={1/2}>
                <TopImage ar={2}>
                    <Image bg={WHITE} noBs />
                </TopImage>
            </Box>

            <Box p={padding} width={1}>
                <TopImage ar={3}>
                    <Image bg={ACCENT} style={{ backgroundImage: `url(${Office03})`}} />
                </TopImage>
            </Box>
        </Flex>

        <Flex width={[1/2, 1/2, 1/3]} flexWrap="wrap" alignItems="center">
            <Box p={padding} width={1/2} alignSelf="stretch">
                <TopImage ar={1}>
                    <Image bg={ACCENT} style={{ backgroundImage: `url(${Office04})`}} />
                </TopImage>
            </Box>

            <Box p={padding} width={1/2} alignSelf="stretch">
                <TopImage ar={1}>
                    <Image bg={ACCENT} style={{ backgroundImage: `url(${Office05})`}} />
                </TopImage>
            </Box>
        </Flex>

        <LastGroup width={[1, 1, 1/3]} flexWrap="wrap">
            <Box p={padding} width={1}>
                <TopImage ar={3}>
                    <Image bg={ACCENT} style={{ backgroundImage: `url(${Office06})`}} />
                </TopImage>
            </Box>

            <Box p={padding} width={1/2}>
                <TopImage ar={2}>
                    <Image bg={WHITE} noBs />
                </TopImage>
            </Box>

            <Box p={padding} width={1/2}>
                <TopImage ar={2}>
                    <Image bg={ACCENT} style={{ backgroundImage: `url(${Office08})`}} />
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
    border-radius: 4px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow: -4px 6px 4px 0 ${props => props.noBs ? `rgba(0, 0, 0, 0)` : `rgba(0, 0, 0, 0.1)`};
`

const LastGroup = styled(Flex)`
    @media only screen and (max-width: 40em) {
        display: none;
    }
`