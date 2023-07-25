import React from 'react'
import styled from "styled-components"

function Section8() {
  return (
    <Container>
        <ImageContainer></ImageContainer>
        <DetailContainer>
            <h1>Solar Panel Specs</h1>
            <div>
            <Key>
                <hr />
                <p>Wattage</p>
                <p>400 W</p>
                <hr />
                <p>Operating</p>
                <p>Temperature</p>
                <p>-40°F up to</p>
                <p>+185°F</p>
                <hr />
                <p>Dimensions</p>
                <p>74.4" x 41.2" x</p>
                <p>1.57"</p>
                <p>(including</p>
                <p>frame)</p>
                <hr />
                <p>Design</p>
                <p>Black anodized</p>
                <p>aluminum alloy</p>
                <p>frame</p>
                <p>Black solar</p>
                <p>cells and</p>
                <p>backsheet</p>
                <hr />
                <p>Warranty</p>
                <p>25-year</p>
                <p>performance</p>
                <p>guarantee</p>
            </Key>
            <Value>
                <hr />
                <p>Certifications</p>
                <p>IEC / UL 61730,</p>
                <p>CEC Listed,</p>
                <p>IEC 61215</p>
                <hr />
                <p>Inverter Power</p>
                <p>3.8kW / 7.6kW</p>
                <p>97.5% efficiency</p>
                <hr />
                <p>Inverter</p>
                <p>Dimensions</p>
                <p>26" x 16" x 6"</p>
                <hr />
                <p>Inverter Warranty</p>
                <p>12.5 years </p>
            </Value>
            </div>
            <h4 style={{marginTop:"100px"}}>*Modules shown may be different</h4>
            <h4>than those included in final design.</h4>
        </DetailContainer>
    </Container>
  )
}

export default Section8

const Container = styled.div`
background-color:black;
color:white;
width:100vw;
height:auto;
display:flex;
align-items:center;
justify-content:space-around;
`

const ImageContainer = styled.img`
  width: 50vw;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/solarPanel7.jpg");
  outline: 3px solid black;
  outline-offset: -2px;
  margin-left: -100px;

`;

const DetailContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
h1{
    padding-bottom: 20px;
}
div{
    display:flex;
    hr{
        width:2.5rem;
        margin:1.2rem 0rem 1rem 0rem;
    }
}
`
const Key = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
`
const Value = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
margin-left:2rem;
`