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
`;

const HeroImage = styled.div`
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL + "/images/gabriel.png"});
  background-size: contain;
  background-repeat: no-repeat;
`;

const MainPageTemplete = () => {
  const pickHero = "가브리엘";

  heroList.hero.map((hero) => {
    if (hero.name === pickHero) console.log(hero.src_whole);
  });

  return (
    <MainTemplete>
      <HeroImageArea>
        <HeroImage />
      </HeroImageArea>
    </MainTemplete>
  );
};

export default MainPageTemplete;
