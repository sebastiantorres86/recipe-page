import React from "react";
import { Div, ImageWrapper, Subheading } from "./Header.styled";
import SixDots from "../../assets/6dots.svg";

const Header = ({ heading, subheading, image, alt }) => {
  return (
    <>
      <h1>{heading}</h1>
      <Div>
        <ImageWrapper src={SixDots} />
        <Subheading>{subheading}</Subheading>
      </Div>

      <img src={image} alt={alt} />
    </>
  );
};

export default Header;
