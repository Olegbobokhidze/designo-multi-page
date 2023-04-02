import { Link } from "@tanstack/react-router";
import styled, { css } from "styled-components";

type PropsType = {
  title: string;
  image: string;
};

const Country: React.FC<PropsType> = ({ title, image }) => {
  return (
    <Main>
      <Img alt="countryimg" src={image} />
      <CountryTitle>{title}</CountryTitle>
      <Link to="/location" style={{ textDecoration: "none" }}>
        <Button>See Location</Button>
      </Link>
    </Main>
  );
};

export default Country;

const Main = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 200px;
`;
const CountryTitle = styled.h2`
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 1.4px;
  color: var(--light);
  text-transform: uppercase;
`;

const Button = styled.button`
  background-color: #e7816b;
  border-radius: 8px;
  width: 152px;
  height: 56px;
`;
