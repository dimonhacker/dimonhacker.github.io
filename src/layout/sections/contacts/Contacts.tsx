import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ColorSpan} from "../../../components/ColorSpan";
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {StyledSection} from "../../../components/StyledSection";
import {Container} from "../../../components/Container";

export const Contacts = () => {
    return (
        <StyledSection id={"contacts"}>
            <Container>
                <FlexWrapper direction={"column"}>
                    <FlexWrapper align={"center"} wrap={"no-wrap"}>
                        <SectionTitle mwidth={"127px"}><ColorSpan>#</ColorSpan>contacts</SectionTitle>
                        {/*<Icon iconId={"line"} width="127"*/}
                        {/*                                                                   height="2"*/}
                        {/*                                                                   viewBox="0 0 127 2"/>*/}
                    </FlexWrapper>
                    <FlexWrapper justify={"space-between"} marginTop={"45px;"}>
                        <P>I’m interested in freelance opportunities. However, if you have other request or question,
                            don’t hesitate to contact me</P>
                        <MessageBox>
                            <MessageMe>Message me here</MessageMe>
                            <A href={"#"}><StyledSpan><Icon iconId={"email"}></Icon>elias@elias.me</StyledSpan></A>
                            <A href={"#"}><StyledSpan><Icon iconId={"telegram"}></Icon>t.me</StyledSpan></A>
                        </MessageBox>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledSection>
    );
};

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`
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
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
`

const A = styled.a`
  color: #ABB2BF;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
 
`