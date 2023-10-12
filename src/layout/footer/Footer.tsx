import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-between"} direction={"column"} gap={"48px"}>
                <FlexWrapper className={"footer"}  justify={"space-between"}  gap={"2em"}>
                    <FlexWrapper direction={"column"} gap={"16px"}>
                        <FlexWrapper gap={"24px"} alignItems={"center"}>
                            <FlexWrapper gap={"8px"}>
                                <Logo/>
                                <StyledSpan> Elias</StyledSpan>
                            </FlexWrapper>
                            <CopyrightMail>elias@elias-dev.ml</CopyrightMail>
                        </FlexWrapper>
                        <Descr>Web designer and front-end developer</Descr>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"} gap={"12px"}>
                        <Media>Media</Media>
                        <FlexWrapper>
                            <a href={"#"}><Icon iconId={"email"}></Icon></a>
                            <a href={"#"}><Icon iconId={"telegram"}></Icon></a>
                            <a href={"#"}><Icon iconId={"github"}></Icon></a>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
                <CopyrightMail>© Copyright 2022. Made by Elias</CopyrightMail>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
  background-color: #282C33;
  border: white;
  max-width: 1024px;
  margin: 0 auto;
  border-top: 1px solid ${theme.colors.secondaryTextColor};
  padding-top: 1em;
`
const StyledSpan = styled.p`
  color: white;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const CopyrightMail = styled.p`
  color: #ABB2BF;
  font-family: Fira Code;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`
const Descr = styled.p`
  color: white;
  font-family: Fira Code;
  font-size: 16px;
  font-weight: 400;
`

const Media = styled.div`
  color: white;
  font-family: Fira Code;
  font-size: 24px;
  font-weight: 500;
  padding-left: 0.6em;
`
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`