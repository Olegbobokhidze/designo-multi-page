import { Link } from "@tanstack/react-router";
import styled from "styled-components";
import { LogoLight } from "../assets";
import { Facebook, Instagram, Pinterest, Youtube } from "../svg";
import Twitter from "../svg/Twitter";

const Footer = () => {
  return (
    <Main>
      {window.location.pathname !== "/contact" ? (
        <FooterCard>
          <FooterCardTitle>Let’s talk about your project</FooterCardTitle>
          <FooterCardDescription>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </FooterCardDescription>
          <Button>Get in touch</Button>
          <Circle></Circle>
          <Circle1></Circle1>
          <Circle2></Circle2>
          <Circle3></Circle3>
          <Circle4></Circle4>
          <Circle5></Circle5>
          <Circle6></Circle6>
        </FooterCard>
      ) : null}
      <Logo src={LogoLight} alt="logo" />
      <Line />
      <MenuList>
        <LogoTablet src={LogoLight} alt="logotablet" />
        <Link
          to="/about"
          style={{ textDecoration: "none", width: "fit-content" }}
        >
          <ListItem>OUR COMPANY</ListItem>
        </Link>
        <Link
          to="/location"
          style={{ textDecoration: "none", width: "fit-content" }}
        >
          <ListItem>LOCATIONS</ListItem>
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", width: "fit-content" }}
        >
          <ListItem>contact</ListItem>
        </Link>
      </MenuList>
      <LineTablet />
      <Mobile>
        <Address>
          <span style={{ fontWeight: 700 }}>Designo Central Office</span> 3886
          Wellington Street Toronto, Ontario M9C 3J5
        </Address>
        <Address>
          <span style={{ fontWeight: 700 }}>Contact Us (Central Office)</span> P
          : +1 253-863-8967
          <br />M : contact@designo.co
        </Address>
        <SocialIcons>
          <Facebook />
          <Youtube />
          <Pinterest />
          <Twitter />
          <Instagram />
        </SocialIcons>
      </Mobile>
      <Desktop>
        <Address>
          <span style={{ fontWeight: 700 }}>Designo Central Office</span> 3886
          Wellington Street Toronto, Ontario M9C 3J5
        </Address>
        <Address>
          <span style={{ fontWeight: 700 }}>Contact Us (Central Office)</span> P
          : +1 253-863-8967
          <br />M : contact@designo.co
        </Address>
        <SocialIcons>
          <Facebook />
          <Youtube />
          <Pinterest />
          <Twitter />
          <Instagram />
        </SocialIcons>
      </Desktop>
    </Main>
  );
};

export default Footer;

const Main = styled.footer`
  margin-top: 311px;
  width: 100%;
  background-color: black;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 64px;
  @media screen and (min-width: 1440px) {
    padding: 0px 120px;
  }
`;

const FooterCard = styled.div`
  width: 100%;
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7816b;
  border-radius: 15px;
  margin-top: -190px;
  position: relative;
  overflow: hidden;
`;

const FooterCardTitle = styled.h2`
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  color: white;
  text-align: center;
  z-index: 10;
`;

const FooterCardDescription = styled.h3`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: white;
  text-align: center;
  z-index: 10;
`;

const Button = styled.button`
  padding: 18px 24px;
  border-radius: 8px;
  background-color: white;
  font-family: "Jost", sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 21.68px;
  letter-spacing: 1px;
  color: var(--darkText);
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 24px;
  transition: 0.5s all;
  z-index: 10;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

const Logo = styled.img`
  width: 202px;
  margin-top: 64px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const LogoTablet = styled.img`
  width: 202px;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const LineTablet = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  opacity: 0.1;
  margin-top: 32px;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  opacity: 0.1;
  margin-top: 32px;
  display: flex;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 32px;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    gap: 120px;
  }
`;

const ListItem = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 2px;
  color: white;
  text-transform: uppercase;
  width: fit-content;

  &:hover {
    color: #e7816b;
  }
`;

const Address = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: white;
  opacity: 0.5;
  width: 200px;
  margin-top: 40px;
`;

const SocialIcons = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-top: 40px;
`;
const Desktop = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;
    gap: 150px;
  }
`;
const Mobile = styled.div`
  display: block;
  @media screen and (min-width: 1440px) {
    display: none;
    flex-direction: row;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 330px;
  height: 330px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  opacity: 0.31;
  transform: matrix(0, -1, -1, 0, 0, 0);
  left: 0;
  top: 102px;
`;
const Circle1 = styled.div`
  position: absolute;
  width: 220px;
  height: 330px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  opacity: 0.31;
  transform: matrix(0, -1, -1, 0, 0, 0);
  left: 300px;
  top: -110px;
`;
const Circle2 = styled.div`
  position: absolute;
  width: 400px;
  height: 440px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  opacity: 0.31;
  transform: matrix(0, -1, -1, 0, 0, 0);
  left: 500px;
  top: -100px;
`;

const Circle3 = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  opacity: 0.31;
  transform: matrix(0, -1, -1, 0, 0, 0);
  right: 0;
  top: 102px;
`;

const Circle4 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  opacity: 0.31;
  transform: matrix(0, -1, -1, 0, 0, 0);
  right: 0;
  top: -102px;
`;

const Circle5 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  opacity: 0.31;
  transform: matrix(0, -1, -1, 0, 0, 0);
  left: 0;
  top: -102px;
`;

const Circle6 = styled.div`
  position: absolute;
  width: 800px;
  height: 900px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  opacity: 0.31;
  transform: matrix(0, -1, -1, 0, 0, 0);
  right: 0;
  top: -102px;
`;
