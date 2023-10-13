import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Logo} from "../../../components/logo/Logo";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const HeaderMenuMobile = (props: { menuItems: Array<String> }) => {
    return (

            <StyledHeaderMenu>
                <StyledButton isOpen={false}>
                </StyledButton>
                <FlexWrapper>
                <FlexWrapper gap={"8px"}>
                <Logo/>
                <StyledSpan2> Elias</StyledSpan2>
            </FlexWrapper>
                <HeaderMenuPopup isOpen={false}>

                    <ul>
                        {props.menuItems.map((item, index) => {
                            return <ListItem key={index}>
                                <Link href={'' + item}>
                                    <StyledSpan>#</StyledSpan>{item}
                                    <Mask><StyledSpan>#</StyledSpan><span>{item}</span></Mask>
                                    {/*<Mask><span>{item}</span></Mask>*/}
                                </Link>
                            </ListItem>
                        })}
                        <Select id="select">
                            <Option>EN</Option>
                            <Option>RU</Option>
                        </Select>
                    </ul>
                </HeaderMenuPopup>
                </FlexWrapper>
            </StyledHeaderMenu>
    );
};

const StyledButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  right: -50%;
  ${props => props.isOpen && css<{ isOpen: boolean }>`

  `}
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
    display: flex;
  `}
  span {

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
  margin-top: 4em;
display: none;
  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    list-style: none;
  }

  @media not screen {
    //display: none;
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