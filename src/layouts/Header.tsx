import { Link } from "@tanstack/react-router";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { LogoDark } from "../assets";
import { Close, Hamburger } from "../svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const backDrop = useRef<HTMLDivElement | null>(null);

  const backDropHandler: React.MouseEventHandler<HTMLDivElement> | undefined = (
    event
  ) => {
    if (event.target === backDrop.current) {
      setShowMenu(false);
    }
  };
  return (
    <>
      <HeaderComponent>
        <Link to="/" onClick={() => setShowMenu(false)}>
          <Logo src={LogoDark} alt="logo" />
        </Link>
        {showMenu ? (
          <Close onClick={() => setShowMenu(false)} />
        ) : (
          <Hamburger onClick={() => setShowMenu(true)} />
        )}
        {showMenu ? (
          <Backdrop ref={backDrop} onClick={backDropHandler}>
            <Menu>
              <NavList>
                <Link
                  to="/about"
                  onClick={() => setShowMenu(false)}
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                  }}
                >
                  <NavItem>Our Company</NavItem>
                </Link>
                <Link
                  to="/location"
                  onClick={() => setShowMenu(false)}
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                  }}
                >
                  <NavItem>locations</NavItem>
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setShowMenu(false)}
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                  }}
                >
                  <NavItem>contact</NavItem>
                </Link>
              </NavList>
            </Menu>
          </Backdrop>
        ) : null}
      </HeaderComponent>
      <HeaderTablet>
        <Link to="/">
          <Logo src={LogoDark} alt="logo" />
        </Link>
        <NavList>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <NavItem>Our Company</NavItem>
          </Link>
          <Link to="/location" style={{ textDecoration: "none" }}>
            <NavItem>Locations</NavItem>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <NavItem>Contact</NavItem>
          </Link>
        </NavList>
      </HeaderTablet>
    </>
  );
};

export default Header;

const HeaderTablet = styled.header`
  display: none;
  width: 100%;
  height: 96px;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const HeaderComponent = styled.header`
  width: 100%;
  height: 96px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 202px;
`;
const Backdrop = styled.div`
  width: 100vw;
  height: calc(100vh - 96px);
  position: fixed;
  left: 0;
  top: 96px;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Menu = styled.div`
  width: 100%;
  padding: 48px 24px;
  background-color: black;
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  row-gap: 32px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;
const NavItem = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 2px;
  color: white;
  text-transform: uppercase;
  width: fit-content;
  &:hover {
    color: #e7816b;
  }
  @media screen and (min-width: 768px) {
    color: black;
    font-size: 16px;
    letter-spacing: 1px;
  }
`;
