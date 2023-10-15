import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Logo} from "../../../components/logo/Logo";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Link} from "react-scroll";


export const HeaderMenuMobile = (props: { menuItems: Array<String> }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () =>{
        setMenuIsOpen(!menuIsOpen)
    }
    return (
            <StyledHeaderMenu>
                <StyledButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}><span></span>
                </StyledButton>
                <LogoWrapper>
                    <Logo/>
                    <StyledSpan2> Elias</StyledSpan2>
                </LogoWrapper>
                    <HeaderMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen((false))}}>
                        <LogoWrapperMenu>
                            <Logo/>
                            <StyledSpan2> Elias</StyledSpan2>
                        </LogoWrapperMenu>
                        <ul>
                            {props.menuItems.map((item, index) => {
                                return <ListItem key={index}>
                                    <NavLink to={item.toString()} smooth={true} activeClass={"active"} spy={true} offset={1} onClick={()=>{setMenuIsOpen((false))}}>
                                        <StyledSpan>#</StyledSpan>{item}
                                    </NavLink>
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

const LogoWrapper = styled.div`
  display: none;
  @media ${theme.media.tablet} {
    display: flex;
    gap: 8px;
  }
`
const LogoWrapperMenu = styled.div`
  margin-top: 16px;
  margin-left: 16px;
    display: block;
    gap: 8px;
  
`
const StyledButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 24px;
  height: 24px;
  top: 56px;
  right: 56px;
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
  display: block;
  transform: translateY(-100%);
  transition: 1s ease-in-out;


  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
    // @media ${theme.media.tablet} {
    //   display: flex;
    // }
  `
}
  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    list-style: none;
    margin-top: 80px;
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
  margin-left: 16px;
  margin-top: 16px;
`

const NavLink = styled(Link)`
  color: var(--gray, #ABB2BF);
  font-family: Fira Code, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover, &.active {
    color: white;
  }
`
const ListItem = styled.li`
  position: relative;
`