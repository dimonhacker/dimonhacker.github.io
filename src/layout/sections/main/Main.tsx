import React from 'react';
import {Photo} from "./Photo";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {ColorSpan} from "../../../components/ColorSpan";

export const Main = () => {
    return (
        <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
            <FlexWrapper align={"center"}>
                <FlexWrapper direction={"column"}>
                    <H1>Elias is <ColorSpan>a web designer</ColorSpan> and <div><ColorSpan>front-end
                        developer</ColorSpan></div></H1>
                    <P>He crafts responsive websites where technologies</P><P> meet creativity</P>
                    <P>
                        <button>Contact me</button>
                    </P>
                </FlexWrapper>
                <FlexWrapper direction={"column"}>
                    <LogoEl>
                        <Icon iconId={'rect2'} width="156" height="156" viewBox="0 0 156 156"></Icon>
                    </LogoEl>
                    <FlexWrapper direction={"column"}>
                        <Photo/>
                        <FlexWrapper>
                            <Rect/>
                            <P>Currently working on <B>Portfolio</B></P>
                        </FlexWrapper>
                        <Icon iconId={'dots'} width="156" height="156" viewBox="0 0 156 156"></Icon>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper direction={"column"} align={"flex-end"}>
                <StyledBox>With great power comes great electricity bill</StyledBox>
                <FlexWrapper>
                    <StyledBox>Dr. Who</StyledBox>
                </FlexWrapper>
            </FlexWrapper>
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
const P = styled.div`
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
const LogoEl = styled.div`
    position: relative;
`


const StyledBox = styled.div`
  color: #FFF;
  max-width: 712px;
  margin: 0 auto;
  padding: 32px;
  gap: 10px;
  border: 2px solid gray;
`