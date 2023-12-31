import React from 'react';
import {Photo} from "./Photo";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {ColorSpan} from "../../../components/ColorSpan";
import {StyledSection} from "../../../components/StyledSection";
import {Citation} from "../projects/citation/Citation";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledSection id={"home"}>
            <Container>
                <FlexWrapper gap={"120px"} direction={"column"} align={"space-around"}>
                    <FlexWrapper align={"center"} justify={"space-around"}>
                        <FlexWrapper direction={"column"} maxWidth={"537px;"} >
                            <H1>Elias is a <ColorSpan>web designer</ColorSpan> and <ColorSpan>front-end
                                developer</ColorSpan></H1>
                            <P>He crafts responsive websites where technologies meet creativity</P>
                            <ButtonWrapper>
                                <Btn>Contact me !!</Btn>
                            </ButtonWrapper>
                        </FlexWrapper>
                        <FlexWrapper direction={"column"}>
                            <FlexWrapper direction={"column"}>
                                <Photo/>
                                <StyledFrame>
                                    <Rect/>
                                    <P>Currently working on <B>Portfolio</B></P>
                                </StyledFrame>
                            </FlexWrapper>
                        </FlexWrapper>
                    </FlexWrapper>
                    <Citation/>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};

const ButtonWrapper = styled.div`
  margin: 2em 0;
  //width: unset;
`
const Btn = styled.button`
  color: white;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #C778DD;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
  width: auto;
  @media (max-width: 1023px){
    display: none;
  }
`
const H1 = styled.h1`
  color: #FFF;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1em;
  margin-bottom: 1em;
`

const P = styled.div`
  color: #ABB2BF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 156.25% */
  max-width: 463px;
`
const B = styled.b`
  color: white;
`
const Rect = styled.div`
  margin-right: 5px;
  width: 16px;
  height: 16px;
  background: #C778DD;
`
const StyledFrame = styled.div`
  display: flex;
  padding: 0.3em 0.5em;
  align-items: center;
  border: 1px solid ${theme.colors.secondaryTextColor};
`
