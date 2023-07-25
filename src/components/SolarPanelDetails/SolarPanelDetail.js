import React from "react";
import styled from "styled-components";
import Section1 from "./SolarPanelSections/Section1";
import Section2 from "./SolarPanelSections/Section2";
import Section3 from "./SolarPanelSections/Section3";
import Section5 from "./SolarPanelSections/Section5";
import Section6 from "./SolarPanelSections/Section6";
import Section7 from "./SolarPanelSections/Section7";
import Section8 from "./SolarPanelSections/Section8";
import Section9 from "./SolarPanelSections/Section9";
import Section22 from "./SolarPanelSections/Section22";
import Section23 from "./SolarPanelSections/Section23";


function SolarPanelDetail() {
  return (
    <Container>
        <Section1/>
        <Section2/>
        <Section22/>
        <Section23/>
        <Section3/>
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

export default SolarPanelDetail;
