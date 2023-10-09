
import React from 'react';
import styled from "styled-components";
import Img2 from "../assets/images/Image2.png"
import LeftImg from "../assets/images/DotsRect.svg";
import RightImg from "../assets/images/DotsRect2.svg";
import {theme} from "../styles/Theme";

type StyledAPropsType = {
    leftImg:string,
    rightImg: string
}

export const Logo2 = () => {
    return (
        <StyledLogoDiv leftImg={LeftImg} rightImg={RightImg}>
            <StyledWrapper>
            <LogoImg/>
            </StyledWrapper>
        </StyledLogoDiv>
    );
};


const LogoImg = styled.img.attrs({
    src: `${Img2}`
})`
`
const StyledLogoDiv = styled.div<StyledAPropsType>`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 84px;
    height: 84px;
    background: url('${props => props.leftImg}');
    top:57px;
  }

  &::after {
    background: url('${props => props.rightImg}');
    position: absolute;
    content: "";
    width: 104px;
    height: 56px;
    top:280px;
    right: 15px;
    
  }
`
const StyledWrapper = styled.div`
  &::after{
    content: "";
    bottom: 5px;
    left:10%;
    right: 10%;
    position: absolute;
    height: 1px;
    background-color: ${theme.colors.accent};
    z-index: 10;
  }
`


