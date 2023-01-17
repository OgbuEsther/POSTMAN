import React from 'react'
import styled from 'styled-components'
import images from "./Assets/butterfly.png"
import images2 from "./Assets/red.png"
import images3 from "./Assets/shopify.png"
import images4 from "./Assets/hsbc.png"
import images5 from "./Assets/postman.png"
import images6 from "./Assets/signeasy.png"
import images7 from "./Assets/december.png"
import images8 from "./Assets/gusto.png"
import images9 from "./Assets/devrel.png"
import images10 from "./Assets/attentive.png"
import {BsEye} from "react-icons/bs"
import {MdKeyboardArrowRight} from "react-icons/md"

const Spotlight = () => {
  return (
    <Container>
        <Wrapper>
            <Top>In the spotlight</Top>
            <P>The best APIs, collections, and workspaces handpicked by Postman. <span>See what more is in the spotlight</span></P>
            <Trend>
                <First>
                    <Trending>Trending APIs, collections and workspaces</Trending>
                    <View>There’s an API for that: discover the APIs, workspaces, and collections the Postman community is <br />
                     creating, viewing, and forking. <span>View Complete List</span> </View>
                </First>
                <First>
                    <Trending>New and Noteworthy</Trending>
                    <View>Discover newly added public workspaces with public APIs from a multitude of industries. <br /> <span>View Complete List</span> </View>
                </First>
            </Trend>
            <YoutubeHold>
                <Dis>
                    <Card>
                    <Images src={images} />
                </Card>
                <You>
                    <Text>YouTube <Ap>API</Ap></Text>
                    <Evan>API Evangelist . Updated on 29 Sep, 2022 . 2 versions</Evan>
                    <Evan2>Within this workspace you have access to all O11 platform REST base APIs:</Evan2>
                    <Eye><Icon><BsEye /></Icon> 10+ watchers <span><Icon><BsEye /></Icon>10k+views</span></Eye>
                </You>
                <Ihold><MdKeyboardArrowRight /></Ihold>
                </Dis>
                <Dis>
                    <Card>
                    <Images src={images2} />
                </Card>
                <You>
                    <Text>OutSystems 11 platform APIs <Ap>API</Ap></Text>
                    <Evan>OutSystems . Updated on 28 Nov, 2022</Evan>
                    <Evan>Within this workspace you have access to all O11 platform REST base APIs:</Evan>
                    <Eye><Icon><BsEye /></Icon> 10+ watchers <span><Icon><BsEye /></Icon>10k+views</span></Eye>
                </You>
                <Ihold><MdKeyboardArrowRight /></Ihold>
                </Dis>
            </YoutubeHold>
            <YoutubeHold>
                <Dis>
                    <Card>
                    <Images src={images3} />
                </Card>
                <You>
                    <Text>Shopify <Ap>API</Ap></Text>
                    <Evan>Anh Nguyen Trung  .  Updated on 16 Dec, 2021</Evan>
                    <Evan2>HSBC's Commercial APIs please visit https://develop.hsbc.com for more information</Evan2>
                    <Eye><Icon><BsEye /></Icon> 10+ watchers <span><Icon><BsEye /></Icon>10k+views</span></Eye>
                </You>
                <Ihold><MdKeyboardArrowRight /></Ihold>
                </Dis>
                <Dis>
                    <Card>
                    <Images src={images4} />
                </Card>
                <You>
                    <Text>HSBC Developers <Ap>API</Ap></Text>
                    <Evan>develop.hsbc  .  Updated on 23 Nov, 2022</Evan>
                    <Evan>HSBC's Commercial APIs please visit https://develop.hsbc.com for more information</Evan>
                    <Eye><Icon><BsEye /></Icon> 10+ watchers <span><Icon><BsEye /></Icon>10k+views</span></Eye>
                </You>
                <Ihold><MdKeyboardArrowRight /></Ihold>
                </Dis>
            </YoutubeHold>
             <YoutubeHold>
                <Dis>
                    <Card>
                    <Images src={images5} />
                </Card>
                <You>
                    <Text>Pubished Postman Templates <Ap>API</Ap></Text>
                    <Evan>Postman  .  Updated on 1 Dec, 2022</Evan>
                    <Evan>Templates published by the Postman team</Evan>
                    <Eye><Icon><BsEye /></Icon> 10+ watchers <span><Icon><BsEye /></Icon>10k+views</span></Eye>
                </You>
                <Ihold><MdKeyboardArrowRight /></Ihold>
                </Dis>
                <Dis>
                    <Card>
                    <Images src={images6} />
                </Card>
                <You>
                    <Text>Signeasy API <Ap>API</Ap></Text>
                    <Evan>Signeasy  .  Updated on 20 Nov, 2022</Evan>
                    <Evan>The public workspace for the Signeasy eSignature API collections</Evan>
                    <Eye><Icon><BsEye /></Icon> 10+ watchers <span><Icon><BsEye /></Icon>10k+views</span></Eye>
                </You>
                <Ihold><MdKeyboardArrowRight /></Ihold>
                </Dis>
            </YoutubeHold>
            <YoutubeHold>
                <Dis>
                    <Card>
                    <Images src={images7} />
                </Card>
                <You>
                    <Text>December 2, 2022 Datadog API Collection <Ap>API</Ap></Text>
                    <Evan>Datadog  .  Updated on 2 Dec,2022</Evan>
                    <Evan>This is the latest collection for the Datadog REST API, created on December 2, 2022. Fork it to your workspace to try Datadog API requests</Evan>
                    <Eye><Icon><BsEye /></Icon> 10+ watchers <span><Icon><BsEye /></Icon>10k+views</span></Eye>
                </You>
                <Ihold><MdKeyboardArrowRight /></Ihold>
                </Dis>
                <Dis>
                    <Card>
                    <Images src={images8} />
                </Card>
                <You>
                    <Text>Gusto Embedded<Ap>API</Ap></Text>
                    <Evan>Gusto  .  Updated on 2 Dec,2022</Evan>
                    <Evan>Gusto's Embedded Payroll API</Evan>
                    <Evan2>Gusto's Embedded Payroll API</Evan2>
                    <Eye><Icon><BsEye /></Icon> 10+ watchers <span><Icon><BsEye /></Icon>10k+views</span></Eye>
                </You>
                <Ihold><MdKeyboardArrowRight /></Ihold>
                </Dis>
            </YoutubeHold>
            <YoutubeHold>
                <Dis>
                    <Card>
                    <Images src={images9} />
                </Card>
                <You>
                    <Text>DevRel Re-public <Ap>API</Ap></Text>
                    <Evan>Postman DevRel  .  Updated on 30 Nov, 2022</Evan>
                    <Evan>An Interim public workspace for workshops, streams, and other events.</Evan>
                    <Evan2>An Interim public workspace for workshops, streams, and other events.</Evan2>
                    <Eye><Icon><BsEye /></Icon> 10+ watchers <span><Icon><BsEye /></Icon>10k+views</span></Eye>
                </You>
                <Ihold><MdKeyboardArrowRight /></Ihold>
                </Dis>
                <Dis>
                    <Card>
                    <Images src={images10} />
                </Card>
                <You>
                    <Text>Attentive Public APIs<Ap>API</Ap></Text>
                    <Evan>Attentive  .  Updated on 6 Oct, 2022</Evan>
                    <Evan>Attentive's APIs allow you as a developer to integrate with the Attentive platform and build custom applications</Evan>
                    <Eye><Icon><BsEye /></Icon> 10+ watchers <span><Icon><BsEye /></Icon>10k+views</span></Eye>
                </You>
                <Ihold><MdKeyboardArrowRight /></Ihold>
                </Dis>
            </YoutubeHold>
        </Wrapper>
    </Container>
  )
}

export default Spotlight
const Ihold = styled.div`
    font-size: 28px;
    color: rgb(107, 107, 107);
    margin-left: 55px;
    margin-top: 30px;
`
const Dis = styled.div`
    display: flex;
    width: 49%;
    height: 100%;
    /* background-color: pink; */
    border-bottom: 1px solid #e7e7e7;
    padding-bottom: 15px;
    padding-top: 15px;
`
const Icon = styled.div`
    margin-top: 2px;
`
const Eye = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
    color: rgb(107, 107, 107);
    span{
        display: flex;
        margin-left: 12px;
    }
`
const Evan2 = styled.div`
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
    color: rgb(107, 107, 107);
    visibility: hidden;
`
const Evan = styled.div`
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
    color: rgb(107, 107, 107);
`
const Ap = styled.div`
    width: 30px;
    margin-left: 4px;
    height: 20px;
    border: 1px solid rgb(173, 122, 3);
    color: rgb(173, 122, 3);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.4px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Text = styled.h3`
    font-weight: 600;
    font-size: 15px;
    line-height: 1.44;
    color: rgb(33, 33, 33);
    letter-spacing: -0.12px;
    display: flex;
        margin: 0;
`
const You = styled.div`
    width: 450px;
    /* background-color: gray; */
    display: flex;
    flex-direction: column;
    margin-left: 7px;
    /* height: 40%; */
`
const Images = styled.img`
    height: 35px;
`
const Card = styled.div`
    height: 40px;
    width: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #F2F2F2;
    border-radius: 4px;
`
const YoutubeHold = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    /* background-color: blue; */
    margin-top: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
`
const View = styled.div`
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
    color: rgb(107, 107, 107);
    margin-top: 5px;
`
const Trending = styled.h2`
    font-weight: 600;
    font-size: 17px;
    line-height: 1.28;
    color: rgb(33, 33, 33);
    letter-spacing: -0.12px;
    margin: 0;
`
const First = styled.div`
    width: 49%;
    display: flex;
    flex-direction: column;
    height: 100%;
    /* background-color: green; */
    border-bottom: 1px solid #e7e7e7;
        padding-bottom: 10px;
`
const Trend2 = styled.div`
    width: 100%;
    display: flex;
    height: 90px;
    background-color: yellow;
    margin-top: 25px;
    justify-content: space-between;
`
const Trend = styled.div`
    width: 100%;
    display: flex;
    height: 90px;
    /* background-color: yellow; */
    margin-top: 50px;
    justify-content: space-between;
`
const P = styled.div`
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;
    color: rgb(107, 107, 107);
    margin-top: 15px;
    span{
        cursor: pointer;
        color: rgb(2, 101, 210);
        font-size: 15px;
        margin-left: 3px;
        :hover{
            text-decoration: underline;
        }
    }
`
const Top = styled.h2`
    font-weight: 600;
    margin: 0;
    font-size: 24px;
    line-height: 1.2;
    color: rgb(33, 33, 33);
    letter-spacing: -0.72px;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    height: 100%;
    margin-top: 60px;
    flex-direction: column;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    /* background-color: red; */
`