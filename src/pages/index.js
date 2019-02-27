import React from "react"
import {Flex, Box} from "@rebass/grid";
import SEO from "../components/seo";
import Layout from "../components/layout"
import {Heading01, Heading02, Heading03, Text} from "../components/global/typography";

import Button from "../components/button/index";
import Tagline from "../components/tagline";
import CaseStudies from "../components/caseStudies";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
	<Flex>
		<Box px={[3, 4]} mb={6}>
			<Heading01>We deliver smart, tailored and targeted communications to help your business thrive</Heading01>
			<Button>Work with MiTSO Marketing</Button>
		</Box>
	</Flex>

	{/* Who WE Are */}

	<Flex flexWrap={['wrap', 'nowrap']} pb={6}>
		<Flex width={[1, 1/3]} px={[3, 4]} mb={3} flexDirection="column" alignItems="flex-start" justifyContent="flex-end">
			<Heading02>Who We Are</Heading02>
			<Button>Learn More</Button>
		</Flex>

		<Flex width={[1, 2/3]} flexWrap="wrap">
				{WHO_WE_ARE.slice(0, 2).map((block, index) => (
					<Box width={[1, 1/2]} px={[3, 4]} key={index}>
						<Heading03>{block.title}</Heading03>
						<Text tight>{block.text}</Text>
					</Box>
				))}
	
				{WHO_WE_ARE.slice(2, 4).map((block, index) => (
					<Box width={[1, 1/2]} px={[3, 4]} mt={3} key={index}>
						<Heading03>{block.title}</Heading03>
						<Text tight>{block.text}</Text>
					</Box>
				))}
		</Flex>
	</Flex>
		
	{/* Tag Line */}
	
	<Tagline data={TAG_LINE} />

	{/* Case Studies */}

	<CaseStudies data={CASE_STUDIES} moreCaseStudies />

  </Layout>
)

export default IndexPage

const WHO_WE_ARE = [
	{
		title: "We Plan",
		text: "We believe a strategic approach is essential and we work with you to develop sales and marketing strategies which help to focus your investment in the right way."
	},

	{
		title: "We Brand",
		text: "We love simple and impactful branding and we work with our clients to create a unique brand identity that stands the test of time."
	},

	{
		title: "We Promote",
		text: "We specialise in all areas of marketing from building innovative digital campaigns through to managing exciting events."
	},

	{
		title: "We Review",
		text: "We know how to reach - all to. We know that time and money is precious, which is why we consistently review and improve our campaigns and performance."
	}
];

const TAG_LINE = ["We Plan", "We Brand", "We Promote", "We Review"];

const CASE_STUDIES = [
	{
		title: "Obelisk",
		url: "/",
		intro: "Vestibulum sit amet orci ac massa mattis maximus in ornare lorem. Vivamus tempus porttitor efficitur. Vestibulum lacinia porttitor dapibus."
	},
	{
		title: "E Stars",
		url: "/",
		intro: "Vestibulum sit amet orci ac massa mattis maximus in ornare lorem. Vivamus tempus porttitor efficitur. Vestibulum lacinia porttitor dapibus."
	},
	{
		title: "Lawlor's of Naas",
		url: "/",
		intro: "Vestibulum sit amet orci ac massa mattis maximus in ornare lorem. Vivamus tempus porttitor efficitur. Vestibulum lacinia porttitor dapibus."
	},
];

