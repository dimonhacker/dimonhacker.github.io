import styled from "styled-components";
import {theme} from "../styles/Theme";

type LinePropsType = {
    mwidth?:string;
}

export const SectionTitle = styled.h2<LinePropsType>`
  color: white;
  font-family: Fira Code, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: relative;
  padding-right: 10px;
   &::before {
     content: ""; 
     display: inline-block;
     position: absolute;
     top: 50%;
     background-color: ${theme.colors.accent};
     max-width: ${props => props.mwidth};
     //max-width: calc(100vw - 100%);
     margin-left: calc( 100%);
     width: calc(100vw - 100%);
     height: 2px;
     z-index: -1;
    }
`
