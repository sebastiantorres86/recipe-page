import React from "react";
import { Header } from "../Components";
import img from "../assets/photo1.png";

const Main = () => {
  return (
    <>
      <Header
        heading={"Classic Cheesecake Recipe"}
        subheading={
          "Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath."
        }
        image={img}
        alt={"Chessecake"}
      />
    </>
  );
};

export default Main;
