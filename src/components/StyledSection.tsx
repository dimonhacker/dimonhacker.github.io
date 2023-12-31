import styled from "styled-components";
import {theme} from "../styles/Theme";

type StyledSectionPropsType = {
    minHeight? : string
}
export const StyledSection = styled.section<StyledSectionPropsType>`
  border: white;
  margin-top: 5em;
  margin-bottom: 4em;
  padding-left: 1em;
  padding-right: 1em;
  @media screen and (max-width: 1023px){
    min-height: ${props => props.minHeight};
  }
`