import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import {Flex, Box} from "@rebass/grid";
import Button from "../../components/button";
import {BLACK} from "../../variables";
import Container from "../../components/container";
import Thought from "../Thoughts/components/Thought"

class Thoughts extends React.Component {
    goTo = (data) => navigate(data)
    render() {
        const { homepage } = this.props
        
        const navyWidth = homepage ? [1, 1, 2/3] : [1]
        const blogWidth = homepage ? [1, 1, 1/2] : [1, 1, 1/2, 1/3]
        const wrapping = homepage ? ['wrap', 'wrap', 'noWrap'] : 'wrap'
        const marginTop = homepage ? [4, 4, 0] : 5
        const blogCount = thoughts.length
        return (
            <Container>
                <Flex flexWrap={['wrap', 'wrap', 'noWrap']} mt={homepage ? 6 : 5} as="section">
                    {homepage &&
                        <Box width={[1, 1, 1/3]} mb={[5, 4, 0]} px={[3, 4]} pt={4}>
                            <h2>Thoughts</h2>
                            <p>Take a look through our recents thoughts and ramblings.  Along with getting our thoughts out on this website, we are also active on social media.  Why don’t you give us a follow on your preferred platform</p>
                            <Button onClick={() => this.goTo('/thoughts')}>All Thoughts</Button>
                        </Box>
                    }

                    <NavyBackground width={navyWidth} py={homepage ? [3, 3, 4] : 4}>
                        <Flex flexWrap={wrapping} px={[3]}>
                            {thoughts.slice(0, homepage ? 2 : blogCount).map((thought, index) => (
                                <Thought 
                                    key={index}
                                    title={thought.title}
                                    author={thought.author}
                                    text={thought.text}
                                    img={`https://placehold.it/400x300/FFEE93/FFEE93`}
                                    link={`/thoughts/sub-page`}
                                    width={blogWidth}
                                    mt={marginTop}
                                    goTo={this.goTo}
                                />
                            ))}
                        </Flex>
                    </NavyBackground>
                </Flex>
            </Container>
        )
    }
}

export default Thoughts

const NavyBackground = styled(Box)`
    background-color: ${BLACK};
    border-radius: 8px;
    position: relative;
`

const thoughts = [
    {
        title: "Latest Blog Title",
        author: "Maeve Finnegan",
        text: "Vestibulum sit amet orci ac massa mattis maximus in ornare lorem. Vivamus tempus porttitor efficitur. Vestibulum lacinia porttitor dapibus."
    },

    {
        title: "Latest Blog Title",
        author: "Roisin Watters",
        text: "Vestibulum sit amet orci ac massa mattis maximus in ornare lorem. Vivamus tempus porttitor efficitur. Vestibulum lacinia porttitor dapibus."
    },
    {
        title: "Latest Blog Title",
        author: "Maeve Finnegan",
        text: "Vestibulum sit amet orci ac massa mattis maximus in ornare lorem. Vivamus tempus porttitor efficitur. Vestibulum lacinia porttitor dapibus."
    },

    {
        title: "Latest Blog Title",
        author: "Roisin Watters",
        text: "Vestibulum sit amet orci ac massa mattis maximus in ornare lorem. Vivamus tempus porttitor efficitur. Vestibulum lacinia porttitor dapibus."
    },
]