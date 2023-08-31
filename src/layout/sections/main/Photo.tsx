import React from 'react';
import PhotoImg from '../../../assets/images/Image.webp'
import styled from "styled-components";


export const Photo = () => {
    return (
        <a href="">
            <AvatarImage src={PhotoImg} alt={"Ава"}></AvatarImage>
        </a>
    );
};

const AvatarImage = styled.img`
  max-width: 457px;
  height: 386px;
  flex-shrink: 0;
`
