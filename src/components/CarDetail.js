import React from "react";
import styled from "styled-components";
import ErrorIcon from "@mui/icons-material/Error";

function CarDetail() {
  return (
    <>
      <MainContainer>
        <ImageContainer></ImageContainer>
        <DetailContainer>
          <ItemText>
            <h1>Model X</h1>
            <p>Est. Delivery: Jul – Aug 2023</p>
            <DeliveryZip>
              <ErrorIcon style={{ color: "blue" }} />
              <p>Enter Delivery ZIP Code</p>
            </DeliveryZip>
          </ItemText>
          <ButtonDiv>
            <button>Purchase Price</button>
            <button>Potential Savings*</button>
          </ButtonDiv>
          <SpeedDiv>
            <Range>
              <div>
                <span style={{ fontSize: "25px" }}>348</span>
                <span>mi</span>
              </div>

              <p>Range (EPA est.)</p>
            </Range>
            <Speed>
              <div>
                <span style={{ fontSize: "25px" }}>149</span>
                <span>mph</span>
              </div>

              <p>Top Speed</p>
            </Speed>
            <MPH>
              <div>
                <span style={{ fontSize: "25px" }}>3.8</span>
                <span>sec</span>
              </div>
              <p>0-60 mph</p>
            </MPH>
          </SpeedDiv>
          <Model>
            <p>Dual Motor All-Wheel Drive </p>
            <DualMoter>
              <span>Model X</span>
              <span>$98,490</span>
            </DualMoter>
            <p>Tri Motor All-Wheel Drive</p>
            <TriMoter>
              <span>Model X Plaid</span>
              <span>$108,490</span>
            </TriMoter>
          </Model>
          <LearnMore>
            <p>
              All prices are shown without potential incentives or gas savings
              of $6,600. <a href="#">Learn More</a>
            </p>
          </LearnMore>
          <FeatureDetail>
            <button>Feature Details</button>
          </FeatureDetail>
          <Paint>
            <h1>Paint</h1>
            <ColorDiv>
              <White>
                <img
                  src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_white.png?"
                  alt=""
                />
              </White>
              <Black>
                <img
                  src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_black.png?"
                  alt=""
                />
              </Black>
              <Gray>
                <img
                  src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_MidnightSilver.png?"
                  alt=""
                />
              </Gray>
              <Blue>
                <img
                  src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_blue.png?"
                  alt=""
                />
              </Blue>
              <Red>
                <img
                  src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_red.png?"
                  alt=""
                />
              </Red>
            </ColorDiv>
            <ColorPrice>
              <h4>Deep Blue Metallic</h4>
              <p>$1,500</p>
            </ColorPrice>
          </Paint>
          <WheelDiv>
            <h1>Wheels</h1>
            <Wheels>
              <CyberstreamWheels>
                <img
                  src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELX/UI/20Cyberstream.png?"
                  alt=""
                />
              </CyberstreamWheels>
              <TurbineWheels>
                <img
                  src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELX/UI/22Turbine.png?"
                  alt=""
                />
              </TurbineWheels>
            </Wheels>
            <WheelDetail>
              <WheelName>
                <h4>20'' Cyberstream Wheels </h4>
                <p>Included</p>
              </WheelName>
              <span>All-Season Tires</span>
              <p>Range (EPA est.) : 348mi</p>
              <p style={{ backgroundColor: "#d6d2d2", marginTop: "3px" }}>
                Top Speed : 149mph
              </p>
              <button>Learn More</button>
            </WheelDetail>
          </WheelDiv>
          <TowPackage>
            <h1>Tow Package</h1>
            <p style={{ marginBottom: "15px" }}>Included</p>
            <p>High strength, Class II steel tow bar.</p>
            <p>Capable of towing up to 5,000 lbs.</p>
          </TowPackage>
          <Interior>
            <h1>Interior</h1>
            <InteriorCol>
              <Black>
                <img
                  style={{ border: "3.5px solid blue", borderRadius: "50%" }}
                  src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Interior_Black.png?"
                  alt=""
                />
              </Black>
              <White>
                <img
                  src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Interior_White.png?"
                  alt=""
                />
              </White>
              <Cream>
                <img
                  src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Interior_Cream.png?"
                  alt=""
                />
              </Cream>
            </InteriorCol>
            <InteriorColorDetail>
              <InteriorColorName>
                <h4>All Black</h4>
                <span>Included</span>
              </InteriorColorName>
              <p>Ebony Decor</p>
            </InteriorColorDetail>
            <SeatingLayout>
              <h2>Seating Layout</h2>
              <SeatingCount>
                <Five>
                  <p>5</p>
                </Five>
                <Six>
                  <p>6</p>
                </Six>
                <Seven>
                  <p>7</p>
                </Seven>
              </SeatingCount>

              <SeatLayoutName>
                <h4>Five Seats</h4>
                <span>Included</span>
              </SeatLayoutName>
              <a href="#">View Seating Layouts</a>
            </SeatingLayout>
            <SteeringControl>
              <h2>Steering Control</h2>
              <SteeringTwo>
                <SteeringWheel>
                  <img
                    src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELS/UI/ui_swat_s-wheel-b.svg?"
                    alt=""
                  />
                </SteeringWheel>
                <YokeSteering>
                  <img
                    src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELS/UI/ui_swat_s-wheel-y.svg?"
                    alt=""
                  />
                </YokeSteering>
              </SteeringTwo>
            </SteeringControl>
            <YokeStr>
              <h4>Yoke Steering</h4>
              <span>$250</span>
            </YokeStr>
            <button>Feature Details</button>
          </Interior>
          <Autopilot>
            <h1>Enhanced Autopilot</h1>
            <p>$6,000</p>
            <ul>
              <li>Navigate on Autopilot</li>
              <li>Auto Lane Change</li>
              <li>Autopark</li>
              <li>Summon</li>
              <li>Smart Summon</li>
            </ul>
            <ButtonAdd>
              <button style={{ backgroundColor: "#3e6ae1", color: "white" }}>
                Add
              </button>
              <button>Feature Details</button>
            </ButtonAdd>
          </Autopilot>
          <SelfDriving>
            <h1>Full Self-Driving Capability</h1>
            <span>$15,000</span>
            <ul>
              <li>
                All functionality of Basic Autopilot and Enhanced Autopilot
              </li>
              <li>Traffic Light and Stop Sign Control</li>
              <p
                style={{
                  marginTop: "35px",
                  color: "black",
                  marginLeft: "-20px",
                }}
              >
                Coming Soon
              </p>
              <li>Autosteer on city streets</li>

              <p style={{ fontSize: "0.9rem", marginLeft: "-20px" }}>
                The currently enabled features require active driver supervision
                and do not make the vehicle autonomous. The activation and use
                of these features are dependent on achieving reliability far in
                excess of human drivers as demonstrated by billions of miles of
                experience, as well as regulatory approval, which may take
                longer in some jurisdictions. As these self-driving features
                evolve, your car will be continuously upgraded through over-the-
                air software updates.
              </p>
            </ul>
            <ButtonAdd>
              <button style={{ backgroundColor: "#3e6ae1", color: "white" }}>
                Add
              </button>
              <button>Feature Details</button>
            </ButtonAdd>
          </SelfDriving>
          <Charging>
            <h1>Charging</h1>
            <ChargingIcon>
              <ErrorIcon style={{ color: "blue" }} />
              <p>Home charging equipment i not included</p>
            </ChargingIcon>
            <WallConnector>
              <div>
                <input value="test" type="checkbox" />
                <p>Wall Connector</p>
              </div>
              <span>$475</span>
            </WallConnector>
            <MobileConnector>
              <div>
                <input value="test" type="checkbox" />
                <p>Mobile Connector</p>
              </div>
              <span>$230</span>
            </MobileConnector>
            <button>Learn More</button>
          </Charging>
          <OrderYourModel>
            <h1>Order Your Model X</h1>
            <p>Est. Delivery Jul - Aug 2023</p>
            <button>Continue to Payment</button>
          </OrderYourModel>
        </DetailContainer>
      </MainContainer>
    </>
  );
}

export default CarDetail;

const MainContainer = styled.div`
  width: 100vw;
  display: flex;
`;
const ImageContainer = styled.div`
  width: 70%;
`;
const DetailContainer = styled.div`
  width: 30%;
  margin-top: 15vh;
  display: flex;
  padding: 4rem;
  flex-direction: column;
  align-items: center;
`;
const ItemText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  h1 {
    padding: 10px;
    font-size: 2.5rem;
  }
  p {
    color: gray;
  }
`;
const DeliveryZip = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  cursor:pointer;
  p {
    margin-left: 10px;
    text-decoration: underline;
    color: black;
  }
`;
const ButtonDiv = styled.div`
  width: 100%;
  background-color: rgb(245, 242, 242);
  border-radius: 5px;
  display: flex;
  align-items: center;
  button {
    width: 50%;
    padding: 10px 20px;
    margin: 4px;
    background-color: rgb(245, 242, 242);
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: white;
  }
`;

const SpeedDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0px;
`;
const Speed = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  span {
    font-weight: bold;
    margin: 1.5px;
  }
  p {
    padding-top: 10px;
    color: gray;
    font-size: 13px;
  }
`;
const Range = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  span {
    font-weight: bold;
    margin: 1.5px;
  }
  p {
    padding-top: 10px;
    color: gray;
    font-size: 13px;
  }
`;
const MPH = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  span {
    font-weight: bold;
    margin: 1.5px;
  }
  p {
    padding-top: 10px;
    color: gray;
    font-size: 13px;
  }
`;

const Model = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    text-align: left;
    padding: 8px;
    font-weight: 500;
  }
`;
const DualMoter = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3.5px solid blue;
  border-radius: 5px;
  padding: 15px 10px;
  color: black;
  cursor:pointer;
`;
const TriMoter = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid gray;
  border-radius: 5px;
  padding: 15px 10px;
  color: gray;
  cursor:pointer;
`;

const LearnMore = styled.div`
  margin: 20px;
  color: gray;
  font-size: 13px;
  cursor:pointer;
  p {
    a {
      text-decoration: underline;
      color: gray;
    }
  }
`;
const FeatureDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  button {
    padding: 8px 25px;
    border: none;
    border-radius: 5px;
    cursor:pointer;
  }
`;

const Paint = styled.div`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 30px;
  }
`;
const ColorDiv = styled.div`
  display: flex;
  align-items: center;
`;
const White = styled.div`
  img {
    width: 60px;
    padding: 7px;
    cursor:pointer;
  }
  //   img:hover{
  //     border: 3.5px solid blue;
  //     border-radius: 50%;
  //   }
`;
const Black = styled.div`
  img {
    width: 60px;
    padding: 7px;
    cursor:pointer;
  }
  //   img:hover{
  //     border: 3.5px solid blue;
  //     border-radius: 50%;
  //   }
`;
const Gray = styled.div`
  img {
    width: 60px;
    padding: 7px;
    cursor:pointer;
  }
  //   img:hover{
  //     border: 3.5px solid blue;
  //     border-radius: 50%;
  //   }
`;
const Blue = styled.div`
  img {
    width: 60px;
    padding: 7px;
    border: 3.5px solid blue;
    border-radius: 50%;
    cursor:pointer;
  }
  //   img:hover{
  //     border: 3.5px solid blue;
  //     border-radius: 50%;
  //   }
`;
const Red = styled.div`
  img {
    width: 60px;
    padding: 7px;
    cursor:pointer;
  }
  //   img:hover{
  //     border: 3.5px solid blue;
  //     border-radius: 50%;
  //   }
`;
const ColorPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  p {
    margin-left: 8px;
  }
`;

const WheelDiv = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wheels = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;
const CyberstreamWheels = styled.div`
  img{
    width 60px;
    height: 60px;
    padding: 7px;
    border: 3.5px solid blue;
    border-radius: 50%;
    cursor:pointer;
  }
`;
const TurbineWheels = styled.div`
img{
    width 60px;
    height: 60px;
    padding: 7px;
    // border: 3.5px solid blue;
    // border-radius: 50%;
    cursor:pointer;
  }
`;
const WheelDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  span {
    padding: 15px;
  }
  button {
    width: 60%;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    background-color: rgb(245, 242, 242);
    cursor:pointer;
  }
`;
const WheelName = styled.div`
  margin: 10px;
  display: flex;
  font-size: 1rem;
  p {
    color: gray;
    margin-left: 8px;
  }
`;
const TowPackage = styled.div`
  margin-top: 18vh;
  display:flex:
  flex-direction:column;
  align-items:center;
  h1{
    padding: 10px 0px;
  }
  span{
    color: gray;
  }
  
`;

const Interior = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 20px;
  }
  button {
    padding: 8px 25px;
    background-color: rgb(245, 242, 242);
    border-radius: 5px;
    border: none;
    margin-top: 20px;
    cursor:pointer;
  }
`;
const InteriorCol = styled.div`
  display: flex;
  align-items: center;
`;
const Cream = styled.div`
  img {
    width: 60px;
    padding: 7px;
    cursor:pointer;
  }
`;
const InteriorColorDetail = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: gray;
  }
`;
const InteriorColorName = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  span {
    margin-left: 6px;
    color: gray;
  }
`;
const SeatingLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  a {
    color: blue;
    margin-top: 10px;
    cursor:pointer;
  }
`;

const SeatLayoutName = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0px;
  span {
    margin-left: 6px;
    color: gray;
  }
`;
const SeatingCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const Five = styled.div`
  padding: 10px;
  font-size: 1.5rem;
  border: 3.5px solid blue;
  border-radius: 50%;
  p {
    width: 40px;
    height: 40px;
    background-color: rgb(245, 242, 242);
    border-radius: 50%;
    padding: 10px;
    cursor:pointer;
  }
`;
const Six = styled.div`
  font-size: 1.5rem;
  padding: 10px;
  p {
    width: 40px;
    height: 40px;
    background-color: rgb(245, 242, 242);
    border-radius: 50%;
    padding: 10px;
    cursor:pointer;
  }
`;
const Seven = styled.div`
  font-size: 1.5rem;
  padding: 10px;
  p {
    width: 40px;
    height: 40px;
    background-color: rgb(245, 242, 242);
    border-radius: 50%;
    padding: 10px;
    cursor:pointer;
  }
`;
const SteeringControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const SteeringTwo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;
const SteeringWheel = styled.div`
img{
    width 60px;
    height: 60px;
    padding: 7px;
    border: 3.5px solid blue;
    border-radius: 50%;
    cursor:pointer;
`;
const YokeSteering = styled.div`
img{
    width 60px;
    height: 60px;
    padding: 7px;
    border-radius: 50%;
    cursor:pointer;
`;
const YokeStr = styled.div`
  display: flex;
  align-items: center;
  span {
    color: gray;
    margin-left: 7px;
  }
`;

const Autopilot = styled.div`
  width: 100%;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-item: center;
  p {
    margin: 10px 0px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  ul li {
    padding-top: 5px;
  }
`;
const ButtonAdd = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 45%;
    padding: 8px 25px;
    background-color: rgb(245, 242, 242);
    border-radius: 5px;
    border: none;
    margin-top: 20px;
    cursor:pointer;
  }
`;
const SelfDriving = styled.div`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
    color: gray;
  }
  p {
    text-align: start;
    margin-top: 10px;
    color: gray;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  ul li {
    padding-top: 5px;
    text-align: start;
    color: gray;
  }
`;
const Charging = styled.div`
  margin-top: 20vh;
  button {
    width: 60%;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    background-color: rgb(245, 242, 242);
    cursor:pointer;
  }
`;
const ChargingIcon = styled.div`
  width: 80%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  p {
    margin-left: 7px;
    text-align: start;
  }
`;
const WallConnector = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  color:gray;
  justify-content: space-between;
  cursor:pointer;
  div {
    display: flex;
    align-items: center;
    input {
      width: 25px;
      height: 25px;
      cursor:pointer;
    }
    p {
      margin-left: 7px;
    }
  }
`;
const MobileConnector = styled.div`
display:flex;
  align-items:center;
  padding: 10px 0px;
  color: gray;
  justify-content:space-between;
  cursor:pointer;
  div {
    display: flex;
    align-items: center;
    input {
      width: 25px;
      height: 25px;
      cursor:pointer;
    }
    p {
      margin-left: 7px;
    }
  }
`;
const OrderYourModel = styled.div`
  margin-top: 15vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  p{
    margin: 20px 0px;
  }
  button{
    background-color: #3e6ae1;
    border-radius: 5px;
    border:none;
    color:white;
    font-weight:bold;
    cursor:pointer;
    padding: 10px 20px;
    width: 100%;
  }
`