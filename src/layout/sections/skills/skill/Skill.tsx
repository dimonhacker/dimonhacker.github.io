import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


type SkillPropsType = {
    title: string,
    description: string
    class? : string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill className={props.class}>
            <StyledSTitle>{props.title}</StyledSTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 178px;
`
const StyledSTitle = styled.h2`
  color: white;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 0.3em 0.3em;
  border: 1px solid ${theme.colors.secondaryTextColor};
`
const SkillText = styled.p`
  color: #ABB2BF;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0.3em 0.3em;
  border: 1px solid ${theme.colors.secondaryTextColor};
  border-top: 0;
`