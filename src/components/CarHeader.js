import React from "react";
import styled from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";

function CarHeader() {
  return (
    <>
      <Header>
        <a href="#">
          <img src="/images/logo.svg" alt="" />
        </a>
        <Language>
          <div>
            <LanguageIcon style={{ color: "#525252", fontSize: "25px" }} />
            <p>US</p>
          </div>
        </Language>
      </Header>
    </>
  );
}

export default CarHeader;

const Header = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  color: white;
  transition: color 0.5s;
`;

const Language = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: #333131;
  Language:hover {
    background-color: gray;
  }
  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    padding: 5px 10px;
    border-radius: 5px;
  }
  div:hover{
    background-color: rgb(245, 242, 242);;
  }
  p {
    margin-left: 6px;
    font-size: 15px;
  }
`;
