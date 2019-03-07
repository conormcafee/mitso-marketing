import React from "react";
import styled from "styled-components";
import {Flex, Box} from "@rebass/grid";
import Button from "../components/button";
import {BLACK, ACCENT} from "../variables";

const NavyBackground = styled(Box)`
    background-color: ${BLACK};
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;

const Thought = styled(Box)`
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;

    figcaption {
        padding-top: 16px;
        padding-left: 32px;
        padding-right: 32px;
        padding-bottom: 32px;
    }
`;

const Title = styled.h3`
    margin-bottom: 0;
`;

const Author = styled.h4`
    margin-top: 0;
    color: ${ACCENT}
`;

class Thoughts extends React.Component {
    render() {
        return (
            <Flex px={[3, 4]} mt={6} as="section">
                <Box width={[1, 1/3]} pt={4}>
                    <h2>Thoughts</h2>
                    <p>Take a look through our recents thoughts and ramblings.  Along with getting our thoughts out on this website, we are also active on social media.  Why don’t you give us a follow on your preferred platform</p>
                    <Button>All Thoughts</Button>
                </Box>

                <NavyBackground width={[1, 2/3]} py={5}>
                    <Flex px={[3, 4]}>
                        {thoughts.map((thought, index) => (
                            <Box key={index} width={[1, 1/2]} px={[3, 4]}>
                                <Thought as="article">
                                    
                                    <figure>
                                        <img src="https://placehold.it/400x300/FFEE93/FFEE93" alt={thought.title} />
                                        <figcaption>
                                            <Title>{thought.title}</Title>
                                            <Author>by {thought.author}</Author>
                                            <p>{thought.text}</p>
                                            <Button>Read Full Post</Button>
                                        </figcaption>
                                    </figure>
                                    
                                </Thought>
                            </Box>
                        ))}
                    </Flex>
                </NavyBackground>
            </Flex>
        )
    }
}

export default Thoughts

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
    }
]