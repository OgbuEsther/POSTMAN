import React from "react";
import styled from "styled-components";
import main from "./postManAssests/heroPic.png";
import main2 from "./postManAssests/main2.png";

const Build = () => {
  return (
    <div>
      <Container>
        <TextHold>
          <h1>
            Build <br /> APIs together
          </h1>
          <p>
            Over 20 million developers use Postman. Get <br /> started by
            signing up or downloading the desktop app.
          </p>
          <input type="text" placeholder="ogbuuzoma413@gmail.com" />
          <IconHold></IconHold>
        </TextHold>
        <HeroImage>
          <Heroimg src={main} />
          <Heroimg2 src={main2} />
        </HeroImage>
      </Container>
    </div>
  );
};

export default Build;

const IconHold = styled.div``;

const Heroimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 1440px) {
    display: none;
  }
`;
const Heroimg2 = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
  display: none;

  @media screen and (max-width: 1440px) {
    display: block;
  }
`;

const HeroImage = styled.div`
  /* background-color: black; */
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const TextHold = styled.div`
  margin-left: 30px;
  margin-top: 50px;

  p {
    width: 500px;
    /* background-color: red; */
    /* height: 100px; */

    @media screen and (max-width: 760px) {
      width: 200px;
    }
  }

  @media screen and (max-width: 760px) {
    margin-top: 50px;
    width: 200px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  width: 100%;

  overflow: hidden;

  @media screen and (max-width: 760px) {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    background-color: red;
  }
`;
