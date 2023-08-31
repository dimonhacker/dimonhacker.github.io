import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {Header} from "../../../header/Header";

type ProjectItemPropsType = {
    imgSrc: string
    skills: string
    title: string
    description: string
    live?: string
    cashed?: string
}
export const ProjectItem = (props: ProjectItemPropsType) => {
    return (
        <FlexWrapper direction={"column"}>
            <StyledImg src={props.imgSrc}></StyledImg>
            <StyledSkills><StyledSpan>{props.skills}</StyledSpan></StyledSkills>
            <StyledDescr>
                <StyledSpan>{props.title}</StyledSpan>
                <StyledSpan>{props.description}</StyledSpan>
                <ButtonDiv><StyledButton href={"#"}>{props.live}</StyledButton></ButtonDiv>
            </StyledDescr>

        </FlexWrapper>
    );
};
const StyledImg = styled.img`
  border: 1px solid #ABB2BF;
`
const StyledSkills = styled.div`
  border: 1px solid #ABB2BF;
  display: flex;
  padding: 8px;
`
const StyledDescr= styled.div`
  border: 1px solid #ABB2BF;
  display: flex;
  flex-direction: column;
  padding: 16px;
`
const StyledSpan = styled.span`
  color: #ABB2BF;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 8px;
`
const ButtonDiv = styled.div`
  max-width: 77px;
  height: 21px;
  border: 1px solid #ABB2BF;
  padding: 8px 16px 8px 16px;
`
const StyledButton = styled.a`
  color: #FFF;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  
`


