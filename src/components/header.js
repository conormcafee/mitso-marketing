
import React from "react"
import styled from "styled-components";
import { Link } from "gatsby"
import Logo from "../images/mitso-logo.svg"
import {ACCENT, BLACK, FONT_BOLD} from "../variables";
import Button from "../components/button";
import Container from "../components/container";
import Menu from "../images/icons/menu.svg";

class _Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileNav: false
		}
	}

	toggleNav = () => this.setState(prevState => ({ mobileNav: !prevState.mobileNav }))

	render() {
		return (
			<Header>
				<HeaderContainer>
					<HeaderAside>
						<Link to="/">
							<img src={Logo} alt="MiTSO Marketing Logo" />
						</Link>

						<MenuButton type="button" onClick={() => this.toggleNav()}>
							<img src={Menu} alt="Menu Icon" />
						</MenuButton>
					</HeaderAside>

					<Nav active={this.state.mobileNav}>
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
	margin-bottom: 1.45rem;
	padding-top: 32px;
	padding-bottom: 32px;
	position: relative;
	z-index: 1;
`;

const HeaderContainer = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
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
	@media only screen and (max-width: 999px) {
		display: block;
		background: rgba(255, 255, 255, 0.98);
		width: calc(100% - 64px);
		border: 1px solid #e6e6e6;
		box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
		padding: 16px;
		border-radius: 8px;
		opacity: ${props => props.active ? `1` : `0`};
		transform: ${props => props.active ? `translateY(32px)` : `translateY(64px)`};
		transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;

		position: absolute;
		top: 100%;
		left: 16px;
		z-index: ${props => props.active ? `10` : `-1`};
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
		/* font-size: 14px; */

		&:hover {
			color: ${ACCENT}
		}
	}

	@media only screen and (max-width: 999px) {
		li {
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