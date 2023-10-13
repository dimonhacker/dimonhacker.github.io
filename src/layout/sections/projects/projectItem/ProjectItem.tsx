import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

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
                <StyledTitle>{props.title}</StyledTitle>
                <StyledSpan>{props.description}</StyledSpan>
                <ButtonDiv><StyledLink href={"#"}>{props.live}</StyledLink></ButtonDiv>
            </StyledDescr>

        </FlexWrapper>
    );
};
const StyledImg = styled.img`
  border: 1px solid ${theme.colors.secondaryTextColor};
  max-width: 330px;
  width: 100%;
`
const StyledSkills = styled.div`
  border: 1px solid ${theme.colors.secondaryTextColor};
  max-width: 330px;
  line-height: 2em;
  padding: 0 8px;
  width: 100%;
`
const StyledDescr= styled.div`
  border: 1px solid #ABB2BF;
  display: flex;
  flex-direction: column;
  padding: 16px;
  max-width: 330px;
  width: 100%;
  gap: 16px;
  align-items: flex-start;
  align-self: stretch;
`
const StyledTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: 500;
`
const StyledSpan = styled.span`
  color: #ABB2BF;
  font-size: 16px;
  font-weight: 400;
`
const ButtonDiv = styled.div`
  border: 1px solid ${theme.colors.accent};
  padding: 8px 16px;
  display: inline-block;
  width: min-content;
`
const StyledLink = styled.a`
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  max-width: 77px;
  height: 21px;
  display: inline;
`


