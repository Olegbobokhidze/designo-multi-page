import styled, { css } from "styled-components";

type PropsType = {
  title: string;
  description: string;
  titleColor?: string;
  descriptionColor?: string;
};

const Info: React.FC<PropsType> = ({
  title,
  description,
  titleColor,
  descriptionColor,
}) => {
  return (
    <Main>
      <AboutTitle titleColor={titleColor}>{title}</AboutTitle>
      <AboutDescription descriptionColor={descriptionColor}>
        {description}
      </AboutDescription>
      <Circle></Circle>
      <Circle1></Circle1>
      <Circle2></Circle2>
      <Circle3></Circle3>
      <Circle4></Circle4>
      <Circle5></Circle5>
      <Circle6></Circle6>
    </Main>
  );
};

export default Info;

const AboutTitle = styled.h1(
  (props: { titleColor?: string }) => css`
    font-weight: 500;
    font-size: 32px;
    line-height: 36px;
    color: ${props.titleColor ? props.titleColor : "white"};
    text-align: center;
    text-transform: capitalize;
    margin-top: 30px;
    z-index: 1;
  `
);

const AboutDescription = styled.p(
  (props: { descriptionColor?: string }) => css`
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    width: 350px;
    color: ${props.descriptionColor ? props.descriptionColor : "white"};
    text-align: center;
    padding: 15px;
    z-index: 1;
  `
);
const Main = styled.div`
  width: 100%;
  background-color: #e7816b;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
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
