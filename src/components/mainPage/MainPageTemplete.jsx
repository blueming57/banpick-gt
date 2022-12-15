import React from "react";
import styled from "styled-components";
import heroList from "../../heroList.json";

const MainTemplete = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

const CenterArea = styled.div`
  width: 870px;
  height: 650px;
  position: absolute;
  top: 42px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const DescriptionBox = styled.div`
  width: 100%;
  height: 68px;
  background-color: #d9d9d9;
  text-align: center;
  line-height: 68px;
  font-size: 34px;
  box-shadow: 0 0 0 1px #000 inset;
  border-radius: 10px;
  font-weight: 700;
`;

const SkillArea = styled.div`
  width: 836px;
  height: 51px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  margin-top: 15px;

  &::after {
    content: "";
    width: 100%;
    height: 3px;
    background-color: #000;
    border-radius: 10px;
    position: absolute;
    top: 42px;
  }
`;

const Property = styled.div`
  width: 28px;
  height: 28px;
  background-image: url(${(props) => process.env.PUBLIC_URL + props.imageSrc});
  background-size: contain;
  background-repeat: no-repeat;
  margin: -16px 0px 1px;

  &:first-child {
    margin-left: 25px;
  }
`;

const SearchBox = styled.div`
  width: 254px;
  height: 34px;
  position: absolute;
  right: 25px;
  top: -2px;
  background-color: white;
  box-shadow: 0 0 0 1px #000 inset;
  border-radius: 20px;
`;

const HeroImageArea = styled.div`
  background: green;
  width: 672px;
  height: 397px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  position: absolute;
  top: 152px;
  left: 50%;
  transform: translate(-50%, 0%);

  &::-webkit-scrollbar {
    width: 7px;
    height: 80px;
    color: #c3965b;
  }
`;

const HeroImage = styled.div`
  width: 90px;
  height: 90px;
  background-image: url(${(props) => process.env.PUBLIC_URL + props.imageSrc});
  background-size: contain;
  background-repeat: no-repeat;
  border: 2px solid #000;
  margin-top: -26px;
  margin-right: 25px;

  display: flex;
  justify-content: center;

  &:nth-child(-n + 6) {
    margin-top: 0;
  }

  &:nth-child(6n) {
    margin-right: 0;
  }
`;

const HeroName = styled.div`
  margin-top: 90px;
  font-size: 16px;
  font-weight: 400;
  word-break: keep-all;
`;

const MainPageTemplete = () => {
  // heroList.hero.map((hero) => {
  //   if (hero.name === pickHero) console.log(hero.src_whole);
  // });

  return (
    <MainTemplete>
      <CenterArea>
        <DescriptionBox>파란 가디언이 영웅을 선택할 차례입니다!</DescriptionBox>
        <SkillArea>
          {heroList.property.map((property) => {
            return <Property imageSrc={property.src} />;
          })}
          <SearchBox />
        </SkillArea>
        <HeroImageArea>
          {heroList.hero.map((hero) => {
            if (hero.property === "light") {
              return (
                <HeroImage imageSrc={hero.src_list}>
                  <HeroName>{hero.name}</HeroName>
                </HeroImage>
              );
            }
          })}
          {/* {heroList.hero.map((hero) => {
            return <HeroImage imageSrc={hero.src_list} />;
          })} */}
        </HeroImageArea>
      </CenterArea>
    </MainTemplete>
  );
};

export default MainPageTemplete;
