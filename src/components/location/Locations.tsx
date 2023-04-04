import React from "react";
import styled from "styled-components";
import { Location } from "../shared";
import { MapAustralia, MapUk, MapCanada } from "../../assets";
const Locations = () => {
  return (
    <Wrapper>
      <Location
        image={MapCanada}
        title="Canada"
        address="Designo Central Office
        3886 Wellington StreetToronto, Ontario M9C 3J5"
        contact="Contact  P : (02) 9932 9092
        M : contact@designo.au"
      />
      <Location
        image={MapAustralia}
        title="Australia"
        address="Designo AU Office
      19 Balonne Street New South Wales 2443"
        contact="Contact P : (02) 6720 9092
              M : contact@designo.au"
      />
      <Location
        address="Designo UK Office
13  Colorado Way Rhyd-y-fro SA8 9GA"
        contact="Contact P : 078 3115 1400
        M : contact@designo.uk"
        image={MapUk}
        title="United Kingdom"
      />
    </Wrapper>
  );
};

export default Locations;

const Wrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto;
    gap: 50px;
    padding: 10px 40px 10px 40px;
    margin-top: 50px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: auto auto auto;
    padding: 10px 120px 10px 120px;
  }
`;
