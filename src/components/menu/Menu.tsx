import React from 'react';
import styled from "styled-components";


export const Menu = (props: {menuItems: Array<String>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item,index)=>{
                    return <li key={index}><a href={''+item}>{item}</a></li>
                })}
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