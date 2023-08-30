import React from 'react';
import {Photo} from "./Photo";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {ColorSpan} from "../../../components/ColorSpan";

export const Main = () => {
    return (
        <div >
            <FlexWrapper align={"center"} justify={"space-around"}>
                <StyledDiv>
                    <H1>Elias is <ColorSpan>a web designer</ColorSpan> and <ColorSpan>front-end
                        developer</ColorSpan></H1>
                    <P>He crafts responsive websites where technologies meet creativity</P>
                    <button>Contact me</button>
                </StyledDiv>
                <Icon iconId={'rect2'} width="156" height="156" viewBox="0 0 156 156"></Icon>
                <div>
                    <Photo></Photo>
                    <FlexWrapper><Rect/><P>Currently working on <B>Portfolio</B></P></FlexWrapper>
                </div>
                <Icon iconId={'dots'} width="156" height="156" viewBox="0 0 156 156"></Icon>
            </FlexWrapper>
            <StyledCenterBox >
            With great power comes great electricity bill
            </StyledCenterBox>
            <StyledCenterBox >
                - Dr. Who
            </StyledCenterBox>
        </div>
    );
};

const H1 = styled.h1`
  color: #FFF;
  font-family: Fira Code;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
const P = styled.div`
  color: #ABB2BF;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 156.25% */
  width: 30em;
`
const B = styled.b`
  color: white;
`
const Rect = styled.div`
  margin-top: 4px;
  margin-right: 5px;
  width: 16px;
  height: 16px;
  background: #C778DD;
`
const StyledDiv = styled.div`
  width: 35em;
`


const StyledCenterBox = styled.div`
  display: flex;
  justify-content: center;
  width: 712px;
  margin: 0 auto;
  padding: 32px;
  align-items: flex-start;
  gap: 10px;
  border: 2px solid gray;
`