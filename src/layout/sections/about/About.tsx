import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {ColorSpan} from "../../../components/ColorSpan";
import styled from "styled-components";
import {Logo2} from "../../../components/Logo2";
import LeftImg from "../../../assets/images/Rectangle-22.webp"

export const About = () => {
    return (
        <FlexWrapper id={"about-me"} justify={"center"}>
            <FlexWrapper maxWidth={"515px;"}>
                <SectionTitle><ColorSpan>#</ColorSpan>about-me</SectionTitle>
                <FlexWrapper direction={"column"} justify={"left"} >
                    <P>Hello, i’m Elias!</P>
                    <P>I’m a self-taught front-end developer based in Vologda, Russia. I can develop responsive websites
                        from scratch and raise them into modern user-friendly web experiences. </P>
                    <P>Transforming my creativity and knowledge into a websites has been my passion for over a year. I
                        have been helping various clients to establish their presence online. I always strive to learn
                        about the newest technologies and frameworks.</P>
                </FlexWrapper>
                <ReadMore href={"#"}>Read more -&gt;</ReadMore>
            </FlexWrapper>
            <FlexWrapper direction={"row"} maxWidth={"50%"} wrap={"wrap"}>
                <a href={"#"}><Logo2/></a>
            </FlexWrapper>
        </FlexWrapper>
    );
};

const P = styled.p`
  color: #ABB2BF;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`
const ReadMore = styled.a`
  color: #FFF;
  font-family: Fira Code;
  font-size: 16px;
  font-weight: 500;
`