import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {FlexWrapper} from "../../components/FlexWrapper";
export const Header = () => {
    return (
            <StyledHeader>
                <FlexWrapper justify={"space-around"}>
                    <StyledSpan><Logo/> Elias</StyledSpan>
                <Menu></Menu>
                </FlexWrapper>
            </StyledHeader>
    );
};

const StyledHeader = styled.header`
  padding: 32px 0px 8px 0px;
`
const StyledSpan = styled.p`
color: white;
font-family: Fira Code;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`