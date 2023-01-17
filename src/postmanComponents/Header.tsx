import React, { useState } from "react";
import styled from "styled-components";
import images from "./postManAssests/postman.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { TbCircleX } from "react-icons/tb";
import {
  BsBoundingBox,
  BsFolder,
  BsDiagram2,
  BsShare,
  BsPeople,
} from "react-icons/bs";
// import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [show, setShow] = useState<Boolean>(false);
  const [show2, setShow2] = useState<Boolean>(false);
  const [show3, setShow3] = useState<Boolean>(false);
  const [show4, setShow4] = useState<Boolean>(false);
  const [cancle, setCancle] = useState<Boolean>(false);

  const Remove = () => {
    setCancle(true);
    setShow4(false);
  };
  const Toggle = () => {
    setShow(!show);
    setShow2(false);
    setShow3(false);
    setShow4(false);
  };
  const Toggle2 = () => {
    setShow2(!show2);
    setShow(false);
    setShow3(false);
    setShow4(false);
  };
  const Toggle3 = () => {
    setShow3(!show3);
    setShow(false);
    setShow2(false);
    setShow4(false);
  };
  const Toggle4 = () => {
    setShow4(!show4);
    setShow(false);
    setShow2(false);
    setShow3(false);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Images src={images} />
          </Logo>
          <NavHold>
            <Navs onClick={Toggle}>
              Product{" "}
              <Icons>
                <MdKeyboardArrowDown />
              </Icons>
            </Navs>
            <Navs>Pricing</Navs>
            <Navs onClick={Toggle2}>
              Enterprise
              <Icons>
                <MdKeyboardArrowDown />
              </Icons>
            </Navs>
            <Navs onClick={Toggle3}>
              Resources and Support
              <Icons>
                <MdKeyboardArrowDown />
              </Icons>
            </Navs>
            <Navs>Explore</Navs>
          </NavHold>
        </Left>
        <Mid>
          <Search onClick={Toggle4}>
            <Icon>
              <CiSearch />
            </Icon>
            Search Postman
          </Search>
        </Mid>
        <Se>
          <CiSearch />
        </Se>
        <Right>
          <Button>Sign In</Button>
          <Button2>Sign Up for Free</Button2>
        </Right>
      </Wrapper>
      {show ? (
        <Drop>
          <Start>What is Postman?</Start>
          <Start>API repository</Start>
          <Start>Tools</Start>
          <Start>Governance</Start>
          <Start>Workspaces</Start>
          <Start>Integrations</Start>
          <Start2>
            Get started free{" "}
            <Ico>
              <AiOutlineArrowRight />
            </Ico>
          </Start2>
        </Drop>
      ) : null}

      {show2 ? (
        <Ent>
          <Start>Postman Enterprise</Start>
          <Start3>Enterprise case studies</Start3>
          <Start>Contact sales</Start>
        </Ent>
      ) : null}
      {show3 ? (
        <Res>
          <First>
            <Top>Learning</Top>
            <Start4>Docs</Start4>
            <Start4>Breaking Changes show</Start4>
            <Start4>Postman Space Camp</Start4>
            <Start4>Case studies</Start4>
            <Start4>State of the API report</Start4>
            <Start4>Guide to API-First</Start4>
          </First>

          <First>
            <Top>Community and events</Top>
            <Start4>Blog</Start4>
            <Start4>Community</Start4>
            <Start4>Student program</Start4>
            <Start4>Student Summit</Start4>
            <Start4>Postman for Nonprofits</Start4>
            <Start4>Postman swag</Start4>
          </First>

          <First2>
            <Top>Support</Top>
            <Start4>Support Center</Start4>
            <Start4>Reseller support</Start4>
            <Start4>Postman status</Start4>
            <Start4>Release notes</Start4>
            <Start4>Contact us</Start4>
          </First2>
        </Res>
      ) : null}
      {show4 ? (
        <SearchHold>
          <ApiH>
            <Public>Public APi Network</Public>
            <SearchInput
              placeholder="Search for APIs by popular teams like Microsoft and Intel"
              type={Search}
            />
            <Cancle onClick={Remove}>
              <TbCircleX />
            </Cancle>
          </ApiH>
          <Spaces>
            <SearchFor>Search for:</SearchFor>
            <Work>
              <Ic>
                <BsBoundingBox />
              </Ic>
              Workspaces
            </Work>
            <Work>
              <Ic>
                <BsFolder />
              </Ic>
              Collections
            </Work>
            <Work>
              <Ic>
                <BsDiagram2 />
              </Ic>
              APIs
            </Work>
            <Work>
              <Ic>
                <BsShare />
              </Ic>
              Flows
            </Work>
            <Work>
              <Ic>
                <BsPeople />
              </Ic>
              Teams
            </Work>
          </Spaces>
        </SearchHold>
      ) : null}

      <Hamburg>
        <RxHamburgerMenu />
      </Hamburg>
    </Container>
  );
};

export default Header;
const Draw = styled.div`
  width: 190px;
  height: 600px;
  position: absolute;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  right: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Se = styled.div`
  display: none;
  font-size: 22px;
  margin-top: 2px;
  position: absolute;
  right: 240px;
  color: rgb(107, 107, 107);
  @media screen and (max-width: 1305px) {
    display: flex;
    right: 240px;
  }
  @media screen and (max-width: 965px) {
    display: flex;
    right: 50px;
  }
`;
const Hamburg = styled.div`
  display: none;
  font-size: 23px;
  @media screen and (max-width: 965px) {
    display: flex;
    margin-right: 10px;
  }
`;
const Ic = styled.div`
  margin-right: 5px;
`;
const Work = styled.div`
  padding: 3px 8px;
  font-size: 12px;
  display: flex;
  background-color: rgb(242, 242, 242);
  margin-left: 10px;
`;
const SearchFor = styled.div`
  margin-left: 30px;
  font-size: 13px;
  color: rgb(107, 107, 107);
`;
const Spaces = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
`;
const Cancle = styled.div`
  color: rgb(107, 107, 107);
  margin-left: 240px;
  font-size: 22px;
  cursor: pointer;
`;
const SearchInput = styled.input`
  height: 32px;
  width: 350px;
  border: none;
  outline: none;
  margin-left: 3px;
  font-size: 13px;
  color: rgb(107, 107, 107);
`;
const Public = styled.div`
  height: 32px;
  padding: 0px 14px;
  background-color: rgb(242, 242, 242);
  font-size: 13px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  margin-left: 20px;
`;
const ApiH = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
`;
const SearchHold = styled.div`
  position: absolute;
  width: 58%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  height: 110px;
  display: flex;
  flex-direction: column;
  top: 0;
  background-color: white;
`;
const First2 = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  height: 100%;
  margin-left: 50px;
`;
const Start4 = styled.div`
  font-size: 14px;
  width: 170px;
  align-items: center;
  /* padding-left: 8px; */
  display: flex;
  height: 35px;
  border-radius: 3px;
  color: rgb(107, 107, 107);
  transition: all 350ms;
  cursor: pointer;
  :hover {
    background-color: rgb(242, 242, 242);
  }
`;
const Top = styled.h3`
  font-size: 16px;
  line-height: 1.28;
  letter-spacing: -0.12px;
  color: rgb(107, 107, 107);
  font-weight: 600;
  margin-top: 10px;
`;
const First = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  height: 100%;
  margin-left: 10px;
`;
const Res = styled.div`
  position: absolute;
  width: 500px;
  height: 235px;
  /* background-color: red; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  left: 340px;
  top: 60px;
  border-radius: 7px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  padding-top: 14px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 30px;
`;
const Start3 = styled.div`
  font-size: 14px;
  width: 150px;
  align-items: center;
  padding-left: 8px;
  display: flex;
  height: 35px;
  border-radius: 3px;
  color: rgb(107, 107, 107);
  transition: all 350ms;
  cursor: pointer;
  :hover {
    background-color: rgb(242, 242, 242);
  }
`;
const Ent = styled.div`
  position: absolute;
  width: 190px;
  height: 100px;
  /* background-color: red; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  left: 230px;
  top: 50px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding-top: 14px;
  padding-left: 20px;
  padding-bottom: 10px;
`;
const Ico = styled.div`
  margin-top: 6px;
  margin-left: 5px;
`;
const Start2 = styled.div`
  font-size: 14px;
  width: 130px;
  align-items: center;
  padding-left: 8px;
  display: flex;
  height: 35px;
  border-radius: 3px;
  color: rgb(2, 101, 210);
  transition: all 350ms;
  cursor: pointer;
  :hover {
    background-color: rgb(242, 242, 242);
  }
`;
const Start = styled.div`
  font-size: 14px;
  width: 130px;
  align-items: center;
  padding-left: 8px;
  display: flex;
  height: 35px;
  border-radius: 3px;
  color: rgb(107, 107, 107);
  transition: all 350ms;
  cursor: pointer;
  :hover {
    background-color: rgb(242, 242, 242);
  }
`;
const Drop = styled.div`
  position: absolute;
  width: 170px;
  height: 235px;
  /* background-color: red; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  left: 40px;
  top: 50px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 10px;
`;
const Left = styled.div`
  /* background-color: green; */
  /* width: 630px; */
  display: flex;
  height: 100%;
  align-items: center;
`;
const Mid = styled.div`
  /* width: 350px; */
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1305px) {
    display: none;
  }
`;
const Right = styled.div`
  display: flex;
  height: 100%;
  /* width: 350px; */
  align-items: center;
  @media screen and (max-width: 965px) {
    display: none;
  }
`;
const Button2 = styled.button`
  height: 32px;
  padding: 0px 14px;
  background-color: rgb(255, 108, 55);
  color: rgb(255, 255, 255);
  font-weight: 600;
  border-radius: 4px;
  font-size: 14px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  display: flex;
  margin-left: 15px;
  text-decoration: none;
`;
const Button = styled.button`
  height: 32px;
  padding: 0px 12px;
  color: rgb(33, 33, 33);
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  font-size: 14px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-left: 120px;
  text-decoration: none;
`;
const Icon = styled.div`
  font-size: 20px;
  margin-top: 2px;
  /* margin-right: 4px; */
`;
const Search = styled.div`
  display: flex;
  padding: 0px 8px;
  height: 35px;
  background-color: rgb(242, 242, 242);
  border-radius: 4px;
  border: 1px solid rgb(230, 230, 230);
  cursor: pointer;
  width: 166px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: rgb(107, 107, 107);
  margin-left: 120px;
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
`;
const Navs2 = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  display: flex;
  color: rgb(107, 107, 107);
  cursor: pointer;
  margin-right: 25px;
  :hover {
    color: black;
  }
`;
const Navs = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  display: flex;
  margin-bottom: 5px;
  color: rgb(107, 107, 107);
  cursor: pointer;
  margin-right: 25px;
  :hover {
    color: black;
  }
`;
const NavHold2 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-left: 8px;
  flex-direction: column;
`;
const NavHold = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 8px;
  @media screen and (max-width: 965px) {
    display: none;
  }
`;
const Images = styled.img`
  height: 33px;
`;
const Logo = styled.div`
  /* width: 50px; */
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 965px) {
    margin-left: 10px;
  }
`;
const Wrapper = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  /* background-color: blue; */
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: white;
  position: fixed;
  /* position: relative; */
  align-items: center;
  z-index: 1;
`;
