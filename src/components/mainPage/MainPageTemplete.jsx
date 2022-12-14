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
  display: flex;
  background-color: white;
`;

const HeroImage = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => process.env.PUBLIC_URL + props.imageSrc});

  background-size: contain;
  background-repeat: no-repeat;
`;

const MainPageTemplete = () => {
  // heroList.hero.map((hero) => {
  //   if (hero.name === pickHero) console.log(hero.src_whole);
  // });

  return (
    <MainTemplete>
      <HeroImageArea>
        {heroList.hero.map((hero) => {
          if (hero.property === "light") {
            console.log(hero.src_whole);
            return <HeroImage imageSrc={hero.src_whole} />;
          } else console.log(hero.name);
        })}
      </HeroImageArea>
    </MainTemplete>
  );
};

export default MainPageTemplete;
