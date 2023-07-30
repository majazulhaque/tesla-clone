import React from "react";
import styled from "styled-components";
import Section1 from "./PowerWallSections/Section1";
import Section2 from "./PowerWallSections/Section2";
import Section3 from "./PowerWallSections/Section3";
import Section33 from "./PowerWallSections/Section33";
import Section4 from "./PowerWallSections/Section4";
import Section5 from "./PowerWallSections/Section5";
import Section6 from "./PowerWallSections/Section6";


function SolarPanelDetail() {
  return (
    <Container>
        <Section1/>
        <Section2/>
        <Section3/> 
        <Section4/> 
        <Section33/>
        <Section5/>
        <Section6/>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default SolarPanelDetail;
