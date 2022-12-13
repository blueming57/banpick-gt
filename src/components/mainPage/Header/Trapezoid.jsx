import React from "react";
import styled from "styled-components";

const TrapezoidStyle = styled.div`
  width: 347px;
  height: 115px;
  background: linear-gradient(to right, #2980b9, #f12711);
  clip-path: polygon(0 0, 100% 0, 85.2% 100%, 15.8% 100%);
  border: 2px solid #000;

  position: absolute;
  left: 50%;
  transform: translate(-50%, -15%);

  text-align: center;
  line-height: 108px;
  font-size: 80px;
  font-weight: 600;
`;

const Trapezoid = ({ children }) => {
  return <TrapezoidStyle>{children}</TrapezoidStyle>;
};

export default Trapezoid;
