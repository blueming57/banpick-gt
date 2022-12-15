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

const HeroListArea = styled.div`
  width: 682px;
  height: 397px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
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

const HeroInfo = styled.div`
  width: 90px;
  height: 118px;
  margin-right: 27px;
  margin-bottom: 10px;

  &:nth-child(6n) {
    margin-right: 0;
  }
`;

const HeroImage = styled.div`
  width: 90px;
  height: 90px;
  background-image: url(${(props) => process.env.PUBLIC_URL + props.imageSrc});
  background-size: contain;
  background-repeat: no-repeat;
  border: 2px solid ${(props) => (props.focusHero ? "#FFC302" : "#000")};
  ${(props) =>
    props.focusHero ? "box-shadow: 0 0 0 2px #FFC302 inset" : null};
  ${(props) => (props.focusHero ? "background-color: #fff" : null)};

  display: flex;
  justify-content: center;
`;

const HeroName = styled.div`
  margin-top: 90px;
  font-size: 16px;
  font-weight: 400;
`;

const MainPageTemplete = () => {
  const selectHero = "마리나";

  return (
    <MainTemplete>
      <CenterArea>
        <DescriptionBox>파란 가디언이 영웅을 선택할 차례입니다!</DescriptionBox>
        <SkillArea>
          {heroList.property.map((property) => {
            return <Property imageSrc={property.src} key={property.type} />;
          })}
          <SearchBox />
        </SkillArea>
        <HeroListArea>
          {/* {heroList.hero.map((hero) => {
            if (hero.property === "light" || hero.property === "basic") {
              return (
                <HeroInfo>
                  <HeroImage imageSrc={hero.src_list}>
                    <HeroName>{hero.name}</HeroName>
                  </HeroImage>
                </HeroInfo>
              );
            }
          })} */}
          {heroList.hero.map((hero) => {
            return (
              <HeroInfo key={hero.en_name}>
                <HeroImage
                  imageSrc={hero.src_list}
                  focusHero={hero.name === selectHero ? true : false}
                >
                  <HeroName>{hero.name}</HeroName>
                </HeroImage>
              </HeroInfo>
            );
          })}
        </HeroListArea>
      </CenterArea>
    </MainTemplete>
  );
};

export default MainPageTemplete;
