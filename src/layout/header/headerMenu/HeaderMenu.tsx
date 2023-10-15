import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Logo} from "../../../components/logo/Logo";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const HeaderMenu = (props: { menuItems: Array<String> }) => {
    return (


            <StyledHeaderMenu>
                <FlexWrapper justify={"space-between"}>
                <FlexWrapper gap={"8px"}>
                    <Logo/>
                    <StyledSpan> Elias</StyledSpan>
                </FlexWrapper>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href={'#' + item}>
                                {item}
                                <Mask><span>{item}</span></Mask>
                                {/*<Mask><span>{item}</span></Mask>*/}
                            </Link>
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
const StyledSpan = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 700;
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
  
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }
  @media ${theme.media.tablet}{
    display: none;
  }
`


const Link = styled.a`
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: transparent;
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