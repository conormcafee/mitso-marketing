import React from "react";
import styled from "styled-components";
import {Flex, Box} from "@rebass/grid";
import CaseStudy from "./caseStudy";
import CircleOptB from "../images/backgrounds/circle-option-b.svg";
import {Heading03, Text} from "../components/global/typography";
import Button from "../components/button";

const CaseStudies = styled(Flex)`
	position: relative;
`;

const Circle = styled.img`
	position: absolute;
	left: 0;
    bottom: 0;
    max-width: 100%;
	transform: translateY(25%);
`;

const SmallLogo = styled.img`
    max-width: 100%;
    border-radius: 100%;
`;

const MoreCaseStudies = styled(Flex)`
    position: relative;
    z-index: 1;
`;

const _CaseStudies = (props) => {
    return (
        <React.Fragment>
            <CaseStudies flexWrap={['wrap', 'nowrap']} my={6}>
                {props.data.map((study, index) => ( 
                    <CaseStudy key={index} {...study} marginTop={index !== 0 && index + 4} />
                ))}
                <Circle src={CircleOptB} alt="Circle Page Styling" />
            </CaseStudies>

            {props.moreCaseStudies && <MoreCaseStudies flexWrap={['wrap', 'nowrap']} mb={6}>
                <Box width={[1, 1/3]} px={[3,4]} mb={[4, 0]}>
                    <Flex flexWrap="wrap">
                        {[0, 1, 2].map(index => (
                            <Box width={1/3} mb={4} px={[2,3]}>
                                <SmallLogo key={index} src="https://placehold.it/200x200" alt="Logo" />
                            </Box>
                        ))}

                        {[3, 4, 5].map(index => (
                            <Box width={1/3} px={[2,3]}>
                                <SmallLogo key={index} src="https://placehold.it/200x200" alt="Logo" />
                            </Box>
                        ))}
                    </Flex>
                </Box>
                
                <Box width={[1, 1/3]} px={[3,4]} mb={[4, 0]}>
                    <Flex flexWrap="wrap">
                        {[0, 1, 2].map(index => (
                            <Box width={1/3} mb={4} px={[2,3]}>
                                <SmallLogo key={index} src="https://placehold.it/200x200" alt="Logo" />
                            </Box>
                        ))}

                        {[3, 4, 5].map(index => (
                            <Box width={1/3} px={[2,3]}>
                                <SmallLogo key={index} src="https://placehold.it/200x200" alt="Logo" />
                            </Box>
                        ))}
                    </Flex>
                </Box>
                
                <Box width={[1, 1/3]} px={[3,4]}>
                    <Heading03>Others We've Worked With</Heading03>
                    <Text tight>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam malesuada libero, quis sodales lorem faucibus sit a</Text>
                    <Button>All Case Studies</Button>
                </Box>
            </MoreCaseStudies>}
        </React.Fragment>
    )
}


export default _CaseStudies
