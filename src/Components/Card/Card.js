import React from "react";
import { Container, Row, Row2, Div, Image, Info, Data, DataOrange } from "./Card.styled";
import Dining from "../../assets/local_dining-24px.svg";
import Clock from "../../assets/query_builder-24px.svg";

const Information1 = ({ image, info, data }) => {
  return (
    <Row>
      <Image src={image} alt="" />
      <Div>
        <Info>{info}</Info>
        <DataOrange>{data}</DataOrange>
      </Div>
    </Row>
  );
};

const Information2 = ({ image, info, data }) => {
  return (
    <Row>
      <Image src={image} alt="" />
      <div>
        <Info>{info}</Info>
        <Data>{data}</Data>
      </div>
    </Row>
  );
};

const Card = () => {
  return (
    <Container>
      <div>
        <Information1 image={Dining} info={"yields"} data={"12 servings"} />
      </div>
      <Row2>
        <Information2 image={Clock} info={"prep time"} data={"45 minutes"} />
        <Information2 image={Clock} info={"cook time"} data={"1 hour"} />
        <Information2 image={Clock} info={"total time"} data={"1,75 hours"} />
      </Row2>
    </Container>
  );
};

export default Card;
