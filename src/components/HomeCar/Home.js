import React from "react";
import styled from "styled-components";
import Section from "./Section";
import {carData} from "../CarDetails/CarDetailData";


function Home() {
  return (
    <Container>
      {carData.map((car,index) => (
        <Section
        idx={car.idx}
        title={car.title}
        description={car.description}
        backgroundVideo={car.backgroundVideo}
        backgroundImg= {car.backgroundImg}
        leftBtnText={car.leftBtnText}
        rightBtnText={car.rightBtnText}
      />
      ))}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;
