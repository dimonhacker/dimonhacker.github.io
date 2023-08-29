import React from 'react';
import {Photo} from "./Photo";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {ColorSpan} from "../../../components/ColorSpan";

export const Main = () => {
    return (
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <H1>Elias is <ColorSpan>a web designer</ColorSpan> and <ColorSpan>front-end
                        developer</ColorSpan></H1>
                    <P>He crafts responsive websites where technologies meet creativity</P>
                    <button>Contact me</button>
                </div>
                <Icon iconId={'rect2'} width="156" height="156" viewBox="0 0 156 156"></Icon>
                <div>
                    <Photo></Photo>
                    <FlexWrapper><Rect/><P>Currently working on <B>Portfolio</B></P></FlexWrapper>
                </div>
                <Icon iconId={'dots'} width="156" height="156" viewBox="0 0 156 156"></Icon>
            </FlexWrapper>
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
const P = styled.span`
  color: #ABB2BF;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 156.25% */
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
