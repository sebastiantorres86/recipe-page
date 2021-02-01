import React from "react";
import { Container, Div, ImageWrapper, Subheading } from "./Header.styled";
import SixDots from "../../assets/6dots.svg";

const Header = ({ heading, subheading, image, alt }) => {
  return (
    <Container>
      <h1>{heading}</h1>
      <Div>
        <ImageWrapper src={SixDots} />
        <Subheading>{subheading}</Subheading>
      </Div>

      <img src={image} alt={alt} />
    </Container>
  );
};

export default Header;
