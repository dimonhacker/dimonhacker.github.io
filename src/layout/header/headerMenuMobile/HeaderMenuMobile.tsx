import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Logo} from "../../../components/logo/Logo";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const HeaderMenuMobile = (props: { menuItems: Array<String> }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () =>{
        setMenuIsOpen(!menuIsOpen)
    }
    return (
            <StyledHeaderMenu>
                <StyledButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}><span></span>
                </StyledButton>
                    <FlexWrapper gap={"8px"}>
                        <Logo/>
                        <StyledSpan2> Elias</StyledSpan2>
                    </FlexWrapper>
                    <HeaderMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen((false))}}>

                        <ul>
                            {props.menuItems.map((item, index) => {
                                return <ListItem key={index}>
                                    <Link href={'#' + item}>
                                        <StyledSpan>#</StyledSpan>{item}
                                        <Mask><StyledSpan>#</StyledSpan><span>{item}</span></Mask>
                                    </Link>
                                </ListItem>
                            })}
                            <Select id="select">
                                <Option>EN</Option>
                                <Option>RU</Option>
                            </Select>
                        </ul>
                    </HeaderMenuPopup>
            </StyledHeaderMenu>
    );
};

const StyledButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 50px;
  height: 50px;
  top: 40px;
  right: 30px;
  z-index: 1000;

  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.white};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.white};
      position: absolute;
      transform: translateY(-10px);
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.white};
      position: absolute;
      transform: translateY(10px);
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`
const HeaderMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.background};
  z-index: 999;
  display: none;
  

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    @media ${theme.media.tablet} {
      display: block;
    }
  `}
  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    list-style: none;
    margin-top: 95px;
    margin-left: 16px;
  }
`
const StyledSpan2 = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 700;
`
const StyledSpan = styled.span`
  color: ${theme.colors.accent};
  font-family: Fira Code, sans-serif;
  font-size: 32px;
  font-weight: 400;
`

const Select = styled.select`
  color: ${theme.colors.secondaryTextColor};
  font-family: Fira Code;
  font-size: 32px;
  font-weight: 400;
  background-color: transparent;
  border: 0;
  width: 2em;
`

const Option = styled.option`
  background-color: ${theme.colors.background};
  width: 100%;
`
const StyledHeaderMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }

`


const Link = styled.a`
  color: var(--gray, #ABB2BF);
  font-family: Fira Code, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 100%;
  overflow-y: hidden;
  color: gray;
  z-index: 1;

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`
const ListItem = styled.li`
  position: relative;


  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg);
      color: white;
        // & + ${Mask}{
      //   transform: skewX(12deg) ;
      // }
    }

  }
`