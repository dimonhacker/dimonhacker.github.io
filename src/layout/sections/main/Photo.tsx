import React from 'react';
import PhotoImg from '../../../assets/images/Image.webp'
import styled from "styled-components";
import Dots from '../../../assets/images/Dots.svg';


export const Photo = () => {
    return (
        <StyledPhoto>
            <ImageWrapper>
                <AvatarImage src={PhotoImg} alt={"Ава"}/>
            </ImageWrapper>
        </StyledPhoto>
    );
};


const StyledPhoto = styled.div`
  content: "";
  display: flex;
  max-width: 457px;
  height: 386px;
  position: relative;
  
`
const ImageWrapper = styled.div`
  position: relative;
  &::before {
    content: "";
    display: block;
  }

  &::after {
    position: absolute;
    content: "";
    display: block;
    top: 246px;
    left: 357px;
    background-image: url(${Dots});
    min-width: 84px;
    min-height: 84px;
  }
`
const AvatarImage = styled.img`
`
