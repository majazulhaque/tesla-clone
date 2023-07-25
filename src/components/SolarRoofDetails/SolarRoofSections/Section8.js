import React from 'react'
import styled from "styled-components"

function Section8() {
  return (
    <Container>
        <ImageContainer></ImageContainer>
        <DetailContainer>
            <h1>Solar Roof Specs</h1>
            <div>
            <Key>
                <hr />
                <p>Tile and Power Warranty</p>
                <p>25 years</p>
                <hr />
                <p>Solar Glass Tiles</p>
                <p>72 W</p>
                <hr />
                <p>Steel Tiles</p>
                <p>Corrosion and weather</p>
                <p>resistant</p>
                <hr />
                <p>Wind Rating</p>
                <p>Class F (highest rating)</p>
            </Key>
            <Value>
                <hr />
                <p>Fire Rating</p>
                <p>Class A (highest rating)</p>
                <hr />
                <p>Hall Rating</p>
                <p>Class 3</p>
                <hr />
                <p>Roof Pitch</p>
                <p>≥ 2:12</p>
            </Value>
            </div>
        </DetailContainer>
    </Container>
  )
}

export default Section8

const Container = styled.div`
background-color:black;
color:white;
width:100vw;
height:100vh;
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
  background-image: url("/images/solarroof5.jpg");
  outline: 2px solid black;
  outline-offset: -1px;
  margin-left: -100px;

`;

const DetailContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
h1{
    padding-bottom: 30px;
}
div{
    display:flex;
    hr{
        width:2.5rem;
        margin:1.5rem 0rem 1rem 0rem;
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