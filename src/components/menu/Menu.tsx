import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href={"#"}>#home</a></li>
                <li><a href={"#"}>#works</a></li>
                <li><a href={"#"}>#about-me</a></li>
                <li><a href={"#"}>#contacts</a></li>
                <select>
                    <option>EN</option>
                    <option>RU</option>
                </select>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul{
    display: flex;
    gap:30px;
    list-style: none;
  }
  a{
    color: gray;
    text-decoration: none;
    font-family: Fira Code;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`