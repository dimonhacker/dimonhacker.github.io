import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {Icon} from "../../components/icon/Icon";

const items = ["#home", "#works", "#about-me", "#contacts"]
export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify={"space-between"}>
                <FlexWrapper gap={"8px"}>
                    <Logo/>
                    <StyledSpan> Elias</StyledSpan>
                </FlexWrapper>
                <HeaderMenu menuItems={items}></HeaderMenu>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  padding: 32px 0px 8px 0px;
  max-width: 1024px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`
const StyledSpan = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 700;
`