import React from "react";
import styled from "styled-components";

interface props {
  pic: string;
  title: string;
  sub: string;
}
const CardProps: React.FC<props> = ({ pic, title, sub }) => {
  return (
    <div>
      <Container>
        <Card>
          <Wrap>
            <Img src={pic} />
            <h4>{title}</h4>
            <p>{sub}</p>
          </Wrap>
        </Card>
      </Container>
    </div>
  );
};

export default CardProps;

const Wrap = styled.div`
  p {
    font-size: 12px;
  }
  /* background-color: blue; */
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 20px;
  object-fit: cover;
  /* background-color: gray; */
`;

const Card = styled.div`
  width: 270px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px 20px;
`;

const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 400px;
`;
