import React from "react";
import styled from "styled-components";
import CardProps from "./CardProps";
import img from "./postManAssests/astronanut.svg";
import img1 from "./postManAssests/tools.svg";
import img2 from "./postManAssests/download.svg";
import img3 from "./postManAssests/workspace.svg";
import img4 from "./postManAssests/home.svg";
const WhatIsPostMan = () => {
  return (
    <div>
      <Container>
        <Hold>{/* <Pic src={img} /> */}</Hold>
        <Wrapper>
          <h1>What is Postman?</h1>
          <p>
            Postman is an API platform for building and using APIs. Postman
            simplifies each step of <br />
            the API lifecycle and streamlines collaborati on so you can create
            better APIs—faster.
          </p>
        </Wrapper>
        <CardHold>
          <CardProps
            pic={img1}
            title="API Tools"
            sub="        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed nobis magni? Assumenda sapiente, facere ea ratione deserunt vero voluptate!"
          />
          <CardProps
            pic={img2}
            title="API Repository
"
            sub="        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed nobis magni? Assumenda sapiente, facere ea ratione deserunt vero voluptate!"
          />
          <CardProps
            pic={img3}
            title="Workspaces"
            sub="        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed nobis magni? Assumenda sapiente, facere ea ratione deserunt vero voluptate!"
          />
          <CardProps
            pic={img4}
            title="Governance"
            sub="        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed nobis magni? Assumenda sapiente, facere ea ratione deserunt vero voluptate!"
          />
        </CardHold>
        <Button1>sign up</Button1>
      </Container>
    </div>
  );
};

export default WhatIsPostMan;

const Button1 = styled.button`
  border: none;
  width: 70px;
  height: 30px;
  background-color: white;
  border: 1px solid darkgray;
  color: black;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease-in-out 350ms;

  :hover {
    /* transform: scale(0.99); */
    border: 1px solid black;
  }
`;

const CardHold = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  margin-left: 30px;
  margin-right: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 760px) {
    flex-wrap: wrap;
    margin: 0;
  }
`;

const Hold = styled.div`
  position: absolute;
  width: 300px;
  height: 100px;
  right: 100px;
  top: 470px;
  margin-top: 40px;
  /* background-color: purple; */
`;

const Wrapper = styled.div`
  /* background-color: beige; */
  width: 100%;
`;

const Pic = styled.img``;

const Container = styled.div`
  width: 100%;
  /* height: 450px; */
  background-color: aliceblue;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  /* position: relative; */
`;
