import React from "react";
import Card from "../Card";
import Ingredients from "../Ingredients";
import Instructions from "../Instructions";
import Note from "../Note";
import Footer from "../Footer";
import { Wrapper, Div1, Div2 } from "./Main.styled";

const Main = () => {
  return (
    <>
      <Wrapper>
        <Div1>
          <Card />
        </Div1>
        <Div2>
          <Ingredients />
        </Div2>
      </Wrapper>
      <Instructions />
      <Note />
      <Footer />
    </>
  );
};

export default Main;
