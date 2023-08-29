import React from 'react';
import styled from "styled-components";


type SkillPropsType = {
    title: string,
    description: string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
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
`
const SkillText = styled.p`
  color: #ABB2BF;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`