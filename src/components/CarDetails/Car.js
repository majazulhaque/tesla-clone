import React from 'react'
import styled from "styled-components"
import CarHeader from './CarHeader';
import CarDetail from './CarDetail';
import {CarDetailData} from "./CarDetailData";

function Car(props) {
  return (
    <CarContainer>
    <CarHeader carD={props}/>
    <CarDetail carD={props}/>
    </CarContainer>
  )
}

export default Car;

const CarContainer = styled.div`
    display:flex;
    flex-direction:column;
`
