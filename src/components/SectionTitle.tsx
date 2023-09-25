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
   &::after {
     content: ""; 
     display: inline-block;
     position: absolute;
     top: 50%;
     margin-left: 10px;
     background-color: ${theme.colors.accent};
     //max-width: ${props => props.mwidth};
     width: ${props => props.mwidth};
     height: 2px;
    }
`
