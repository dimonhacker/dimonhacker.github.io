import React from 'react';
import PhotoImg from '../../../assets/images/Image.webp'
import styled from "styled-components";
import Dots from '../../../assets/images/Dots.svg';
import mainLogo from '../../../assets/images/mainLogo.svg';


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
  position: relative;
  object-fit: cover;
`
const ImageWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: 85px;
    left: -10px;
    background-image: url(${mainLogo});
    max-width: 156px;
    max-height: 156px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &::after {
    object-fit: cover;
    position: absolute;
    content: "";
    display: block;
    top: 63%;
    left: 78%;
    background-image: url(${Dots});
    min-width: 84px;
    min-height: 84px;
  }
`
const AvatarImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`
