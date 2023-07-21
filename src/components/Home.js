import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {

  return (
    <Container>
      <Section
        title="Experience Tesla"
        description="Schedule a Demo Drive Today"
        backgroundVideo="tesla.mp4"
        leftBtnText="Demo Drive"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Starting at $40,240
      After Federal Tax Credit"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Starting at $32,740
      After Federal Tax Credit"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roofs"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        title="Powerwall"
        description=""
        backgroundImg="powerwall.jpeg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="Accessoriess.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;
