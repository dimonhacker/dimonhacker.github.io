import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <FlexWrapper justify={"space-between"} direction={"column"} gap={"48px"}>
            <FlexWrapper justify={"space-around"}>
                <FlexWrapper direction={"column"}>
                    <FlexWrapper gap={"24px"} alignItems={"center"}>
                        <StyledSpan><Logo/> Elias</StyledSpan>
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
    );
};

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

const Media = styled.p`
  color: white;
  font-family: Fira Code;
  font-size: 24px;
  font-weight: 500;
`
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`