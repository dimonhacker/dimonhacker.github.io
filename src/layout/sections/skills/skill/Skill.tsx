import React from 'react';
import styled from "styled-components";


type SkillPropsType = {
    title: String,
    description: String
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
    border: 1px white;
`
const SkillText = styled.p`
  border: 1px white;
`