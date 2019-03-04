
import React from "react"
import styled from "styled-components";
import { Link } from "gatsby"
import {Flex, Box} from "@rebass/grid";
import Logo from "../images/mitso-logo.svg"
import {ACCENT, BLACK, FONT_BOLD} from "../variables";
import Button from "../components/button";

const _Header = () => (
	<Header>
		<Flex flexWrap={['wrap', 'nowrap']} alignItems="center">
			<Box width={[1 , 1/3]} px={[3, 4]}>
				<Link to="/">
					<img src={Logo} alt="MiTSO Marketing Logo" />
				</Link>
			</Box>
			
			<Box width={[1, 2/3]} px={[3, 4]}>
				<nav>
					<NavList>
						{NAV_DATA.map((item, index) => (
							<li key={index}>
								{item.type === 'link' 
								? <Link to={item.url}>{item.label}</Link>
								: <Button>{item.label}</Button>
								}
							</li>
						))}
					</NavList>
				</nav>
			</Box>
		</Flex>
  	</Header>
)

export default _Header

const NAV_DATA = [
	{ label: "Who We Are", url: "/", type: 'link' },
	{ label: "Thoughts", url: "/", type: 'link' },
	{ label: "What We Offer", url: "/", type: 'link' },
	{ label: "Case Studies", url: "/", type: 'link' },
	{ label: "Work with MiTSO", url: "/", type: 'button' }
]

const Header = styled.header`
	border-top: 5px solid ${ACCENT};
	margin-bottom: 1.45rem;
	padding-top: 40px;
	padding-bottom: 40px;
	position: relative;
	z-index: 1;
`;

const NavList = styled.ol`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-family: ${FONT_BOLD};
	font-weight: 900;

	list-style: none;
	padding-left: 0;
	margin-left: 24px;

	li:not(:last-child) {
		margin-right: 24px
	}

	a {
		color: ${BLACK};
		text-decoration: none;
		transition: color 150ms ease-in-out;
		font-size: 18px;

		&:hover {
			color: ${ACCENT}
		}
	}
`;