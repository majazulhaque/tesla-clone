import React from 'react'
import styled from "styled-components"
import CarHeader from './CarHeader';
import CarDetail from './CarDetail';

function Car() {
  return (
    <CarContainer>
    <CarHeader/>
    <CarDetail/>
    </CarContainer>
  )
}

export default Car;

const CarContainer = styled.div`
    display:flex;
    flex-direction:column;
`
