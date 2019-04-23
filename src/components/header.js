
import React from "react"
import styled from "styled-components";
import { Flex } from "@rebass/grid"
import { Link } from "gatsby"
import Logo from "../images/mitso-logo.svg"
import {ACCENT, BLACK, FONT_BOLD} from "../variables";
import Button from "../components/button";
import Container from "../components/container";
import Menu from "../images/icons/menu.svg";
import MenuClose from "../images/icons/menu-close.svg";

class _Header extends React.Component {
	state = {
		mobileNav: false
	}

	toggleNav = () => this.setState(prevState => ({ mobileNav: !prevState.mobileNav }))

	render() {
		const { mobileNav } = this.state
		return (
			<Header>
				<HeaderContainer>
					<HeaderAside>
						<Link to="/">
							<img src={Logo} alt="MiTSO Marketing Logo" />
						</Link>

						<MobileActions alignItems="center" justifyContent="flex-end">
							<MobileButton mobile={true}>Work with MiTSO</MobileButton>
							
							<MenuButton type="button" onClick={() => this.toggleNav()}>
								<MenuIcon src={!mobileNav ? Menu : MenuClose} alt="Menu Icon" />
							</MenuButton>
						</MobileActions>
					</HeaderAside>

					<Nav active={this.state.mobileNav}>
						<NavList>
							{NAV_DATA.map((item, index) => (
								<li key={index}>
									{item.type === 'link' 
									? <Link to={item.url}>{item.label}</Link>
									: <MobileButton mobile={false}>{item.label}</MobileButton>
									}
								</li>
							))}
						</NavList>
					</Nav>
				</HeaderContainer>
			</Header>
		)
	}
}

export default _Header

const NAV_DATA = [
	{ label: "Who We Are", url: "/who-we-are", type: 'link' },
	{ label: "What We Offer", url: "/what-we-offer", type: 'link' },
	{ label: "Thoughts", url: "/", type: 'link' },
	{ label: "Case Studies", url: "/", type: 'link' },
	{ label: "Work with MiTSO", url: "/", type: 'button' }
]

const Header = styled.header`
	border-top: 5px solid ${ACCENT};
	position: relative;
	z-index: 10;
	background: #ffffff;
`;

const HeaderContainer = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding-top: 32px;
	padding-bottom: 32px;
	padding-left: 16px;
	padding-right: 16px;
	position: relative;

	@media only screen and (min-width: 40em) {
		padding-left: 32px;
		padding-right: 32px;
	}

	@media only screen and (min-width: 1000px) {
		flex-wrap: nowrap;
	}
`;

const HeaderAside = styled.aside`
	@media only screen and (max-width: 999px) {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
`;

const Nav = styled.nav`

	@media only screen and (max-width: 639px) {
		padding: 16px;
	}

	@media only screen and (min-width: 640px) and (max-width: 999px) {
		padding: 32px;
	}

	@media only screen and (max-width: 999px) {
		display: block;
		background: rgba(255, 255, 255, 1);
		border-radius: 8px;
		opacity: ${props => props.active ? `1` : `0`};
		transform: ${props => props.active ? `translateY(32px)` : `translateY(64px)`};
		transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
		position: fixed;
		top: 80px;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: ${props => props.active ? `100` : `-1`};
		visibility: ${props => props.active ? `visible` : `hidden`};
	}
`;

const NavList = styled.ol`
	font-family: ${FONT_BOLD};
	font-weight: 900;

	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;

	a {
		color: ${BLACK};
		text-decoration: none;
		transition: color 150ms ease-in-out;

		&:hover {
			color: ${ACCENT}
		}
	}

	@media only screen and (max-width: 999px) {
		li {
			font-size: 18px;
			margin-bottom: 16px;
		}
	}

	@media only screen and (min-width: 1000px) {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-left: 24px;
		transform: translateY(-8px);

		li:not(:last-child) {
			margin-right: 24px
		}
	}
`;

const MenuButton = styled.button`
	appearance: none;
	background: transparent;
	border: 1px solid transparent;

	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
	}

	@media only screen and (min-width: 1000px) {
		visibility: hidden;
	}
`;

const MenuIcon = styled.img`
	max-width: 50px;
`

const MobileButton = styled(Button)`
	display: ${props => !props.mobile ? `inline-flex` : `none`};

	@media only screen and (min-width: 640px) {
		display: ${props => props.mobile ? `inline-flex` : `none`};
		margin-right: 16px;
	}

	@media only screen and (min-width: 1000px) {
		display: ${props => !props.mobile ? `inline-flex` : `none`};
	}
`

const MobileActions = styled(Flex)`
	@media only screen and (min-width: 1000px) {
		display: none;
	}
`