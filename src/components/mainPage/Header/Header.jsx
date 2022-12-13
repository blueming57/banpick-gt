import React from "react";
import styled from "styled-components";
import Trapezoid from "./Trapezoid";

const HeaderArea = styled.div`
  width: 100%;
  height: 85px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-top: 53px;
  position: relative;
`;

const Header = () => {
  return (
    <HeaderArea>
      <Trapezoid>9</Trapezoid>
    </HeaderArea>
  );
};

export default Header;
