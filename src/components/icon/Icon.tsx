import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'
import styled from "styled-components";

type IconPropsType = {
    iconId:string
    id?:string
    width?:string
    height?:string
    viewBox?:string
}
export const Icon = (props:IconPropsType) => {
    return (
        <SVG id={props.id} width={props.width || "32"} height={props.height || "32"} viewBox={props.viewBox || "0 0 32 32"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </SVG>
    );
};

const SVG = styled.svg`
  padding-left: 10px;
`