
import React from 'react';
import styled from "styled-components";
import Img2 from "../assets/images/Image2.png"
import LeftImg from "../assets/images/icons-sprite.svg";

type StyledAPropsType = {
    leftImg:string,
    rightImg: string
}

export const Logo2 = () => {
    return (
        <StyledLogoDiv leftImg={LeftImg} rightImg={LeftImg}>
            <LogoImg/>
        </StyledLogoDiv>
    );
};


const LogoImg = styled.img.attrs({
    src: `${Img2}`
})`
`
const StyledLogoDiv = styled.div<StyledAPropsType>`
  ::before {
    background: url('${props => props.leftImg}');
  }

  ::after {
    background: url('${props => props.rightImg}');
    width: 100%;
  }
`


