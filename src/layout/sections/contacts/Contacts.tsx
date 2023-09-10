import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ColorSpan} from "../../../components/ColorSpan";
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {StyledSection1} from "../../../components/StyledSection1";

export const Contacts = () => {
    return (
        <StyledSection1 id={"contacts"} >
            <FlexWrapper direction={"column"}>
            <FlexWrapper  align={"center"} wrap={"no-wrap"}>
                <SectionTitle><ColorSpan>#</ColorSpan>contacts</SectionTitle><Icon iconId={"line"}  width="127" height="2" viewBox="0 0 127 2"/>
            </FlexWrapper>
                <FlexWrapper justify={"space-between"}>
                <P>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</P>
                <MessageBox>
                    <MessageMe>Message me here</MessageMe>
                    <A href={"#"}><Icon iconId={"email"}></Icon>elias@elias.me</A>
                    <A href={"#"}><Icon iconId={"telegram"}></Icon>t.me</A>
                </MessageBox>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSection1>
    );
};

const P = styled.div`
  display: block;
  color: #ABB2BF;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 505px;
`
const MessageMe = styled.p`
  color: white;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const MessageBox = styled.div`
  display: flex;
  border: 1px solid #ABB2BF;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
`

const A =styled.a`
  color : #ABB2BF;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
`