import React from "react";
import Header from "../../components/Header/Header";
import HeaderContent from "../../components/Header/HeaderContent/HeaderContent";
import HomeComponent from "../../components/HomeComponents/HomeComponent";
import TitleHeaderHome from "../../components/HomeComponents/TtileHeaderHome/TitleHeaderHome";
function Home() {
  return (
    <>
      <Header>
        <HeaderContent>
          <TitleHeaderHome></TitleHeaderHome>
        </HeaderContent>
        <HeaderContent></HeaderContent>
      </Header>
      <HomeComponent></HomeComponent>
    </>
  );
}

export default Home;
