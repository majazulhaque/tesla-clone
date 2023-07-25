import React from "react";
import styled from "styled-components";
import Section1 from "./SolarRoofSections/Section1";
import Section2 from "./SolarRoofSections/Section2";
import Section3 from "./SolarRoofSections/Section3";
import Section4 from "./SolarRoofSections/Section4";
import Section5 from "./SolarRoofSections/Section5";
import Section6 from "./SolarRoofSections/Section6";
import Section7 from "./SolarRoofSections/Section7";
import Section8 from "./SolarRoofSections/Section8";
import Section9 from "./SolarRoofSections/Section9";
import {carData} from "../CarDetails/CarDetailData";


function SolarRoofDetail() {
  return (
    <Container>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default SolarRoofDetail;
