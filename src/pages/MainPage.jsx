import React from "react";
import styled from "styled-components";

import bgImageSrc from "../assets/background.png";
import MainPageTemplete from "../components/mainPage/MainPageTemplete";
import HeaderArea from "../components/mainPage/Header/Header";

const Background = styled.div`
  max-width: 100%;
  max-height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  background-image: url(${bgImageSrc});
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Noto Sans KR";
`;

const MainPage = () => {
  return (
    <Background>
      <HeaderArea />
      <MainPageTemplete />
    </Background>
  );
};

export default MainPage;
