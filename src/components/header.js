import React, { useState } from "react"
import styled from "styled-components"
import { Flex, Box } from "@rebass/grid"
import { Link, navigate } from "gatsby"
import Logo from "../images/mitso-logo.svg"
import { ACCENT, BLACK, FONT_BOLD, SECONDARY } from "../variables"
import Button from "../components/button"
import Container from "../components/container"
import Menu from "../images/icons/menu.svg"
import MenuClose from "../images/icons/menu-close.svg"

const _Header = props => {
  const [mobileNav, setMobileNav] = useState(false)
  const [dropdownNav, setDropdownNav] = useState(false)
  return (
    <Header>
      <HeaderContainer>
        <HeaderAside>
          <Link to="/">
            <img src={Logo} alt="MiTSO Marketing Logo" />
          </Link>

          <MobileActions alignItems="center" justifyContent="flex-end">
            <MobileButton
              onClick={() => navigate("/work-with-mitso")}
              mobile={true}
            >
              Work with MiTSO
            </MobileButton>

            <MenuButton
              type="button"
              onClick={() => setMobileNav(mobileNav ? false : true)}
            >
              <MenuIcon src={!mobileNav ? Menu : MenuClose} alt="Menu Icon" />
            </MenuButton>
          </MobileActions>
        </HeaderAside>

        <Nav active={mobileNav}>
          <NavList>
            {NAV_DATA.map((item, index) => (
              <NavListItem key={index}>
                {item.type === "link" ? (
                  <NavItem to={item.url} activeStyle={{ color: `${ACCENT}` }}>
                    {item.label}
                  </NavItem>
                ) : (
                  <React.Fragment>
                    {item.dropdown ? (
                      <DropdownButton
                        onClick={() =>
                          setDropdownNav(dropdownNav ? false : true)
                        }
                      >
                        {item.label}
                        {dropdownNav && (
                          <DropdownMenu>
                            <Flex as="ul" flexWrap="wrap">
                              {props.services.map(service => (
                                <DropdownItem
                                  as="li"
                                  width={1 / 2}
                                  p={3}
                                  key={service.node.fields.slug}
                                >
                                  <DropdownLink to={service.node.fields.slug}>
                                    {service.node.frontmatter.title}
                                  </DropdownLink>
                                </DropdownItem>
                              ))}
                            </Flex>
                          </DropdownMenu>
                        )}
                      </DropdownButton>
                    ) : (
                      <MobileButton
                        onClick={() => navigate("/work-with-mitso")}
                        mobile={false}
                      >
                        {item.label}
                      </MobileButton>
                    )}
                  </React.Fragment>
                )}
              </NavListItem>
            ))}
          </NavList>
        </Nav>
      </HeaderContainer>
    </Header>
  )
}

export default _Header

const NAV_DATA = [
  { label: "Who We Are", url: "/who-we-are", type: "link" },
  {
    label: "What We Offer",
    url: "/what-we-offer",
    type: "button",
    dropdown: true,
  },
  { label: "Thoughts", url: "/thoughts", type: "link" },
  { label: "Our Work", url: "/our-work", type: "link" },
  {
    label: "Work with MiTSO",
    url: "/work-with-mitso",
    type: "button",
    dropdown: false,
  },
]

const Header = styled.header`
  border-top: 5px solid ${ACCENT};
  position: relative;
  z-index: 10;
  background-color: transparent;
`

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
`

const HeaderAside = styled.aside`
  @media only screen and (max-width: 999px) {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

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
    opacity: ${props => (props.active ? `1` : `0`)};
    transform: ${props =>
      props.active ? `translateY(32px)` : `translateY(64px)`};
    transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
    position: fixed;
    top: 80px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${props => (props.active ? `100` : `-1`)};
    visibility: ${props => (props.active ? `visible` : `hidden`)};
  }
`

const NavList = styled.ol`
  font-family: ${FONT_BOLD};
  font-weight: 900;

  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;

  @media only screen and (min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 24px;
    transform: translateY(-8px);
  }
`

const NavListItem = styled.li`
  @media only screen and (max-width: 999px) {
    font-size: 18px;
    margin-bottom: 16px;
  }

  @media only screen and (min-width: 1000px) {
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
`

const NavItem = styled(Link)`
  color: ${BLACK};
  text-decoration: none;
  transition: color 150ms ease-in-out;

  &:hover {
    color: ${ACCENT};
  }
`

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
`

const MenuIcon = styled.img`
  max-width: 50px;
`

const MobileButton = styled(Button)`
  display: ${props => (!props.mobile ? `inline-flex` : `none`)};

  @media only screen and (min-width: 640px) {
    display: ${props => (props.mobile ? `inline-flex` : `none`)};
    margin-right: 16px;
  }

  @media only screen and (min-width: 1000px) {
    display: ${props => (!props.mobile ? `inline-flex` : `none`)};
  }
`

const MobileActions = styled(Flex)`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`
const DropdownButton = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  color: ${BLACK};
  padding: 0;

  @media only screen and (max-width: 999px) {
    text-align: left;
  }

  &:hover {
    color: ${ACCENT};
  }
`

const DropdownMenu = styled(Box)`
  background: ${BLACK};
  border-radius: 7px;
  box-shadow: -4px 6px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid ${BLACK};
  margin-top: 25px;

  @media only screen and (min-width: 1000px) {
    min-width: 300px;
    position: absolute;
    left: -75px;
    &:before {
      content: "";
      width: 0;
      height: 0;
      border-left: 16px solid transparent;
      border-right: 16px solid transparent;
      border-bottom: 16px solid ${BLACK};
      position: absolute;
      top: -16px;
      left: calc(50% - 16px);
    }
  }
`

const DropdownItem = styled(Box)`
  text-align: left;

  &:nth-child(n + 3) {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  &:nth-child(even) {
    border-left: 1px solid rgba(255, 255, 255, 0.2);
  }
`

const DropdownLink = styled(Link)`
  color: #ffffff;
  font-family: ${FONT_BOLD};
  text-decoration: none;
  transition: color 150ms ease-in-out;

  &:hover {
    color: ${SECONDARY};
  }
`
