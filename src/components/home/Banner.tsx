import styled from "styled-components";
import { Phone } from "../../assets";

const Banner = () => {
  return (
    <Main>
      <BannerTitle>
        Award-winning custom designs and digital branding solutions
      </BannerTitle>
      <BannerDescription>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </BannerDescription>
      <Button>Learn More</Button>
      <Circle />
      <Mobile src={Phone} />
      <CircleDesk />
    </Main>
  );
};

export default Banner;

const Main = styled.div`
  width: 100%;
  padding: 80px 24px 450px 24px;
  background-color: #e7816b;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    border-radius: 15px;
    height: 800px;
  }
`;

const BannerTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  color: whitesmoke;
  text-align: center;
  z-index: 1;
  width: 430px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`;

const BannerDescription = styled.h2`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: whitesmoke;
  text-align: center;
  width: 430px;
  margin-bottom: 30px;
  z-index: 1;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
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
  z-index: 99;
  transition: 0.5s all;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 640px;
  height: 640px;
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
  @media screen and (min-width: 1440px) {
    left: -300px;
    width: 1200px;
    height: 1200px;
    top: -400px;
  }
`;
const CircleDesk = styled.div`
  position: absolute;
  width: 1500px;
  height: 1500px;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    rgba(93, 2, 2, 0.0001) 0%,
    rgba(93, 2, 2, 0.497569) 100%
  );
  opacity: 0.31;
  transform: matrix(0, -1, -1, 0, 0, 0);
  right: -300px;
  display: none;
  top: 400px;
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

const Mobile = styled.img`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  bottom: -400px;
`;
