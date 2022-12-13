import React from "react";
import styled from "styled-components";
import heroList from "../../heroList.json";

const MainTemplete = styled.div`
  width: 1920px;
  height: 100%;
  margin: 0 auto;
`;

const HeroImageArea = styled.div`
  height: 827px;
  background-color: white;
`;

const HeroImage = styled.img``;

const MainPageTemplete = () => {
  // console.log(heroList.hero);

  heroList.hero.map((hero) => {
    console.log(hero.en_name);
  });

  // let heroImage;
  // Object.keys(heroList).map((hero) => {
  //   console.log(hero);
  // });

  return (
    <MainTemplete>
      <HeroImageArea></HeroImageArea>
    </MainTemplete>
  );
};

export default MainPageTemplete;
