import styled from "styled-components";

type StyledSectionPropsType = {
    minHeight? : string
}
export const StyledSection = styled.section<StyledSectionPropsType>`
  min-height: ${props => props.minHeight};
  border: white;
  margin-bottom: 4em;
  
`