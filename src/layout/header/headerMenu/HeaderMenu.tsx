import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Logo} from "../../../components/logo/Logo";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Link} from "react-scroll";


export const HeaderMenu = (props: { menuItems: Array<String> }) => {
    return (


            <StyledHeaderMenu>
                <FlexWrapper justify={"space-between"} align={"start"}>
                    <LogoWrapper>
                        <Logo/>
                        <StyledSpanHeader> Elias</StyledSpanHeader>
                    </LogoWrapper>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <NavLink to={item.toString()} smooth={true} activeClass={"active"} spy={true} offset={10}>
                                <span>#</span>{item}
                                <Mask><StyledSpanMenu>#</StyledSpanMenu><span>{item}</span></Mask>
                                {/*<Mask><span>{item}</span></Mask>*/}
                            </NavLink>
                        </ListItem>
                    })}
                    <Select id="select">
                        <Option>EN</Option>
                        <Option>RU</Option>
                    </Select>
                </ul>
                </FlexWrapper>
            </StyledHeaderMenu>

    );
};

const LogoWrapper = styled.div`
  display: flex;
  gap: 8px;
  @media ${theme.media.tablet} {
    display: none;    
  }
  `
const StyledSpanHeader = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 700;
`
const StyledSpanMenu = styled.span`
  color: ${theme.colors.accent};
  font-size: 16px;
  font-weight: 500;
`
const Select = styled.select`
  color: ${theme.colors.secondaryTextColor};
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background-color: transparent;
  border: 0;
`

const Option = styled.option`
  background-color: ${theme.colors.background}
`
const StyledHeaderMenu = styled.nav`
  padding: 32px 0px 8px 0px;
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }
  @media ${theme.media.tablet}{
    display: none;
  }
`
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 100%;
  overflow-y: hidden;
  color: gray;
  transition: .1s ease-in-out;
  & + & {
    top: 50%;
    
    span:nth-child(2) {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: transparent;
  cursor: pointer;
  transition: .1s ease-in-out;
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

  &:hover, &.active {
    &::before {
      transform: scale(1);
      
    }

    ${Mask} {
      transform: skewX(12deg);
      color: white;
    }

  }
`

const ListItem = styled.li`
  position: relative;

`