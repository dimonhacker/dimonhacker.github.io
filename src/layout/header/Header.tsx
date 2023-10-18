import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {theme} from "../../styles/Theme";
import {HeaderMenuMobile} from "./headerMenuMobile/HeaderMenuMobile";

const items = ["home", "works","skills", "about-me", "contacts"]
export const Header = () => {
    return (
        <StyledHeader>
                <HeaderMenu menuItems={items}></HeaderMenu>
                <HeaderMenuMobile menuItems={items}></HeaderMenuMobile>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  //padding: 32px 0px 8px 0px;
  max-width: 1024px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.background};
  z-index: 1;
`
