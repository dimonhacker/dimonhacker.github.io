import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
export const Header = () => {
    return (
        <div>
            <StyledHeader>
                <Logo></Logo>
                <Menu></Menu>
            </StyledHeader>
        </div>
    );
};

const StyledHeader = styled.header`
  display: flex;
  padding: 32px 0px 8px 0px;
  justify-content: space-between ;
  align-items: flex-end;
`