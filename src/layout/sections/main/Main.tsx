import React from 'react';
import {Photo} from "./Photo";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";

export const Main = () => {
    return (
        <div>
                <FlexWrapper align={"center"} justify={"space-around"}>
                    <div>
                        <H1>Elias is <ColorSpan>a web designer</ColorSpan> and <ColorSpan>front-end developer</ColorSpan></H1>
                    <P>He crafts responsive websites where technologies meet creativity</P>
                    <button>Contact me</button>
                    </div>

                    <Photo></Photo>
                </FlexWrapper>



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
const P = styled.p`
  color: #ABB2BF;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 156.25% */
`
const ColorSpan = styled.span`
  color: #C778DD;
  font-family: Fira Code;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`