import React from 'react'
import styled from "styled-components"

function Section5() {
  return (
    <Container>
        <ImageContainer></ImageContainer>
        <DetailContainer>
            <h1>Powerwall Specs</h1>
            <ButtonDiv>
              <button style={{border:"3px solid white"}}>Powerwall+</button>
              <button>Powerwall</button>
            </ButtonDiv>
            <div>
            <Key>
                <hr />
                <p>Energy Capacity</p>
                <p>13.5 kWh*</p>
                <hr />
                <p>On-Grid Power</p>
                <p>7.6kVA /</p>
                <p>5.8kVA</p>
                <p>continuous†</p>
                <hr />
                <p>Backup Power</p>
                <p>9.6kW / 7kW</p>
                <p>continuous†</p>
                <p>22kW / 10kW</p>
                <p>peak†</p>
                <p>118A max LRA</p>
                <p>start</p>
                <p>Seamless</p>
                <p>backup</p>
                <p>transition</p>
                <hr />
                <p>Size and</p>
                <p>Weight</p>
                <p>L x W x D</p>
                <p>62.8 in x 29.7</p>
                <p>in x 6.3 in</p>
                <p>343.9 lbs</p>
            </Key>
            <Value>
                <hr />
                <p>Installation</p>
                <p>Integrated inverter</p>
                <p>and system</p>
                <p>controller</p>
                <p>-4°F to 122°F</p>
                <p>Water and dust</p>
                <p>resistance</p>
                <hr />
                <p>Certifications</p>
                <p>Meets North</p>
                <p>American safety</p>
                <p>and EMI standards</p>
                <hr />
                <p>Warranty</p>
                <p>10 years</p>
                <hr />
            </Value>
            </div>
            <p style={{marginTop:"20px"}}>* <a style={{color: "white",textDecoration:"underline"}} href="#">See Powerwall Technical Specifications</a> for</p>
            <p>more details.</p>

            <h4>†Full sun / no sun.</h4>
        </DetailContainer>
    </Container>
  )
}

export default Section5

const Container = styled.div`
background-color:black;
color:white;
width:100vw;
height:auto;
display:flex;
align-items:center;
padding-top: 65px;
justify-content:space-around;
`

const ImageContainer = styled.img`
  width: 50vw;
  height: 70vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/powerWall5.jpg");
  outline: 3px solid black;
  outline-offset: -2px;
  margin-left: -200px;

`;

const DetailContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
h1{
    padding-bottom: 10px;
}
div{
    display:flex;
    hr{
        width:2.5rem;
        margin:0.8rem 0rem 0.6rem 0rem;
    }
}
h4{
  padding-top: 10px;
}
button:hover{
  background-color: white;
  color:black;
}
`
const ButtonDiv = styled.div`
margin: 10px 0px;
display:flex;
button{
  border-radius: 3px;
  border: 2px solid gray;
  padding: 6px 50px;
  background-color: transparent;
  color:white;
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
margin-left:4rem;
`