import React from "react";
import { navigate } from "gatsby";
import {Box} from "@rebass/grid";
import styled from "styled-components";
import Button from "../components/button";
import SubHeading from "../components/SubHeading"

const CaseStudy = (props) => {
	const goTo = (slug) => navigate(slug)
	const { title, intro } = props.node.frontmatter
	const { slug } = props.node.fields
	return (
		<Box 
			as="article" 
			width={[1, 1, 1/2, 1/3 ]} 
			px={[3, 4]} 
			mt={[0, props.marginTop]} 
			mb={[5, 0]}
		>
			<Wrapper>
				<img src="https://placehold.it/1000x700/FFEE93/FFEE93" alt={`${title}`} />
				<Box px={4} pb={4}>
					<Title mb={`0px`}>
						<span>{title}</span>
						<SubHeading text="Case Study" />
					</Title>
					<p>{intro}</p>
					<Button onClick={() => goTo(slug)}>Read Case Study</Button>
				</Box>
			</Wrapper>
		</Box>
	)
}

export default CaseStudy

const Wrapper = styled(Box)`
	position: relative;
	z-index: 1;
	background: #ffffff;
	border: 1px solid #E4E4E4;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);

	img {
			max-width: 100%;
	}
`;

const Title = styled.h2`
	position: relative;
	margin-bottom: 0;
	background-color: #ffffff;
	left: -32px;
	padding-left: 32px;
	border-top-right-radius: 8px;
`;