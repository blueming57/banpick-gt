import React from "react";
import styled from "styled-components";
import heroList from "../../heroList.json";

const MainTemplete = styled.div`
  width: 1920px;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

const CenterArea = styled.div`
  width: 958px;
  height: 650px;
  background-color: white;
  position: absolute;
  top: 54px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const DescriptionBox = styled.div`
  width: 100%;
  height: 76px;
  background-color: #d9d9d9;
  text-align: center;
  line-height: 76px;
  font-size: 36px;
  box-shadow: 0 0 0 1px #000 inset;
  border-radius: 10px;
  font-weight: 600;
`;

const HeroImageArea = styled.div`
  height: 827px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  background-color: white;
`;

const HeroImage = styled.div`
  width: 200px;
  height: 200px;
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
      <CenterArea>
        <DescriptionBox>파란 가디언이 영웅을 선택할 차례입니다!</DescriptionBox>
      </CenterArea>
      {/* <HeroImageArea> */}
      {/* {heroList.hero.map((hero) => {
          return <HeroImage imageSrc={hero.src_list} />;
        })} */}
      {/* {heroList.hero.map((hero) => {
          if (hero.property === "water") {
            console.log(hero.src_whole);
            return <HeroImage imageSrc={hero.src_list} />;
          } else console.log(hero.name);
        })} */}
      {/* </HeroImageArea> */}
    </MainTemplete>
  );
};

export default MainPageTemplete;
