import React from "react"
import styled from "styled-components"
import {Flex, Box} from "@rebass/grid"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container";
import Button from "../components/button/index"
import Tagline from "../components/tagline"
import CaseStudies from "../components/caseStudies"
import WorkWithMitso from "../components/workWithMitso"
import Thoughts from "../components/Thoughts"
import {WHO_WE_ARE, CASE_STUDIES} from "../data"

import HomepageHero from "../images/homepage-hero.png"

class Index extends React.Component {
	render() {
		return (
			<Layout>
				<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
				<Container>
					<Intro 
						as="section" 
						flexWrap={['wrap']}
						alignItems={'center'} 
						justifyContent={'space-between'}
					>	
						<Box 
							px={[3, 4]} 
							mb={6}
							width={[1, 1/2]}
						>
							<h1>We deliver smart, tailored and targeted communications to help your business thrive</h1>
							<Button>Work with MiTSO</Button>
						</Box>
						<Hero
							as="figure"
							px={[3, 4]}
							width={[1, 1/2]}
						>
							<img src={HomepageHero} alt="Welcome to MiTSO" />
						</Hero>
					</Intro>
				</Container>

				{/* Who WE Are */}
				<Container>
					<Flex as="section" flexWrap={['wrap', 'wrap', 'nowrap']} pb={6}>
						
						<Flex as="aside" width={[1, 1, 1/3]} px={[3, 4]} mb={3} flexDirection="column" alignItems="flex-start" justifyContent={['flex-start', 'flex-start', 'flex-end']}>
							<WhoWeAreHeading>Who We Are</WhoWeAreHeading>
							<Button>Learn More</Button>
						</Flex>
						<Flex as="article" width={[1, 1, 2/3]} flexWrap="wrap">
							{WHO_WE_ARE.slice(0, 2).map((block, index) => (
								<Box width={[1, 1/2, 1/2]} px={[3, 4]} key={index}>
										<h3>{block.title}</h3>
										<p>{block.text}</p>
								</Box>
							))}
				
							{WHO_WE_ARE.slice(2, 4).map((block, index) => (
								<Box width={[1, 1/2, 1/2]} px={[3, 4]} mt={3} key={index}>
									<h3>{block.title}</h3>
									<p>{block.text}</p>
								</Box>
							))}
						</Flex>
					</Flex>
				</Container>
			
				{/* Tag Line */}
				
				<Tagline />

				{/* Case Studies */}

				<CaseStudies data={CASE_STUDIES} moreCaseStudies />

				{/* Work with Mitso */}

				<WorkWithMitso />

				{/* Thoughts */}

				<Thoughts homepage/>

			</Layout>
		)
	}
}
	

export default Index

const WhoWeAreHeading = styled.h2`
	margin-bottom: 16px;
`

const Intro = styled(Flex)`
	position: relative;
	background-size: contain;
    background-position: bottom right;
    background-repeat: no-repeat;
`;

const Hero = styled(Box)`
	position: relative;
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;