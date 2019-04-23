import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"

import SubHeading from "../SubHeading"
import BulletPoint from "../../images/icons/bullet-point.svg"

const Services = ({title, paragraph, services}) => (
    <Flex flexWrap="wrap" pt={4} mb={6}>
        <Box px={[3,4]} width={[1, 1/2, 1/3]}>
            <Heading>{title} <SubHeading text="Services" /></Heading>
            <p>{paragraph}</p>
        </Box>

        <Box px={[3,4]} width={[1, 1/2, 2/3]}>
            <List as="ul" flexWrap="wrap">
                {services.map((item, index) => (
                    <ListItem as="li" key={Date.now()+index} width={[1, 1, 1/2]} px={[3,4]}>
                        <Flex alignItems="center" py={3}>
                            <Icon src={BulletPoint} alt="Bullet Point" />
                            <Text>{item}</Text>
                        </Flex>
                    </ListItem>
                ))}
            </List>
        </Box>
    </Flex>
)

export default Services

const Heading = styled.h2`
    margin-top: 0;
`

const List = styled(Flex)`
    background-color: white;
    border: 2px solid #e6e6e6;
    box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.05);
    border-radius: 8px;
`

const ListItem = styled(Box)`

    @media only screen and (max-width: 831px) {
        :not(:first-child) {
            border-top: 2px solid #e6e6e6;
        }
    } 

    @media only screen and (min-width: 832px) {
        &:nth-child(n+3) {
            border-top: 2px solid #e6e6e6;
        }

        &:nth-child(odd) {
            border-right: 2px solid #e6e6e6;
        }
    }   
`

const Icon = styled.img`
    max-width: 50px;
    height: auto; 
`

const Text = styled.h4`
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 32px;
`
