import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../../features/car/carSlice";
import { useSelector } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LanguageIcon from "@mui/icons-material/Language";

function SolarHeader(props) {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cars = useSelector(selectCars);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = window.innerHeight;
      setIsScrolled(scrollPosition >= headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container isScrolled={isScrolled}>
      <a href="/">
        {isScrolled ? (
          <img src="/images/white_logo.svg" alt="" />
        ) : (
          <img src="/images/white_logo.svg" alt="" />
        )}
      </a>
      <Menu isScrolled={isScrolled}>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href={index + 1}>
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu isScrolled={isScrolled}>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href={index+1}>{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Demo Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
        <li>
          <a href="#">Fleet</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <MoreLi>
            <a href="#">More </a>
          </MoreLi>
          <KeyboardArrowRightIcon />
        </li>
        <li>
          <LanguageIcon />
          <LanguageLi>
            <h3>United States</h3>
            <p>English</p>
          </LanguageLi>
        </li>
      </BurgerNav>
      <Overlay show={burgerStatus} onClick={() => setBurgerStatus(false)} />
    </Container>
  );
}

export default SolarHeader;

const Container = styled.div`
  min-height: 50px;
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
  background-color:${(props) => (props.isScrolled ? "rgba(45,45,45,.8)" : "transparent")};
  transition: color 0.5s;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-size: 15px;
    font-weight: 600;
    // text-transform: uppercase;
    padding: 0 15px;
    flex-wrap: nowrap;
    color: white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-size: 15px;
    font-weight: 600;
    // text-transform: uppercase;
    margin-right: 30px;
    color: white;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 0px 0px 60px 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s;
  overflow-y: auto;

  li {
    display: flex;
    padding: 10px 10px;
    margin: 5px 25px 5px 5px;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    a {
      font-weight: 600;
      color: #393c41;
    }
  }
  li:hover {
    background-color: #f1f1f1;
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  color: ${(props) => (props.isScrolled ? "black" : "black")};
`;
const CloseWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: flex-end;
  padding: 40px 20px;
  background: white;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props) => (props.show ? "auto" : "none")};
  z-index: 15;
`;

const MoreLi = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 160px;
`;

const LanguageLi = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  p {
    font-size: 12px;
    font-weight: bolder;
    color: gray;
  }
`;
